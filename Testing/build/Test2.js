let myIceCream;
myIceCream = {
    flavor: "vanilla", scoops: 2
};
console.log(myIceCream.flavor);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + " is too many scoops!";
    }
    else {
        return "You order will be ready soon!";
    }
}
console.log(tooManyScoops({ flavor: "vanilla", scoops: 5 }));
//# sourceMappingURL=Test2.js.map