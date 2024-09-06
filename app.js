function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

let campoPesquisa = document.getElementById("campodepesquisa").value
console.log(campoPesquisa)

campoPesquisa = campoPesquisa.toLowerCase()

let resultado = "";
let titulo = "";
let genero = "";
let tags = "";

for (let dado of gamesdados) {
  titulo = dado.titulo.toLowerCase()
  genero = dado.genero.toLowerCase()

  if (!campoPesquisa) {
    section.innerHTML = `<p class="erro" >Texto invalido: campo vazio</p>`
    return
  }
  
  if(titulo.includes(campoPesquisa) || genero.includes(campoPesquisa)) {
    resultado += `
    <div class="item-resultado">
        <h2>
            <a>${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <p class="plataformas" >Plataformas: ${dado.plataforma}</p>
        <p class="genero"> Genero: ${dado.genero}</p>
        <p>Lançamento: ${dado.dataLancamento}</p>
        <a class="maisinfo" href="${dado.link}" target="_blank">Mais informações</a>
    </div>
`
}

if (resultado === "") {
  section.innerHTML = `<p class="erro" >Jogo(s) não encontrado ou AINDA não disponivel na base de dados</p>`;
} else {
  section.innerHTML = resultado;
}}
}


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

window.addEventListener('scroll', function() {
    if (document.body.scrollHeight <= document.documentElement.clientHeight) {
      document.body.style.overflow   
   = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  console.log(ocultarBarraRolagem)
  // Função para ocultar a barra de rolagem após 3 segundos de inatividade
let timeout;

function ocultarBarraRolagem() {
  timeout = setTimeout(() => {
    document.body.style.overflow = 'hidden'; // Ocultar a barra de rolagem
  }, 3000); // 3000 milissegundos = 3 segundos
}

// Função para mostrar a barra de rolagem ao interagir
function mostrarBarraRolagem() {
  clearTimeout(timeout); // Limpar o timeout
  document.body.style.overflow = 'auto'; // Mostrar a barra de rolagem
}

// Eventos para detectar interação do usuário
document.addEventListener('mousemove', mostrarBarraRolagem);
document.addEventListener('keydown', mostrarBarraRolagem);
document.addEventListener('wheel', mostrarBarraRolagem);
document.addEventListener('touchstart', mostrarBarraRolagem);
