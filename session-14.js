//FUNCTION - Reusable block of code.

//Function without parameter

//Function declaration
// function greet() {
//     console.log("Hello! Welcome Back");
// }
// console.log("Hai");
//Function call
// greet();
// **************************************-------------------------------------**************************

//Fucnction with parameter

//Function parameter-name
// function displayName(name) {
//     console.log(name);
// }
// //Function argument-Sona, Sarath, Sathwik
// displayName("Sona");
// displayName("Sarath");
// displayName("Sathwik");
// **************************************-------------------------------------**************************

//Function with two parameters

// function displayName(fname,lname){
//     console.log("My first name is "+fname+ " and last name is "+lname);
// }
// displayName("Sona", "Maria")
// **************************************-------------------------------------**************************

// Function with return statement

// function add(a,b,c) {
//    sum=a+b+c;
//     return sum;
// }
// result=add(10,20,30);
// console.log("Result="+result);

// function add(a, b) {
//   a += 10;
//   b += 20;
//   return a + b;
// }
// result = add(10, 0);
// console.log("Sum: ", result);

// **************************************-------------------------------------**************************

//anonymous function or function expression
// const greetings = function()
//  {
//     console.log("hello");
//  }
//  greetings();

// **************************************-------------------------------------**************************

//Arrow function 
// const greetings= ()=>
//  {
//     console.log("hello");
//  }
//  greetings();

//short version with only single statement
// const sum = (a,b) => a+b;
// result = sum(50,60);
// console.log("Result = "+result);

//statement with multiple logic
// const sum = (a,b) => {
//     a+=2;
//     b*=a;
//     return [a+b];
// }
// const result = sum(12,20);
// console.log("Result is", result);

// const gradeCheck = (score) => {
//     if(score>=90) return "A";
//     if(score>=80) return "A+";
//     if(score>=70) return "B";
//     if(score>=60) return "B+";
//     if(score>=50) return "C";
//     if(score>=40) return "C+";
//     return "E"
// }
// result = gradeCheck(75);
// console.log("Your grade is "+result);
// if(
//     (result=="A+") ||
//     (result=="A") ||
//     (result=="B") ||
//     (result=="B+") ||
//     (result=="C+") ||
//     (result=="C")) {
//    console.log("Passed!\nCongratulations!!\nEligible for Higher Studies!!!");
// }
// else{
//     console.log("Failed!\nBetter luck next time!");

// }

const weekDay = (day) => {
  if (day == 1) return "SUNDAY";
  if (day == 2) return "MONDAY";
  if (day == 3) return "TUESDAY";
  if (day == 4) return "WEDNESDAY";
  if (day == 5) return "THURSDAY";
  if (day == 6) return "FRIDAY";
  if (day == 7) return "SATURDAY";
  return "Invalid Week Day";
};
result = weekDay(5);
console.log("The day is " + result);
