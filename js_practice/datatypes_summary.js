/*primitive datatype or call by value
string
number
booblean
null
undefined
symbol
bigint
*/
const id = Symbol('123')
const id2 = Symbol('123')
console.log(id)
console.log(id2)
console.log(id===id2)
const bigNumber=12345678912345678910n
console.log(bigNumber)
console.log(typeof bigNumber)
const namelist = ["James","Mark","Emma","Isabel"]
console.log(namelist)
//objects: defined in key value pair
let myObj =
{
    name:"Tutopedia",
    department:"IT"
}
console.log(myObj)
console.log(myObj.name)
/*
non primitive datatype or reference type datatypes
arrray
objects
functions
theese will return as function if we check typeof
*/