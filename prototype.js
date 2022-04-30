function Large() {}
Large.prototype.largeProp = true;

function Medium() {}
Medium.prototype = new Large();

function Small() {}
let s = new Medium();
s.largeProp = 3;
Small.prototype = s;

let i = new Small();

console.log(i.largeProp); //3
