class Apple {
    constructor(weight) {
        this.weight = weight;
    }

    decrease() {
        this.weight--;
    }
    isEmpty() {
        if (this.weight > 0) {
            return true;
        } else return false;
    }
    getWeight() {
        return this.weight;
    }

};

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    isMale() {
        if (this.gender == 'male') {
            return true;
        } else return false;
    }
    setGender() {

    }
    checkApple(Apple) {
        if (Apple.weight < 0) {
            return false;
        } else return true;
    }

    eat(Apple, human) {
        if (Apple.isEmpty()) {
            //2 người ăn, mỗi người ăn một nữa;
            while (Apple.weight > 0) {
                if (Apple.weight % 2 == 0) {
                    this.weight++;
                    Apple.decrease();
                }else{
                    human.weight++;
                    Apple.decrease();
                }
            }
        }
        return this.weight;
    }
    say(string) {
        console.log(string);
    }
    getName() {
        return `tên: ${this.name}`;
    }
    getWeight() {
        return `cân nặng: ${this.weight}`;
    }
}
let apple = new Apple(10);
let Adam = new Human('adam', 'male', 45);
let Eva = new Human('eva', 'female', 40);
Adam.say(prompt('nói gì đó:'));
console.log(Adam.checkApple(apple));
console.log(Adam.isMale());
console.log(Adam.eat(apple,Eva));
console.log(Eva.eat(apple,Adam));
console.log(`${Adam.getName()}, ${Adam.getWeight()}`);
console.log(apple.getWeight());