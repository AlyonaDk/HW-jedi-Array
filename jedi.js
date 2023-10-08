const jedi = []
const elements = ["Yoda", "Obi-Wan", "Qui-Gon"]

let i = 0

// while (i < elements.length) {
//   jedi.push(elements[i])
//   i++
// }

while (jedi.length < 3 ) {
  jedi.push("Yoda", "Obi-Wan", "Qui-Gon")
}

jedi.shift()
console.log(jedi);

const newJedi = [...jedi, 'Anakin']
console.log(`На планете ${newJedi.length} джедаев и их зовут: ` + newJedi.join(", "));