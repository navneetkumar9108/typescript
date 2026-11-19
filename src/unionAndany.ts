// union and any type in typescript

// let subs: number | string = 1000;
let subs: number | string = "1M";

let apiRequestStatus: "success" | "failure" | "pending" ="pending"

let airlineSeat: "aisle" | "middle" | "window" = "window";  
airlineSeat = "aisle";

const orders =["12","20","28","42"]

let currentorder: string | undefined;

for(let order of orders){
    if(order === "20"){
        currentorder = order;
        break;
    }
}

console.log(currentorder);

