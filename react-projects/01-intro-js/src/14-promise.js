

import { findById } from './data/invoices'

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        const result = findById(2)

        if(result) {
            resolve(result)
        } else {
            reject('error: no existe id')
        }
    }, 2500)
})

/*promise.then((r) => {
    console.log(r)
    console.log('Realizando un delay')
}).catch( error => console.error(error))*/
promise
    .then(console.log)
    .catch(console.warn)


const promiseInside = (id) => {
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            const result = findById(id)
    
            if(result) {
                resolve(result)
            } else {
                reject('error: no existe id')
            }
        }, 2500)
    })

    return promise
}

promiseInside(4)
    .then(console.log)
    .catch(console.warn)