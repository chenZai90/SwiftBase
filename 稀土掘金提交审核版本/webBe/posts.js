// 文章处理模块
const Posts = {
    // 加载所有文章列表
    async loadPosts() {
        try {
            const response = await fetch('https://raw.githubusercontent.com/chenZai90/SwiftBase/main/posts.json');
            if (!response.ok) throw new Error('网络响应不正常');
            return await response.json();
        } catch (error) {
            console.error('加载文章列表失败:', error);
            return [];
        }
    },

    // 加载单篇文章内容
    async loadPostContent(postId) {
        console.log('Attempting to load post content for ID:', postId);
        const url = `${postId}.html`;
        console.log('Fetching post content from:', url);
        try {
            const response = await fetch(url);
            console.log('Fetch response status:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.text();
        } catch (error) {
            console.error('Error loading post content:', error);
            throw error;
        }
    },

    // 生成文章卡片HTML
    generatePostCards(posts) {
        if (!posts || posts.length === 0) {
            return '<p class="no-posts">暂无文章</p>';
        }

        return posts.map(post => `
            <article class="card post-card">
                <h2>${post.title}</h2>
                <div class="post-meta">
                    <span>${post.date}</span>
                    <div class="tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="#/posts/${post.id}" class="read-more">阅读全文 →</a>
            </article>
        `).join('');
    }
};

async function loadPostPage(postId) {
    try {
        const post = await loadPostContent(postId);
        const mainContent = document.querySelector('main');
        
        // 创建文章详情页布局
        const postContainer = document.createElement('div');
        postContainer.className = 'post-container';
        
        // 主要内容区域
        const postMain = document.createElement('div');
        postMain.className = 'post-main';
        
        // 文章头部
        const postHeader = document.createElement('div');
        postHeader.className = 'post-header';
        
        // 标题
        const title = document.createElement('h1');
        title.className = 'post-title';
        title.textContent = post.title;
        
        // 作者信息卡片
        const authorCard = document.createElement('div');
        authorCard.className = 'author-card';
        
        const authorAvatar = document.createElement('div');
        authorAvatar.className = 'author-avatar';
        authorAvatar.textContent = post.author[0];
        
        const authorInfo = document.createElement('div');
        authorInfo.className = 'author-info';
        
        const authorName = document.createElement('div');
        authorName.className = 'author-name';
        authorName.textContent = post.author;
        
        const postMeta = document.createElement('div');
        postMeta.className = 'post-meta';
        postMeta.innerHTML = `
            <span>${post.date}</span>
            <span>·</span>
            <span>${post.readingTime} 分钟阅读</span>
        `;
        
        const followBtn = document.createElement('button');
        followBtn.className = 'follow-btn';
        followBtn.textContent = '关注作者';
        
        authorInfo.appendChild(authorName);
        authorInfo.appendChild(postMeta);
        authorCard.appendChild(authorAvatar);
        authorCard.appendChild(authorInfo);
        authorCard.appendChild(followBtn);
        
        // 标签
        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'post-tags';
        post.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'post-tag';
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });
        
        // 特色图片
        const featuredImage = document.createElement('img');
        featuredImage.className = 'post-featured-image';
        featuredImage.src = post.image;
        featuredImage.alt = post.title;
        
        // 文章内容
        const postBody = document.createElement('div');
        postBody.className = 'post-body';
        postBody.innerHTML = post.content;
        
        // 作者卡片底部
        const authorCardBottom = document.createElement('div');
        authorCardBottom.className = 'author-card-bottom';
        authorCardBottom.innerHTML = `
            <div class="author-avatar">${post.author[0]}</div>
            <div class="author-info">
                <div class="author-name">${post.author}</div>
                <div class="post-meta">${post.date}</div>
            </div>
            <button class="follow-btn">关注作者</button>
        `;
        
        // 组装主要内容
        postHeader.appendChild(title);
        postHeader.appendChild(authorCard);
        postHeader.appendChild(tagsContainer);
        
        postMain.appendChild(postHeader);
        postMain.appendChild(featuredImage);
        postMain.appendChild(postBody);
        postMain.appendChild(authorCardBottom);
        
        // 侧边栏
        const postSidebar = document.createElement('div');
        postSidebar.className = 'post-sidebar';
        
        // 目录
        const tocContainer = document.createElement('div');
        tocContainer.className = 'toc-container';
        tocContainer.innerHTML = `
            <h3>目录</h3>
            <nav class="toc-nav">
                <ul>
                    <li class="toc-item"><a href="#section1">第一部分</a></li>
                    <li class="toc-item"><a href="#section2">第二部分</a></li>
                    <li class="toc-item level-h3"><a href="#section2-1">2.1 小节</a></li>
                    <li class="toc-item level-h3"><a href="#section2-2">2.2 小节</a></li>
                    <li class="toc-item"><a href="#section3">第三部分</a></li>
                </ul>
            </nav>
        `;
        
        // 相关文章
        const relatedPosts = document.createElement('div');
        relatedPosts.className = 'related-posts';
        relatedPosts.innerHTML = `
            <h3>相关文章</h3>
            <div class="related-posts-list">
                <a href="#" class="related-post-card">
                    <div class="related-post-image" style="background-image: url('${post.image}')"></div>
                    <h4 class="related-post-title">相关文章标题</h4>
                    <div class="related-post-meta">2024-03-21 · 5分钟阅读</div>
                </a>
                <a href="#" class="related-post-card">
                    <div class="related-post-image" style="background-image: url('${post.image}')"></div>
                    <h4 class="related-post-title">相关文章标题</h4>
                    <div class="related-post-meta">2024-03-20 · 3分钟阅读</div>
                </a>
            </div>
        `;
        
        // 评论区域
        const commentSection = document.createElement('div');
        commentSection.className = 'comment-section';
        commentSection.innerHTML = `
            <div class="comment-header">
                <h3>评论</h3>
                <div class="comment-sort">
                    <button class="sort-btn active">最新</button>
                    <button class="sort-btn">最热</button>
                </div>
            </div>
            <div class="comments-list">
                <!-- 评论列表将通过JavaScript动态加载 -->
            </div>
        `;
        
        // 组装侧边栏
        postSidebar.appendChild(tocContainer);
        postSidebar.appendChild(relatedPosts);
        
        // 组装整个页面
        postContainer.appendChild(postMain);
        postContainer.appendChild(postSidebar);
        mainContent.appendChild(postContainer);
        mainContent.appendChild(commentSection);
        
        // 初始化交互功能
        Interactions.initReadingProgress();
        Interactions.initTOCHighlight();
        Interactions.initLikeButton();
        Interactions.initFavoriteButton();
        Interactions.initShareButton();
        Interactions.initFontControls();
        Interactions.initImageLazyLoad();
        Interactions.initImageHoverEffect();
        
    } catch (error) {
        console.error('加载文章失败:', error);
        const mainContent = document.querySelector('main');
        mainContent.innerHTML = `
            <div class="error-message">
                <h2>加载失败</h2>
                <p>抱歉，文章加载失败，请稍后重试。</p>
                <a href="#home" class="back-link">返回首页</a>
            </div>
        `;
    }
}