let my_num1 = 1
let my_num2 = 2

// Right operand and left operand
let total = my_num1 + my_num2;
console.log('Total value:' + total);
console.log('Total value:',total);

// String literal, backstick
console.log(`Total value: ${total}`);

// Rounding
///round up
let rounding_nearest = Math.round(9/2);
console.log(`Result = ${rounding_nearest}`);

/// round down
let rounding_floor = Math.floor(9/2);
console.log(`Result = ${rounding_floor}`);

///round up
let rounding_ceil = Math.ceil(9/2);
console.log(`Result = ${rounding_ceil}`);

//To-fixed rounding
let to_fixed_number = (10/3).toFixed(5);
console.log(`Result = ${to_fixed_number}`);
