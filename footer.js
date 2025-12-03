// フッターの年号を自動更新するスクリプト
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightYearElement = document.getElementById('copyright-year');
    
    if (copyrightYearElement) {
        copyrightYearElement.textContent = currentYear;
    }
});

