// the previous code
// with prof. Isabel



















function multiTable(){
    let num = prompt("Enter the num: ");
    document.writeln(`<h2>Table of ${num}</h2>`)
    //start =1 , stop <11 , interval 1 by 1
    for(let i=1; i<11 ; i++){
        document.writeln(`<p> ${num} x ${i} = ${num*i} </p>`);
    }
}
//WHILE LOOP
//start, stop, increment
console.log("----- WHILE -----")
let i=10; // start point
while(i<=4){ // stop condition
    console.log(i);
    i++; // increment/interval
}

//DO-WHILE 
//start, stop, increment
console.log("----- DO-WHILE-----");

let j=10;//start point

do{
    console.log(j);
    j++; // increment

}while(j<=4);//stop condition

// while function
function startCountDown(){
    let seconds = 10;
    let result="";

    while(seconds>0){
        result += `<p> Launching in .... ${seconds} </p>`;
        seconds--;
    }

    document.getElementById("output").innerHTML=result;
}

//do-while function 
function passPrompt(){
    let correctPass = "1234";
    let userInput;
    let result="Simulating password input";

    do{
        userInput = prompt("Enter the password: ");
        result += "<p> User input was: " + userInput + "</p>";
    }while(userInput !== correctPass)

    result+= "<p>Welcome to the system</p>";
    document.getElementById("output").innerHTML=result; 
}

//loop function
function showProducts(){
    let products = ["laptop","display","camera","speaker"];// array
    let result ="";

    for(let i=0;i<products.length;i++){
        result += `<li class="test"> ${products[i]} </li>`; 
    }
    document.getElementById("output").innerHTML=result; 
}
