### Detailed Explanation of `map`, `filter`, and `reduce` in JavaScript with Multiple Examples

---

### 1. **`map()`**
The `map` method is used to **transform** each element of an array using a callback function and returns a new array with the transformed elements. The original array is not modified.

#### **Key Points:**
- Input array length = Output array length.
- Used for transformations (e.g., scaling numbers, formatting strings, etc.).
- Always returns a new array.

---

#### **Syntax:**
```javascript
array.map(callback(currentValue, index, array), thisArg);
```
- `callback`: The function applied to each element.
  - `currentValue`: The current element being processed.
  - `index` (optional): The index of the current element.
  - `array` (optional): The original array.
- `thisArg` (optional): Value to use as `this` in the callback function.

---

#### **Examples:**

1. **Doubling Numbers**
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(x => x * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

2. **Formatting Strings**
```javascript
const names = ['alice', 'bob', 'charlie'];
const capitalized = names.map(name => name.toUpperCase());
console.log(capitalized); // Output: ['ALICE', 'BOB', 'CHARLIE']
```

3. **Extracting Properties from Objects**
```javascript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
const userNames = users.map(user => user.name);
console.log(userNames); // Output: ['Alice', 'Bob', 'Charlie']
```

---

### 2. **`filter()`**
The `filter` method is used to **select/filter** elements from an array based on a condition defined in the callback function. It returns a new array with the elements that satisfy the condition.

#### **Key Points:**
- The output array length ≤ Input array length.
- Used for selection or filtering (e.g., selecting even numbers, removing null values, etc.).
- Always returns a new array.

---

#### **Syntax:**
```javascript
array.filter(callback(currentValue, index, array), thisArg);
```
- `callback`: A function that returns `true` or `false` for each element.
  - If `true`, the element is included in the output array.
  - If `false`, the element is excluded.

---

#### **Examples:**

1. **Filtering Even Numbers**
```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // Output: [2, 4]
```

2. **Filtering Non-Null Values**
```javascript
const items = [1, null, 2, undefined, 3];
const validItems = items.filter(item => item != null);
console.log(validItems); // Output: [1, 2, 3]
```

3. **Filtering Objects**
```javascript
const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true }
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);
// Output: [{ id: 1, name: 'Alice', active: true }, { id: 3, name: 'Charlie', active: true }]
```

---

### 3. **`reduce()`**
The `reduce` method is used to **aggregate** (reduce) all elements in an array into a single value by applying a reducer function. The reducer function is applied cumulatively, combining elements from left to right.

#### **Key Points:**
- The output is a single value (e.g., a number, string, object, etc.).
- Used for calculations, summarizations, or building objects (e.g., summing numbers, counting occurrences, etc.).
- Returns the reduced result.

---

#### **Syntax:**
```javascript
array.reduce(callback(accumulator, currentValue, index, array), initialValue);
```
- `callback`: A function to apply to the elements.
  - `accumulator`: The accumulated value so far.
  - `currentValue`: The current element being processed.
  - `index` (optional): The index of the current element.
  - `array` (optional): The original array.
- `initialValue` (optional): The initial value of the accumulator.

---

#### **Examples:**

1. **Summing Numbers**
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10
```

2. **Finding the Product**
```javascript
const numbers = [1, 2, 3, 4];
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product); // Output: 24
```

3. **Counting Occurrences**
```javascript
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const counts = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(counts); 
// Output: { apple: 3, banana: 2, orange: 1 }
```

4. **Flattening Arrays**
```javascript
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // Output: [1, 2, 3, 4, 5]
```

---

### Combined Example: Using `map`, `filter`, and `reduce`
Problem: Given an array of numbers, double the numbers, keep only those greater than 5, and find their sum.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Step 1: Double the numbers (map)
const doubled = numbers.map(x => x * 2); // [2, 4, 6, 8, 10]

// Step 2: Filter numbers greater than 5 (filter)
const greaterThanFive = doubled.filter(x => x > 5); // [6, 8, 10]

// Step 3: Sum the numbers (reduce)
const sum = greaterThanFive.reduce((acc, curr) => acc + curr, 0); // 24

console.log(sum); // Output: 24
```

---

### Summary of Differences:
| Method       | Returns        | Purpose                 | Output Size         |
|--------------|----------------|-------------------------|---------------------|
| **`map`**    | New Array      | Transformation          | Same as input array |
| **`filter`** | New Array      | Selection/Filtering     | ≤ Input array       |
| **`reduce`** | Single Value   | Aggregation/Reduction   | 1                   |

By combining these methods, you can process arrays in a functional and efficient way.