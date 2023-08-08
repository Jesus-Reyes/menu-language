document.getElementById('language-select').addEventListener('change', function() {
    const iframe = document.getElementById('scorm-frame');
    const languageCard = document.getElementById('language-card');
    const backButton = document.getElementById('back-button');

    if (this.value !== '') {
        if (this.value === 'es') {
            window.location.href = './scorms/scorm-es/index.html';
        } else if (this.value === 'en') {
            window.location.href = './scorms/scorm-en/index.html';
        } else if (this.value === 'fr') {
            window.location.href = './scorms/scorm-fr/index.html';
        }
    }


});


document.getElementById('back-button').addEventListener('click', function() {
    const iframe = document.getElementById('scorm-frame');
    const languageCard = document.getElementById('language-card');
    const languageSelect = document.getElementById('language-select');

    iframe.style.display = 'none';
    languageCard.style.display = 'block';
    this.style.display = 'none';

    // Reset the language selection to the empty option
    languageSelect.selectedIndex = 0;
    iframe.src = '';
});