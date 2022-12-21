//store out stock inside a variable
let stocks = {
    Fruits:["Strawberry", "Grapes", "Banana", "Apple"],
    Liquid: ["Water", "Ice"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["Chocolate", "Peanuts"],
};

let is_shop_open = true;

let order = (work, time)=> {
    
    return new Promise( (resolve, reject)=> {
        if(is_shop_open){
            setTimeout(() => {
                resolve(work() )
            }, time);
            
        }

        else {
            reject(console.log("Shop is Closed!"));
        }
    } );
};

order(()=>console.log(`${stocks.Fruits[1]} was selected`), 2000)

.then(()=>{
    return order(()=>console.log("Production has started"), 0000)
})

.then(()=>{
    return order(()=> console.log("The food was chooped"), 2000)
})

.then(()=>{
    return order(()=> console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`), 1000)
})

.then(()=>{
    return order(()=> console.log("The machine has started working"), 1000)
})

.then(()=>{
    return order(()=> console.log(`The Ice cream was place on a ${stocks.Holder[0]} holder`), 2000)
})

.then(()=>{
    return order(()=> console.log(`The ${stocks.Toppings[0]} toppings was added on the Ice Cream`), 3000)
})

.then(()=>{
    return order(()=> console.log("Ice Cream is ready and can be served"), 2000);
})

.catch(()=>{
    console.log("Customer left")
})

.finally(()=>{
    console.log("Work has ended for today...Our shop is closed!")
})