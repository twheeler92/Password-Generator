// Assignment Code
var generateBtn = document.querySelector("#generate");

var upercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["?", "%", "$", "@" ];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var newpassword = "";
  var passlength = 0;

  // prompt user to enter how long they want their password to be
  var passlength = window.prompt("How many characters does your password need to be? (8-128)");

  if (!passlength) {
    return;
  }

  // light error handling for none numeric inputs
  while (isNaN(passlength)) {
    passlength = window.prompt("Numbers Only! Password must be between 8-128 characters");
   }
  while (passlength < 8 || passlength > 128) {
    passlength = window.prompt("Numbers Only! Password must be between 8-128 characters");
  }
  
  // setting wether to add special characters to password (looking for way to make it more random?)
  var addUpper = window.prompt("How many UPPERCASE letters does your password need?");

  if(!addUpper) {
    addUpper = 0;
  }
  else { 
    addUpper = 1;
  }

  var addNums = window.confirm("Does your password need NUMBERS?")

  if(!addNums) {
    addNums = 0;
  }
  else { 
    addNums = 1;
  }

  var addSpec = window.confirm("Does your password need NUMBERS?")

  if(!addSpec) {
    addSpec = 0;
  }
  else { 
    addSpec = 1;
  }
  var spec = addUpper + addNums + addSpec;

  var passWithExtras = passlength - spec;

  // randomly selects characters fron the arrays based on users input
  for (var i = 0; i < passWithExtras; i++) {
    var index = Math.floor(Math.random() * (lowercase.length - 1));
    newpassword = newpassword.concat(lowercase[index]);
  }

  for (var i = 0; i < addUpper; i++) {
    var index = Math.floor(Math.random() * (upercase.length - 1));
    newpassword = newpassword.concat(upercase[index]);
  }

  for (var i = 0; i < addNums; i++) {
    var index = Math.floor(Math.random() * (nums.length - 1));
    newpassword = newpassword.concat(nums[index]);
  }

  for (var i = 0; i < addSpec; i++) {
    var index = Math.floor(Math.random() * (specialCharacters.length - 1));
    newpassword = newpassword.concat(specialCharacters[index]);
  }

  // shuffels final randomized password string and returns it
  var shuffledPass = '';
  newpassword = newpassword.split('');
  while (newpassword.length > 0) {
    shuffledPass += newpassword.splice(newpassword.length * Math.random() << 0, 1);
  }

  return shuffledPass;
}
