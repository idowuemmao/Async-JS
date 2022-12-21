//synchronous: it runs serially

console.log("I")

console.log("eat")

console.log("ice cream")

console.log("with")

console.log("a spoon.")

//Asynchronous system:

console.log("I")

console.log("eat")

//This uses an arrow function to 
setTimeout(() => {
    console.log("ice cream")
}, 3000)

console.log("with")

console.log("a spoon.")

//setTimeout allows you to run a function after a specific amount of time

//Callback functions: calls a function inside another function. It forms a connection btw functions
function one (call_two){
    console.log("Step 1 complete. Please call step 2");
    call_two()
}
function two (){
    console.log("Step 2");
}
one(two);

let order = (call_production)=> {
    console.log("Order placed...Please call the production unit to begin production")
    call_production();
}
let production = ()=>{
    console.log("Order received...Starting production.")
}
order(production);