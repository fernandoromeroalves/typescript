
// tsc script.ts --noEmitOnError --outDir
// a ? na função determina que o type number pode ser opcional e não obrigatorio
function resumo(usuario: {nome: string, idade?: number}){
    if(usuario.idade !== undefined){
    return `${usuario.nome}, tudo bem? você tem ${usuario.idade}anos`
    }else{
        return `${usuario.nome}, você não tem idade`
    }
}

// implementação da função

let u = {
    nome: 'fernando',
    
    peso: 70,
    altura: 1.80
};

resumo(u);