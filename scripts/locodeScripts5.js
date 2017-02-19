var moreBtn = document.getElementById('MoreBtn');
var lessBtn = document.getElementById('LessBtn');
var moreDrawer = document.getElementById('MoreDrawer');

moreBtn.onclick = function() {
    moreDrawer.style.bottom = "-30pt";
}

lessBtn.onclick = function() {
    moreDrawer.style.bottom = "-270pt"
}