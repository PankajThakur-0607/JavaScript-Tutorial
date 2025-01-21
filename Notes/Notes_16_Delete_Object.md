If you create an object in JavaScript without using any keyword (like `var`, `let`, `const`, or `new`), it will have different behaviors depending on how it's created and where it's created.

### Creating an Object Without Using Any Keyword

1. **Without `var`, `let`, or `const` (implicitly declared as a global variable):**

   If you create an object without using `var`, `let`, or `const`, the object will become a global variable. This is generally considered bad practice as it can lead to unexpected behavior and difficulties in debugging.

   ```javascript
   myObject = { name: "Alice" }; // Implicitly declared global object
   console.log(myObject); // { name: "Alice" }
   ```

   In this case, `myObject` is created as a global variable, and it can be accessed from anywhere in your script.

2. **Using Object Literals:**

   You can create an object using an object literal directly without needing a keyword, as long as it is part of an assignment.

   ```javascript
   const person = { name: "Bob" }; // Object literal with `const`
   console.log(person); // { name: "Bob" }
   ```

### How the `delete` Keyword Works

The `delete` keyword is used to remove a property from an object.

- **Deleting a Property from an Object:**

  The `delete` keyword works to remove a specific property from an object.

  ```javascript
  const car = { brand: "Toyota", model: "Camry" };
  delete car.model; // Deletes the `model` property
  console.log(car); // { brand: "Toyota" }
  ```

  Here, the `delete` keyword successfully removes the `model` property from the `car` object.

- **Deleting an Object Itself:**

  The `delete` keyword **cannot delete an object itself** if it is declared with `var`, `let`, or `const`. It can only delete properties of an object.

  ```javascript
  const animal = { type: "Dog" };
  delete animal; // Does nothing
  console.log(animal); // { type: "Dog" }
  ```

  In this example, `delete animal` has no effect because `animal` is not a property but a variable.

- **Deleting Global Objects or Variables:**

  If an object is implicitly declared as a global variable (without `var`, `let`, or `const`), `delete` can be used to remove it:

  ```javascript
  globalVar = { test: 123 }; // Implicitly declared global variable
  console.log(globalVar); // { test: 123 }
  
  delete globalVar; // Deletes the global variable
  console.log(globalVar); // ReferenceError: globalVar is not defined
  ```

  In this case, `delete globalVar` removes the `globalVar` from the global scope.

### Summary

- **Objects created without `var`, `let`, or `const` become global variables**.
- **`delete` removes properties from objects but cannot delete variables declared with `var`, `let`, or `const`.**
- **`delete` can remove global variables if they are implicitly declared**. 

Would you like more examples or details on any specific case?