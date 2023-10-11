
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


const invoice2 = {...invoice} // CLONE

const result = invoice === invoice2

console.log(result)

invoice2.id = 100

console.log(invoice.id)
console.log(invoice2.id)