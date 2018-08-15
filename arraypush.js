//build an array that stores first and last names. the default value of the array will be empty
var firstNamearr = [];
var lastNamearr = [];


//ask user for a first name, and store it in the first names array
var firstName = prompt("what is your first name?");
firstNamearr.push(firstName);


//ask user for a last name, and store it in the last names array
var lastName = prompt("what is your last name?");
lastNamearr.push(lastName);

//display to the window both first and last name from the array with the length of the both arrays


window.alert(firstName[0] + " " + lastName[0] + " " + firstNamearr.length + lastNamearr.length);
