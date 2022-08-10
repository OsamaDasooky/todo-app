
let name = prompt("What is your name?", "");

let gender  = prompt("Please enter your gender.", "");

let age = prompt('How old are you?(male or female)', "");
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



