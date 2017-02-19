var navBtn = document.getElementById('nav');
var Navigation = document.getElementById('navigation');
var dirBtn = document.getElementById('nav');
var Direction = document.getElementById('direction');

navBtn.onclick = function() {
    Navigation.style.opacity = "1";
    Direction.style.opacity = "0";
}

dirBtn.onclick = function() {
    Navigation.style.opacity = "0";
    Direction.style.opacity = "1";
}