// 立即执行函数，暴露登录检查函数
(function() {
    // 登录检查函数（暴露到全局）
    window.isLoggedIn = function() {
        return sessionStorage.getItem('is_logged_in') === 'true';
    };

    // 原有的跳转逻辑（保留）
    if (!window.isLoggedIn()) {
        window.location.replace('https://daitoujige.github.io/yearbook/primary_school/login.html');
        throw new Error('未登录，已跳转');
    }
})();
