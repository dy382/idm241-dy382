document.getElementById('saveButton').addEventListener('click', function() {
    this.classList.toggle('clicked');
    let popup = document.getElementById('popup');

    if (this.classList.contains('clicked')) {
        this.textContent = 'Saved';
        popup.classList.remove('hidden');
    } else {
        this.textContent = 'Save';
        popup.classList.add('hidden');
    }
});

document.getElementById('profileButton').addEventListener('click', function() {
    this.classList.toggle('clicked');
});