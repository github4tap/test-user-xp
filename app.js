'use strict';
//console.log("Here's a hidden message");
/*
* This is an multiline
* Javascript comment
*/
let today = new Date(); // we are creating a varibale to hold current Date 
let formatDate = today.toDateString(); // We are formating the dateObject in this process the Time zone and other optional ppts will be removed

let selectElement = document.getElementById('date');
//console.log(selectElement.innerHTML);
selectElement.innerHTML = formatDate;
