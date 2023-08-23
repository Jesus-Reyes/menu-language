const column1 = document.getElementById('column1');
const column2 = document.getElementById('column2');
const startButton = document.querySelector('.start-button');

const languages = [
    { display: "English", native: "English", url: "SCORM-INGLES" },
    { display: "French", native: "Français", url: "SCORM-FRANCES" },
    { display: "German", native: "Deutsch", url: "SCORM-ALEMAN" },
    { display: "Indonesian", native: "Bahasa Indonesia", url: "SCORM-INDONESIO" },
    { display: "Italian", native: "Italiano", url: "SCORM-ITALIANO" },
    { display: "Japanese", native: "日本語", url: "SCORM-JAPONES" },
    { display: "Polish", native: "Polski", url: "SCORM-POLACO" },
    { display: "Portuguese", native: "Português", url: "SCORM-PORTUGUES" },
    { display: "Russian", native: "Русский", url: "SCORM-RUSO" },
    { display: "Spanish", native: "Español", url: "SCORM-ESPANOL" },
    { display: "Turkish", native: "Türkçe", url: "SCORM-TURCO" }
];


languages.forEach((lang, index) => {
    const li = document.createElement('li');
    li.setAttribute('data-language', lang.display);
    li.innerHTML = `
        <i class="check-icon">&#10003;</i>
        <span>${index + 1}. ${lang.display} - ${lang.native}</span>
    `;

    if (index < 6) {
        column1.appendChild(li);
    } else {
        column2.appendChild(li);
    }
});

// Deshabilitar el botón "Start" en la carga inicial
startButton.setAttribute('disabled', 'disabled');

document.querySelectorAll('.language-list li').forEach(item => {
    item.addEventListener('click', function() {
        const previouslySelected = document.querySelector('.selected');
        if (previouslySelected) {
            previouslySelected.classList.remove('selected');
            previouslySelected.querySelector('.check-icon').style.display = 'none';
        }

        this.classList.add('selected');
        this.querySelector('.check-icon').style.display = 'inline';
        startButton.removeAttribute('disabled');

    });
});


startButton.addEventListener('click', function() {
    // Encuentra el idioma seleccionado
    const selectedLangElement = document.querySelector('.selected');
    if (!selectedLangElement) return;  // No hacer nada si no hay idioma seleccionado

    const langKey = selectedLangElement.getAttribute('data-language');
    const selectedLang = languages.find(lang => lang.display === langKey);

    if (!selectedLang || !selectedLang.url) return;  // No hacer nada si el idioma seleccionado no tiene una URL

    // Redirige a la URL correspondiente del idioma seleccionado
    window.location.href = `./scorms/${selectedLang.url}/index_scorm.html`;
});
