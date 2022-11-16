// class Carro {
//     marca;
//     cor;
//     combustivelPorKm;

//     constructor (marca, cor, combustivelPorKm){
//         this.marca = marca;
//         this.cor = cor;
//         this.combustivelPorKm = combustivelPorKm;
//     }

//     gastoPorKm(distanciaEmKm, precoCombustivel){
//         return distanciaEmKm * this.combustivelPorKm * precoCombustivel;
//     }


// }

// const gol = new Carro("Volkswagen", "prata", 1/9)
// console.log(gol.gastoPorKm(50, 5));


class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoImc(){
        return this.peso / (this.altura * this.altura);

    }

    classificarImc(){
       const imc = this.calculoImc();

       if(imc < 18.5 ){
        return "Abaixo do peso"
       } else if(imc >= 18.5 && imc < 25){
        return "Peso normal"
       } else if(imc >= 25 && imc < 30){
        return "Acima do peso"
       } else if(imc >= 30 && imc < 40){
        return "Obeso"
       } else {
        return "Obesidade grave"
       }

        
    }
}

const pedro = new Pessoa("Pedro", 75, 1.71);
console.log(pedro.classificarImc());