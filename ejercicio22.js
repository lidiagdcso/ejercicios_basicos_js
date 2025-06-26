// Ejercicio 22

// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

// Recuerda no usar frutas duplicadas.

// Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']

const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]
let fruitNum = 0

for (i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan == false && fruitNum < fruits.length) {
    foodSchedule[i] = {
      name: fruits[fruitNum],
      isVegan: true
    }
    fruitNum++
  }
}

console.log(foodSchedule)
