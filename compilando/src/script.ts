
// tsc src/script.ts -w --noEmitOnError --outDir

// tsc --init para gerar configuração
//exclude: "**/*dev.ts" esse irá exluir todos com os arquivos com extensão ou pasta quando gerar configuração
// include: "**/* adiciona somente o arquivo que vc selecionar

var nome: string = 'fernando';

function blabla(n1: Number): String{
    return 'o paramatro era: ' + n1
};

blabla(15);

let idade: number = 20