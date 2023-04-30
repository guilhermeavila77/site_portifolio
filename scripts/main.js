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