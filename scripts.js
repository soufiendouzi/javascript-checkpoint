 // 1-1 string manipulation : reverse string
 function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
//1-2 count caracter
function countCaractere (str){ 
var stringsearch = "o"
,str = "this is foo bar";
for(var i=count=0; i<str.length; count+=+(stringsearch===str[i++]));
}
//1-3 upperCase first letter
function firstLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
  //2-1 Array function Max and Min 
  function nums = [a,b,c]
Math.min(...nums)    
Math.max(...nums)   
//2-2 Sum of Array
function Sumarr = [a.b.c.d];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
} 
//2-3 filter array
const arrwords= ['exemple1', 'exemple2', 'exemple3', 'exemple4'];

const result = arrwords.filter((word) => word.length > i);
//3-1 prime number
function Prime(num) {
    if (num< 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true ; }
    //3-2 fibonacci 
    const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
} 
//3-3 factorrial
function factorial(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
  }