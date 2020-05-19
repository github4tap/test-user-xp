'use strict';
//console.log("Here's a hidden message");
/*
* This is an multiline...
* Javascript comment
*/
let today = new Date();
let formatDate = today.toDateString();

let selectElement = document.getElementById('date');
//console.log(selectElement.innerHTML);
selectElement.innerHTML = formatDate;
