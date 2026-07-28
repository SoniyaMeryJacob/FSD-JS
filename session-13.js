// console.log("hello");

// JS is synchronous and single threaded
// after first line executes only second line get executed.It cheks line by line

// JS is loosely typed
// var a="entri";
// a=23;
// it can type any type of datatypes for a variable

// **************************************-------------------------------------**************************
// VARIABLES - Data storage
// var, let and cosnt

// var - allows redeclaration and reassigning
// var data=10;
// console.log(data);
// var data="entri"
// console.log(data);

// let - allows reassigning but redeclaration not possible
// let data1="hello";
// console.log(data1);
// data="entri"
// console.log(data);

// const - reassigning and redeclartion not possible
// const data2=true;
// console.log(data2);

// **************************************-------------------------------------**************************
// DATATYPES

// 1.Number
// let a=1;
// console.log(a, typeof a);

// 2.String
// let b="Sarath";
// console.log(b, typeof b);

// 3. Boolean
// let c=true;
// console.log(c, typeof c)

// 4.Object
// let d={
//     name: 'Sathwik',
//     class: 'E86',
//     mob: 123456,
//     isMentor: "Karthik"
// }
// console.log("My class is "+d.class +" and my mentor is "+ d.isMentor);

// 5.Array
// let e=[1,2,3,4,true,"hello",10];
// console.log(e,typeof e); //type is object due to its value index pair, which is similar to object key-value pair

// 6.Undefined
// let data;
// console.log(data,typeof data);

// 7.null
// let value=null;
// console.log(value, typeof value); //type is objet which is a bug in javascript

// Two types of datatypes

// 1. Primitive datatypes - can store one value at a time, value is stored
// number, string, boolean

// 2. Non-primitive datatypes - can store more than one value, reference is stored
// Object, array, function

// **************************************-------------------------------------**************************

// Type Conversion - Converting a data from one datatype to another forcefully

// let age = Number("25");
// console.log(typeof age); //25
// console.log(Number("abc")); //NaN
// console.log(Number(""));    //0
// console.log(Number(true));  //1
// console.log(Number(false));  //0
// console.log(Number([1,2,3])); //NaN

// console.log(String(22)); //"22"
// console.log(String(true)); //"true"
// console.log(String(undefined)); //undefined
// console.log(Number(undefined)); //NaN
// console.log(String(null));

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(567));
// console.log(Boolean("1"));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean(NaN));


// type coercion

// console.log(10+2);
// console.log("10"+2); //102  str
// console.log(true+2+3);   //6

// console.log("10"-2); //8  num

// console.log("5" * 2); // 10
// console.log("6" / 2);//3

// **************************************-------------------------------------**************************
// Operators
// 1. Arithmetic Operators (+, -, *, /, %, **)

// console.log(10+10);
// console.log(10-4);
// console.log(10*3);
// console.log(10/2);
// console.log(10%5);
// console.log(10**3);


// 2. Comparison Operators (>, <, >=, <=, ===, !==, ==)

// console.log(10>2);
// console.log(10<2);
// console.log(10>=2);
// console.log(10<=2);
// console.log(10===2);
// console.log(10!==2);

// console.log(10==="10");    //This will check the datatype
// console.log(10=="10");    //This will not check the datatype


// 3. Assignment Operator
// let score = 50
// console.log(score += 5);
// console.log(score -= 5);
// console.log(score *= 5);
// console.log(score /= 5);
// console.log(score %= 5);
// console.log(score **= 5);


// 4. Logical Operators(&&, ||)

// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// console.log(10>2 && 5<2);
// console.log(10>2 || 5<2);


// 5. Condition Statements
// if, ifelse, ifelseif, switch

// let score = 39
// if (score>40){
//     console.log("Passed");   
// }
// else{
//     console.log("Failed");
// }
// console.log("All the best");

// let score = 88
// if (score>=90){
//     console.log("A+");
// }else if (score>=80){
//     console.log("A");
// }
// else if (score>=70){
//     console.log("B+");
// }
// else if (score>=60){
//     console.log("B");
// }
// else if (score>=55){
//     console.log("C+");
// }
// else if (score>=50){
//     console.log("C");
// }
// else if (score>=45){
//     console.log("D+");
// }
// else if (score>=40){
//     console.log("D");
// }
// else{
//     console.log("E");
// }
// console.log("All the best");

// let month = 6
// switch (month) {
//     case 1:
//         console.log("JANUARY");
//         break;
//     case 2:
//         console.log("FEBRUARY");
//         break;
//     case 3:
//         console.log("MARCH");
//         break;
//     case 4:
//         console.log("APRIL");
//         break;
//     case 5:
//         console.log("MAY");
//         break;
//     case 6:
//         console.log("JUNE");
//         break;
//     case 7:
//         console.log("JULY");
//         break;
//     case 8:
//         console.log("AUGUST");
//         break;
//     case 9:
//         console.log("SEPTEMBER");
//         break;
//     case 10:
//         console.log("OCTOBER");
//         break;
//     case 11:
//         console.log("NOVEMBER");
//         break;
//     case 12:
//         console.log("DECEMBER");
//         break;
//     default:
//         console.log("INVALID INPUT");
//         break;
// }

// let score=90
// switch (score) {
//     case score>=90:
//         console.log("A+");
//         break; 
//     case score>=80:
//         console.log("B+");
//         break;
//     default:
//         console.log("Invalid");       
//         break;
// }
// console.log("All the best");

// let weekDay = "Saturday"
// switch (weekDay) {
//     case "Monday":
//         console.log("Start of the work week");
//         break;
//     case "Friday":
//         console.log("End of the work week");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("Weekend");
//         break;
//     case "Tuesday":
//     case "Wednesday":
//     case "Thursday":
//         console.log("Mid of the week");
//         break;
//     default:
//         console.log("Invalid Input");
//         break;
// }