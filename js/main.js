let innerPages = document.querySelector('.gallery');


let dataPage = [];


const innerpagesHTML = () => {

    innerPages.innerHTML = '';
    

    if (dataPage.length > 0) {
        dataPage.forEach(page => {
            let newPage = document.createElement('div');
            newPage.classList.add('page');
            newPage.dataset.id = dataPage.id;
            newPage.innerHTML = `
            <div class="pageIn">
                <h2 class="pageName">${page.tittle}</h2>
                <a href="${page.url}" class="pageUrl"> <img src="${page.img}" class="pageImg" id="foto"> <a>
                <div class="langcont none">
                    ${page.lang ? `<img src=" ${page.lang}">` : ""}
                    ${page.lang2 ? `<img src=" ${page.lang2}">` : ""}
                    ${page.lang3 ? `<img src=" ${page.lang3}">` : ""}
                    ${page.lang4 ? `<img src=" ${page.lang4}">` : ""}
                    ${page.lang5 ? `<img src=" ${page.lang5}">` : ""}
                </div>
            </div>
            `;
            innerPages.appendChild(newPage)
        })
    }
}
innerpagesHTML();




const initApp = () => {
    fetch('js/pages.json')
    .then(response => response.json())
    .then(data => {
        dataPage = data;
        innerpagesHTML();
    });
};

initApp();





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