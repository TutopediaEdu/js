let score = 100
console.log(typeof score);
console.log(typeof(score)); //This can be also used as a function to get the data type. previous and this are same
let newscore = "100"
console.log(typeof newscore);
let valueInNumber=Number(newscore)
console.log(typeof valueInNumber)
let marks="100a"
let marks_number=Number(marks)
console.log(typeof marks_number)
console.log(marks_number); //value is NaN: this means not a number
let percentage=null
let percentage_number=Number(percentage)
console.log(typeof percentage_number)
console.log(percentage_number);
//on converting boolean to Number it returns 1 or 0: true => 1; false => 0;
let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanisLoggedIn)
console.log(booleanisLoggedIn);
//on converting number to Boolean it returns true for 1 and 0 for false;
let name=""
let boolean_name = Boolean(name);
console.log(typeof boolean_name)
console.log(boolean_name);
//on converting string to Boolean it returns true for any string with atleast one character and 0 for the blank string;
let roll_number=21
let string_roll_number=String(roll_number)
console.log(typeof string_roll_number);
console.log(string_roll_number);
//Numbers can be converted to the string data type using String() function