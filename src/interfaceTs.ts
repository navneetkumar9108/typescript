// function makeChai(order: {type: string;suger: number;strong: boolean}){
// console.log(order);
// }

// function serveChai(order: {type: string;suger: number;strong: boolean}){
//     console.log(order);
// }

type ChaiOrder = {
    type: string;
    suger: number;
    strong: boolean;
};

function makeChai(order: ChaiOrder){
console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
}


// type TeaRecipe = {
//     water: number;
//     milk: number;
// }

interface TeaRecipe{
    water: number;
    milk: number;
}

// class MasalaChai implements TeaRecipe{
//     water =100;
//     milk = 50;
// }

// type CupSize = "small" | "large";
interface CupSize {
    size: "small" | "large";
}

class Chai implements CupSize{
    size: "small" | "large" = "small";
}

// type Response = {ok: true} | {ok:false}

// class myRes implements Response{
//     ok: boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t:TeaType){
    console.log(t);
}

type BaseChai = { teaLeaves: number}
type Extra = { masala: number}

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
    teaLeaves: 5,
    masala: 2
}

console.log(typeof(cup));

type User = {
    username: string;
    bio?: string;
}

const u1: User = {username: "Navneet"};
const u2: User = {username: "Navneet", bio: "I love chai"};


type Config = {
    readonly appName: string;
    version: number;
}

const cfg: Config = {
    appName: "Pooshak",
    version: 1.0
}

// cfg.appName = "New Name"; // This will throw an error since appName is readonly