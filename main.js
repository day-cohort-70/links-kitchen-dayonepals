
const materials = ['Hylian Rice', 'Big Hearty Truffle', 'Tabantha Wheat', 'Raw Prime Meat', 'Hateno Cheese', 'Bird Egg']

const meals = []

function cook(firstIngredient, secondIngredient, thirdIngredient) {
    for (i = 0; i < materials.length; i++) {
    if (firstIngredient[i] === 'Hylian Rice' && secondIngredient[i] === 'Big Hearty Truffle') {
        meals.push('Mushroom Rice Balls')       
    } if (firstIngredient[i] === 'Hateno Cheese' && secondIngredient[i] === 'Bird Egg') {
        meals.push('Cheezy Omelette')
    } if (firstIngredient[i] === 'Tabantha Wheat' && secondIngredient[i] === 'Hateno Cheese') {
        meals.push('Cheezy Hylian Pizza')
    } if (firstIngredient[i] === 'Hylian Rice' && secondIngredient[i] === 'Raw Prime Meat') {
        meals.push('Prime Meat and Rice Bowl')
    } if (firstIngredient[i] === 'Bird Egg' && secondIngredient[i] === 'Fresh Milk' && thirdIngredient[i] === 'Cane Sugar') {
        meals.push('Egg Pudding')
    }        
}
}
cook()

materials.push('Fresh Milk', 'Cane Sugar', 'Goat Butter', 'Raw Bird Thigh')
//console.log(materials)

//function cook() {
//    for (i = 0; i < materials.length; i++) {
//        if (materials[i] === 'Hylian Rice' && materials[i + 1] === 'Big Hearty Truffle') {
//            meals.push('Mushroom Rice Balls')         
//    }   else if (materials[i] === 'Hateno Cheese' && materials[i + 1] === 'Bird Egg') {
//            meals.push('Cheezy Omelette')
//    }   else if (materials[i] === 'Tabantha Wheat' && materials[i + 1] === 'Hateno Cheese') {
//            meals.push('Cheezy Hylian Pizza')
//        }
//}
//}






console.log('MEALS:')
console.log('---------------')
console.log(meals)


//TO DO:


//4. Update existing function to include more ingredient parameters
//5. Add second set of new recipes to meals array


//QUESTIONS:
// What should the parameter(s) for the cook function be to account for any number of ingredients?
// How do we pass in the specific ingredients to the function?
// How can we check for the specific ingredients?

