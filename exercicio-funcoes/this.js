function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 20,
};

const pessoa2 = {
    nome: 'Kelvin',
    idade: 43,
};

const pessoa3 = {
    nome: 'Pedro',
    idade: 14,
};

const animal = {
    nome: 'Amora',
    idade: 14,
    raca: 'Pug',
};

console.log(calculaIdade.call(pessoa3, 20))
console.log(calculaIdade.apply(animal, [2]))
