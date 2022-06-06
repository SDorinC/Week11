function Vehicle(brand, color, licensePlate, highwayLicense) {
    this.brand = brand;
    this.color = color;
    this.licensePlate = licensePlate;
    this.highwayLicense = highwayLicense;
}

Vehicle.prototype.drive = function () {
    return this.constructor.name + " brand " + this.brand + " has the license plate " + this.licensePlate + ", the color " + this.color +
        " and is currently on the highway";
};

function Car(brand, color, licensePlate) {
    Vehicle.call(this, brand, color, licensePlate, Car.HIGHWAYLICENSE);
}

Car.HIGHWAYLICENSE = true;
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Motorcycle(brand, color, licensePlate) {
    Vehicle.call(this, brand, color, licensePlate, Motorcycle.HIGHWAYLICENSE);
}

Motorcycle.HIGHWAYLICENSE = true;
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

function Bus(brand, color, licensePlate) {
    Vehicle.call(this, brand, color, licensePlate, Bus.HIGHWAYLICENSE);
}

Bus.HIGHWAYLICENSE = true;
Bus.prototype = Object.create(Vehicle.prototype);
Bus.prototype.constructor = Bus;

function Truck(brand, color, licensePlate) {
    Vehicle.call(this, brand, color, licensePlate, Truck.HIGHWAYLICENSE);
}

Truck.HIGHWAYLICENSE = true;
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

function Bicycle(brand, color) {
    Vehicle.call(this, brand, color, Bicycle.LICENSEPLATE, Bicycle.HIGHWAYLICENSE);
}

Bicycle.LICENSEPLATE = "";
Bicycle.HIGHWAYLICENSE = false;
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

function Cart(brand, color) {
    Vehicle.call(this, brand, color, Cart.LICENSEPLATE, Cart.HIGHWAYLICENSE);
}

Cart.LICENSEPLATE = "";
Cart.HIGHWAYLICENSE = false;
Cart.prototype = Object.create(Vehicle.prototype);
Cart.prototype.constructor = Cart;

function Highway(vehicles) {
    this.acceptedVehicles = [];
    this.acceptVehicle(vehicles);
}

Highway.prototype.acceptVehicle = function (vehicles) {
    vehicles.forEach((vehicle) => {
        if (vehicle.highwayLicense) {
            this.acceptedVehicles.push(vehicle);
            console.log("A " + vehicle.constructor.name.toLowerCase() + " can enter the highway");
        } else {
            console.log("A " + vehicle.constructor.name.toLowerCase() + " can't enter the highway");
        }
    });
}

Highway.prototype.listVehicles = function () {
    this.acceptedVehicles.forEach((vehicle) => {
        console.log(vehicle.drive());
    });
}

let vehicle1 = new Car("Mercedes", "red", "GL01ABC");
let vehicle2 = new Motorcycle("Yamaha", "black", "GL12BCD");
let vehicle3 = new Bus("Volvo", "green", "GL23CDE");
let vehicle4 = new Truck("Saab", "blue", "GL34DEF");
let vehicle5 = new Bicycle("Ktm", "white");
let vehicle6 = new Cart("HomeMade", "gray");

let vehiclesList = [vehicle1, vehicle2, vehicle3, vehicle4, vehicle5, vehicle6];

let hway = new Highway(vehiclesList);
hway.listVehicles();