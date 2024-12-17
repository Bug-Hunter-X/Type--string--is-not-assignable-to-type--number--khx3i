function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b;
  }else{
    console.error("Invalid input types for addSafe. Both arguments must be numbers.");
    return 0; //Or throw an error
  }
}

let result1 = add(1,2);
let result2 = addSafe(1,2);
let result3 = addSafe("hello", 5); //Will print error to console and return 0
let result4 = addSafe(5,"hello"); //Will print error to console and return 0
let result5 = addSafe("hello","world"); //Will print error to console and return 0