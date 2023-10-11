
const products = ['mesa', 'silla', 'notebook', 10]

products.push(5.34)

console.log(products)

const fruits = ['peras', 'manzanas']

// ... spread / clone
const combinando = [...fruits, ...products, 'otras cosas']

console.log(combinando)

// concat es similar a spread. No tiene efecto de lado
const otroProducts = products.concat('monitor', [50])

console.log(otroProducts)