// 路由模块
class Router {
    constructor() {
        this.routes = new Map();
        this.currentRoute = null;
        console.log('=== Application Initialization Started ===');
        console.log('Router constructor called');
        this.init();
    }

    init() {
        console.log('initializeRouter called');
        // 注册路由
        this.registerRoute('#home', this.loadHomePage);
        this.registerRoute('#about', this.loadAboutPage);
        this.registerRoute('#archive', this.loadArchivePage);
        this.registerRoute('#/posts/(.*)', this.loadPostPage);

        // 监听 hash 变化
        window.addEventListener('hashchange', () => this.handleHashChange());
        
        // 初始化页面
        this.handleHashChange();
        console.log('=== Application Initialization Completed ===');
    }

    registerRoute(pattern, handler) {
        console.log('Registering route:', pattern);
        this.routes.set(pattern, handler);
    }

    handleHashChange() {
        const hash = window.location.hash || '#home';
        console.log('处理路由变化:', hash);
        
        // 查找匹配的路由
        for (const [pattern, handler] of this.routes) {
            const regex = new RegExp('^' + pattern.replace(/\(.*\)/, '([^/]+)') + '$');
            const match = hash.match(regex);
            
            if (match) {
                // 提取参数
                const params = match.slice(1);
                handler.apply(this, params);
                return;
            }
        }
        
        // 如果没有匹配的路由，显示 404
        this.show404();
    }

    navigate(path) {
        console.log('Navigating to:', path);
        // 添加网络调试请求
        fetch('/debug?route=' + encodeURIComponent(path))
            .catch(err => console.error('Debug request failed:', err));
        if (!path) path = '#home';
        window.location.hash = path;
    }

    // 加载首页
    async loadHomePage() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = '<div class="loading">加载中...</div>';

