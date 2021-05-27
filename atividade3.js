// 3 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
// Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function divisao(divisao1,divisao2){
    const resultado = divisao1/divisao2
    if(resultado % 2 ===0){
        console.log(resultado +" é par")
    }
    return resultado
}

console.log(divisao(50,5))


