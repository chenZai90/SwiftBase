// 交互功能模块
const Interactions = {
    // 打字机效果
    typewriterEffect(element, text, speed = 100) {
        if (!element) return;
        let i = 0;
        element.innerHTML = '';
        const type = () => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        type();
    },

    // 初始化阅读进度条
    initReadingProgress() {
        const progressBar = document.querySelector('.progress-bar');
        if (!progressBar) return;

        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    },

    // 初始化目录高亮
    initTOCHighlight() {
        const tocLinks = document.querySelectorAll('.toc-nav a');
        const headings = document.querySelectorAll('h2, h3');

        window.addEventListener('scroll', () => {
            let current = '';
            headings.forEach(heading => {
                const sectionTop = heading.offsetTop;
                if (window.pageYOffset >= sectionTop - 60) {
                    current = heading.getAttribute('id');
                }
            });

            tocLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    },

    // 初始化点赞按钮
    initLikeButton() {
        const likeBtn = document.querySelector('.like-btn');
        if (!likeBtn) return;

        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('active');
            const count = likeBtn.querySelector('.count');
            count.textContent = likeBtn.classList.contains('active') ? '1' : '0';
        });
    },

    // 初始化收藏按钮
    initFavoriteButton() {
        const favoriteBtn = document.querySelector('.favorite-btn');
        if (!favoriteBtn) return;

        favoriteBtn.addEventListener('click', () => {
            favoriteBtn.classList.toggle('active');
        });
    },

    // 初始化分享按钮
    initShareButton() {
        const shareBtn = document.querySelector('.share-btn');
        if (!shareBtn) return;

        shareBtn.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    url: window.location.href
                }).catch(console.error);
            } else {
                // 复制链接到剪贴板
                navigator.clipboard.writeText(window.location.href)
                    .then(() => alert('链接已复制到剪贴板'))
                    .catch(console.error);
            }
        });
    },

    // 初始化字体控制
    initFontControls() {
        const decreaseBtn = document.querySelector('.font-decrease');
        const resetBtn = document.querySelector('.font-reset');
        const increaseBtn = document.querySelector('.font-increase');
        const postBody = document.querySelector('.post-body');

        if (!postBody || !decreaseBtn || !resetBtn || !increaseBtn) return;

        let fontSize = parseInt(getComputedStyle(postBody).fontSize);

        decreaseBtn.addEventListener('click', () => {
            if (fontSize > 12) {
                fontSize -= 2;
                postBody.style.fontSize = fontSize + 'px';
            }
        });

        resetBtn.addEventListener('click', () => {
            fontSize = 16;
            postBody.style.fontSize = fontSize + 'px';
        });

        increaseBtn.addEventListener('click', () => {
            if (fontSize < 24) {
                fontSize += 2;
                postBody.style.fontSize = fontSize + 'px';
            }
        });
    },

    // 初始化图片懒加载动画
    initImageLazyLoad() {
        const images = document.querySelectorAll('.post-image[loading="lazy"]');
        if (!images.length) return;

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('fade-in');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    },

    // 初始化图片悬停效果
    initImageHoverEffect() {
        const images = document.querySelectorAll('.post-image');
        if (!images.length) return;

        images.forEach(img => {
            img.addEventListener('mouseenter', () => {
                img.classList.add('hover');
            });
            img.addEventListener('mouseleave', () => {
                img.classList.remove('hover');
            });
        });
    },

    // 初始化所有交互效果
    initAll() {
        // 可以在这里初始化其他交互效果
        this.initReadingProgress();
        this.initTOCHighlight();
        this.initLikeButton();
        this.initFavoriteButton();
        this.initShareButton();
        this.initFontControls();
        this.initImageLazyLoad();
        this.initImageHoverEffect();
    }
};