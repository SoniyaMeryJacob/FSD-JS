// // Globel scope
//  let carName = "BMW";
//  function carBrand(){
//     console.log("THE BEST CAR FOR EVER",carName);
    
//  }
//  carBrand();
//  console.log(carName);
// **************************************-------------------------------------**************************

// function scope 
// function cityName(){
//     let ownCity = "malappuram"; //let and const is a block scope and var is global scope by default
// console.log("City=",ownCity);
// }
// cityName()
// let ownCity = "Calicut";
// console.log("own City=",ownCity)
// **************************************-------------------------------------**************************

// Block scope
// if(age>20){
//     let age = 15;
//     // console.log(age);
// }
// console.log(age);

// **************************************-------------------------------------**************************
//closure
// let country ="india"
// function outsideFn(){
//     let state = "Kerala";
//     function innerFn(){
//         console.log("COUNTRY",country);
//         console.log("STATE",state);
        
//     }
//     innerFn()
// }
// outsideFn()

// **************************************-------------------------------------**************************

// function counder (){
//     let count =0;
//     return function (){
//         count++; //count + 1
//         console.log(count);
        
//     }
// }
// const value = counder()
// value()
// value()
// value()
// value()
// value()
// value()
// value()
// value()

// function counder (){
//     let count =0;
//     return function (){
//         count++; //count + 1
//         console.log(count);
        
//     }
// }
// const value = counder()
// const value1 = counder()
// value()
// value1()
// value()
// value1()
// value()
// value1()
// value()
// value1()
// console.log(myVar);
// var myVar=10;
// console.log(myVar);

// console.log(myVar);
//  let myVar=10;//Temporal Dead Zone
// 
// function checlAge(age){
//     if(age>=18){
//         var message = 'Adult';
//     }
//     console.log(message);
// }
// checlAge(16);
// good()
// function good(){
//     console.log("hello");
    
// }
// good()
// const good =()=>{
//     console.log("hello");
    
// }