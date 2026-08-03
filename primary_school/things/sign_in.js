<script>
    (function () {
        // 检查登录状态
        if (sessionStorage.getItem('is_logged_in') !== 'true') {
            // 使用绝对路径跳转（确保无论在哪一层都能找到 login.html）
            window.location.replace('https://daitoujige.github.io/yearbook/primary_school/login.html');
            // 阻止后续脚本继续执行
            throw new Error('未登录，已跳转');
        }
    })();
</script>
