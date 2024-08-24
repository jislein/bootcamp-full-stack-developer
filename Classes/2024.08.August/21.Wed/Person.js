class Person {
    constructor(personName,age,interests = []) {
        this.personName = personName;
        this.age = age;
        this.interests = interests;
    }

    addInterest(interest) {
        this.interests.push(interest);
        console.log(`${interest} has been added to the interests list.\n`);
    }
    
    removeInterest(interest) {
        let colNames = ["Interest"];
        let array = this.interests;
        if (array.length == 0) {
            console.error("ERROR: There are no interest to remove.\nAdd some interests to the list and try again.\n");
            return;
        }
        
        for (let i = 0; i < array.length; i++){
            if (array[i].toLowerCase() == interest.toLowerCase()) {
                // console.log("Before removing interest:");
                // console.table(this.interests);
                console.log(`${this.personName} is no longer interested in ${array[i]}\n`)
                this.interests.splice(i,1);
                // console.log("\nAfter removing interest:");
                // console.table(this.interests);
                return;
            }
            
            else if (i == array.length - 1) {
                console.log(`${this.personName} has no interest in ${interest}. Interest not found.\n`);
                return;
            }
            continue;
        }
    }
    
    showInterest() {
        let object = {
            name: this.personName,
            age: this.age,
            interests: this.interests
        }
        let interestString = this.formatInterests(object.interests);
        let message = `${object.name} is interested in: ${interestString}.\n`
        console.log(message);
        return message;
    }

    showInfo() {
        console.log(`This is ${this.personName}, a ${this.age} years old person.\n${this.showInterest()}\n`)
    }

    formatInterests(interests) {
        let interestString = "";
        for (let i = 0; i < interests.length; i++) {
            if (i == interests.length-1) {
                interestString += "and " + interests[i];
                break;
            }

            interestString += interests[i];

            if (i == interests.length-2) {
                interestString += " ";
            } else {
                interestString += ", ";
            }            
        }
        return interestString;
    }
}

const person1 = new Person("Erpocu Tridodesnu", 26);

person1.removeInterest("howdy");
person1.addInterest("Howdy");
person1.addInterest("Videogames");
person1.addInterest("Chess");
person1.addInterest("Tennis");
person1.addInterest("Swimming");
person1.removeInterest("Tennis");
// console.log(person1.showInterest());
person1.showInfo();
person1.showInterest();
