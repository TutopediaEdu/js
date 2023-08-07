const name="Tutopedia"
const id=51
console.log("Hello "+name +" is assigned with id as "+id)
//using backticks
//String interpolation method: This is modern way of writing JS
console.log(`Hello ${name} is assigned with id as ${id}`)
const institutename=new String("Tutopedia: An Education & IT Lab")
console.log(institutename)
console.log(institutename[0])
console.log(institutename.length)
console.log(institutename.toUpperCase())
console.log(institutename[institutename.length-1])
console.log(institutename.charAt(2))
console.log(institutename.indexOf("u"))
const newString = institutename.substring(0,9)
console.log(newString)
//using slice -ve index value can be supplied
//in slice, starting index and end index to be supplied
const anotherString = institutename.slice(-21,32)
console.log(anotherString)
const custName="  Bond    "
console.log(custName)
console.log(custName.trim())
console.log(custName.trimStart())
console.log(custName.trimEnd())
console.log(custName.replace('Bond','James Bond'))
console.log(institutename.includes("IT"))
console.log(institutename.split(":"))
console.log(institutename.split(":")[0])
console.log(institutename.split(":")[1])