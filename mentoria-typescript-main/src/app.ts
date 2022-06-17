export {}

// Desafio 1
interface Funcionário {
    code: number,
    name: string
}

let funcionário: Funcionário = {
    code: 10,
    name:"John"
};

// Desafio 2

interface Pessoa {
    nome: string,
    idade: number,
    profissao: string
}

let pessoa1: Pessoa = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
};

let pessoa2: Pessoa = {

    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
}

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao:"padeiro"
}

// Desafio 3

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function() {
        somarAoSaldo(Number(soma.value)); 
    });
}
botaoLimpar.addEventListener('click', function() { 
    limparSaldo();
});