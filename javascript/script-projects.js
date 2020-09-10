let body = document.body;
let currentTheme = localStorage.getItem('currentTheme');

if(currentTheme) {
    body.classList.add('dark-theme');
}

document.getElementById('modal-open-classme').addEventListener('click', function() {
    document.querySelector('#modal-container-classme').style.visibility = "visible";
    document.querySelector('#modal-container-classme').style.opacity = "1";
});

document.getElementById('modal-close-classme').addEventListener('click', function() {
    document.querySelector('#modal-container-classme').style.visibility = "hidden";
    document.querySelector('#modal-container-classme').style.opacity = "0";
});

document.getElementById('modal-open-gpacalculator').addEventListener('click', function() {
    document.querySelector('#modal-container-gpacalculator').style.visibility = "visible";
    document.querySelector('#modal-container-gpacalculator').style.opacity = "1";
    
});

document.getElementById('modal-close-gpacalculator').addEventListener('click', function() {
    document.querySelector('#modal-container-gpacalculator').style.visibility = "hidden";
    document.querySelector('#modal-container-gpacalculator').style.opacity = "0";
});

document.getElementById('modal-open-givememygems').addEventListener('click', function() {
    document.querySelector('#modal-container-givememygems').style.visibility = "visible";
    document.querySelector('#modal-container-givememygems').style.opacity = "1";

});

document.getElementById('modal-close-givememygems').addEventListener('click', function() {
    document.querySelector('#modal-container-givememygems').style.visibility = "hidden";
    document.querySelector('#modal-container-givememygems').style.opacity = "0";
});
