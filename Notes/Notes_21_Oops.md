# javascripts and classes

## OOP

## objects

- collection of properties and methods
- tolowerCase() <!-- example -->

## why use OOP

## parts of OOP

object literal

- Constructor function

In JavaScript, if you define a function as a constructor function (using the `function` keyword and calling it with `new`), JavaScript will implicitly return the new object created by the constructor, even if you don't explicitly return `this`.

However, in your example, you are calling the function `User` without the `new` keyword:

```javascript
const userOne = User("pankaj", 10, false);
```

When you do this, the function is invoked as a regular function, not as a constructor. This means:

1. The `this` keyword inside the function will refer to the global object (`window` in browsers, `global` in Node.js) instead of a new instance of `User`.
2. The properties `username`, `loginCount`, and `isLoggedIn` will be set on the global object.
3. The variable `userOne` will be `undefined` because the function does not explicitly return anything.

Here's a breakdown of the behavior:

- **Without `new`:** The function `User` is called as a normal function. `this` refers to the global object, and the properties are assigned to it. `userOne` is `undefined` because `User` does not return a value.

```javascript
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  // No return statement, so implicitly returns `undefined`
}

const userOne = User("pankaj", 10, false);

console.log(userOne); // Outputs: undefined
console.log(global.username); // Outputs: "pankaj" (if in Node.js)
console.log(window.username); // Outputs: "pankaj" (if in browser)
```

- **With `new`:** The function `User` is called as a constructor. `this` refers to the new instance, and the properties are assigned to this instance. The new instance is implicitly returned.

```javascript
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  // No return statement, but a new object is implicitly returned
}

const userOne = new User("pankaj", 10, false);

console.log(userOne); // Outputs: User { username: 'pankaj', loginCount: 10, isLoggedIn: false }
```

So, to make sure `userOne` is assigned the new `User` object, you need to use the `new` keyword:

```javascript
const userOne = new User("pankaj", 10, false);
```

- prototypes
- classes
- instances

## 4 pillars

Sure! Let's simplify each concept with everyday examples:

### 1. Abstraction

**Simplified Explanation:** Hiding complex details and showing only the necessary parts.

**Example:** Think of a TV remote. You use the buttons to control the TV without knowing how the remote communicates with the TV or how the TV processes your commands. You only see the buttons (interface), not the inner workings (implementation).

### 2. Polymorphism

**Simplified Explanation:** One interface, many implementations.

**Example:** A universal remote can control a TV, a DVD player, and a sound system. Pressing the "play" button sends the right command whether it’s to the TV, DVD player, or sound system. The same button works differently depending on the device it’s controlling.

### 3. Inheritance

**Simplified Explanation:** A new thing gets properties and behaviors from an existing thing.

**Example:** Consider the relationship between a parent and child. A child inherits traits like eye color or hair type from their parent. In programming, a class `Dog` might inherit properties like `legs` and methods like `bark()` from a more general class `Animal`.

### 4. Encapsulation

**Simplified Explanation:** Keeping data safe and only accessible through specific ways.

**Example:** Think of a pill bottle with a child-proof cap. You can only access the medicine by opening the cap in a specific way. In programming, this means that an object's data (like a bank account balance) can only be changed through specific methods (like `deposit()` and `withdraw()`), keeping it safe from unauthorized changes.

These concepts help in organizing code, making it more efficient, reusable, and easier to understand.

Certainly! Here's how you can implement these concepts in JavaScript:

### 1. Abstraction

**Example:** Using a class to hide the details of how the volume is changed.

```javascript
class TV {
  constructor() {
    this.volume = 50; // Default volume
  }

  increaseVolume() {
    if (this.volume < 100) {
      this.volume += 10;
      console.log(`Volume increased to ${this.volume}`);
    }
  }

  decreaseVolume() {
    if (this.volume > 0) {
      this.volume -= 10;
      console.log(`Volume decreased to ${this.volume}`);
    }
  }
}

const myTV = new TV();
myTV.increaseVolume(); // Volume increased to 60
myTV.decreaseVolume(); // Volume decreased to 50
```

Here, you interact with the `increaseVolume()` and `decreaseVolume()` methods without needing to know how the volume is managed internally.

### 2. Polymorphism

**Example:** Different classes with a common method name that behaves differently.

```javascript
class Animal {
  makeSound() {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}

const myDog = new Dog();
const myCat = new Cat();

myDog.makeSound(); // Woof!
myCat.makeSound(); // Meow!
```

Here, `makeSound()` is implemented differently in `Dog` and `Cat`, showing polymorphism.

### 3. Inheritance

**Example:** One class inheriting properties and methods from another class.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const myDog = new Dog("Buddy");
myDog.eat(); // Buddy is eating.
myDog.bark(); // Woof!
```

Here, `Dog` inherits the `eat()` method and `name` property from `Animal`.

### 4. Encapsulation

**Example:** Using private fields and methods.

```javascript
class BankAccount {
  #balance = 0; // Private field

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Insufficient balance");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(100); // Deposited: 100. New balance: 100
myAccount.withdraw(50); // Withdrew: 50. New balance: 50
console.log(myAccount.getBalance()); // 50
```

Here, `#balance` is a private field, and it can only be modified through `deposit()` and `withdraw()` methods, demonstrating encapsulation.
