
export const invoice = {
    id: 10,
    name: 'Componente PC',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'AR',
            city: 'BS AS',
            street: 'Av Rivadavia',
            number: 1200
        }
    },
    company: {
        name: 'TP React',
        fiscalNumber: 123456,
    },
    items: [
        {
            id: 1,
            product: 'CPU Intel i7',
            price: 199,
            quantity: 1
        },
        {
            id: 2,
            product: 'Corsair Keyboard',
            price: 200,
            quantity: 1
        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 150,
            quantity: 1
        }
    ]
}