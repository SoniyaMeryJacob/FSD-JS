// non-primitive datatype will copy reference not value
//it will affect original array
//obj
//shallow copy-it will copy only one level
// const originalObj={name:"Alice",age:25};
// const copyObj=originalObj; //reference
// copyObj.age=30;
// console.log(copyObj);
// console.log(originalObj);
//array
// const arr1=[1,2,3];
// const arr2=arr1; //reference
// arr2.push(4);
// console.log(arr2);
// console.log(arr1);

//to overcome this we use spread operator(...)
// const arr1=[1,2,3];
// const arr2=[...arr1];
// arr2.push(4);
// console.log(arr2);
// console.log(arr1);
// const originalObj={name:"Alice",age:25};
// const copyObj={...originalObj}; //reference
// copyObj.age=30;
// console.log(copyObj);
// console.log(originalObj);

// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const mergdArr=[...arr1,...arr2];
// console.log(mergedArr);

// const expArr1=["a",...arr1,50];
// console.log(expArr1);

// const randomNum=[12,4,8,25,1,18];
// const sortedNum=[...randomNum].sort((a,b)=>a-b);
// console.log(sortedNum);
// console.log(randomNum);

// const userBasicDetails = {
//   name: "Alice",
//   age: 32,
//   gender: "F",
// };
// const userAddDetails = {
//   city: "TVM",
//   pin:2345
// };
// const userDetails={...userBasicDetails,...userAddDetails};
// console.log(userDetails);
// const updatedUserDetails={...userBasicDetails,age:24,father:"john"};
// console.log(updatedUserDetails);

//nested obj
//deep copy/clone-it will copy nested complete structure
// const user = {
//   name: "Alice",
//   age: 32,
//   gender: "F",
//   address:{
//     city:"tvm",
//     pin:4523,
//     state:"kerala",
//   },
// };
// const copyuser={...user};//spread op will work only for first component
// copyuser.address.city="kollam";// nested will use reference for spread op it will not update nested items
// console.log(copyuser);
// console.log(user);

//to overcome this for nested obj we use structuredClone()
// // const copyUser1={...user};//nested,reference
// const copyUser2=structuredClone(user);//nested
// copyUser2.age=30;
// copyUser2.address.city="Kollam";
// console.log(copyUser2);
// console.log(user);

//Object.assign() // to combine two attributes
// const target={
//     a:1
// };
// const source={
//     b:2,
//     c:3
// };
// const res=Object.assign(target,source);
// const res=Object.assign({},target,source);// to overcome target reference we use {} empty tag
// console.log(res);
// console.log(target);
// console.log(source);

// Object.freeze()
const user={
    name:"Akhil",
    age:30
};
 Object.freeze(user);
 user.name="Sarath";
 user.age=23;
 console.log(user);