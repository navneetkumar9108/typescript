// type guard  or type narrowing

function getChai(kind: string | number){
    if (typeof kind === 'string') {
        return `Making a ${kind} chai`;
    }
    return`chai order: ${kind} cups`;   
}

// console.log(getChai("Masala"));
// console.log(getChai(5));
// getChai("Masala");
// getChai(5);

function serveChai(msg?:string){
    if(msg){
        return `Serving chai: ${msg}`;
    }   
    return`serving default masala chai`;
}

// console.log(serveChai("Ginger chai"));
// console.log(serveChai());

// exhaustive check
function orderChai(size:"small" | "medium" | "large" | number){
    if(size ==="small")
    {
        return `small cutting chai`;
    }
    if(size ==="medium" || size ==="large")
    {
        return`make extra chai`
    }
    return `chai order #${size}`;
}

// console.log(orderChai("small"));
// console.log(orderChai("medium"));
// console.log(orderChai("large"));
// console.log(orderChai(10));


class kulhadChai {
    serve(){
        return `Serving kulhad chai`;       
    }
}

class cutting {
    serve(){
        return `Serving cutting chai`;       
    }   
}

function serve(chai: kulhadChai | cutting){
    if(chai instanceof kulhadChai){
        return chai.serve();
    }

        if (chai instanceof cutting) {
        return chai.serve();
    }

}

const myChai = new kulhadChai();
const yourChai = new cutting();

// console.log(serve(myChai));
// console.log(serve(yourChai));

type ChaiOrder = {
    type:string,
    sugar:number,
}

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (typeof obj === 'object' && obj !== null && typeof obj.type === 'string' && typeof obj.sugar === 'number');
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} with ${item.sugar} spoons of sugar`;
    }
    return `Serving custom chai: ${item}`;   
}

console.log(serveOrder({
    type: "Masala",
    sugar: 2
}));

console.log(serveOrder("Special Ginger Chai"));


type MasalaChai = {
    type: "masala";
    spicelevel: number,
};

type GingerChai = {
    type: "ginger";
    amount: number,
};

type ElaichiChai = {
    type: "elaichi";
    aroma: number,
};

type Chai = MasalaChai | GingerChai | ElaichiChai; 

function MakeChai(order: Chai){
    switch(order.type){
        case "masala":
            return `masala chai`;
            break;
        case "ginger":
            return `ginger chai`;
            break;
        case "elaichi":
            return `elaichi chai`;
            break;
    } 
}

function brew(order: MasalaChai | GingerChai ){
    if("spicelevel" in order){
        // 
}}

// function isStringArray(arr: unknown): arr is string[]{

// }
