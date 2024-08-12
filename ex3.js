//3- Declarar uma função para calcular o quadrado da soma de dois números.

function quadradoSoma(num1, num2) {
    let soma= num1 + num2;
    let result= soma * soma;
    return result
}

let resultado = quadradoSoma(4, 3)
console.log(resultado)