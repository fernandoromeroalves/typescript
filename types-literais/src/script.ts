
// tsc script.ts --noEmitOnError --outDir

let nome: 'fernando' = 'fernando';

nome = 'pedro';

function mostrarTexto(
    texto: string,
    alinhamento: 'left' | 'right' | 'center') {
        return `<div style="text-align:${alinhamento}">${texto}</div>`;
}

mostrarTexto('fernando','left');
mostrarTexto('fernando','right');
mostrarTexto('fernando','blar');

function temNome(nome:string):true | false {
   if(nome != ''){
    return true;
   } else{
    return false;
   }
}
type options = {
    width: number,
    height: number
}
function configurar (props: options | {  width: number, height: number} | 'auto') {

};

configurar({width:100, height:200})
configurar({width:170, height:250})
configurar('auto');
configurar('automatico')