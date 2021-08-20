// Basic Class
class Animal {
    // Class properties
    // Constructor Function
    constructor(name, legs){
        this.name = name
        this.legs = legs
    }
    // Methods
    speak(){
        console.log(this.name)
    }

}

// Class Inheritance
class Tiger extends Animal {
    #password = 42
    constructor(name, legs, isDanger){
        super(name, legs)
        this.isDanger = isDanger
    }
// getters
    get password(){
        return this._password
    }
    set password (n){
        if (typeof n == "number")
            this.#password = n
    }

}


let tiger = new Tiger("bengal", 4, true)
console.log(tiger)
tiger.password = "Hello"
console.log(tiger.password)

// Create an instance of a class
let dog = new Animal("lab", 4)
let cat = new Animal("ragdoll", 4)
cat.speak()

// console.log(dog, cat)
// console.log(dog.name, cat.legs)
// console.log(dog.name, cat.name)

let numbers = [1, 2, 4]
class Template {
    constructor(n){
        this.value = n 
    }
}