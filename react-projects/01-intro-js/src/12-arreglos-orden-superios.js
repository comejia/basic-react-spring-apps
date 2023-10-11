

const invoice = [
    {
        id: 1,
        name: 'Compras 1',
        client: {
            id: 2,
            name: 'Jhon',
            lastname: 'Doe',
            age: 20
        },
        items: [
            {
                producto: 'keyboard 1',
                price: 201
            },
            {
                producto: 'mouse 1',
                price: 101
            }
        ]
    },
    {
        id: 2,
        name: 'Compras 2',
        client: {
            id: 2,
            name: 'Jhon',
            lastname: 'Doe',
            age: 20
        },
        items: [
            {
                producto: 'keyboard 2',
                price: 202
            },
            {
                producto: 'mouse 2',
                price: 102
            }
        ]
    },
    {
        id: 3,
        name: 'Compras 3',
        client: {
            id: 2,
            name: 'Jhon',
            lastname: 'Doe',
            age: 20
        },
        items: [
            {
                producto: 'keyboard 3',
                price: 203
            },
            {
                producto: 'mouse 3',
                price: 103
            }
        ]
    }
]


const invoiceNames = invoice.map(i => i.name)

console.log(invoiceNames)


const invoiceFindFirst = invoice.find(i => i.id == 3)
console.log(invoiceFindFirst)

const invoiceFilter = invoice.filter(i => i.id < 3)
console.log(invoiceFilter)

const result = invoice.some(i => i.id === 2)
console.log(result)