
const materials = ['Hylian Rice', 'Big Hearty Truffle', 'Tabantha Wheat', 'Raw Prime Meat', 'Hateno Cheese', 'Bird Egg']

const meals = []

materials.push('Fresh Milk', 'Cane Sugar', 'Goat Butter', 'Raw Bird Thigh')
console.log(materials)
/*
function cook() {
    for (i = 0; i < materials.length; i++) {
        if (materials[i] === 'Hylian Rice' && 'Big Hearty Truffle') {
            meals.push('Mushroom Rice Balls')         
    }   if (materials[i] === 'Hateno Cheese' && 'Bird Egg') {
            meals.push('Cheezy Omelette')
    }   if (materials[i] === 'Tabantha Wheat' && 'Hateno Cheese') {
            meals.push('Cheezy Hylian Pizza')
    }   if (materials[i] === 'Hylian Rice' && 'Raw Prime Meat') { 
            meals.push('Prime Meat and Rice Bowl')
    }   if (materials[i] === 'Bird Egg' && 'Fresh Milk' && 'Cane Sugar') {
            meals.push('Egg Pudding')
    }   if (materials[i] === 'Tabantha Wheat' && 'Cane Sugar' && 'Goat Butter' && 'Bird Egg') {
            meals.push('Egg Tart')  
    }   if (materials[i] === 'Hylian Rice' && 'Raw Prime Meat' && 'Bird Egg') {
            meals.push('Chicken Egg Fried Rice')
    }   if (materials[i] === 'Hylian Rice' && 'Goat Butter' && 'Bird Egg' && 'Raw Bird Thigh') {
            meals.push('Poultry Pilaf')
    }
}
}
*/

const cook = (ingredients) => {
    for (i = 0; i < ingredients.length; i++) {
        if (ingredients[i] === 'Hylian Rice' && 'Big Hearty Truffle') {
            meals.push('Mushroom Rice Balls')         
    }   if (ingredients[i] === 'Hateno Cheese' && 'Bird Egg') {
            meals.push('Cheezy Omelette')
    }   if (ingredients[i] === 'Tabantha Wheat' && 'Hateno Cheese') {
            meals.push('Cheezy Hylian Pizza')
    }   if (ingredients[i] === 'Hylian Rice' && 'Raw Prime Meat') { 
            meals.push('Prime Meat and Rice Bowl')
    }   if (ingredients[i] === 'Bird Egg' && 'Fresh Milk' && 'Cane Sugar') {
            meals.push('Egg Pudding')
    }   if (ingredients[i] === 'Tabantha Wheat' && 'Cane Sugar' && 'Goat Butter' && 'Bird Egg') {
            meals.push('Egg Tart')  
    }   if (ingredients[i] === 'Hylian Rice' && 'Raw Prime Meat' && 'Bird Egg') {
            meals.push('Chicken Egg Fried Rice')
    }   if (ingredients[i] === 'Hylian Rice' && 'Goat Butter' && 'Bird Egg' && 'Raw Bird Thigh') {
            meals.push('Poultry Pilaf')
    } 
}
}
const newRecipes = cook(materials)


//cook()




console.log('MEALS:')
console.log('---------------')
console.log(meals)




//QUESTIONS:
// What should the parameter(s) for the cook function be to account for any number of ingredients?
// How do we pass in the specific ingredients to the function?
// How can we check for the specific ingredients?

