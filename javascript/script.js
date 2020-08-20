let body = document.body;
let themeButton = document.querySelector('.theme-button');
let currentTheme = localStorage.getItem('currentTheme');

if(currentTheme) {
    body.classList.add('dark-theme');
    document.getElementById("theme-name").innerHTML = "Light Theme";
}

themeButton.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('currentTheme', 'darkThemeActive')
        document.getElementById("theme-name").innerHTML = "Light Theme";
    }
    else {
        localStorage.removeItem('currentTheme')
        document.getElementById("theme-name").innerHTML = "Dark Theme";
    }
})