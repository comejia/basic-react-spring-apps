
const user = {
    username: 'andres',
    email: 'google@gmail.com',
    age: 20
}

const {username, email} = user

console.log(`User: ${username}, email: ${email}`)


const detail = ({username, age}) => {
    console.log(`User: ${username}, email: ${age}`)
}

detail(user)