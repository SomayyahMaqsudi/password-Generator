var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}

window.addEventListener('load', function() {
  generateNewPassword();
});

function generateNewPassword() {
  var password = "";

  var allowed = {};
  if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");
};






// var generateBtn = document.querySelector("#generate");
// window.addEventListener('load', function() {
//   var length = prompt("How many characters would you like your password to be?");

//   while (length < 8 || length > 128) {
//     length = prompt("Length of the password should be 8-128 characters. How many characters would you like your password to be?");
//   }

//   var uppercase = confirm("Would you like to use uppercase letters?");
//   var lowercase = confirm("Would you like to use lowercase letters?");
//   var numbers = confirm("would you like to use numbers?");
//   var symbols = confirm("would you like to use special characters?");

//   while (!(uppercase || lowercase || numbers || symbols)) {
//     alert("You must select at least one character type!");
//     // if non was chosen this will appear

//     uppercase = confirm("Would you like to use any uppercase letters?");
//     lowercase = confirm("Would you like to use any lowercase letters?");
//     numbers = confirm("would you like to use any numbers?");
//     symbols = confirm("would you like to use any special characters?");
//   }

  
//   const resultEl = document.getElementById('password');

//   document.getElementById('#generate').addEventListener('click', () => {
//     resultEl.value = generatePassword(lowercase, uppercase, numbers, symbols, length);
//   });

//   document.getElementById('clipboard').addEventListener('click', () => {
//     const textarea = document.createElement('textarea');
//     const password = resultEl.value;

//     if (!password) {
//       return;
//     }

//     textarea.value = password;
//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand('copy');
//     textarea.remove();
//     alert('Password copied to clipboard');
//   });
// });


// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol
// };

// function generatePassword(lower, upper, number, symbol, length) {
//   let generatedPassword = '';
//   const typesCount = lower + upper + number + symbol;
//   const typesArr = [{
//     lower
//   }, {
//     upper
//   }, {
//     number
//   }, {
//     symbol
//   }].filter(item => Object.values(item)[0]);

//   // --------------------------------------------create a loop--------------------------------
//   for (let i = 0; i < length; i += typesCount) {
//     typesArr.forEach(type => {
//       const funcName = Object.keys(type)[0];
//       generatedPassword += randomFunc[funcName]();
//     });
//   }

//   const finalPassword = generatedPassword.slice(0, length);

//   return finalPassword;
// }

// // ----------------------------Generator functions----------------------------------
// function getRandomLower() {
//   return rando("qwertyuiopasdfghjklzxcvbnm")
// }

// function getRandomUpper() {
//   return rando("QWERTYUIOPASDFGHJKLZXCVBNM");
// }

// function getRandomNumber() {
//   return rando('123456789');
// }

// function getRandomSymbol() {
//   return rando('!@#$%^&*(){}[]=<>/,.');
// }
