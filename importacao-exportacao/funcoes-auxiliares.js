

const entradas = [10, 31, 47, 15, 56, 73, 98, 17, 100, 87 ];

let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto)
}

module.exports = {gets, print}