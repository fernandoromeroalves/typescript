
// tsc src/script.ts -w --noEmitOnError --outDir

// tsc --init para gerar configuração
//exclude: "**/*dev.ts" esse irá exluir todos com os arquivos com extensão ou pasta quando gerar configuração
// include: "**/* adiciona somente o arquivo que vc selecionar

// seleciona a versão de js
//libs vc coloca a biblioteca que vai precisar

const botao = document.querySelector('button') as HTMLButtonElement;

botao.addEventListener('click', () =>{
    console.log('clicou!!!!');
});