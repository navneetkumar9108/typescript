// cspell:ignore masala Adrak
const chaiFlavours: string[] = ["masala", "Adrak"]
const chaiPrice: number[] = [10,20]

const rating: Array<number> = [4.5,5.0]

type Chai = {
    name:string;
    price:number
}

const menu: Chai[] = [
    {name: "masala",price: 15},
    {name: "Adrak",price:25}
]

const cities: readonly string[] = ["delhi","patna","chandigarh"]
// cities.push("pune")

const table: number[][] = [
    [1,2,3],
    [4,5,6]
]

// tuples

let chaiTuple: [string,number];
chaiTuple= ["masala",20]
// chaiTuple= [20,"masala"]

let userInfo: [string,number,boolean?]
userInfo= ["Navneet",100]
userInfo= ["Navneet",100,true]


const location: readonly [number,number] = [28.66, 32.22]

const chaiItems: [name: string, price: number] = ["Malala",25]

enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

enum Status{
    PENDING = 100,
    SERVED, //101
    CANCELLED //102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType){
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER)
// makeChai("masala")

enum RandomEnum {
    ID =1,
    NAME = "chai"
}

const enum Sugars{
    LOW = 1,
    MEDIUM = 2 ,
    HIGH = 3
}

const s = Sugars.HIGH

 let t: [string, number] = ["chai",10]
 t.push("extra")