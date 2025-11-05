
import fs from  "fs";

// Write a file for Fibonacci

const fibonacci =`

function fibonacci(n) {
  let a = 0, b = 1, next;
  console.log("Fibonacci Series:");
  for (let i = 1; i <= n; i++) {
    console.log(a);
    next = a + b;
    a = b;
    b = next;
  }
}
fibonacci(5); `

fs.writeFile('./Fibonacci.js',fibonacci,(err)=>{

    if(err){

        console.log(err.message);
        
    }
    else{

        console.log("Fibonacci.js is created");
        
    }
})

fs.readFile('./Fibonacci.js',(err)=>{

    if(err) console.log(err);
    else console.log("Fibonacci.js is readed");
    
    
})

// write a File for Factorial

const Factorial=`

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  console.log("Factorial of", n ,"is" ,fact);
}
factorial(5);


`

fs.writeFile('./Factorial.js',Factorial,(err)=>{


    if(err) console.log(err);
    else console.log("Factorial.js is created");
    
    
})

fs.readFile('./Factorial.js',(err)=>{

    if(err) console.log(err);
    else console.log("Factorial.js is readed");
    
    
})

// Prime Number Check

const PrimeNumber=`
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("Is 7 prime?", isPrime(7));
`

fs.writeFile('./PrimeNumber.js',PrimeNumber,(err)=>{

    if(err) console.log(err) ;

        else console.log("PrimeNumber.js is created");
        
    
})

fs.readFile('./PrimeNumber.js', (err)=>{

     if(err) console.log(err);

        else console.log("PrimeNumber.js readed");
        
    
})


// Sum of Digits

const SumOfDigits= `
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  console.log("Sum of digits",sum);
}
sumOfDigits(1234);


`

fs.writeFile('./SumOfDigits.js',SumOfDigits,(err)=>{


    if(err) console.log(err);

    else console.log("SumOfDigits.js is created");
    
    
})

fs.readFile('./SumOfDigits.js',(err)=>{


    if(err) console.log(err);
    else console.log("SumOfDigits is readed");
    
    
})

// Reverse a Number 


const ReverseNum=`
function reverseNumber(num) {
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  console.log("Reversed Number": rev);
}
reverseNumber(12345);


`

fs.writeFile('./ReverseNum.js',ReverseNum , (err)=>{

    if(err) console.log(err);
    else console.log("ReverseNum.js is created");
    
    
})

fs.readFile('./ReverseNum.js',(err)=>{


     if(err) console.log(err);
     else console.log("ReverseNum.js is readed " );
     
     

})