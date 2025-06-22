// Ejercicio 10
// Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
// Puedes usar este array para probarla:

const numbers = [12, 21, 38, 5, 45, 37, 6]

function average(numberList) {
  let sum = 0
  let avg = 0
  for (i = 0; i < numberList.length; i++) {
    avg = (sum += numberList[i]) / numberList.length
  }
  return avg
}

console.log(average(numbers))
