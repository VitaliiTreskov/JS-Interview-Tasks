//1.
// What will be the output of expression?
// let x = 5;
// console.log(x++);
//Answer: 5; x++ is a prefix increment. At first it returns value, then increases it

//2
// What will be the result of expression?
// console.log([] + false - null + true);
//Answer NaN.
//An empty array will be a string, string + false is concatenating of string, so result will be string ("false")
//[] + false - null will give NaN, if we add boolean true it will be still NaN

//3.
// What will be the output of expression?
// let y = 1;
// let x = y = 2;
// console.log(x);
// Output will be 2. 2 - is a primitive data type and is passed be the value.
// 2 is assigned to variable y, then it's value is assigned to x variable

//4.
// What will be the output of expression?
// console.log([ ] + 1 + 2);
//the result will be 12. Empty array will be a string (""), then concatenating with 1 and 2

//5.
// What will be the result?
// console.log("1"[0]);
//the result will be 1/
//"1" is a string, you can access each simbol of a string by refering to it's index

//6.
// What will be the output of expression?
// console.log(2 && 1 && null && 0 && undefined);
// Answer is null.
//&& stumbles of false, and return it. If all arguments 
//2 - is true, 1 - is true, null - is false. Code stops here

//
// 7.Is there difference between expressions
//!!( a && b ) и (a && b)
//Answer: expressions are different
//!! - convert following expression to boolean type

//8.
// What will be the output of expression?
//console.log( null || 2 && 3 || 4 );
// The answer is 3. && has higher priotity, so it will be evaluated first, 2 && 3 will return 3
// null || 3 will return 3, because null is false and 3 is true
// 3 || 4 will return 3
// || stumbles on true 

//9.
// Is it true that a == b?
//const a = [1, 2, 3];
//const b = [1, 2, 30];
// Answer is no. Thease are 2 different variables with equal content

//10.
//What will be the output of expression?
//console.log(+"Infinity");
//The answer is Infinity. The type of data will be number, because + will convert string to a number
//Use typeof() to check type of data

//11.
//Is this expression correct?
//console.log("ежик" > "яблоко");
//There will be char by char comparison

//12.
//What will be the output of the expression?
//console.log(0 || "" || 2 || undefined || true || falsе);
//The answer is 2. 0 - is false, "" - is false, 2 - is true.



