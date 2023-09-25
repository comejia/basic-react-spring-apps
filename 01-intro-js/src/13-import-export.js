

import import_default, { invoice , findById} from './data/invoices'

const invoiceNames = invoice.map(i => i.name)

console.log(invoiceNames)


const invoiceFindFirst = invoice.find(i => i.id == 3)
console.log(invoiceFindFirst)

const invoiceFilter = invoice.filter(i => i.id < 3)
console.log(invoiceFilter)

const result = invoice.some(i => i.id === 2)
console.log(result)


console.log(findById(1))


console.log(import_default(3))