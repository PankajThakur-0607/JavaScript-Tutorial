In JavaScript, if you define a function as a constructor function (using the `function` keyword and calling it with `new`), JavaScript will implicitly return the new object created by the constructor, even if you don't explicitly return `this`.

However, in your example, you are calling the function `User` without the `new` keyword:

```javascript
const userOne = User("pankaj" , 10 , false);
```

When you do this, the function is invoked as a regular function, not as a constructor. This means:

1. The `this` keyword inside the function will refer to the global object (`window` in browsers, `global` in Node.js) instead of a new instance of `User`.
2. The properties `username`, `loginCount`, and `isLoggedIn` will be set on the global object.
3. The variable `userOne` will be `undefined` because the function does not explicitly return anything.

Here's a breakdown of the behavior:

- **Without `new`:** The function `User` is called as a normal function. `this` refers to the global object, and the properties are assigned to it. `userOne` is `undefined` because `User` does not return a value.

```javascript
function User(username , loginCount , isLoggedIn){
    this.username = username ;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // No return statement, so implicitly returns `undefined`
}

const userOne = User("pankaj" , 10 , false);

console.log(userOne);  // Outputs: undefined
console.log(global.username);  // Outputs: "pankaj" (if in Node.js)
console.log(window.username);  // Outputs: "pankaj" (if in browser)
```

- **With `new`:** The function `User` is called as a constructor. `this` refers to the new instance, and the properties are assigned to this instance. The new instance is implicitly returned.

```javascript
function User(username , loginCount , isLoggedIn){
    this.username = username ;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // No return statement, but a new object is implicitly returned
}

const userOne = new User("pankaj" , 10 , false);

console.log(userOne);  // Outputs: User { username: 'pankaj', loginCount: 10, isLoggedIn: false }
```

So, to make sure `userOne` is assigned the new `User` object, you need to use the `new` keyword:

```javascript
const userOne = new User("pankaj" , 10 , false);
```





The values you are seeing in the output are properties and functions that are part of the global object in Node.js. When you call the function `User` without using the `new` keyword, `this` inside the function refers to the global object. This means any properties you set inside the function are added to the global object instead of creating a new instance of `User`.

Here's a step-by-step explanation:

1. **Global Object in Node.js**: 
   The global object in Node.js contains many properties and functions that are available globally throughout your application, such as `setTimeout`, `clearInterval`, and so on. These are always present in the global scope.

2. **Function Call Without `new`**:
   When you call `User("pankaj", 10, false)`, the `this` keyword inside the function refers to the global object. Thus, the properties `username`, `loginCount`, and `isLoggedIn` are set on the global object.

3. **Calling the Function Again**:
   When you call `User("Thakur", 15, true)`, it again sets `this.username`, `this.loginCount`, and `this.isLoggedIn` on the global object, overwriting the previous values set by the first call.

4. **Output of Global Object**:
   When you log the global object, you see all its properties and methods, including the properties you have added (`username`, `loginCount`, and `isLoggedIn`).

Let's go through the specific code and its effects:

```javascript
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}

const userOne = User("pankaj", 10, false); // Sets global.username = "pankaj", global.loginCount = 10, global.isLoggedIn = false
const userTwo = User("Thakur", 15, true); // Overwrites global.username = "Thakur", global.loginCount = 15, global.isLoggedIn = true

console.log(userOne); // Outputs: undefined
```

- The first call to `User` sets `username` to "pankaj", `loginCount` to 10, and `isLoggedIn` to false on the global object.
- The second call to `User` overwrites these values with `username` set to "Thakur", `loginCount` to 15, and `isLoggedIn` to true on the global object.
- `userOne` and `userTwo` are both `undefined` because the `User` function does not return a value when called without `new`.

Here's how you can correct this:

1. **Use the `new` Keyword**:
   This ensures that `this` inside the `User` function refers to a new instance of `User`, not the global object.

```javascript
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}

const userOne = new User("pankaj", 10, false);
const userTwo = new User("Thakur", 15, true);

console.log(userOne); // Outputs: User { username: 'pankaj', loginCount: 10, isLoggedIn: false }
console.log(userTwo); // Outputs: User { username: 'Thakur', loginCount: 15, isLoggedIn: true }
```

Using the `new` keyword ensures that `userOne` and `userTwo` are instances of `User` with their own properties, and the global object remains unchanged except for its original properties and methods.





The output of the global object contains all its built-in properties and methods, as well as the custom properties you've added when calling the `User` function without the `new` keyword. Let's break down the components of the global object output you provided:

```plaintext
global: [Circular *1],
clearImmediate: [Function: clearImmediate],
setImmediate: [Function: setImmediate] {
  [Symbol(nodejs.util.promisify.custom)]: [Getter]
},
clearInterval: [Function: clearInterval],
clearTimeout: [Function: clearTimeout],
setInterval: [Function: setInterval],
setTimeout: [Function: setTimeout] {
  [Symbol(nodejs.util.promisify.custom)]: [Getter]
},
queueMicrotask: [Function: queueMicrotask],
structuredClone: [Function: structuredClone],
atob: [Getter/Setter],
btoa: [Getter/Setter],
performance: [Getter/Setter],
fetch: [Function: value],
navigator: [Getter],
crypto: [Getter],
username: 'Thakur',
loginCount: 15,
isLoggedIn: true
```

