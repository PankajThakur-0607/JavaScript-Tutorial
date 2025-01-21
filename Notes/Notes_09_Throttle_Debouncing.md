Debouncing and throttling are two techniques used in JavaScript to control the frequency of function execution, particularly in the context of events like scrolling, resizing, typing, etc. Both techniques can improve performance by reducing the number of times an expensive operation is called.

### 1. **Debouncing**:
Debouncing ensures that a function is only executed once after a certain delay, regardless of how many times an event is triggered. This is useful for scenarios where you want to wait until an event has stopped firing for a certain period before executing a function.

#### How it works:
- If an event is triggered multiple times (like keystrokes in a search input), the debounced function will wait until a certain time has passed after the last event.
- If new events keep coming in during the waiting period, the timer is reset.
  
#### Example use cases:
- **Search Input**: Triggering an API call after a user stops typing for a short period (so the API call isn't fired on every keypress).
- **Window Resize**: Performing actions after a user stops resizing the window.

#### Debounce Code Example:
```javascript
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout); // Clear previous timeout
        timeout = setTimeout(() => func(...args), wait); // Set new timeout
    };
}

// Example: Using debounce to limit the number of times the input is processed
const handleInput = debounce(function() {
    console.log('Input processed');
}, 500);

document.querySelector('input').addEventListener('input', handleInput);
```

In this example:
- `handleInput` will only fire 500 milliseconds after the last input event is triggered.

### 2. **Throttling**:
Throttling ensures that a function is executed at regular intervals, no matter how many times the event is triggered. This technique is used to limit how often a function can be called, but unlike debouncing, it guarantees the function will be called at regular intervals.

#### How it works:
- The function is executed at a fixed interval, regardless of how many times an event occurs during that interval.
- It allows the function to be called at most once in a given time period, which helps avoid overloading the system with too many calls.

#### Example use cases:
- **Scroll Events**: Performing an action like lazy loading or animations when the user scrolls, but only once every 100ms, rather than on every pixel the user scrolls.
- **Resize Events**: Updating the layout only once every 200ms during a window resize.

#### Throttle Code Example:
```javascript
function throttle(func, wait) {
    let lastTime = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastTime >= wait) {
            lastTime = now;
            func(...args);
        }
    };
}

// Example: Using throttle to limit the number of times the user scrolls
const handleScroll = throttle(function() {
    console.log('Scroll event triggered');
}, 200);

window.addEventListener('scroll', handleScroll);
```

In this example:
- `handleScroll` will only be called at most once every 200ms, regardless of how fast the user scrolls.

### Key Differences:
- **Debouncing**: The function is executed only once after a delay, and only if no other event is triggered during the waiting period.
- **Throttling**: The function is executed at regular intervals, even if the event is triggered multiple times in rapid succession.

### Performance Consideration:
- **Debouncing** is ideal for cases where you want to wait until the user has stopped interacting (e.g., typing).
- **Throttling** is better when you need to continuously perform a task at intervals, such as responding to scrolling or resizing, but don’t want to overload the system with too many executions.

Both of these techniques help to improve the user experience by optimizing performance, especially when dealing with high-frequency events.