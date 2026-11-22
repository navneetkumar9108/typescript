// class Chai {
//     flavour: string;
//     // price: number

//     // constructor(flavour:string, price:number){
//     //     this.flavour = flavour
//     //     this.price = price
//     // }
//     constructor(flavour:string){
//         this.flavour = flavour
//         console.log(this);
//     }
// }

// // const masalaChai = new Chai("Ginger",25)
// const masalaChai = new Chai("Ginger")
// masalaChai.flavour = 'masala'


class Chai {
    public flavor: string = "masala"
    private secretIngredient = "Cardamom"

    reveal(){
        return this.secretIngredient //ok
    }

}

const c = new Chai()

console.log(c.reveal());

class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop{
    getName(){
        return this.shopName //ok
    }
}

class Walet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Walet()

console.log(w.getBalance());

class Cup{
    readonly capacity: number = 250

    constructor(capacity: number){
        this.capacity = capacity
    }
}

class ModernChai{
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value: number){
        if(value > 5) throw new Error("Too sweet")
            this._sugar = value
console.log(this._sugar);
    }
}

const m = new ModernChai()
m.sugar = 3

class EkChai{
    static shopName = "Chaicode caffe"
    constructor(public flavour: string){}
}
console.log(EkChai.shopName);

abstract class Drink{
    abstract make(): void
}

class MyChai extends Drink{
    make(): void {
        console.log("Brewing chai");
    }
}

class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}