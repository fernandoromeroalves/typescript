
// tsc src/script.ts -w --noEmitOnError --outDir

// tsc --init para gerar configuração
//exclude: "**/*dev.ts" esse irá exluir todos com os arquivos com extensão ou pasta quando gerar configuração
// include: "**/* adiciona somente o arquivo que vc selecionar

// seleciona a versão de js
//libs vc coloca a biblioteca que vai precisar
//outDir é o destino pra onde irá o arquivp .js
//rootDir ele replica a mesma intrutura da origem no caso src dentro da pasta de destino do arquivo .js
//removeComments: true ele remove os comentarios
//noEmitOnError: true não emit arquivos se tiver algum erro em algum deles
//noUnusedLocals": true serve para avisar quando estiver algum codigo que não está sendo usado
//"noUnusedParameters": true serve para avisar se tem algum paramatro que não está sendo usado, como um n3 a ,mais na função abaixo
// "noImplicitReturns": true usado quando o retorno da função não está exato podendo retornar mais de um return 



function somar(n1: number, n2: number,) {
    if(n1 > 10){
        return n1 + n2
    } else {
        return n1 * n2
    }
}
somar(20,15);