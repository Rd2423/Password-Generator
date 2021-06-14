// Assignment code here


letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
number = [1,2,3,4,5,6,7,8,9];
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


var enter; 
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

space = [];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

letters2 = letters.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function() {
    ps = writePassword();
    document.getElementById("password").placeholder = ps;
});


function writePassword() {
 
  enter = parseInt(prompt("How mane characters would you like for your password? between 8 and 128"));
  if (!enter) {
     alert("not VALID! put a value");
  } else if (enter < 8 || enter > 128) {
     

      enter = parseInt(prompt("You have to choose between 8 and 128"));
  
    } else {
      
      confirmNumber = confirm("You want numbers in your password?");
      confirmCharacter = confirm("You want special characters?");
      confirmUppercase = confirm("You need Uppercase letters?");
      confirmLowercase = confirm("You ned Lowercase letters?");

    };
  
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You need to choose at least ONE ! ");
  }
 
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
      choices = character.concat(number, letters, letters2);
  }
  
  else if (confirmCharacter && confirmNumber && confirmUppercase ) {
      choices = character.concat(number, letters2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = character.concat(number, letters);
  }
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(letters, letters2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(letters, letters2);
  }

  
else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

} else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(letters);

} else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(letters2);
}
else if (confirmLowercase && confirmNumber) {
    choices = letters.concat(number);

} else if (confirmLowercase && confirmUppercase) {
    choices = letters.concat(letters2);

} else if (confirmNumber && confirmUppercase) {
    choices = number.concat(letters2);
}

else if (confirmCharacter) {
    choices = character;
}
else if (confirmNumber) {
    choices = number;
}
else if (confirmLowercase) {
    choices = letters;
}

else if (confirmUppercase) {
    choices = space.concat(letters2)
}


var password = [];


for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}

var ps = password.join('')
UserInput(ps);
return ps;
}


function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}
