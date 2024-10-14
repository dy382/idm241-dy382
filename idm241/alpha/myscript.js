document.getElementById('saveButton').addEventListener('click', function() {
    this.classList.toggle('clicked');
    if (this.classList.contains('clicked')) {
        this.textContent = 'Saved';
    } else {
        this.textContent = 'Save';
    }
});
