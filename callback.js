/*
//store out stock inside a variable
let stocks = {
    Fruits:["Strawberry", "Grapes", "Banana", "Apple"],
    Liquid: ["Water", "Ice"],
    Holder: ["Cone", "Cup", "Stick"],
    Toppings: ["Chocolate", "Peanuts"],
};

let order = (Fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected.`);
        
        call_production();

    }, 2000);
    
};
let container = (Holder_name) => {
    setTimeout(() => {
        console.log(`${stocks.Holder[Holder_name]} holder was selected, and Ice-Cream was placed on it`)
    }, 2000);
};
let Topping = (topping_name) => {
    setTimeout(() => {
        console.log(`${stocks.Toppings[topping_name]} toppings was added to the Ice-Cream.`)

        setTimeout(() => {
            console.log("Ice-Cream is ready and can be served.")
        }, 2000);
    }, 3000);
}

let production = () => {
    setTimeout(() => {
        console.log("Production has started");

        setTimeout(() => {
            console.log("The food has been chopped");

            setTimeout(() => { 
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} has been added`);

                setTimeout(() => {
                    console.log("Machine has started working");

                    container(0)
                    Topping(0);

                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
};
order(2,production);
*/
