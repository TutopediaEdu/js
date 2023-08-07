const myArr =[1,2,3,4,5,6,"Tutopedia"]
//This can hold same or different data types
//Indexing starts from 0
console.log(myArr)
console.log(myArr[1])
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(9) //add element at the starting
console.log(myArr)
myArr.shift() //remove element from the starting
console.log(myArr)
console.log(myArr.includes(0))
console.log(myArr.indexOf(2))
//join converts the array in string data type
const newArrr = myArr.join()
console.log(newArrr)
console.log(typeof newArrr)

//slice, splice
//slice will not change the original array
console.log("A ",myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr)
//splice will change the original array
const myn2=myArr.splice(1,3)
console.log(myn2)
console.log("C ",myArr)