
const products = ['mesa', 'silla', 'notebook', 10]

products.push(5.34)

console.log(products)

products.forEach(p => console.log(p))
//products.forEach(console.log)

for(const prod of products) {
    console.log(prod)
}
