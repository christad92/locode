var addressBtn = document.getElementById('edit');
var addressBtn2 = document.getElementById('edit2');
var navBtn = document.getElementById('nav');
var dirBtn = document.getElementById('dir');
var addressSaveBtn = document.getElementById('save');
var addressCancelBtn = document.getElementById('cancel');
var addressModal = document.getElementById('addressModal');
var addDir = document.getElementById('Add_direction');
var mapNav = document.getElementById('Map_navigate');


addressBtn.onclick = function() {
    addressModal.style.top = "0%";
}

addressBtn2.onclick = function() {
    addressModal.style.top = "0%";
}

addressSaveBtn.onclick = function() {
    addressModal.style.top = "-110%"
}

addressCancelBtn.onclick = function() {
    addressModal.style.top = "-110%"
}

navBtn.onclick = function() {
    mapNav.style.opacity = "1";
    mapNav.style.display = "flex";
    addDir.style.opacity = "0";
    addDir.style.display = "none";
}

dirBtn.onclick = function() {
    mapNav.style.opacity = "0";
    mapNav.style.display = "none";
    addDir.style.opacity = "1";
    addDir.style.display = "flex";
}