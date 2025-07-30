"use strict";

var alunos = ['Marcos', 'Lara', 'João', 'Maria'];
var alunosENotas = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    nota1: '6',
    nota2: '7',
    nota3: '8',
    nota4: '1'
  };
  return itemAtual;
});
console.log(alunosENotas);

// const  = ['6', '8', '10', '2']

// if (notasEAlunos > 6) {
//     console.log(`Os alunos que estão á cima da média é:${notaEAluno}`)
// }
//     else {
//         console.log(`Nenhum dos alunos estão á cima da média`)
//     }

// • Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;

// • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

// • Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o 
// link através da plataforma.