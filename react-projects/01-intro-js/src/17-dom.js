
const findAllUsers = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
}
    
const users = await findAllUsers()

const ul = document.createElement('ul')

users.forEach(user => {
    const li = document.createElement('li')
    li.innerHTML = user.name
    ul.append(li)
    console.log(user.name)
});

document.getElementById('root').append(ul)


console.log(users)
console.log('Antes del async??')

