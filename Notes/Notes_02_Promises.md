JavaScript's `Promise` object provides a way to handle asynchronous operations. There are several static and instance methods in the `Promise` class that allow you to control and manipulate the behavior of promises.

Here’s a detailed explanation of all the main methods:

### 1. **`Promise.resolve()`**

`Promise.resolve()` is used to create a promise that is resolved with a given value. If you pass another promise to it, it will return that promise.

#### Syntax:
```javascript
Promise.resolve(value);
```

#### Example:
```javascript
const promise = Promise.resolve('Success!');
promise.then((value) => {
    console.log(value); // Output: 'Success!'
});
```

### 2. **`Promise.reject()`**

`Promise.reject()` is used to create a promise that is rejected with a given reason (error message).

#### Syntax:
```javascript
Promise.reject(reason);
```

#### Example:
```javascript
const promise = Promise.reject('Failed!');
promise.catch((error) => {
    console.log(error); // Output: 'Failed!'
});
```

### 3. **`Promise.all()`**

`Promise.all()` takes an array of promises and returns a single promise that resolves when **all the promises resolve**, or rejects as soon as **any one promise rejects**.

#### Syntax:
```javascript
Promise.all([promise1, promise2, ...]);
```

#### Example:
```javascript
const promise1 = Promise.resolve('First Promise');
const promise2 = Promise.resolve('Second Promise');
const promise3 = Promise.reject('Failed!');

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);  // This will not run
    })
    .catch((error) => {
        console.log(error); // Output: 'Failed!' (because promise3 was rejected)
    });
```

### 4. **`Promise.allSettled()`**

`Promise.allSettled()` returns a promise that resolves when **all the promises have either resolved or rejected**. It never short-circuits like `Promise.all()`, so it waits for every promise to settle (either resolve or reject).

#### Syntax:
```javascript
Promise.allSettled([promise1, promise2, ...]);
```

#### Example:
```javascript
const promise1 = Promise.resolve('First Promise');
const promise2 = Promise.reject('Failed!');
const promise3 = Promise.resolve('Third Promise');

Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
        // Output:
        // [
        //   { status: 'fulfilled', value: 'First Promise' },
        //   { status: 'rejected', reason: 'Failed!' },
        //   { status: 'fulfilled', value: 'Third Promise' }
        // ]
    });
```

### 5. **`Promise.race()`**

`Promise.race()` returns a promise that resolves or rejects as soon as **one of the promises in the array resolves or rejects**, with the value or reason from that promise.

#### Syntax:
```javascript
Promise.race([promise1, promise2, ...]);
```

#### Example:
```javascript
const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'First Promise'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'Second Promise'));

Promise.race([promise1, promise2])
    .then((value) => {
        console.log(value);  // Output: 'Second Promise' (because it resolved faster)
    });
```

### 6. **`Promise.any()`**

`Promise.any()` returns a promise that resolves as soon as **any one of the promises resolves**. If **all promises reject**, it rejects with an `AggregateError` (a special error that stores all rejection errors).

#### Syntax:
```javascript
Promise.any([promise1, promise2, ...]);
```

#### Example:
```javascript
const promise1 = Promise.reject('Failed 1');
const promise2 = Promise.resolve('Success 2');
const promise3 = Promise.reject('Failed 3');

Promise.any([promise1, promise2, promise3])
    .then((value) => {
        console.log(value);  // Output: 'Success 2' (because it's the first resolved promise)
    })
    .catch((error) => {
        console.log(error.errors);  // This will not run because one promise was resolved
    });
```

### 7. **`Promise.prototype.then()`**

`then()` is a method that is used to handle a successful resolution of a promise. It takes two optional arguments:
1. A function that runs when the promise resolves.
2. A function that runs when the promise rejects (error).

#### Syntax:
```javascript
promise.then(onFulfilled, onRejected);
```

#### Example:
```javascript
const promise = Promise.resolve('Success!');
promise.then(
    (value) => {
        console.log(value); // Output: 'Success!' (when resolved)
    },
    (error) => {
        console.log(error); // Will not run
    }
);
```

### 8. **`Promise.prototype.catch()`**

`catch()` is used to handle a promise that is rejected. It's a shortcut for `.then(null, onRejected)`.

#### Syntax:
```javascript
promise.catch(onRejected);
```

#### Example:
```javascript
const promise = Promise.reject('Error!');
promise.catch((error) => {
    console.log(error); // Output: 'Error!'
});
```

### 9. **`Promise.prototype.finally()`**

`finally()` allows you to run some code after a promise settles (regardless of whether it resolves or rejects). It doesn't receive any arguments, and it doesn't change the value or error of the promise.

#### Syntax:
```javascript
promise.finally(onFinally);
```

#### Example:
```javascript
const promise = Promise.resolve('Success!');
promise
    .then((value) => {
        console.log(value); // Output: 'Success!'
    })
    .finally(() => {
        console.log('Promise settled (resolved or rejected)'); // Output: 'Promise settled'
    });
```

### Summary of Methods:
- **`Promise.resolve()`**: Creates a resolved promise.
- **`Promise.reject()`**: Creates a rejected promise.
- **`Promise.all()`**: Resolves when all promises resolve, or rejects if any promise rejects.
- **`Promise.allSettled()`**: Resolves when all promises settle (either resolved or rejected).
- **`Promise.race()`**: Resolves or rejects as soon as the first promise resolves or rejects.
- **`Promise.any()`**: Resolves when any one promise resolves, or rejects if all reject.
- **`then()`**: Handles promise resolution.
- **`catch()`**: Handles promise rejection.
- **`finally()`**: Runs code after promise settles, regardless of success or failure.

Each method provides a unique way to handle promises in different scenarios, making `Promise` a powerful tool for working with asynchronous code.