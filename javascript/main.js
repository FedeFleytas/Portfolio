let innerPages = document.querySelector('.pages')


let dataPage = [];


const innerpagesHTML = () => {

    innerPages.innerHTML = '';

    if (dataPage.length > 0) {
        dataPage.forEach(page => {
            let newPage = document.createElement('div');
            newPage.classList.add('page');
            newPage.dataset.id= dataPage.id;
            newPage.innerHTML=`
                <h3 class="name">${page.name}</h3>
                <p class="info">${page.info}</p>
                <a href="${page.url}" class="urlimg"><img src="${page.imgPage}" alt="Captura de mi primera pagina" class="img-page"><a>
            `;
            innerPages.appendChild(newPage);

        })
    }
}
innerpagesHTML()

const initApp = () => {
    fetch('javascript/pageinfo.json')
    .then(response => response.json())
    .then(data => {
        dataPage = data;
        innerpagesHTML();
    });
};
initApp();