const iplength = document.getElementById("length");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const pass = document.getElementById("Password");
const submit = document.getElementById("submit");

let length;
let includeLowercase;
let includeUppercase;
let includeNumbers;
let includeSymbols;


function createPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    length = Number(iplength.value);
    includeLowercase = lowercase.checked? true : false;
    includeUppercase = uppercase.checked? true : false;
    includeNumbers = number.checked? true : false;
    includeSymbols = symbol.checked? true : false;


    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()_-+=~{}[]|<,>.?/';:";

    let password = "";
    let allowed = "";

    allowed += includeLowercase ? lowerCase : "";
    allowed += includeUppercase ? upperCase : "";
    allowed += includeSymbols ? symbols : "";
    allowed += includeNumbers ? numbers : "";

    if (length < 1) {
        return `length can't be less than 1!!`
    }
    if (allowed.length === 0) {
        return `Atleast choose something!!`
    }

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random()*allowed.length);
        password += allowed[random];
    }

    return password;
}

console.log(length);

submit.onclick = function(){
    pass.textContent = createPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
}