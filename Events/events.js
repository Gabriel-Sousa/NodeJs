// const {EventEmitter} = require('events')

// const eventos = new EventEmitter()


// function testedeeventos(message){
//     console.log("Eu ouvi você", message )
// }

// eventos.on("seila", testedeeventos)

// eventos.emit('seila', "Gabriel")
// eventos.emit('seila', "Jubileu")


//  você solta um evento com .emit("x","y") e o primeiro parametro seria "o 'id' do evento" e o segundo alguma coisa, para o evento funciona deve colocar o .on e o primeiro paramentro sera o "id" e depois um função para ele pega o segundo parametro do emit e coloca-lo em  algum lugar para dar retorno. 


// const {EventEmitter} = require('events')

// const eventos = new EventEmitter()


// function testedeeventos(message){
//     console.log("Eu ouvi você", message )
// }

// eventos.once("seila", testedeeventos)

// esse .once ele server para ouvir somente um unica vez

// eventos.emit('seila', "Gabriel")
// eventos.emit('seila', "Jubileu")

// =======================================================================================================


const {inherits} = require("util")

const {EventEmitter} = require("events")

function Character(name){
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character("Chapolin")

chapolin.on("help", () => {console.log(`Eu! o ${chapolin.name} colorado!`)})

// Ele fica esperando algum emit esse help para executar a função


console.log("Oh! E agora, quem poderá me defender?")

chapolin.emit("help")