/*// Condição IF e ELSE
var greeting
var time = new Date().getHours()
if (time <= 12) {
  greeting = 'Bom dia'
} else if (time < 18) {
  greeting = 'Boa Tarde'
} else {
  greeting = 'Boa Noite'
}
console.log(greeting)

//Switching
let day
switch (new Date().getDay()) {
  case 0:
    day = 'Domingo'
    break
  case 1:
    day = 'Segunda'
    break
  case 2:
    day = 'Terça'
    break
  case 3:
    day = 'Quarta'
    break
  case 4:
    day = 'Quinta'
    break
  case 5:
    day = 'Sexta'
    break
  case 6:
    day = 'Sábado'
  default:
    day = 'Dia errado'
}
console.log(day)*/

// Condição no fim
/*var i = 0
do {
  console.log(i++)
  // console.log(++i)
} while (i < 5)

// Condição no final
var i = 0
while (i < 5) {
  i += 1
  console.log(i)
}

//for
for (var passo = 1; passo <= 5; passo++) {
  console.log(`${passo} `)
}

// for ... in itera sobre as propriedade/índice
var obj = { a: 1, b: 2, c: 3 }
for (var prop in obj) {
  console.log('obj.' + prop + ' = ' + obj[prop])
}*/

// for ... of
let arr = [3, 5, 7]

// depois trocar para in
for (let i of arr) {
  console.log(i)
}

// label, break e continue
var i = 0
labelCancel: while (true) {
  i += 1
  if (i == 3) continue labelCancel
  if (i > 5) break labelCancel
  console.log(i)
}
