
const materials = ['Hylian Rice', 'Big Hearty Truffle', 'Tabantha Wheat', 'Raw Prime Meat', 'Hateno Cheese', 'Bird Egg']

const meals = []

const cook = (firstIngredient, secondIngredient) => {
    if (firstIngredient === 'Hylian Rice' && secondIngredient === 'Big Hearty Truffle') {
        meals.push('Mushroom Rice Balls')       
    } if (firstIngredient === 'Hateno Cheese' && secondIngredient === 'Bird Egg') {
        meals.push('Cheezy Omelette')
    } if (firstIngredient === 'Tabantha Wheat' && secondIngredient === 'Hateno Cheese') {
        meals.push('Cheezy Hylian Pizza')
    } if (firstIngredient === 'Hylian Rice' && secondIngredient === 'Raw Prime Meat') {
        meals.push('Prime Meat and Rice Bowl')
    }

}


cook(materials[0], materials[1])
cook(materials[4], materials[5])
cook(materials[2], materials[4])
cook(materials[0], materials[3])



console.log('MEALS:')
console.log('---------------')
for (const meal of meals) {
    console.log(meals)
}


//TO DO:

//3. Add new ingredients to materials array
//4. Update existing function to include more ingredient parameters
//5. Add second set of new recipes to meals array


//QUESTIONS:
// What should the parameter(s) for the cook function be to account for any number of ingredients?
// How do we pass in the specific ingredients to the function?
// How can we check for the specific ingredients?

