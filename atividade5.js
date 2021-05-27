
// 5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console

function soma(num1,num2){
    return (num1+num2)
}

function multiplicacao(num1,num2){
    return (num1*num2)
}

function divisao(num1,num2){
    return (num1/num2)
}

function subtracao(num1,num2){
    return (num1-num2)
}

let expressao = 'divisao'

let num1=100
let num2=25

switch(expressao){

    case 'soma':
        console.log(soma(num1,num2))
        break

    case 'multiplicacao':
        console.log(multiplicacao(num1,num2))
        break

    case 'divisao':
        console.log(divisao(num1,num2))
        break

    case 'subtracao':
        console.log(subtracao(num1,num2))
        break

    default:
        console.log('informe dados válidos')
}



