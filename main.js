// Array de objetos representando alunos com nome e nota
const alunos = [
    { nome: "Maria", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Pedro", nota: 7 },
    { nome: "Ana", nota: 4 },
    { nome: "Carla", nota: 9 },
];

// Função para retornar alunos com nota maior ou igual a 6
function alunosComNotaMinima(listaAlunos, notaMinima) {
    return listaAlunos.filter(aluno => aluno.nota >= notaMinima);
}

// Chamando a função para obter os alunos com nota maior ou igual a 6
const alunosAprovados = alunosComNotaMinima(alunos, 6);
console.log(alunosAprovados);
