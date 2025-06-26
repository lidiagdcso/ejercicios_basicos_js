// Ejercicio 14
// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
// Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...
// Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.
// Puedes usar este array para probar tu función:

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]
function repeatCounter(list) {
  let count = {}
  for (i = 0; i < list.length; i++) {
    let word = list[i]

    if (count[word]) {
      count[word]++
    } else {
      count[word] = 1
    }
  }
}

console.log(repeatCounter(words))
