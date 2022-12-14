let alunos = [
    {id: 1, nome: "Bruna", media: 1},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 7, nome: "Sheibh", media: 20},
    {id: 6, nome: "Rita", media: 2},
    {id: 5, nome: "Rafael", media: 10}
];

for ( let contador = 0; contador < alunos.length; contador++ ) {

    let aluno = alunos[contador];
    
    if ( aluno.media < 6 ) {
        continue;//Neste ponto, sempre q a condição for TRUE, o CONTINUE irá passar para a próxima propriedade ou seja quem tiver MEDIA < 6, será impresso nos console.log a seguir
    }

    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media+"\n");

}
