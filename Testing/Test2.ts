interface IceCream {
    flavor: string;
    scoops: number;
}

let myIceCream: IceCream;
myIceCream = {
    flavor: "vanilla", scoops: 2
};
console.log(myIceCream.flavor);

function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + " is too many scoops!";
    } else {
        return "You order will be ready soon!";
    }
}
console.log(tooManyScoops({flavor: "vanilla", scoops: 5}))

interface Sundae extends IceCream{
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: boolean;
}