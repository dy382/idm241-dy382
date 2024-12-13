const saveButton = document.getElementById('saveButton');
const savePopup = document.getElementById('savePopup');
const defaultBookmark = document.getElementById('defaultBookmark');
const activeBookmark = document.getElementById('activeBookmark');
const hoverBookmark = document.getElementById('hoverBookmark');

// Toggle save state on click
saveButton.addEventListener('click', function () {
    this.classList.toggle('clicked');

    if (this.classList.contains('clicked')) {
        savePopup.classList.remove('hidden');
        dBookmark.classList.add('hidden');
        activeBookmark.classList.remove('hidden');

    } else {
        savePopup.classList.add('hidden');
        defaultBookmark.classList.remove('hidden');
        activeBookmark.classList.add('hidden');
    }
});

// Show hoverBookmark on mouse over
saveButton.addEventListener('mouseover', function () {
    if (!saveButton.classList.contains('clicked')) {
        defaultBookmark.classList.add('hidden');
        hoverBookmark.classList.remove('hidden');
    }
});

// Hide hoverBookmark on mouse out
saveButton.addEventListener('mouseout', function () {
    if (!saveButton.classList.contains('clicked')) {
        hoverBookmark.classList.add('hidden');
        defaultBookmark.classList.remove('hidden');
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