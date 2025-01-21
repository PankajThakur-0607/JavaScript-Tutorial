Sure! Let's break it down into simpler words and provide detailed examples for each concept: Enumerable vs. Non-Enumerable, String vs. Symbol, and Own vs. Inherited Properties.

### 1. Enumerable vs. Non-Enumerable

**Enumerable Properties**:
- These properties can be listed when you use loops or methods that iterate over an object's properties, like `for...in` loops or `Object.keys()`.

**Non-Enumerable Properties**:
- These properties do not show up in such loops or methods. However, you can still access them directly if you know their names.

#### Example

```javascript
let obj = { a: 1, b: 2 };
Object.defineProperty(obj, 'c', {
  value: 3,
  enumerable: false // This makes 'c' non-enumerable
});

console.log(Object.keys(obj)); // Output: ['a', 'b'] - 'c' is not listed
console.log(obj.c); // Output: 3 - 'c' can still be accessed directly
```

### 2. String vs. Symbol

**String Keys**:
- These are the most common type of keys used to add properties to an object.

**Symbol Keys**:
- Symbols are a unique and newer way to create property keys. They are unique even if they have the same description.

#### Example

```javascript
let obj = {};
obj['key'] = 'string key'; // Adding a property with a string key
let sym = Symbol('sym');
obj[sym] = 'symbol key'; // Adding a property with a symbol key

console.log(obj['key']); // Output: 'string key'
console.log(obj[sym]); // Output: 'symbol key'
```

### 3. Own Property vs. Inherited Property

**Own Properties**:
- These properties are defined directly on the object itself.

**Inherited Properties**:
- These properties are not directly on the object but are inherited from its prototype chain.

#### Example

```javascript
// Creating an object with a prototype that has an inherited property
let proto = { inherited: 'this is from the prototype' };

let obj = Object.create(proto); // obj inherits properties from proto
obj.own = 'this is an own property'; // Adding an own property to obj

console.log(obj.own); // Output: 'this is an own property'
console.log(obj.inherited); // Output: 'this is from the prototype'
console.log(obj.hasOwnProperty('own')); // Output: true - 'own' is an own property
console.log(obj.hasOwnProperty('inherited')); // Output: false - 'inherited' is an inherited property
```

### Inherited Property Example

```javascript
let animal = {
  species: 'mammal'
};

let dog = Object.create(animal); // dog inherits properties from animal
dog.breed = 'Labrador'; // Adding an own property to dog

console.log(dog.breed); // Output: 'Labrador' - own property
console.log(dog.species); // Output: 'mammal' - inherited property
console.log(dog.hasOwnProperty('species')); // Output: false - 'species' is inherited
```

### Summary

- **Enumerable vs. Non-Enumerable**: Determines if a property shows up in loops or methods that list properties.
  - **Example**: `Object.keys(obj)` will not list non-enumerable properties.
- **String vs. Symbol**: Specifies the type of key used for the property.
  - **Example**: Symbols are unique and won't conflict with other keys.
- **Own vs. Inherited**: Specifies whether the property is directly on the object or inherited from its prototype chain.
  - **Example**: `obj.hasOwnProperty('key')` returns true for own properties and false for inherited ones.

Understanding these distinctions helps you manage and interact with JavaScript objects more effectively.