// Roger Batista 20337
//https://github.com/Roger20337/-fewd_lab_3.git


//3
function greet(){
    return 'Haydo!';
}

let salutation = console.log(greet());

//4

function echo(sound){
    return sound;
};

//5 
function greet(name){
    return 'Hello ' + name + '!';
};

/*
6
var whereIs = function(name) {
    return 'Where is ' + name + '?'; 
};
var x = whereIs('Jacky');

7
var hi = function(name) {
    return 'Hi ' + name + '!';
};
var h1 = hi('Selva');
var h2 = hi('Pola');
var x = h1 + ' ' + h2
*/

//8 
function shout(){
    return 'Fire';
}

console.log(shout(),shout());

/*
9
var double = function(name) {
    return name + ' and ' + name;
}
var x = double('Roy');
console.log(x)
*/

//11

function doSomething(name) {
    return name;
   }

doSomething.call(console.log(doSomething('Alessandra')));

//12
function multiplyFive(number){
    return number * 5;
}
console.log(multiplyFive(7));

//13
function myFunction(){
    return alert('Hello World!');
}
myFunction();

//14
function isAnswerRight(answer) {
    return (answer ? 'The answer is right!' : 'The answer is wrong!');
  }


console.log(isAnswerRight(true));
console.log(isAnswerRight(false));

//15

function tellFortune(noOfChildren, partnersName, geoLocation, jobTitle){
    return 'You will be a ' + jobTitle + ' '+ 'in' +' '+ geoLocation + ',' + ' '+ 'married to '+ partnersName + ' '+ 'with ' + noOfChildren + ' ' + 'kids';

}

let a = console.log(tellFortune(2,'Yoko Ono','Liverpool','Musician'));
let b = console.log(tellFortune(3,'Homer Simpson','Springfield','Housewife'));
let c = console.log(tellFortune(2,'Michelle Robinson','Washington DC','Politician'));



