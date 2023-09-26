
// tsc script.ts --noEmitOnError --outDir

/*type User = {
    name: string,
    idade: number,
}
*/

interface User {
    name: string,
    idade: number,
}
// exemplo de entradas separados no codigo podendo acrescentar mais types no decorrer do codigo
interface User {
    name: string,
}
interface User{
    idade: number
}
function resumo(usuario: User) {
    return `olá seu nome é ${usuario.name} e sua idade é ${usuario.idade} anos`
}

resumo({
    name: 'Pedro',
    idade: 25
});