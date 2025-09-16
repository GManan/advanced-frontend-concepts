document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('.c-section__toggle-input');

    let lastChecked = null;

    radios.forEach(radio => {
        radio.addEventListener('click', (e) => {
            if (radio === lastChecked) {
                radio.checked = false;
                lastChecked = null;
            } else {
                lastChecked = radio;
            }
        });
    });
});
