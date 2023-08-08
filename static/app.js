const column1 = document.getElementById('column1');
const column2 = document.getElementById('column2');
const startButton = document.querySelector('.start-button');

const languages = [
    { display: "English", native: "English" },
    { display: "French", native: "Français" },
    { display: "German", native: "Deutsch" },
    { display: "Indonesian", native: "Bahasa Indonesia" },
    { display: "Italian", native: "Italiano" },
    { display: "Japanese", native: "日本語" },
    { display: "Polish", native: "Polski" },
    { display: "Portuguese", native: "Português" },
    { display: "Russian", native: "Русский" },
    { display: "Spanish", native: "Español" },
    { display: "Turkish", native: "Türkçe" }
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
