//Codigo da cordialidade
function titulo(periodo){
    const cabeca = document.querySelector('.titulo');
    return cabeca.innerHTML = `${periodo} meu nome é Guilherme!`
}

function pegaHora(){
    const data = new Date();
    const hora = data.getHours();
    console.log(`Função pega hora ${hora}`)
    return hora;
}

function defineperiodo(hora){
    console.log(`função do periodo ${hora}`)
    if(hora >=  6 && hora <= 12) return 'Bom dia';
    if(hora >= 13 && hora <= 18) return 'Boa Tarde';
    return 'Boa noite';
}

const periodoAtual = defineperiodo(pegaHora());
titulo(periodoAtual);

// Codigo responsavel pelo scroll
const container = document.querySelector('.container');
let scrollLine = document.querySelector('.scroll');

container.addEventListener('wheel', (e)=> {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
    scrollLine.style.width = container.scrollLeft / 2 + 'px';
})


//Escrevendo progetos

//Funções Titulo
function projTitulo(page, projeto){
    const tituloProj = document.querySelector(page)
    return tituloProj.innerHTML = projeto
}
projTitulo('.page_1', 'TCC engenharia')
projTitulo('.page_2', 'IOT')
projTitulo('.page_3', 'Lista de tarefas')
/*
//Funçoes para os textos
function projTexto(page, texto){
    const tituloProj = document.querySelector(page)
    return tituloProj.innerHTML += texto
}

projTexto('text_page_1', 'Em desenvolvimento,')
projTexto('text_page_2')
projTexto('text_page_3')*/