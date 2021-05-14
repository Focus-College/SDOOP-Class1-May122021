class Vehicle {

    steer(){

    }

    shiftUp(){

    }

    shiftDown(){

    }

}

class Truck extends Vehicle {

    hasFourByFour: boolean = true;

}

class Car extends Vehicle {

}

class SemiTruck extends Truck {

    hasFourByFour: boolean = false;

}

class PickupTruck extends Truck {

}