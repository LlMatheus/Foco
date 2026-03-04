
//document.getElementById("teste").innerHTML = pessoa.join(" - ");
///pessoa.pop(); remove o último elemento do array   
//pessoa.push("JavaScript"); Adiciona um elemento no final do array
//pessoa.shift(); Remove o primeiro elemento do array
//pessoa.unshift("Matheus"); Adiciona um elemento no início do array
//delete pessoa[0]; Remove o elemento do array, mas mantém o índice
//const superLista = lista1.concat(lista2);
//pessoa.splice(1,0, "Item adicionado 1", "Item adicionado 2");
//const craques = jogadores.slice(2, 5);
//const jogOrdem = jogadores.sort(); Ordem alfabetdica
//const jogOrdemReversa = jogadores.reverse(); Ordem alfabética reversa
//numeros.sort(function(a, b) {return a - b;}); // Ordena os números em ordem crescente
//function MaiorNumero(array) {
    //return Math.max.apply(null, array);
//function MenorNumero(array) {
    //return Math.min.apply(null, array);

    //Array Desafio 1

//const pessoa = ["Dimitri", "teixeira", 31,"Professor"];
//pessoa.push("Programador");
//console.log(pessoa[pessoa.length -1]);
//console.log(pessoa)

//Array Desafio 2

//const nome = "Dimitri"; //string
//const numeros = [10, 20, 30,]; //array
//const objeto = {curso:"ADS"}; //objeto

//if (Array.isArray(nome)) {
   // console.log("É um array");
//} else {
 //   console.log("Não é um array");
//}
// verificarArray(nome);
 //verificarArray(numeros);
 //verificarArray(objeto);

 //Array Desafio 3

const Aluno =["Matheus", 23, "ADS", "Lavras"];
Aluno.push("Front-end");
console.log(Aluno[0])
console.log(Aluno[Aluno.length -1])
Array.isArray(Aluno)
