document.getElementById('saveButton').addEventListener('click', function() {
    this.classList.toggle('clicked');
    let savePopup = document.getElementById('savePopup');
    let defaultBookmark = document.getElementById('defaultBookmark');
    let activeBookmark = document.getElementById('activeBookmark');
    let hoverBookmark = document.getElementById('hoverBookmark');

    if (this.classList.contains('clicked')) {
        // this.textContent = 'Saved';
        savePopup.classList.remove('hidden');
        defaultBookmark.classList.add('hidden');
        activeBookmark.classList.remove('hidden');
        
    } else {
        // this.textContent = 'Save';
        savePopup.classList.add('hidden');
    }
});

document.getElementById('profileButton').addEventListener('click', function() {
    this.classList.toggle('clicked');
    let profilePopup = document.getElementById('profilePopup');
    let profileBackground = document.getElementById('profileBackground');

    if (this.classList.contains('clicked')) {
        profilePopup.classList.remove('hidden');
        // profileBackground.classList.add('hidden');
    } else {
        profilePopup.classList.add('hidden');
        // profileBackground.classList.remove('hidden');
    }
});

document.getElementById('moreButton').addEventListener('click', function() {
    this.classList.toggle('clicked');
    let morePopup = document.getElementById('morePopup');

    if (this.classList.contains('clicked')) {
        morePopup.classList.remove('hidden');
    } else {
        morePopup.classList.add('hidden');
    }
});