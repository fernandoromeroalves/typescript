
// tsc script.ts --noEmitOnError --outDir

function mostrarIdade(idade: number|string) {
    if (typeof idade ==='string'){
        console.log(idade.toUpperCase());
    } else {
        console.log(idade);
    }
}

mostrarIdade(18);
mostrarIdade('19');