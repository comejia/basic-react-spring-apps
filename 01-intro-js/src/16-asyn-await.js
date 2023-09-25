

/*httpClient
    .then(response => response.json())
    .then(data => console.log(data))*/

const findAllUsers = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
}
    
const users = await findAllUsers()

console.log(users)
console.log('Antes del async??')