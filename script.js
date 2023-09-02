//Q-1 Create one function with zero parameter having a console statement;
function start()
{
    console.log("hello we are back");
}

start();




//Q-2 Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
let sum = 0;
function x(a,b)
{
    sum = a+b;
    console.log(`sum of ${a},${b} is ${sum}`);
}
x(3,4);


//Q-3  Create one arrow function  

 a = ()=>{
   console.log("this is arrow function!!!");  
// return "this is arrow function !!" 
};

a();



//Q-4 Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

//here is concept of hoisting is main reason we are using variable before initilization that's why output is showing undefined



//Q-5   
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

//output will be undefinde and 21  because var x = 21 is global scope and in function girl() x is executed before
//initialization that's why it is showing undefined and 21



//Q-6


var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};

//output = 20 and 40  here we are initialiazing and calling the function   because  it wil change into the global execution context



//Q-7 output = Write a function that accepts parameter n and returns factorial of n

let n = 5;
function fact(n)
{
   let a = 1;   
for(i=n;i>=1;i--)
{
   a = a*i;
 
}
return a;
 
}
console.log(fact(4));

//when we pass arguiment to the fact it will go inside n



  // Day - 2


function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));

//ans- i am from prepbytes and my batch is EA19 because  
//first when we pass arguiment in DisplayData it will go in side function FindSum(a,b) and then values goes
//inside a + b it will return the sum of a+b and then it will pass inside of batch sum of the a+b



//Q-2  

Abc();
const Abc = function(){
    let value = 20;
    console.log(value);
}
//output reference error a
//we are calling it before initializing it 
//Abc() got the memory but havnt got the value
//as it is the constance it gives a reference error

//Q-3 

var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();

//ans-  undefined 

//ans-
//The function is self invokation function and we used the var a=10; as a global variable it is in memory
//when we go into a function a is redeclated so it's memory is also created and we are using that a before it's declaration so we 
//so we will get the output as undefined     


//Q-4 

//"Guess the Output
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")

//ans- Hi! EA19,Welcome To Prepbytes

// ans-
//  greet_message is function defination and greet_message having the parameter which goes inside the m
//  Value's it's taking the Welcome To Prepbytes
// greet is also a  function which takes "EA19"
// so we have passed  the EA19 into the greet("EA19") and greet() function is returns one function that we have called and passed
// the arguiment called as greet_message(m); 