//loops
// for(let i=1;i<5;i++){
//     console.log("count=",i)
// }

// for(let i=1;i<5;i++){
//     if(i==3){          //it will skip 3
//         continue;
//     }
//     console.log("count=",i)
// }

// for(let i=1;i<5;i++){
//     if(i==3){
//         continue;
//     }
//     console.log("count=",i)
// }
// **************************************-------------------------------------**************************

//while
// let stock=10;
// while(stock>0){
//     console.log("stock=",stock);
//     stock--;
// }
// **************************************-------------------------------------**************************

//do while
// let stock=10;
// do{
//     console.log("stock=",stock);
//     stock--;
// }while(stock>0);
// **************************************-------------------------------------**************************

//array
// let fruits=["apple","orange","banana","grapes","mango"];
// let lastindex=fruits.length-1; //print last item
// console.log(fruits[lastindex]);
// console.log(fruits.length);
//console.log(fruits[3]);  //print grapes

//loop in array
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

//simple way
// for(fruit of fruits){
//     console.log(fruit)
// }

// let fruits=["apple","orange"];
// // fruits.push("orange");  //add item to end
// // fruits.pop();           //delete from end 
// // fruits.unshift("strawberry"); //add item to front
// // fruits.shift();               //remove from front
// console.log(fruits);

//  let fruits=["apple","orange","banana","grapes","mango"];
//  fruits.splice(1,1); //index, no of items  remove item
// fruits.splice(1,0,"pineapple");          //add item
// fruits.splice(1,1,"pineapple");          //replace item
//  console.log(fruits);
// console.log(fruits.slice(1,3)); //remove 2 items from index value 1

//map -it creates new array without changing old array
// let numbers=[1,2,3,4,5]
// let result =numbers.map((n)=>n*2);
//OR
// let result =numbers.map(n=>n*2);
//OR
// let result =numbers.map((n)=> {
//     return n*2;
// )};
// console.log("Result=",result);
//console.log("Array=",numbers);

//filter-it will filter according to the condition given
// let result =numbers.filter((i)=>i>3);
// console.log("Result=",result);

//reduce-if we wnat a single value output of the array values like sum of numbers
//let sum=numbers.reduce((sum,i)=>sum+i,0);
//console.log("Sum=",sum);
// **************************************-------------------------------------**************************
//object
// let user={
//     name:"Arun",
//     age:25,
// };
// console.log(user.age);
// console.log(user["age"]);
// user.city="tvm"; //add
// user.age=32; //update
// delete user.age; //delete
// console.log(user);

// let keys=Object.keys(user);
// let values=Object.values(user);
// let entries=Object.entries(user);
// console.log(keys);
// console.log(values);
// console.log(entries);
