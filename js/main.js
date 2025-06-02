document.addEventListener('DOMContentLoaded', ()=> {
    const textElement = document.getElementById('frontEnd');
    const textType = "DESARROLLADOR FRONT-END";

    const typeSpeed = 150;
    const restart = 3000;


    let charIndex = 0;
    let typeTimeout;
    let restartTimeout;

        function typeWriter() {
        if (charIndex < textType.length) {
            let char = textType.charAt(charIndex);

            if (char === '\n') {
                textElement.innerHTML += '<br>';
            } else {
                textElement.innerHTML += char;
            }

            charIndex++;
            typeTimeout = setTimeout(typeWriter, typeSpeed);
        } else {
            textElement.classList.add('typefinish');

            restartTimeout = setTimeout( () => {
                resetTyping();
                typeWriter();
            }, restart)
        }
    }

    function resetTyping() {
        clearTimeout(typeTimeout);
        clearTimeout(restartTimeout);

        textElement.innerHTML = '';

        textElement.classList.remove('typefinish');

        charIndex = 0;
    }

    typeWriter();
});