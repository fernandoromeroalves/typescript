
// tsc script.ts --noEmitOnError --outDir

type MathFunction = (n1: number, n2: number) => number;

const somar: MathFunction = (n1 , n2) => {
    return n1 + n2
}

const subtrair: MathFunction = (n1, n2) =>{
    return n1 - n2
};

const multiplicar: MathFunction = (n1, n2) =>{
    return n1 * n2
};

const divisor: MathFunction = (n1, n2) =>{
    return n1 / n2
}