var profileBtn = document.getElementById('editProfileButton')
var profileSaveBtn = document.getElementById('save')
var profileCancelBtn = document.getElementById('cancel')
var profileModal = document.getElementById('editProfileModal')

profileBtn.onclick = function() {
    profileModal.style.top = "0%";
}

profileSaveBtn.onclick = function() {
    profileModal.style.top = "-150%";
}

profileCancelBtn.onclick = function() {
    profileModal.style.top = "-150%";
}