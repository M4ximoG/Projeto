// console.log(gamesdados);
const links = document.querySelectorAll('nav li a');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('hover');
    });
    link.addEventListener('mouseout', () => {
        link.classList.remove('hover');   

    });
});

let section = document.getElementById("resultados-pesquisa")
console.log(section);

for (let dado of gamesdados)

section.innerHTML += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <img class="thumb" src="${dado.imagem}" alt="Imagem do jogo ${gamesdados.titulo}">
                <p class="descricao-meta">${dado.descricao}</p>
                <p>Lançamento: ${dado.dataLancamento}</p>
                <a class="maisinfo" href="${dado.link}" target="_blank">Mais informações</a>
            </div>
`
