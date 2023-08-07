const cities=["Delhi","Pune","Goa","Mumbai"]
const s_cities=["Chennai","Bangalore","Kochi"]
cities.push(s_cities)
console.log(cities)
console.log(cities[4][2])
//concat include new elements in a new array
const cities1=["Delhi","Pune","Goa","Mumbai"]
const s_cities1=["Chennai","Bangalore","Kochi"]
const cities3=cities1.concat(s_cities1)
console.log(cities3)
//spread arrays
const all_cities=[...cities1,...s_cities1]
console.log(all_cities)

//flat
const nested_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usable_arr=nested_arr.flat(Infinity)
console.log(usable_arr)

//Array as a mrthod works like
console.log(Array.isArray("Tutopedia"))
console.log(Array.from("Tutopedia"))

let a=10
let b=20
let c=30
console.log(Array.of(a,b,c))