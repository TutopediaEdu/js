console.log(Date.now())
let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(typeof myDate)
let birthdate = new Date(2010, 0, 1)
//Month starts with 0 in JS
console.log(birthdate.toLocaleString())
let birthdate2 = new Date("2010-02-20")
console.log(birthdate2.toLocaleString())
birthdate2 = new Date("2-20-2010")
console.log(birthdate2.toLocaleString())
birthdate2 = new Date("20-2-2010")
console.log(birthdate2.toLocaleString())
let myTimestamp = Date.now()
console.log(myTimestamp)
console.log(birthdate)
console.log(birthdate.getTime())
console.log(Date.now()/1000)
console.log(birthdate.getDay()); console.log(birthdate.getDate()); console.log(birthdate.getFullYear())
console.log(birthdate.getMonth())
console.log(birthdate.toLocaleString("default",{
    weekday: "long"
}))