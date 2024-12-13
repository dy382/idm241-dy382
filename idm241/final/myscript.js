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
        defaultBookmark.classList.add('hidden');
        activeBookmark.classList.remove('hidden');
        hoverBookmark.classList.add('hidden');

    } else {
        savePopup.classList.add('hidden');
        defaultBookmark.classList.remove('hidden');
        activeBookmark.classList.add('hidden');
        hoverBookmark.classList.add('hidden');
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


// second beta


const saveButton1 = document.getElementById('saveButton1');
const savePopup1 = document.getElementById('savePopup1');
const defaultBookmark1 = document.getElementById('defaultBookmark1');
const activeBookmark1 = document.getElementById('activeBookmark1');
const hoverBookmark1 = document.getElementById('hoverBookmark1');

// Toggle save state on click
saveButton1.addEventListener('click', function () {
    this.classList.toggle('clicked');

    if (this.classList.contains('clicked')) {
        savePopup1.classList.remove('hidden');
        defaultBookmark1.classList.add('hidden');
        activeBookmark1.classList.remove('hidden');
        hoverBookmark1.classList.add('hidden');

    } else {
        savePopup1.classList.add('hidden');
        defaultBookmark1.classList.remove('hidden');
        activeBookmark1.classList.add('hidden');
        hoverBookmark1.classList.add('hidden');
    }
});

// Show hoverBookmark on mouse over
saveButton1.addEventListener('mouseover', function () {
    if (!saveButton1.classList.contains('clicked')) {
        defaultBookmark1.classList.add('hidden');
        hoverBookmark1.classList.remove('hidden');
    }
});

// Hide hoverBookmark on mouse out
saveButton1.addEventListener('mouseout', function () {
    if (!saveButton1.classList.contains('clicked')) {
        hoverBookmark1.classList.add('hidden');
        defaultBookmark1.classList.remove('hidden');
    }
});

document.getElementById('profileButton1').addEventListener('click', function() {
    this.classList.toggle('clicked');
    
    if (this.classList.contains('clicked')) {
        profilePopup1.classList.remove('hidden');
        // profileBackground.classList.add('hidden');
    } else {
        profilePopup1.classList.add('hidden');
        // profileBackground.classList.remove('hidden');
    }
});

document.getElementById('moreButton1').addEventListener('click', function() {
    this.classList.toggle('clicked');
    let morePopup1 = document.getElementById('morePopup1');

    if (this.classList.contains('clicked')) {
        morePopup1.classList.remove('hidden');
    } else {
        morePopup1.classList.add('hidden');
    }
});