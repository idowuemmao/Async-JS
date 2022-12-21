//store out stock inside a variable
let stocks = {
    Fruits:["Strawberry", "Grapes", "Banana", "Apple"],
    Liquid: ["Water", "Ice"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["Chocolate", "Peanuts"],
};

let is_shop_open = true;

function time(ms){
    return new Promise ( (resolve, reject)=> {
        if(is_shop_open){
            setTimeout(resolve, ms);
        }
        else{
            reject(console.log("The shop is closed"));
        }
    });
}

async function kitchen(){
    try {
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`);

        await time(0000)
        console.log("Production has started...");

        await time(2000)
        console.log("The fruits has been chopped")

        await time(1000)
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)

        await time(1000)
        console.log("The machine has started working")

        await time(2000)
        console.log(`The Ice-Cream is placed in a ${stocks.Holder[0]} holder`)

        await time(3000)
        console.log(`${stocks.Toppings[0]} toppings was added to Ice-Cream`);

        await time(2000)
        console.log("The Ice-Cream is ready and can be served")


    } catch (error) {
        console.log("Customer left", error)
    }
    finally{
        console.log("Work has ended for the day, the shop is closed")
    }
}

kitchen();


















/*
let toppings_choice = ()=>{
    return new Promise( (resolve, reject)=>{
        setTimeout(() => {
            resolve(console.log("Which topping would you love? "));
        }, 3000);
    });
};

async function kitchen () {
    console.log("A")
    console.log("B")
    console.log("C")

    await toppings_choice()

    console.log("D")
    console.log("E")
}

kitchen()

console.log("Cleaning the dishes ")
console.log("Cleaning the tables")
console.log("Talking orders for other customers")
*/