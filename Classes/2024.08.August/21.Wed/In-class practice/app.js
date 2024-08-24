class Bottle {
    constructor(content, color, litres) {
        this.content = content;
        this.color = color;
        this.litres = litres;
    }

    fill() {
        console.log(`Filling bottle with ${this.content}...`)
    }

    empty() {
        console.log("Emptying the bottle...")
    }

    open() {
        console.log("Openning the bottle...")
    }

    close() {
        console.log("Closing the bottle...")
    }
}


const greenWaterBottle = new Bottle("Water", "Green", 1.8);
greenWaterBottle.open();
greenWaterBottle.fill();
greenWaterBottle.close();
greenWaterBottle.empty();

const blueSodaBottle = new Bottle("Soda", "Blue", 1.25);
blueSodaBottle.open();
blueSodaBottle.fill();
blueSodaBottle.close();
blueSodaBottle.empty();

const redVodkaBottle = new Bottle("Vodka", "Red", 2.3);
redVodkaBottle.open();
redVodkaBottle.fill();
redVodkaBottle.close();
redVodkaBottle.empty();


class Gamepad {
    constructor(brand, color, type) {
        this.brand = brand;
        this.color = color;
        this.type = type;
    }

    connect() {
        if (this.type == "Wireless") {
            console.log("Connecting to bluetooth receiver...")
            console.log("Connected. Ready to use.")
        }

        if (this.type == "Wired") {
            console.log("Connected. Ready to use.")
        }        
    }

    disconnect() {
        console.log("Successfuly disconnected.")
    }
}

const yellowXboxWireless = new Gamepad("Yellow", "Xbox", "Wireless");
yellowXboxWireless.connect();
yellowXboxWireless.disconnect();

const pinkPS5Wired = new Gamepad("Pink", "PS5", "Wired");
pinkPS5Wired.connect();
pinkPS5Wired.disconnect();