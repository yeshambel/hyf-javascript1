// exercise-1 string
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
let arey = myString.split(","); // change string to array

console.log(arey); 
// change the array into a string and remove the comma
console.log(arey.join(" ")); 
// displays the length of a string by removing both comma and space
console.log(arey.join("").length);
//exercise-2 array
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
// add an element to the end of the array using the push method
favoriteAnimals.push('turtle'); 
console.log(favoriteAnimals);

//adding the element at the middle of the array using splice method
favoriteAnimals.splice(1, 0, 'meerkat');
console.log(`The element added between blowfish and capricorn is ${favoriteAnimals[1]}.`);

// log the new array
console.log(favoriteAnimals);
//displays the length of the favoriteAnimal array
console.log(`The array has a length of: ${favoriteAnimals.length}`);
// Remember: we can use delete method but it is not recommended because it left hole in ythe array
// The splice() method returns an array with the deleted items:
console.log(favoriteAnimals.splice(3, 1));
//check the new array elements
console.log(favoriteAnimals);
//  displays the position of the meerkat
console.log(`The item I am looking for is at index:${favoriteAnimals.indexOf("meerkat")}`);
//the splice method deletes meerkat element from the array
console.log(favoriteAnimals.splice(1, 1));
//check the new array elements
console.log(favoriteAnimals);

// ecercise -3 more about javascript
// *******************************************************************************
function sum3(a, b, c) {
    return a + b + c;
    }
    const total = sum3(2, 4, 5);
    console.log(total);

    //  a function takes one parameters at the definition one argument at output
// *******************************************************************************
    function colorCar(color){
        return "a " +color+ " Car.";
    }
  console.log(colorCar("red"));

 //  a function takes one parameters at the definition one argument at output
//  *********************************************************************************
 let people = {
     firstName: "Yorgos",
     lastName: "Natnael",
     age: 34
 }
 function information(obj){
     return people;
 }
 console.log(information(people));
//  ************************************************************************************
function vechile(color, code){
    if(code === 2) {
      console.log( `a ${color} Motoebikes.` );
    } 
    else{
      console.log( `a ${color} Car.` );
    }
  }
    vechile( "blue", 2);
// ****************************************************************************************
// ternary operator
console.log(3 === 3? "Yes": "No");
// *******************************************************************************************
function vechile1(color, code, age){
    if(code === 1 && age === 5 ) {
      console.log( `a  ${color} used car.` );
    } 
  }
    vechile1( "blue", 1, 5);

// ******************************************************************************************
let car = ["motorbike", "caravan", "bike"];
for(let i = 0; i < car.length; i++ ){
    console.log(car[i]);
}
console.log ('_____________________________________________________________________');
console.log(car[2]);

// **********************************************************************************************
function service(){
    let geo = "Amazing Joe's Garage, we service Cars";
for(let i = 0; i < car.length; i++){
    if(i < car.length - 1){
    geo+= ", " +car[i]+ "s";
} else{
    geo+= " and " +car[car.length - 1]+ "s"+".";
}
}
console.log(geo);
}
  service();

// *****************************************************************************
car = ["motorbike", "caravan", "bike", "Train"]

service();
// ****************************************************************************
let obj = {};

let devTeachers = {
      teachers:["Ahmed", "Goerge", "Kostas"]
    }
console.log(devTeachers);
// *************************************************************************************
devTeachers.languages = ["HTML", "CSS", "JS"];
console.log(devTeachers);
// *****************************************************************************************
let x = [1,2,3];
let y = [1,2,3];
let z = y;
console.log(x == y);//false becaues arrays are objects so objects compare reference not values so both x and y has different reference.
console.log(x === y);// false the same reason
console.log(z == y );//true the same reference
console.log(x === z);//false
// *****************************************************************************************
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log(o3);
//{ foo: 'bar' }
o2.sha = "Social Hackers Academy";
console.log(o3);
// { foo: 'bar', sha: 'Social Hackers Academy' }
o1.animal = 'Dog';
console.log(o3); // { foo: 'bar', sha: 'Social Hackers Academy' }
// ****************************************************************************************
// let o3 = o2 , o2 = o3
// The order matters a lot because of o3 is not declared
// *******************************************************************************************
let bar = 42;
console.log(typeof typeof bar);//returns string because the first typeof gives "number" the second type of takes the number as an argumnet therefore it returns a string.
// ******************************************************************************************
let nume = "6";
let nume2 = Number(nume);
console.log(typeof(nume2));