### Breakdown of the Global Object Components

1. **Built-in Global Properties and Methods**:
   - **global**: This refers to the global object itself. `[Circular *1]` indicates a circular reference, meaning the global object contains a reference to itself.
   - **clearImmediate, setImmediate, clearInterval, clearTimeout, setInterval, setTimeout**: These are Node.js functions for scheduling and managing timers.
   - **queueMicrotask**: Used to queue microtasks, which are tasks that are executed after the current script execution completes.
   - **structuredClone**: Used for deep cloning objects.
   - **atob, btoa**: Functions to decode and encode base-64 strings.
   - **performance**: Provides access to performance-related methods and properties.
   - **fetch**: A function to make network requests.
   - **navigator**: Provides information about the user agent.
   - **crypto**: Provides access to cryptographic functions.

2. **Custom Properties Added by Your Function Calls**:
   - **username**: This property was added when you called `User("Thakur", 15, true)`, overwriting the previous value set by `User("pankaj", 10, false)`.
   - **loginCount**: This property was similarly added and overwritten.
   - **isLoggedIn**: This property was added and overwritten in the same manner.

### Explanation of How These Custom Properties Were Added

When you call `User("pankaj", 10, false)` without `new`, the function is executed in the context of the global object. Here’s what happens:

```javascript
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}

const userOne = User("pankaj", 10, false);
// At this point, global.username is "pankaj", global.loginCount is 10, global.isLoggedIn is false

const userTwo = User("Thakur", 15, true);
// Now, global.username is "Thakur", global.loginCount is 15, global.isLoggedIn is true
```

In each function call, `this` refers to the global object. Thus, the properties `username`, `loginCount`, and `isLoggedIn` are added to the global object. Each subsequent call to `User` without `new` overwrites these properties.

### The Correct Approach

To avoid adding properties to the global object, you should use the `new` keyword when calling your constructor function. This ensures that `this` refers to a new instance of `User`, not the global object:

```javascript
const userOne = new User("pankaj", 10, false);
const userTwo = new User("Thakur", 15, true);

console.log(userOne); // Outputs: User { username: 'pankaj', loginCount: 10, isLoggedIn: false }
console.log(userTwo); // Outputs: User { username: 'Thakur', loginCount: 15, isLoggedIn: true }
```

Using `new` creates separate instances for `userOne` and `userTwo` with their own properties, and the global object remains unaffected by these property assignments.








# if i dont use new then what will happen ?




If you don't use the `new` keyword when calling the `User` function, several things will happen:

1. **`this` Will Refer to the Global Object**: In non-strict mode, the `this` keyword inside the `User` function will refer to the global object (`window` in browsers, `global` in Node.js) instead of a new instance. In strict mode, `this` will be `undefined`.

2. **Properties Will Be Added to the Global Object**: The properties `username`, `loginCount`, `isLoggedIn`, and the method `greeting` will be assigned to the global object.

3. **The Return Value**: Since the function does not explicitly return a value, it will return `undefined`.

4. **Methods on Instances**: The `greeting` method won't be available on `userOne` or `userTwo` because these variables will be `undefined`.

Here’s what happens with and without `new`:

### Without `new`

```javascript
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }
}

const userOne = User("pankaj", 10, false);
const userTwo = User("Thakur", 15, true);

console.log(userOne); // Outputs: undefined
console.log(userTwo); // Outputs: undefined

// Accessing global properties
console.log(global.username); // Outputs: "Thakur" (Node.js) or window.username (Browser)
console.log(global.loginCount); // Outputs: 15
console.log(global.isLoggedIn); // Outputs: true
global.greeting(); // Outputs: "Welcome Thakur"
```

In this example:
- `userOne` and `userTwo` are `undefined` because the `User` function does not return anything.
- Properties `username`, `loginCount`, `isLoggedIn`, and the `greeting` method are added to the global object.
- The second call to `User` overwrites the properties set by the first call.

### With `new`

```javascript
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }
}

const userOne = new User("pankaj", 10, false);
const userTwo = new User("Thakur", 15, true);

console.log(userOne); // Outputs: User { username: 'pankaj', loginCount: 10, isLoggedIn: false, greeting: [Function] }
console.log(userTwo); // Outputs: User { username: 'Thakur', loginCount: 15, isLoggedIn: true, greeting: [Function] }

// Accessing instance methods
userOne.greeting(); // Outputs: "Welcome pankaj"
userTwo.greeting(); // Outputs: "Welcome Thakur"
```

In this example:
- `userOne` and `userTwo` are instances of `User` with their own properties and `greeting` method.
- Each instance maintains its own state independently of the global object.

### Conclusion

Without `new`:
- The `User` function acts like a regular function, modifying the global object.
- `this` inside the function refers to the global object, leading to unintended side effects.

With `new`:
- The `User` function acts as a constructor, creating new instances with their own properties and methods.
- `this` inside the function refers to the new instance, ensuring encapsulation and avoiding global pollution.

Always use the `new` keyword when calling a constructor function to create new instances properly.