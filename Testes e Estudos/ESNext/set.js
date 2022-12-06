//não aceita repetição

const time = new Set()
time.add('Vasco')
time.add('São Paulo')
time.add('Flamengo')

console.log(time)
console.log(time.size)
console.log(time.has('vasco'))
console.log(time.has('Vasco'))
