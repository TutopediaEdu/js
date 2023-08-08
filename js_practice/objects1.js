//two types of objects
//1. singleton
//Object.create

//2. Object literals
const mySym=Symbol("key1")
const jsuser = {
    name:"Tutopedia",
    [mySym]:"new_key",
    subject:"IT",
    location:"Pune",
    days:["Monday","Tuesday","Wednesday"]
}
console.log(jsuser.name)
console.log(jsuser["subject"])
console.log(jsuser[mySym])
jsuser.subject="Computer";
console.log(jsuser.subject)
//Object.freeze(jsuser) //
jsuser.subject="IT Education";
console.log(jsuser.subject)
console.log(jsuser)

jsuser.greeting=function(){
    console.log("Hello JS user")
}
console.log(jsuser.greeting)

jsuser.greeting2=function(){
    console.log(`Hello JS user ${this.name}`)
}
console.log(jsuser.greeting2())