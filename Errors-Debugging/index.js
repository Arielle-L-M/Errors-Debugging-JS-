// STARTER CODE

function calculateTotal(numbers) {
 let total = 0;
 for (let i = 0; i < numbers.length; i++) { // BUG: <= causes undefined
   total += numbers[i];
 }
 return total;
}

const data1 = [1, 2, 3];
const data2 = [4, 5, 6];

console.log(calculateTotal(data1));
console.log(calculateTotal(data2));

function findMax(numbers) {
 let total = 0;
 for (let i = 0; i < numbers.length; i++) { // BUG: <= causes undefined
   total += numbers[i];
 }
 return total;
}

const data3 = [1, 2, 3];
const data4 = [4, 5, 6];

console.log(calculateTotal(data3));
console.log(calculateTotal(data4));

try {                                   /*Not understanding how to produce try/catch statements- I understand their purpose, but replicating them to produce my own isn't clicking:(*/
  if(console.log(>=numbers.length))
} catch (error) {
  "Number too high"
}