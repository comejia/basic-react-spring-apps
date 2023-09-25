// Function
function sayHello(name = 'NN', age = 0) {
    console.log(`Hola mundo! ${name}, edad ${age}`)
}

sayHello('Cesar')
sayHello()
sayHello('Pepe')
sayHello('Pepe', 50)


// Arrow function
const say = (name = 'NN', age = 0) => console.log(`Hola mundo! ${name}, edad ${age}`)

say()


