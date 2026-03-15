console.log("WELCOME TO JAVASCRIPT!");
console.log("shreeyash bhagwat");

// BOOLEAN VALUES
isstudent=true;
console.log(isstudent);

// VARIABLES
//let and const
let name1="shreeyash";  //let variable can only be decleared inside its block
console.log(name1);

let age1=23;
console.log(age1);

const pi=3.14;
console.log(pi);

const gravity=9.8;
console.log(gravity);

//if the variable is empty then its value is undefined
let name2;
console.log(name2);

//But the const variable cannot be null or undefined
//const a;
//console.log(a); //this will give an error


//DATA TYPES
//Primitive data types are 7 types
//1. Number
let age=23;
typeof age;
console.log(typeof age);
//2. String
let name="Shreeyash";
typeof(name);
console.log(typeof name);

//3. Boolean
isfollower=true;
typeof(isfollower);
console.log(typeof isfollower)
//4. Undefined
let name3;
typeof(name3);
console.log(name3);
//5. Null
let n=null;
typeof(n);
console.log(typeof n);
//6. Symbol
//7. BigInt

const student1={
    name:"shreeyash",   //This is a key value pair
    age:23,             //This is a key value pair
    isstudent:true,     //  This is a key value pair
    cgpa:8.2,
};   //This is an object 
console.log(student1);
student1["name"];
console.log(student1["name"]);
console.log(student1["age"]);
console.log(student1.age);
