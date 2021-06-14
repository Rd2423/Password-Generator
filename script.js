// Assignment code here

// Characters
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
number = [1,2,3,4,5,6,7,8,9];
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// These Variables will get assign and used in the function writePassword()
var enter; 
var number;
var specialCharacter;
var upperCase;
var lowerCase;

space = [];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

letters2 = letters.map(toUpper);

var get = document.querySelector("#generate");



get.addEventListener("click", function() {
    pwd = writePassword();
    document.getElementById("password").placeholder = pwd;
});

// function that creates the password and ask the criteria for the password.
function writePassword() {
 
  enter = parseInt(prompt("How mane characters would you like for your password? between 8 and 128"));
  if (!enter) {
     alert("not VALID! put a value");
  } else if (enter < 8 || enter > 128) {
     

      enter = parseInt(prompt("You have to choose between 8 and 128"));
  
    } else {
      
      number = confirm("You want numbers in your password?");
      specialCharacter = confirm("You want special characters?");
      upperCase = confirm("You need Uppercase letters?");
      lowerCase = confirm("You ned Lowercase letters?");

    };
  
  if (!specialCharacter && !number && !upperCase && !lowerCase) {
      choices = alert("You need to choose at least ONE ! ");
  }
 
  else if (specialCharacter && number && upperCase && lowerCase) {
      choices = character.concat(number, letters, letters2);
  }
  
  else if (specialCharacter && number && upperCase ) {
      choices = character.concat(number, letters2);
  }
  else if (specialCharacter && number && lowerCase) {
      choices = character.concat(number, letters);
  }
  else if (specialCharacter && number && upperCase) {
      choices = character.concat(letters, letters2);
  }
  else if (number && lowerCase && upperCase) {
      choices = number.concat(letters, letters2);
  }

  
else if (specialCharacter && number) {
    choices = character.concat(number);

} else if (specialCharacter && lowerCase) {
    choices = character.concat(letters);

} else if (specialCharacter && upperCase) {
    choices = character.concat(letters2);
}
else if (lowerCase && number) {
    choices = letters.concat(number);

} else if (lowerCase && upperCase) {
    choices = letters.concat(letters2);

} else if (number && upperCase) {
    choices = number.concat(letters2);
}

else if (specialCharacter) {
    choices = character;
}
else if (number) {
    choices = number;
}
else if (lowerCase) {
    choices = letters;
}

else if (upperCase) {
    choices = space.concat(letters2)
}


var password = [];

// This for loop basically creates random password by collecting all the criteria that the user wants in the password
for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}


// this basically concatenate the user password into one string
var pwd = password.join('')
UserInput(pwd);
return pwd;
}

// this prints the password in the container on the page 
function UserInput(pwd) {
    document.getElementById("password").textContent = pwd;
}
