/*
Stack(Primitive), Heap(Non-Primitive)
Stack returns a copy of the value stored in the stack memory
Heap returns the reference of the original value
*/
let name1="primitive data type value"
let name2=name1
console.log(name1)
console.log(name2)
name2="primitive data type new value"
console.log(name1)
console.log(name2)
//now consider non-primitive or reference data type: object
let person1={
    email:"p1@gmail.com",
    name:"person1"
}
let person2=person1
person2.email="p2@gmail.com"
console.log(person1);
console.log(person2);
//here value has been stored at the location referene so changed for both the objects