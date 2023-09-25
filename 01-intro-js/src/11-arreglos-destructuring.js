
const users = ['pepe', 'maria', 'carlos', 'ramon']

const [pepe, maria, ...rest] = users

console.log(pepe, maria, ...rest)