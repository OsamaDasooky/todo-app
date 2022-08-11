
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
    if ((doYou1 === "y") || (doYou1 === "yes") || (doYou1 === "Yes")
        || (doYou1 === "n") || (doYou1 === "no") || (doYou1 === "No")) {
        theAnss.push(doYou1);
    } else  {
        theAnss.push("invalid");
    }
    
  
//==========================================================
let doYou2 = prompt(`Do you love travel ?`, "");

    if ((doYou2 === "y") || (doYou2 === "yes") || (doYou2 === "Yes")
        || (doYou2 === "n") || (doYou2 === "no") || (doYou2 === "No")) {
        theAnss.push(doYou2);
    } else  {
        theAnss.push("invalid");
    }
    

//==========================================================

let doYou3 = prompt('Do you love Orange Academy?', "");

    if ((doYou3 === "y") || (doYou3 === "yes") || (doYou3 === "Yes")
        || (doYou3 === "n") || (doYou3 === "no") || (doYou3 === "No")) {
        theAnss.push(doYou3);
    } else {
        theAnss.push("invalid");
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
