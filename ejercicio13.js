// Ejercicio 13
// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

// Puedes usar este array para probar tu función:

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function nameFinder(nameList, name) {
  for (i = 0; i < nameList.length; i++) {
    if (nameList[i] === name) {
      console.log('true. Su posición es la ' + i)
      return true
    }
  }
  console.log('false')
  return false
}

nameFinder(names, 'Lidia')
