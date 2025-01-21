
# What is a Backreference?

A **backreference** in regular expressions is a way to **reuse** part of the text that was previously matched. Specifically, it allows you to refer to a **capturing group** from earlier in the pattern and make sure the same text appears again later in the string.

In simple words, it helps match **repeated patterns** or **ensure consistency** in the matching text.

## How Does It Work?

When you create a **capturing group** using parentheses `()`, you can refer to that captured match later in the regular expression using a backreference like `\1`, `\2`, etc., where:

- `\1` refers to the **first** capturing group,
- `\2` refers to the **second**, and so on.

## Let's Break It Down with Examples

### 1. Example 1: Matching Repeated Words

- **Pattern:** `\b(\w+)\b \1`
- **Explanation:**
  - `(\w+)`: This captures a word (a sequence of letters or numbers).
  - `\1`: This backreference makes sure the next part of the text matches exactly what was captured in the first group (the word).
  - This pattern matches **any two consecutive identical words**.
- **Example Matches:**
  - `"hello hello"` ✅ (same word repeated)
  - `"dog dog"` ✅ (same word repeated)
  - `"cat bat"` ❌ (different words)

### 2. Example 2: Matching HTML Tags

- **Pattern:** `<([a-z]+)>.*?</\1>`
- **Explanation:**
  - `<([a-z]+)>`: This matches an opening HTML tag, like `<div>` or `<p>`, and captures the tag name (e.g., `div` or `p`).
  - `.*?`: This matches anything inside the tag.
  - `</\1>`: This matches a closing HTML tag, where `\1` ensures that the tag name is the same as the opening tag.
- **Example Matches:**
  - `"<div>Some content</div>"` ✅
  - `"<p>Paragraph</p>"` ✅
  - `"<div>Content</p>"` ❌ (opening and closing tags don't match)

### 3. Example 3: Matching Palindromes

- **Pattern:** `\b(\w)\w?\1\b`
- **Explanation:**
  - `(\w)`: Captures the first character.
  - `\w?`: Matches the middle character (if the word has an odd length).
  - `\1`: Ensures the last character is the same as the first one (a palindrome).
- **Example Matches:**
  - `"madam"` ✅
  - `"noon"` ✅
  - `"hello"` ❌

### 4. Example 4: Matching Quotes with the Same Opening and Closing Quotes

- **Pattern:** `([\'"]).*?\1`
- **Explanation:**
  - `([\'"])`: Captures a single or double quote.
  - `.*?`: Matches any characters inside the quotes (non-greedily).
  - `\1`: Ensures that the closing quote is the same as the opening quote.
- **Example Matches:**
  - `"hello"` ✅ (matching double quotes)
  - `'world'` ✅ (matching single quotes)
  - `'hello"` ❌ (different quotes)

### 5. Example 5: Matching Repeated Numbers

- **Pattern:** `(\d)\1`
- **Explanation:**
  - `(\d)`: Captures a single digit.
  - `\1`: Matches the same digit again.
- **Example Matches:**
  - `"11"` ✅
  - `"22"` ✅
  - `"23"` ❌ (different digits)

## More Complex Example

### 6. Example 6: Matching Repeated Groups of Characters

- **Pattern:** `(\w{3})-\1`
- **Explanation:**
  - `(\w{3})`: Captures a group of **three characters**.
  - `\1`: Ensures that the same three characters appear again after a hyphen.
- **Example Matches:**
  - `"abc-abc"` ✅
  - `"123-123"` ✅
  - `"abc-xyz"` ❌ (different groups)

---

## Summary

- A **backreference** allows you to match the **same text** as an earlier part of your regex.
- It uses the syntax `\1`, `\2`, etc., to refer to the **first, second**, and subsequent **captured groups**.
- Backreferences are useful for **matching repeated words, patterns, or enforcing symmetry** (e.g., matching the same opening and closing tags or quotes).

---

Here are code examples for the regular expressions with backreferences in JavaScript. I'll walk you through each of the examples mentioned:

### Example 1: Matching Repeated Words

```javascript
const text1 = "hello hello world";
const pattern1 = /\b(\w+)\b \1/g;  // \1 is the backreference to the first captured word

const result1 = text1.match(pattern1);
console.log(result1);  // Output: ["hello hello"]
```

### Example 2: Matching HTML Tags

```javascript
const text2 = "<div>This is a div</div><p>This is a paragraph</p>";
const pattern2 = /<([a-z]+)>.*?<\/\1>/g;  // \1 backreference ensures matching closing tag

const result2 = text2.match(pattern2);
console.log(result2);  // Output: ["<div>This is a div</div>", "<p>This is a paragraph</p>"]
```

### Example 3: Matching Palindromes

```javascript
const text3 = "madam noon racecar";
const pattern3 = /\b(\w)\w?\1\b/g;  // \1 backreference ensures first and last character match

const result3 = text3.match(pattern3);
console.log(result3);  // Output: ["madam", "noon"]
```

### Example 4: Matching Quotes with the Same Opening and Closing Quotes

```javascript
const text4 = `"hello" 'world' "foo' 'bar"`;
const pattern4 = /([\'"]).*?\1/g;  // \1 backreference ensures matching opening and closing quotes

const result4 = text4.match(pattern4);
console.log(result4);  // Output: ['"hello"', "'world'"]
```

### Example 5: Matching Repeated Numbers

```javascript
const text5 = "1122 1234 5566";
const pattern5 = /(\d)\1/g;  // \1 backreference ensures repeated digit

const result5 = text5.match(pattern5);
console.log(result5);  // Output: ["11", "22", "55", "66"]
```

### Example 6: Matching Repeated Groups of Characters

```javascript
const text6 = "abc-abc def-def ghi-xyz";
const pattern6 = /(\w{3})-\1/g;  // \1 backreference ensures the same group of 3 characters appears after a hyphen

const result6 = text6.match(pattern6);
console.log(result6);  // Output: ["abc-abc", "def-def"]
```

### Explanation

- **`\b`**: Word boundary to ensure we are matching whole words.
- **`(\w+)`**: Captures one or more word characters (letters, digits).
- **`\1`**: Refers to the first captured group (the word in the first example).
- **`[\'"]`**: Matches a single or double quote.
- **`(\d)`**: Captures a digit.
- **`.*?`**: Non-greedy match for any characters.
  
Each of these code snippets demonstrates how backreferences work in a real-world scenario. You can run these examples in your browser or any JavaScript environment.
