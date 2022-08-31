const pessoa = {
    nome: {
        primeiro: "Gean",
        ultimo: "Bandeira"
    },
    idade: 21,
    sexo: "masculino",
    interesse: ["futebol", "programar"],
    inativo: null
}
const jsonData = JSON.stringify(pessoa)
console.log(jsonData);
console.log(typeof JSON.parse(jsonData));