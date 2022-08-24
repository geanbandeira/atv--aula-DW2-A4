const pessoa = {

    nome: {
    primeiro: 'johnatan',
    ultimo: 'sant'

    },
    idade: 35,
    sexo: 'masculino',
    interesse: ['musica', 'programar' ],

    bio:  function (){
        console.log(`${this.nome.primeiro} ${this.nome.ultimo} tem ${this.idade} anos de idade Ele gosta de ${this.interesses[0]} e $this.interesses(1)}`)
    },

    saudacao: function (){
        console.log('Ola '+ this.nome.primeiro + '.')
    }
}

console.log(pessoa)
console.log(pessoa.bio())
console.log(pessoa.saudacao())
pessoa.nome.primeiro= 'Natasha'
console.log

