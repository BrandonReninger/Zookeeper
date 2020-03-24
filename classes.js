class Alligator {
    constructor(name, age, diet, gender) {
        this.name = name;
        this.age = age;
        this.diet = diet;
        this.gender = gender;
    }
}

let bob = new Alligator("Bob", 55, "Carnivore", "dude")


class BrownBear {
    constructor(name, age, diet, mood = "probably angry") {
        this.name = name;
        this.age = age;
        this.diet = diet;
        this.mood = mood;
    }
}

let mack = new BrownBear("Mack", 15, "not vegan")


class Civet {
    constructor(name, age, rabid, location) {
        this.name = name;
        this.age = age;
        this.rabid = rabid;
        this.location = "Thailand"
    }
}

let chris = new Civet("chris", 560, false)


class Dingo {
    constructor(name, age, feral, location) {
        this.name = name;
        this.age = age;
        this.feral = feral;
        this.location = location;
    }
    indentify() {
        console.log(this.age);
    }

}

let myDingo = new Dingo("Zydrunas", 25, false, "Australia")