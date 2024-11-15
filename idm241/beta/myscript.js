document.getElementById('saveButton').addEventListener('click', function() {
    this.classList.toggle('clicked');
    let savePopup = document.getElementById('savePopup');

    if (this.classList.contains('clicked')) {
        this.textContent = 'Saved';
        savePopup.classList.remove('hidden');
    } else {
        this.textContent = 'Save';
        savePopup.classList.add('hidden');
    }
});

document.getElementById('profileButton').addEventListener('click', function() {
    this.classList.toggle('clicked');
    let profilePopup = document.getElementById('profilePopup');

    if (this.classList.contains('clicked')) {
        profilePopup.classList.remove('hidden');
    } else {
        profilePopup.classList.add('hidden');
    }
});