        try {
            // 添加视差背景
            const parallaxBg = document.createElement('div');
            parallaxBg.className = 'parallax-bg';
            document.body.prepend(parallaxBg);

            // 添加装饰元素
            this.addDecorativeElements();

            // 加载文章列表
            const posts = await Posts.loadPosts();
            mainContent.innerHTML = `
                <div class="typewriter-container" id="home-title"></div>
                <h2>最新文章</h2>
                <div class="post-list">${Posts.generatePostCards(posts)}</div>
            `;

            // 初始化打字机效果
            Interactions.typewriterEffect(
                document.getElementById('home-title'),
                '欢迎来到我的博客',
                100
            );

            // 初始化阅读进度条
            Interactions.initReadingProgress();
        } catch (error) {
            mainContent.innerHTML = '<div class="error">加载失败，请重试</div>';
            console.error('加载首页失败:', error);
        }
    };

    // 加载关于页面
    async loadAboutPage() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = '<div class="loading">加载中...</div>';
        
        try {
            const response = await fetch('content/about.html');
            const content = await response.text();
            mainContent.innerHTML = content;
        } catch (error) {
            console.error('加载关于页面失败:', error);
            mainContent.innerHTML = `
                <div class="error-message">
                    <h2>加载失败</h2>
                    <p>抱歉，页面加载失败，请稍后重试。</p>
                </div>
            `;
        }
    };

    // 加载归档页面
    async loadArchivePage() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = '<div class="loading">加载中...</div>';

        try {
            const posts = await Posts.loadPosts();
            mainContent.innerHTML = `
                <div class="card">
                    <h1>文章归档</h1>
                    <div class="archive-list">
                        ${posts.map(post => `
                            <div class="archive-item">
                                <a href="#/posts/${post.id}" class="archive-title">${post.title}</a>
                                <span class="archive-date">${post.date}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } catch (error) {
            mainContent.innerHTML = '<div class="error">加载失败，请重试</div>';
            console.error('加载归档页面失败:', error);
        }
    };

    // 加载文章页面
    async loadPostPage(postId) {
        console.log('Loading post page for ID:', postId);
        const mainContent = document.getElementById('main-content');
        // 添加骨架屏加载效果
        mainContent.innerHTML = `
            <div class="post-skeleton">
                <div class="skeleton-header"></div>
                <div class="skeleton-author"></div>
                <div class="skeleton-image"></div>
                <div class="skeleton-content"></div>
                <div class="skeleton-tags"></div>
                <div class="skeleton-related"></div>
            </div>
        `;

        try {
            console.log('Fetching post content for:', postId);
            const postContent = await Posts.loadPostContent(postId);
            const posts = await Posts.loadPosts();
            const post = posts.find(p => p.id === postId);
            const relatedPosts = posts.filter(p => p.id !== postId && p.tags.some(tag => post.tags.includes(tag))).slice(0, 3);

            if (!post) {
                this.show404();
                return;
            }

            // 生成文章目录
            const toc = this.generateTOC(postContent);
            // 生成作者信息
            const authorInitial = post.author ? post.author.charAt(0).toUpperCase() : 'U';
            // 生成彩色标签
            const coloredTags = this.generateColoredTags(post.tags);

            mainContent.innerHTML = `
                <div class="post-container">
                    <article class="post-main">
                        <div class="post-header">
                            <h1 class="post-title">${post.title}</h1>
                            <div class="author-card">
                                <div class="author-avatar" style="width:60px;height:60px;border-radius:50%;background:#${this.getRandomColor()};display:flex;align-items:center;justify-content:center;color:white;font-size:24px;">${authorInitial}</div>
                                <div class="author-info">
                                    <div class="author-name">${post.author || '未知作者'}</div>
                                    <div class="post-meta">${post.date} · ${Math.floor(postContent.length / 500)} 分钟阅读</div>
                                </div>
                                <button class="follow-btn">关注</button>
                            </div>
                            <div class="post-tags">${coloredTags}</div>
                            <img src="assets/images/post-${postId}-feature.svg" alt="${post.title}" class="post-featured-image" loading="lazy">
                            <p class="image-caption">${post.imageCaption || '文章特色图片'}</p>
                        </div>
                        <div class="post-body">${this.enhancePostContent(postContent)}</div>
                    </article>
                    <aside class="post-sidebar">
                        <div class="toc-container">
                            <h3>文章目录</h3>
                            <nav class="toc-nav">${toc}</nav>
                        </div>
                        <div class="progress-container">
                            <div class="progress-ring">
                                <canvas id="progress-canvas" width="60" height="60"></canvas>
                                <span class="progress-text">0%</span>
                            </div>
                        </div>
                        <div class="action-buttons">
                            <button class="action-btn like-btn"><i class="like-icon"></i><span class="count">0</span></button>
                            <button class="action-btn favorite-btn"><i class="favorite-icon"></i></button>
                            <button class="action-btn share-btn"><i class="share-icon"></i></button>
                            <div class="font-controls">
                                <button class="font-btn font-decrease"><i class="font-minus"></i></button>
                                <button class="font-btn font-reset"><i class="font-reset"></i></button>
                                <button class="font-btn font-increase"><i class="font-plus"></i></button>
                            </div>
                        </div>
                    </aside>
                </div>
                <div class="post-footer">
                    ${relatedPosts.length > 0 ? `
                    <div class="related-posts">
                        <h3>相关推荐</h3>
                        <div class="related-posts-list">
                            ${relatedPosts.map(relatedPost => `
                                <a href="#posts/${relatedPost.id}" class="related-post-card">
                                    <div class="related-post-image" style="background-image: url('assets/images/post-${relatedPost.id}-thumb.svg'); background-size: cover;"></div>
                                    <h4 class="related-post-title">${relatedPost.title}</h4>
                                    <div class="related-post-meta">${relatedPost.date}</div>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    <div class="comment-section">
                        <div class="comment-header">
                            <h3>评论 (0)</h3>
                            <div class="comment-sort">
                                <button class="sort-btn active">最新</button>
                                <button class="sort-btn">最热</button>
                            </div>
                        </div>
                        <div class="comment-list"></div>
                        <div class="load-more-comments">加载更多评论</div>
                    </div>
                    <div class="author-card-bottom">
                        <div class="author-avatar" style="width:60px;height:60px;border-radius:50%;background:#${this.getRandomColor()};display:flex;align-items:center;justify-content:center;color:white;font-size:24px;">${authorInitial}</div>
                        <div class="author-info">
                            <div class="author-name">${post.author || '未知作者'}</div>
                            <div class="author-bio">前端技术爱好者，分享Web开发经验</div>
                        </div>
                        <button class="follow-btn">关注</button>
                    </div>
                </div>
            `;

            // 初始化交互功能
            this.initPostInteractions();
            // 初始化阅读进度条
            Interactions.initReadingProgress();
            // 初始化图片懒加载动画
            Interactions.initImageLazyLoad();
        } catch (error) {
            mainContent.innerHTML = '<div class="error">加载文章失败，请重试</div>';
            console.error('加载文章失败:', error);
        }
    };
    // 生成文章目录
    generateTOC(content) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const headings = doc.querySelectorAll('h2, h3');
        if (headings.length === 0) return '<p>无目录</p>';
        return `<ul>${Array.from(headings).map((heading, index) => {
            const id = 'heading-' + index;
            heading.id = id;
            return `<li class="toc-item level-${heading.tagName.toLowerCase()}"><a href="#${id}">${heading.textContent}</a></li>`;
        }).join('')}</ul>`;
    };
    // 生成彩色标签
    generateColoredTags(tags) {
        const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#9C27B0'];
        return tags.map((tag, index) => {
            const color = colors[index % colors.length];
            return `<span class="post-tag" style="background-color: ${color}20; color: ${color};">${tag}</span>`;
        }).join('');
    };
    // 增强文章内容格式
    enhancePostContent(content) {
        // 添加代码块样式
        content = content.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g, '<div class="code-block"><pre><code>$1</code></pre></div>');
        // 添加引用样式
        content = content.replace(/<blockquote>([\s\S]*?)<\/blockquote>/g, '<blockquote class="custom-blockquote">$1</blockquote>');
        // 添加图片样式
        content = content.replace(/<img (.*?)>/g, '<img $1 class="post-image" loading="lazy">');
        return content;
    };
    // 获取随机颜色
    getRandomColor() {
        return Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    };
    // 初始化文章交互
    initPostInteractions() {
        // 目录导航高亮
        Interactions.initTOCHighlight();
        // 点赞按钮动画
        Interactions.initLikeButton();
        // 收藏按钮动画
        Interactions.initFavoriteButton();
        // 分享按钮功能
        Interactions.initShareButton();
        // 字体调整功能
        Interactions.initFontControls();
        // 图片悬停效果
        Interactions.initImageHoverEffect();
    };

    // 显示404页面
    show404() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = `
            <div class="card error-page">
                <h1>404</h1>
                <p>页面未找到</p>
                <a href="#home" class="back-link">返回首页</a>
            </div>
        `;
    };

    // 添加装饰元素
    addDecorativeElements() {
        // 清除已有的装饰元素
        document.querySelectorAll('.decorative-element').forEach(el => el.remove());

        const positions = [
            { top: '10%', left: '5%', size: '150px', rotation: '0deg' },
            { top: '60%', right: '10%', size: '200px', rotation: '45deg' },
            { bottom: '5%', left: '20%', size: '100px', rotation: '180deg' }
        ];

        positions.forEach(pos => {
            const element = document.createElement('div');
            element.className = 'decorative-element';
            element.style.top = pos.top;
            element.style.left = pos.left || 'auto';
            element.style.right = pos.right || 'auto';
            element.style.bottom = pos.bottom || 'auto';
            element.style.width = pos.size;
            element.style.height = pos.size;
            element.style.transform = `rotate(${pos.rotation})`;
            document.body.appendChild(element);
        });
    }
};


// 确保DOM加载完成后实例化路由
window.addEventListener('DOMContentLoaded', () => {
    new Router();
});