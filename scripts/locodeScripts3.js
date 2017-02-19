var closeDrawerBtn = document.getElementById('closeDrawer');
var addressSaveBtn = document.getElementById('save');
var addressCancelBtn = document.getElementById('cancel');
var helpBtn = document.getElementById('help');
var genBtn = document.getElementById('generateLocode');
var helpDrawer = document.getElementById('drawer');
var SubHeader = document.getElementById('subHeader');
var addressModal = document.getElementById('addressModal');

helpBtn.onclick = function() {
    helpDrawer.style.top = "94px";
    helpDrawer.style.animationDuration = ".2s"
}

closeDrawerBtn.onclick = function() {
    helpDrawer.style.top = "-15%"
}

genBtn.onclick = function() {
    addressModal.style.top = "0%";
}

addressSaveBtn.onclick = function() {
    addressModal.style.top = "-110%"
}

addressCancelBtn.onclick = function() {
    addressModal.style.top = "-110%"
}