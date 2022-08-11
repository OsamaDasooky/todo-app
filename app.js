
let name = prompt("What is your name?", "");

let gender  = prompt("Please enter your gender?(male or female)", "");

let age = prompt('How old are you?', "");
if (age == 0) {
    alert(`There is no such thing as zero age! Please enter another value.`);
    age =prompt('How old are you?', "");
}

let question = confirm("Do you want to go the welcoming message?");

if (question) {
    if (gender === "Male" || gender === "male") {
        alert(`welcome Mr.${name} , your age is ${age}`);
    } else if (gender === "Female" || gender === "female") {
        alert(`welcome Ms.${name} , your age is ${age}`);
    }else {
        alert(`welcome ${name} , your age is ${age}`);
    }
}

let theAnss = [];
let skepQus = true;
let doYou1 = prompt('Do you love pizza ?', "");
while (skepQus) {
    if ((doYou1 === "y") || (doYou1 === "yes") || (doYou1 === "Yes")
        || (doYou1 === "n") || (doYou1 === "no") || (doYou1 === "No")) {
        theAnss.push(doYou1);
        break;
    } else if (doYou1 === "") {
        theAnss.push("invalid");
        break;
    }
    doYou1 = prompt(`please enter yes or no
    Do you love pizza ?`, "");
    
}  
//==========================================================
let doYou2 = prompt(`Do you love travel ?`, "");
while (skepQus) {
    if ((doYou2 === "y") || (doYou2 === "yes") || (doYou2 === "Yes")
        || (doYou2 === "n") || (doYou2 === "no") || (doYou2 === "No")) {
        theAnss.push(doYou2);
        break;
    } else if (doYou2 === "") {
        theAnss.push("invalid");
        break;
    }
    doYou2 = prompt(`please enter yes or no 
    Do you  love travel ?`, "");
    
} 
//==========================================================

let doYou3 = prompt('Do you love Orange Academy?', "");
while (skepQus) {
    if ((doYou3 === "y") || (doYou3 === "yes") || (doYou3 === "Yes")
        || (doYou3 === "n") || (doYou3 === "no") || (doYou3 === "No")) {
        theAnss.push(doYou3);
        break;
    } else if (doYou3 === "") {
        theAnss.push("invalid");
        break;
    }
    doYou3 = prompt(`please enter yes or no 
    Do you  love Orange Academy ?`, "");
    
} 
//==========================================================
let ratStar = prompt('how many stars they rate your website?', "");
if (ratStar < 0 ) {     
    ratStar = 0;
} else if (ratStar > 5) {
    ratStar = 5;
}
alert(`Thank you ${name} for your time
        your rat is ${"* ".repeat(ratStar)}`)

console.log(theAnss.join(" | "));
