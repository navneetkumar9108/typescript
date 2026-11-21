const chai ={
    name: "masala chai",
    price: 20,
    isHot: true
}

let tea:{
    name: string,
    price: number,
    isHot: boolean
}

tea={
    name: "green tea",
    price: 15,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrakhChai: Tea = {
    name: "adrakh chai",
    price: 25,
    ingredients: ["water", "milk", "sugar", "tea leaves", "ginger"]
}

type Cup = {size: string};
let smallCup: Cup = {size: "200ml"};

let bigCup = {size: "500ml",material:"steel"}

smallCup = bigCup

type Brew = {brewTime: number}
const coffee = {brewTime :5,beans:"Arabica"}
const chaiBrew:Brew = coffee

type User = {
    username: string;
    password: number
}

const u: User ={
    username: 'chaicode',
    password: 123 
}

type Item = { name: string, quantity: number}
type Address = { street: string, pin: number}

type Order ={
    id: string;
    items: Item[];
    address: Address
}

// type Chai ={
//     name: string;
//     price: number;
//     isHot: boolean
// }

// const updateChai = (updates: Partial<Chai>)=>{
//     console.log("updating chai with",updates);
// }

// updateChai({price:25})
// updateChai({isHot: true})
// updateChai({})

type ChaiOrder ={
    name?: string;
    quantity?: number
}

const placeOrder =(order: Required<ChaiOrder>)=>{
    console.log(order);
}

placeOrder({
    name: "masala chai",
    quantity: 25
})

type Chai ={
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo ={
    name:'Lemon Tea',
    price: 30
}

type ChaiNew ={
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string
}

type publicChai = Omit<Chai,"secretIngredients">