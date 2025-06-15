// 页面内容模块
const Pages = {
    // 关于页面内容
    getAboutPage() {
        return `
            <div class="about-container">
                <div class="about-header">
                    <div class="profile-card">
                        <div class="profile-avatar">
                            <span>晨</span>
                        </div>
                        <h1 class="profile-name">90后晨仔</h1>
                        <p class="profile-title">iOS 开发工程师</p>
                        <div class="profile-social">
                            <a href="mailto:624990742@qq.com" class="social-link">
                                <i class="fas fa-envelope"></i>
                            </a>
                            <a href="https://github.com/chenZai90" class="social-link" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://juejin.cn/user/2717648476705773" class="social-link" target="_blank">
                                <i class="fas fa-blog"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="about-content">
                    <section class="about-section">
                        <h2><i class="fas fa-user"></i> 关于我 / About Me</h2>
                        <div class="section-content">
                            <div class="info-item">
                                <span class="info-label">主攻方向 / Focus</span>
                                <span class="info-value">iOS Development with Swift</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">曾探索 / Explored</span>
                                <span class="info-value">Frontend (HTML, CSS, Vue)、HarmonyOS</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">兴趣领域 / Interested in</span>
                                <span class="info-value">Fullstack Development – currently learning Java, Python, Go</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">热爱响应式框架 / Fan of</span>
                                <span class="info-value">SwiftUI, RxSwift, Flutter</span>
                            </div>
                        </div>
                    </section>

                    <section class="about-section">
                        <h2><i class="fas fa-heart"></i> 兴趣爱好 / Hobbies</h2>
                        <div class="section-content">
                            <div class="hobby-item">
                                <i class="fas fa-mountain"></i>
                                <span>爬山 / Hiking – Seeking freedom and peace from nature</span>
                            </div>
                            <div class="hobby-item">
                                <i class="fas fa-book"></i>
                                <span>阅读与写作 / Reading & Writing – Sharing thoughts, learning deeply</span>
                            </div>
                            <div class="hobby-item">
                                <i class="fas fa-code"></i>
                                <span>编码 / Coding – Clean code, scalable design, elegant UI/UX</span>
                            </div>
                        </div>
                    </section>

                    <section class="about-section">
                        <h2><i class="fas fa-graduation-cap"></i> 正在学习 / Currently Learning</h2>
                        <div class="section-content">
                            <div class="learning-item">
                                <i class="fas fa-check-circle"></i>
                                <span>SwiftUI architectural best practices</span>
                            </div>
                            <div class="learning-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Advanced RxSwift patterns</span>
                            </div>
                            <div class="learning-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Backend basics with Java/Python/Go</span>
                            </div>
                        </div>
                    </section>

                    <section class="about-section">
                        <h2><i class="fas fa-quote-left"></i> 座右铭 / Motto</h2>
                        <div class="motto-card">
                            <p class="motto-text">但知行好事，莫要问前程</p>
                            <p class="motto-text-en">Do what is right, and never worry about the future.</p>
                        </div>
                    </section>

                    <section class="about-section">
                        <h2><i class="fas fa-envelope"></i> 联系方式 / Contact</h2>
                        <div class="contact-list">
                            <a href="mailto:624990742@qq.com" class="contact-item">
                                <i class="fas fa-envelope"></i>
                                <span>624990742@qq.com</span>
                            </a>
                            <a href="https://github.com/chenZai90" class="contact-item" target="_blank">
                                <i class="fab fa-github"></i>
                                <span>chenZai90</span>
                            </a>
                            <a href="https://juejin.cn/user/2717648476705773" class="contact-item" target="_blank">
                                <i class="fas fa-blog"></i>
                                <span>掘金博客</span>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        `;
    },

    // 文章页面内容
    getPostContent(postId) {
        const posts = {
            'post1': {
                id: 'post1',
                title: 'HTML5新特性详解',
                author: '90后晨仔',
                date: '2024-03-21',
                tags: ['HTML5', 'Web开发', '前端技术'],
                imageCaption: 'HTML5 新特性概览',
                content: `
                    <article class="post-content">
                        <h2>HTML5新特性详解</h2>
                        <p>HTML5作为最新的HTML标准，带来了许多令人兴奋的新特性和改进。本文将详细介绍其中一些最重要的功能。</p>

                        <h3>1. 语义化标签</h3>
                        <p>HTML5引入了一系列语义化标签，使文档结构更加清晰：</p>
                        <pre><code>&lt;header&gt; - 定义文档或节的页眉
&lt;nav&gt; - 定义导航链接的部分
&lt;main&gt; - 定义文档的主要内容
&lt;article&gt; - 定义独立的内容
&lt;section&gt; - 定义文档中的节
&lt;footer&gt; - 定义文档或节的页脚</code></pre>

                        <h3>2. 表单增强</h3>
                        <p>HTML5为表单添加了新的输入类型和属性：</p>
                        <pre><code>&lt;input type="email" placeholder="请输入邮箱" required&gt;
&lt;input type="url" placeholder="请输入网址"&gt;
&lt;input type="date"&gt;
&lt;input type="range" min="0" max="100"&gt;
&lt;input type="color"&gt;</code></pre>

                        <h3>3. 多媒体支持</h3>
                        <p>HTML5原生支持音频和视频播放，无需依赖第三方插件：</p>
                        <pre><code>&lt;video controls width="600"&gt;
    &lt;source src="movie.mp4" type="video/mp4"&gt;
    您的浏览器不支持视频播放
&lt;/video&gt;

&lt;audio controls&gt;
    &lt;source src="music.mp3" type="audio/mpeg"&gt;
    您的浏览器不支持音频播放
&lt;/audio&gt;</code></pre>
                        <p>HTML5的多媒体元素彻底改变了Web上的媒体消费方式，使开发者能够轻松地在网页中集成音频和视频内容。</p>

                        <h3>4. Canvas绘图</h3>
                        <p>Canvas元素允许通过JavaScript在网页上绘制图形：</p>
                        <pre><code>&lt;canvas id="myCanvas" width="400" height="200"&gt;&lt;/canvas&gt;

&lt;script&gt;
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(50, 50, 150, 100);
&lt;/script&gt;</code></pre>

                        <h3>5. 本地存储</h3>
                        <p>HTML5提供了localStorage和sessionStorage，允许在客户端存储数据：</p>
                        <pre><code>// 存储数据
localStorage.setItem('username', 'John Doe');

// 获取数据
const username = localStorage.getItem('username');

// 删除数据
localStorage.removeItem('username');

// 清除所有数据
localStorage.clear();</code></pre>

                        <p>这些新特性使HTML5成为构建现代Web应用的强大工具，为开发者提供了更多可能性，同时改善了用户体验。</p>
                    </article>
                `
            },
            'post2': {
                id: 'post2',
                title: 'CSS3动画与过渡效果实战',
                author: '90后晨仔',
                date: '2024-03-20',
                tags: ['CSS3', '动画', '前端技术'],
                imageCaption: 'CSS3 动画效果展示',
                content: `
                    <article class="post-content">
                        <h2>CSS3动画与过渡效果实战</h2>
                        <p>CSS3引入了强大的动画和过渡功能，使网页元素能够实现流畅的动态效果，而无需依赖JavaScript。本文将通过实例介绍如何使用这些功能提升用户体验。</p>

                        <h3>1. 过渡效果 (Transitions)</h3>
                        <p>过渡效果允许元素在状态变化时平滑过渡：</p>
                        <pre><code>.box {
    width: 100px;
    height: 100px;
    background: blue;
    transition: width 0.5s ease, height 0.5s ease, background 0.5s ease;
}

.box:hover {
    width: 200px;
    height: 200px;
    background: red;
}</code></pre>
                        <p>transition属性可以指定以下参数：</p>
                        <ul>
                            <li>要过渡的CSS属性</li>
                            <li>过渡持续时间</li>
                            <li>过渡 timing 函数 (ease, linear, ease-in, ease-out, ease-in-out)</li>
                            <li>延迟时间</li>
                        </ul>

                        <h3>2. 关键帧动画 (Keyframes)</h3>
                        <p>关键帧动画提供了更精细的动画控制：</p>
                        <pre><code>@keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
}

.button {
    animation: pulse 2s infinite;
}</code></pre>
                        <p>动画属性可以控制动画的播放方式：</p>
                        <pre><code>.element {
    animation-name: pulse;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: both;
    animation-play-state: running;
}

/* 简写形式 */
.element {
    animation: pulse 2s ease-in-out 1s infinite alternate both running;
}</code></pre>

                        <h3>3. 变换 (Transforms)</h3>
                        <p>变换允许您旋转、缩放、倾斜或平移元素：</p>
                        <pre><code>.transform-example {
    /* 旋转 */
    transform: rotate(45deg);
    /* 缩放 */
    transform: scale(1.5);
    /* 平移 */
    transform: translate(50px, 100px);
    /* 倾斜 */
    transform: skew(20deg, 10deg);
    /* 组合变换 */
    transform: rotate(45deg) scale(1.5) translate(50px, 100px);
}</code></pre>
                        <p>提示：使用transform-origin属性可以改变变换的原点位置，默认为元素中心。</p>

                        <h3>4. 实战案例：悬停卡片效果</h3>
                        <pre><code>.card {
    transition: all 0.3s ease;
    transform-origin: center bottom;
}

.card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.card img {
    transition: all 0.5s ease;
}

.card:hover img {
    transform: scale(1.05);
}</code></pre>

                        <h3>5. 性能优化</h3>
                        <p>为确保动画流畅，应遵循以下最佳实践：</p>
                        <ul>
                            <li>优先使用transform和opacity属性进行动画</li>
                            <li>避免动画触发重排(reflow)和重绘(repaint)</li>
                            <li>使用will-change提示浏览器优化</li>
                            <li>考虑使用硬件加速：transform: translateZ(0)</li>
                        </ul>
                        <pre><code>.optimized-animation {
    will-change: transform, opacity;
    transform: translateZ(0);
}</code></pre>

                        <p>通过合理运用CSS3动画和过渡效果，可以为用户创造更加生动和引人入胜的网页体验，同时保持良好的性能。</p>
                    </article>
                `
            },
            'post3': {
                id: 'post3',
                title: 'JavaScript异步编程模式',
                author: '90后晨仔',
                date: '2024-03-20',
                tags: ['JavaScript', '异步编程', '前端技术'],
                imageCaption: 'JavaScript异步编程模式',
                content: `
                    <article class="post">
                        <h2>JavaScript异步编程模式</h2>
                        <div class="post-meta">
                            <span class="date">2024-03-20</span>
                            <span class="author">作者：技术专家</span>
                        </div>
                        <div class="post-content">
                            <p>JavaScript作为一门单线程语言，异步编程是其核心特性之一。本文将深入探讨JavaScript中的各种异步编程模式，帮助开发者更好地理解和应用这些模式解决实际问题。</p>

                            <h3>1. 回调函数 (Callbacks)</h3>
                            <p>回调函数是JavaScript中最基础的异步编程模式：</p>
                            <pre><code>function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: '示例数据' };
        callback(null, data);
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error('获取数据失败:', error);
        return;
    }
    console.log('获取数据成功:', data);
});</code></pre>
                            <p>回调模式的主要问题是可能导致"回调地狱"(Callback Hell)：</p>
                            <pre><code>// 回调地狱示例
asyncOperation1((err, result1) => {
    if (err) { /* 处理错误 */ }
    asyncOperation2(result1, (err, result2) => {
        if (err) { /* 处理错误 */ }
        asyncOperation3(result2, (err, result3) => {
            if (err) { /* 处理错误 */ }
            // 更多嵌套回调...
        });
    });
});</code></pre>

                            <h3>2. Promise</h3>
                            <p>Promise是ES6引入的异步编程解决方案，解决了回调地狱问题：</p>
                            <pre><code>function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const data = { id: 1, name: '示例数据' };
                resolve(data);
            } catch (error) {
                reject(error);
            }
        }, 1000);
    });
}

// 使用Promise
fetchData()
    .then(data => {
        console.log('获取数据成功:', data);
        return processData(data); // 可以返回另一个Promise
    })
    .then(processedData => {
        console.log('数据处理完成:', processedData);
    })
    .catch(error => {
        console.error('发生错误:', error);
    })
    .finally(() => {
        console.log('操作完成');
    });</code></pre>

                            <h3>3. Async/Await</h3>
                            <p>ES2017引入的async/await语法糖，使异步代码看起来像同步代码：</p>
                            <pre><code>// 使用async/await
async function getData() {
    try {
        const data = await fetchData();
        console.log('获取数据成功:', data);
        const processedData = await processData(data);
        console.log('数据处理完成:', processedData);
        return processedData;
    } catch (error) {
        console.error('发生错误:', error);
        throw error; // 可以向上抛出错误
    } finally {
        console.log('操作完成');
    }
}

// 调用async函数
getData()
    .then(result => console.log('最终结果:', result))
    .catch(error => console.error('捕获到错误:', error));

// 在async函数中调用
async function main() {
    try {
        const result = await getData();
        console.log('最终结果:', result);
    } catch (error) {
        console.error('捕获到错误:', error);
    }
}</code></pre>
                            <p>注意：async函数总是返回一个Promise，即使没有显式返回。使用await关键字只能在async函数内部。</p>

                            <h3>4. Promise并发控制</h3>
                            <p>处理多个并发异步操作：</p>
                            <pre><code>// Promise.all - 全部成功才成功，一个失败则失败
Promise.all([fetchData1(), fetchData2(), fetchData3()])
    .then(results => {
        console.log('所有操作成功:', results);
    })
    .catch(error => {
        console.error('至少一个操作失败:', error);
    });

// Promise.allSettled - 等待所有操作完成，无论成功失败
Promise.allSettled([fetchData1(), fetchData2(), fetchData3()])
    .then(results => {
        results.forEach(result => {
            if (result.status === 'fulfilled') {
                console.log('成功:', result.value);
            } else {
                console.log('失败:', result.reason);
            }
        });
    });

// Promise.race - 第一个完成的操作决定结果
Promise.race([fetchData1(), timeoutPromise(5000)])
    .then(result => {
        console.log('第一个完成的操作结果:', result);
    })
    .catch(error => {
        console.error('操作超时或失败:', error);
    });</code></pre>

                            <h3>5. 实际应用场景</h3>
                            <p>不同异步模式的适用场景：</p>
                            <ul>
                                <li>简单异步操作：可使用基本回调或Promise</li>
                                <li>复杂异步流程：推荐使用async/await，代码更清晰</li>
                                <li>并发请求数据：使用Promise.all或Promise.allSettled</li>
                                <li>超时控制：使用Promise.race配合超时Promise</li>
                                <li>流式数据处理：考虑使用异步迭代器(Async Iterators)</li>
                            </ul>
                            <p>掌握这些异步编程模式对于开发高效、可靠的JavaScript应用至关重要。在实际开发中，应根据具体场景选择合适的异步模式，编写可读性高、易于维护的异步代码。</p>
                        </div>
                    </article>
                `
            },
            'post4': {
                id: 'post4',
                title: '响应式设计最佳实践',
                author: '90后晨仔',
                date: '2024-03-21',
                tags: ['响应式设计', '前端技术'],
                imageCaption: '响应式设计最佳实践',
                content: `
                    <article class="post">
                        <h2>响应式设计最佳实践</h2>
                        <div class="post-meta">
                            <span class="date">2024-03-21</span>
                            <span class="author">作者：前端专家</span>
                        </div>
                        <div class="post-content">
                            <p>响应式网页设计(RWD)已成为现代Web开发的标准要求，它确保网站在各种设备上都能提供良好的用户体验。本文将分享响应式设计的最佳实践和实用技巧。</p>

                            <h3>1. 移动优先设计</h3>
                            <p>移动优先设计是响应式设计的基础原则：</p>
                            <pre><code>/* 移动优先基础样式 */
.container {
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto;
}

/* 平板设备样式 */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        padding: 0 2rem;
    }
}

/* 桌面设备样式 */
@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}</code></pre>
                            <p>移动优先设计的优势：</p>
                            <ul>
                                <li>确保在资源受限的移动设备上有良好性能</li>
                                <li>避免为移动设备覆盖过多桌面样式</li>
                                <li>渐进式增强而非优雅降级</li>
                            </ul>

                            <h3>2. 灵活的布局系统</h3>
                            <p>使用弹性盒(Flexbox)和网格(Grid)创建灵活布局：</p>
                            <pre><code>/* 弹性盒导航 */
.nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

@media (min-width: 768px) {
    .nav {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}

/* 网格布局卡片 */
.card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

@media (min-width: 768px) {
    .card-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1200px) {
    .card-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}</code></pre>

                            <h3>3. 响应式图像</h3>
                            <p>优化图像在不同设备上的显示：</p>
                            <pre><code><!-- 使用srcset和sizes提供不同分辨率图像 -->
<img src="image-small.jpg" 
     srcset="image-small.jpg 400w, 
             image-medium.jpg 800w, 
             image-large.jpg 1200w" 
     sizes="(max-width: 600px) 400px, 
            (max-width: 1000px) 800px, 
            1200px" 
     alt="响应式图像示例">

<!-- 使用picture元素提供不同格式或裁剪图像 -->
<picture>
    <source media="(max-width: 768px)" srcset="image-mobile.jpg">
    <source media="(min-width: 769px)" srcset="image-desktop.jpg">
    <img src="image-fallback.jpg" alt="不同设备的图像">
</picture></code></pre>
                            <p>提示：使用CSS的max-width: 100%确保图像不会超出容器宽度：</p>
                            <pre><code>img { max-width: 100%; height: auto; }</code></pre>

                            <h3>4. 响应式排版</h3>
                            <p>实现跨设备的最佳阅读体验：</p>
                            <pre><code>/* 使用相对单位 */
:root {
    font-size: 16px;
}

@media (max-width: 768px) {
    :root {
        font-size: 14px;
    }
}

body {
    font-size: 1rem;
    line-height: 1.6;
}

h1 {
    font-size: 2.5rem;
}

@media (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }
}

/* 使用clamp()实现响应式字体大小 */
h1 {
    font-size: clamp(1.8rem, 5vw, 3rem);
}

p {
    font-size: clamp(1rem, 2vw, 1.2rem);
}</code></pre>

                            <h3>5. 触摸友好的交互设计</h3>
                            <p>为移动设备优化交互元素：</p>
                            <pre><code>/* 确保按钮足够大 */
.button {
    min-height: 44px;
    min-width: 44px;
    padding: 0.5rem 1rem;
}

/* 增加触摸目标间距 */
.nav-item {
    margin: 0.5rem 0;
}

@media (min-width: 768px) {
    .nav-item {
        margin: 0 0.5rem;
    }
}

/* 避免悬停效果在移动设备上触发 */
@media (hover: hover) and (pointer: fine) {
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
}</code></pre>

                            <h3>6. 性能优化</h3>
                            <p>响应式网站的性能优化技巧：</p>
                            <ul>
                                <li>使用媒体查询加载特定设备的CSS</li>
                                <li>延迟加载非关键资源</li>
                                <li>使用CSS containment隔离渲染</li>
                                <li>优化字体加载</li>
                            </ul>
                            <pre><code><!-- 媒体查询加载CSS -->
<link rel="stylesheet" href="base.css">
<link rel="stylesheet" media="(min-width: 768px)" href="desktop.css">

<!-- 延迟加载图像 -->
<img src="image.jpg" loading="lazy" alt="延迟加载图像"></code></pre>

                            <h3>7. 测试策略</h3>
                            <p>确保响应式设计在各种设备上正常工作：</p>
                            <ul>
                                <li>使用浏览器开发工具的设备模拟器</li>
                                <li>测试实际设备</li>
                                <li>使用在线响应式测试工具</li>
                                <li>测试不同方向(横向/纵向)</li>
                                <li>测试不同网络条件</li>
                            </ul>
                            <p>响应式设计是一个持续优化的过程，需要不断测试和调整，以适应新的设备和用户需求。通过遵循这些最佳实践，您可以创建出在各种设备上都能提供出色用户体验的网站。</p>
                        </div>
                    </article>
                `
            }
        };

        return posts[postId] || null;
    }
}; 