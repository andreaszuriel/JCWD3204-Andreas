// Multiplication table

let num = 9;
for (let i = 0; i < 10; i++) {
    console.log (num , "X", i+1)
}

// Palindrome check

let str = "madam";
let reversed = str.split("").reverse().join("");

if (str === reversed) {
    console.log(str + " palindrome.");
} else {
    console.log(str + " not a palindrome.");
}

//convert centimeters to kilometers

let cm = 100000;
let km = cm / 1000000;
console.log(cm + " = " + km + " km.");

// number as currency

let money = 1000;
let text = money.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
console.log(money + " = " + text);

// remove the first occurrence of a given “search string” from a string

let str2 = "Hello world";
let toRemove = str2.slice(0,1)+ str2.slice(4) ;
console.log(toRemove);

// capitalize the first letter of each word in a string

let wort = "hello world";
let toCapital = wort[0].toUpperCase() + wort.slice(1, 6) + wort[6].toUpperCase() + wort.slice(7);
console.log(toCapital);

// swap the case of each character from string
let sentence = 'The QuiCk BrOwN Fox';
let result = '';
for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];
  if (char === char.toUpperCase()) {
    result += char.toLowerCase();
  } else {
    result += char.toUpperCase();
  }
}
console.log(result);


// find the largest 
let angka1= 42
let angka2=27

if (angka1 > angka2) {
    console.log(angka1 + " > " + angka2);
} else {
    console.log(angka1 + " < " + angka2);
}

//to sort an array in ascending order
let nomor1 = 42;
let nomor2 = 27;
let nomor3 = 18;

let numbers = [nomor1, nomor2, nomor3];
numbers.sort((a, b) => a - b);
console.log(numbers);


// // variable type checking

let variable = "hello";

if (typeof variable === 'string') {
  console.log(1);
} else if (typeof variable === 'number') {
  console.log(2);
} else {
  console.log(3);
}


// replace letter a into star

let kalimat = "An apple a day keeps the doctor away";
let toReplace = kalimat.replace(/a/gi, '*');
console.log(toReplace);