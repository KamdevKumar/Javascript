let score = 33
console.log(typeof score);
console.log(typeof(score));

let age = "18abc"
console.log(typeof age);//string

let valueInNumber = Number(age);
console.log(typeof valueInNumber);//number
console.log(valueInNumber)//NaN
//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0
//null = 0
//undefined = NaN

let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=>true; 0=>false
//""=>false
//"kamdev"=> true

let someNumber=33
let stringNumber= String(someNumber)
console.log(typeof stringNumber);

//---------------------String Conversion-------------------Important

console.log("1"+3+3)//133
console.log(2+3+"1")//51

console.log(true)//true
console.log(+true);//1
//console.log(true+)//error

console.log(null===undefined) //false
console.log(5>3>2) //false
console.log([]===[])//false
console.log("10"<"9")//true
console.log(+true)//1
console.log(+"")//0

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true

console.log(undefined==0)//false
console.log(undefined>0)//false
console.log(undefined<0)//false

//-----------------------------------
//===: strictly type check 
console.log("2"===2)//false
console.log("2"==2)//true
