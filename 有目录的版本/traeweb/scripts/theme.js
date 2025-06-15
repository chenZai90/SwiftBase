// 主题切换模块
const Theme = {
    // 初始化主题
    init() {
        // 从localStorage获取保存的主题，默认为default
        const savedTheme = localStorage.getItem('blogTheme') || 'default';
        this.applyTheme(savedTheme);

        // 设置主题选择器事件监听
        const themeSelector = document.getElementById('theme-selector');
        if (themeSelector) {
            // 设置选择器当前值
            themeSelector.value = savedTheme;
            // 添加change事件监听
            themeSelector.addEventListener('change', (e) => {
                const newTheme = e.target.value;
                this.applyTheme(newTheme);
                // 保存到localStorage
                localStorage.setItem('blogTheme', newTheme);
            });
        }
    },

    // 应用主题
    applyTheme(theme) {
        // 移除所有主题类
        document.body.setAttribute('data-theme', theme);

        // 可以在这里添加主题切换时的额外动画或效果
        document.body.style.opacity = '0.5';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 300);
    }
};