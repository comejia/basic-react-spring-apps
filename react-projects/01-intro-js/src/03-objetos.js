
const invoice = {
    id: 10,
    name: 'Compras',
    date: new Date(),
    client: {
        id: 2,
        name: 'Jhon',
        lastname: 'Doe',
        age: 20
    },
    total: function() {
        let total = 0
        this.items.forEach(item => {
            total = total + item.price
        })
        return total
    },
    greeting: function() {
        return `Hola ${this.client.name}`
    },
    items: [
        {
            producto: 'keyboard',
            price: 200
        },
        {
            producto: 'mouse',
            price: 100
        }
    ]
}

console.log(invoice)
console.log(invoice.name)

invoice.client.name = 'Pepe'
console.log(invoice)

console.log(invoice.greeting())
console.log(invoice.total())