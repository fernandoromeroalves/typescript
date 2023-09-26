
// tsc script.ts --noEmitOnError --outDir

let names = ['fernando', 'romero','alves',90];

names.forEach(function(nome){
    if (typeof nome === 'string'){
    console.log(nome.toLowerCase());
    } else {
        console.log(nome);
    }
});

