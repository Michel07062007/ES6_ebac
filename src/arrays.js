// Array de objetos contendo os alunos e suas notas
const alunos = [
    { nome: 'João', nota: 7.5 },
    { nome: 'Maria', nota: 4.8 },
    { nome: 'Pedro', nota: 9.2 },
    { nome: 'Ana', nota: 5.9 },
    { nome: 'Carlos', nota: 6.3 }
];

// Função para filtrar alunos com nota maior ou igual a 6
function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Chamada da função
const alunosAprovados = filtrarAlunosAprovados(alunos);

// Exibindo os alunos aprovados
console.log(alunosAprovados);