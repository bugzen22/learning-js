// ১. Variable কি ?
ans:// ভারিয়েবল হলো একটি নাম বা কনটেইনার জায় কিছু ভেলু বা মান জেমন (সাংখ্য টেকক্স ইত্যাদি রাখতে পারি)।
ex: X=5;
 এখানে X ভারিয়েবল 5 হলো তার মান।

// ২. Variable কিভাবে লিখতে হয় ?
ans:// ভারিয়েবল লেখার নিয়ম।
ex: var name = "Rownok";
Console.log(name);
output:Rownok

// ৩. string type variable কি ও কি ভাবে লিখতে হয় ?
ans://String type ভ্যারিয়েবল
 " ", ' ', ` `, 
// ডাবল কোটেসন।
// সিঙ্গেল কোটেসন।
// ব্যাক টিক দিয়ে লিখতে হয় ।
ex: let str1 = "Hello";
let str2 = 'World';
let str3 = `Rownok`;
console.log(str1, str2, str3);
output:  Hello World Rownok

// ৪. number type variable কি ও কি ভাবে লিখতে হয় ?
ans:// number type ভারিয়েবল হলো জেসকল ভ্যারিয়েবল নাম্বার বা সংখায় হয় । আর নাম্বার টাইপ ভেরিবল লিখতে কোনো প্রকার
ডাবল কোটেসন ব্যাক টিকলাগে না ।
নাম্বার টাইপ ভারিয়েবল লেখার নিয়ম।
ex: var age = 18;
console.log(age);
output:18

// ৫. Boolan type variable  কি ও কি ভাবে লিখতে হয় ?
ans:// জে ভারিয়েবল দিয়ে কোনো কিছু সত্যনা মিথ্যা তা জছাই করা হয় তাকে Boolean type ভ্যারিয়েবল বলে ।
এর মান ২ টা True,False
এটি লেখার নিয়ম।
 ex: let Bool = true;
console.log(Bool);
output:true

// ৬. toUpperCase() & toLowerCase() এর ব্যাবহার কি ভাবে করতে হয় ? 
ans: // toUpperCase();
এটি string কে সব অখর বড় ( uppercase)
করে।
let text = "Rownok";
let upperText = text.toUpperCase();
console.log(upperText);
output:ROWNOK
// toLowerCase() ব্যাবহার একটি String কে সব অখর ছোট করে।
দেমন let lowertext = text.toLowerCase();
Console.log(lowertext);
output:rownok

// ৭. JavaScript এর মোট কয়টি অপারেটর আছে ও কি কি ?
ans: // javaScript JavaScript-এ অপারেটর অনেক ধরনের। । 
ex: বেসিক আরিথমেটিক অপারেটর: +,-,*,/,%,++,--,

// ৮. Math.abs() এর ব্যাবহার লিখুন । 
ans: // Math.abs() JavaScript Math object এর method জা জেকোনো সংখ্যাকে (positive)  মানে রূপান্তর করে।
ex: console.log(Math.abs(-5));
output:5;

// ৯. Math.ceil()  এর ব্যাবহার লিখুন । 
ans: // Match.ceil এর কাজ জেকোনো সাংখা কে উপর দিকে নিকটতম পূনসংখা রুপানত করা।
ex: console.log(Math.floor(4.2));
output: 5 

// ১০. Math.Floor() এর ব্যাবহার লিখুন । 
ans: // Math.floor() হলো একটি JavaScript এর  Math object এর Method যা নিচের দিকে নিকটতম পূনসংখায় Einteger করে ।
ex: console.log(Math.floor(4.9));
output: 4 

// ১১. Math.round() এর ব্যাবহার লিখুন ।
ans: //Math.round() হলো একটি JavaScript এর math object এর method যা কোনো সংখ্যা নিকটতম সংখায় রাউন্ড করে।
ex: console.log(Math.round(4.7));
output: 5

// ১২. Math.random() এর ব্যাবহার লিখুন ।
 ans: //Math.random() হলো JavaScript-এর একটি বিল্ট-ইন ফাংশন যা 0 (ইনক্লুসিভ) থেকে 1 (এক্সক্লুসিভ) পর্যন্ত র‍্যান্ডম দশমিক সংখ্যা তৈরি করে। অর্থাৎ এটি কখনো 1 দেয় না, কিন্তু 0 হতে পারে।
ex: let randomNumber = Math.random();
console.log(randomNumber);
সম্ভাব্য output:0.487392183
 asignment.js - GitHub Link: https://github.com/bugzen22/learning-js/blob/main/1stAssignment%20.js
