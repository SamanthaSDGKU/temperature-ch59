console.log("Conditionals");

//if-statement (condition = y/n?)
//if(condition){
//  code to be executed if the condition is true
//}

if(3<5){
    console.log("This is true");
}

let student1 = 45;
let student2 = 45; 

if(student1==student2){
    console.log("The values are the same");
}

// if-else statement
//if(condition){
//  code to be executed if the condition is true
//}else{
// code to run if the condition is false
//}

let isTrue = false;

if(isTrue == true){
    console.log("Yes");
}else{
    console.log("No");
}

let waterTemp = 102;

if(waterTemp >= 100){
    console.log("The water is boiling");
}else{
    console.log("The water is NOT boiling");
}

//Challenge 1: 
// check if the age is greater than 21
// T: display "you are an adult" 
// F: display "you are underage"

let age = 30;

if(age>21){
    console.log("you are an adult");
}else{
    console.log("you are underage");
}

// else-if statement 
//if(condition1){
//  code to be executed if the condition1 is true
//}else if(condition2){
// code to run if the conditio2n is true
//}else{
// code to run if conditions were false
//}

// age = prompt("Enter your age:");

// if(age<13){
//     console.log("You are a child");
// }else if(age<21){
//     console.log("You are a teenager");
// }else if(age<64){
//     console.log("You are an adult");
// }else{
//     console.log("You are a senior");
// }


// challenge 2: 

// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color 
// ("green", "yellow", or "red") and tell the 
// bike what to do (Go!, Slow down, stop)

// let light = prompt("Enter the color:");

// if(light=="green"){
//     console.log("Go!");
// }else if(light=="yellow"){
//     console.log("Slow down");
// }else if(light=="red"){
//     console.log("Stop");
// }else{
//     console.log("Invalid color!")
// }

function ticketCalculator(){
    // the code of your conditions should be here
    let age = prompt("Enter your age");
    let price =0;

    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }

    return "Your ticket price is " + price;
}

// document.write(ticketCalculator());

function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    let outfit="";
    let p = document.getElementById("outfit");

    if(tmp<15){
        outfit="Jacket";
    }else if(tmp<25){
        outfit="sweater";
    }else{
        outfit="t-shirt";
    }

    p.innerHTML="You should wear: " + outfit;
}

//Switch-case
// use it for checking one single variable or expression

let action = prompt("Choose an action: jump, run, attack or defense"); 

switch(action){
    case "jump":
        console.log("You jumped over an obstacle");
        break;
    case "run":
        console.log("You are running really fast");
        break;
    case "attack":
        console.log("You are attacking an enemy");
        break;
    case "defend":
        console.log("You blocked the attack");
        break;
    default:
        console.log("Unkown action. Try again");
}

//Challenge
// Instructions:
// Use the switch example provided.
// Add two more actions that a game character can do. 