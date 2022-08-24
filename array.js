/*var cores = new Array('azul', 'roxo', 'preto', 'branco')
console.log(cores[2])
cores.forEach(cores => console.log(cores))*/
/*
var numbers = [1, 2, 5, 6, 8]
let num = numbers.map(num => num)
let num2 = numbers.forEach(num =>num)
console.log(num,num2)*/

//var numbers = [1, 2, 5, 6, 8]
//let pair = numbers.filter(num => num % 2 ===0)
//let imp = numbers.filter(num => num % 2 === 1)
/*let two = numbers.find(num => num ===2)*/
//console.log(imp)
//console.log(pair)
/*console.log(two)*/
/*
var numbers = [1, 2, 2, 6, 8]
let sum= numbers.reduce(
    (preV, corV) => preV + corV
    )

console.log(sum)*/

let alunos = [
    {nome: 'lincon', idade: 18},
    {nome: 'gege', idade: 14}
]
let aluno = alunos.find(aluno => aluno.nome === 'lincon')
console.log(aluno)