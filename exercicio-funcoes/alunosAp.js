const alunos = [
    {
        nome: 'Joao',
        nota: 10,
        turma: '1A',
    },
    {
        nome: 'Pedro',
        nota: 3,
        turma: '1A',
    },
    {
        nome: 'Maria',
        nota: 8,
        turma: '4B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '4B',
    },
]

function alunosAp(arr, media){
    let ap = []
    for(let i =0; i < arr.length; i++){

        const {nome, nota} = arr[i]
        if(nota >= media){
            ap.push(nome);
        }
    }
    return ap
}
console.log(alunosAp(alunos, 5));