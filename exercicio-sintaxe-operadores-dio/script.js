function numeros(num1, num2){

    const fraseUm = criaUm(num1, num2);
    const fraseDois = criaDois(num1, num2);

    return `${fraseUm} ${fraseDois}`
}

function criaUm(num1, num2){

    let iguais = '';

    if(num1 !== num2){

       iguais = "não";
    }

    return `Os numeros ${num1} e ${num2} ${iguais} são iguais.`
}

function criaDois(num1, num2){
    const soma = num1 + num2;
    const compara10 = soma > 10
    const compara20 = soma > 20;
    let menor10 = "menor"
    let menor20 = "menor"


    if(compara10){
        menor10 = "maior"
    }

    if(compara20){
        menor20 = "maior"
    }

    return `Sua soma é ${soma}, que é ${menor10} que 10 e ${menor20} que 20.`
}

console.log(numeros(10, 10));
