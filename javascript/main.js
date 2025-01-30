let innerPages = document.querySelector('.pages');



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
                <a href="${page.url}" class="urlimg"><img src="${page.imgPage}" alt="Captura de mi primera pagina" class="img-page" id="image"><a>
                <div class="langcont">
                    ${page.lang ? `<img src="${page.lang}" alt="lenguaje 1" class="leng">` : ""}
                    ${page.lang2 ? `<img src="${page.lang2}" alt="lenguaje 2" class="leng">` : ""}
                    ${page.lang3 ? `<img src="${page.lang3}" alt="lenguaje 3" class="leng">` : ""}
                    ${page.lang4 ? `<img src="${page.lang4}" alt="lenguaje 4" class="leng">` : ""}
                    ${page.lang5 ? `<img src="${page.lang5}" alt="lenguaje 5" class="leng">` : ""}
                </div>
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        let position = window.pageYOffset;
        let targetPosition = target.offsetTop;
        let distance = targetPosition - position;
        let duration = 1000;
        let startTime = null;

        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            let timeElapsed = currentTime - startTime;
            let run = ease(timeElapsed, position, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    });
});

