// auth-check.js
(function() {
    // 检查是否已登录
    var isLoggedIn = sessionStorage.getItem('is_logged_in');
    if (isLoggedIn !== 'true') {
        // 未登录，立即跳转到登录页
        window.location.href = 'login.html';
    }
})();
