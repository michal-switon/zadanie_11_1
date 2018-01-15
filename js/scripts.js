function Phone(brand, price, color, camera) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.camera = camera;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". It also has " + this.camera + " camera.");
}

var GalaxyS6 = new Phone("Samsung", "1750zł", "blue", "16 Mpx");
var iPhone6S = new Phone("Apple", "2250zł", "silver", "12 Mpx");
var OnePlusOne = new Phone("OnePlus", "1600zł", "black", "13 Mpx");

iPhone6S.printInfo();
GalaxyS6.printInfo();
OnePlusOne.printInfo();