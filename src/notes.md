# combineDetails Function

## Function Code

```typescript
function combineDetails(...args: any[]): any;

function combineDetails(...args: any[]) : any {
    return args.reduce((acc, val) => acc + val, '');
}
```

## Function Signature Explanation

- `...args: any[]` - Rest parameters that collect all arguments passed to the function into an array called args. It accepts any number of arguments of any type.
- `: any` - Return type is any (could be string, number, etc.)

## Implementation Details

The function uses `args.reduce((acc, val) => acc + val, '')`:

- `.reduce()` - Array method that iterates through each element and combines them into a single value
- `(acc, val) => acc + val` - Arrow function where:
  - `acc` = accumulator (builds up the result)
  - `val` = current value being processed
  - Returns `acc + val` (concatenates them together)
- `''` - Initial value for the accumulator (empty string)

## Step-by-Step Examples

### Example 1: combineDetails(200)

- args = [200]
- Start with acc = ''
- Iteration 1: '' + 200 = '200'
- Returns '200'

### Example 2: combineDetails("hello", 100, 300)

- args = ["hello", 100, 300]
- Start with acc = ''
- Iteration 1: '' + "hello" = "hello"
- Iteration 2: "hello" + 100 = "hello100"
- Iteration 3: "hello100" + 300 = "hello100300"
- Returns 'hello100300'

# Optional Chaining Operator

## What is Optional Chaining?

The `?.` operator safely accesses nested properties or array elements without crashing if they don't exist.

## How It Works

```typescript
twoDimensionalArray[1]?.[1]
```

- First, it tries to access `twoDimensionalArray[1]`
- If that element exists, it then accesses `[1]` on it
- If `twoDimensionalArray[1]` is `undefined` or `null`, the entire expression returns `undefined` instead of throwing an error

## Comparison

Without optional chaining (crashes if element doesn't exist):
```typescript
twoDimensionalArray[1][1]
```

With optional chaining (safely returns undefined):
```typescript
twoDimensionalArray[1]?.[1]
```

This is the TypeScript way to safely access nested array elements.

## When will i use 2D array in automation scenarios?

> when i am reading data from csv and excel files, etc

## Tuple?

> a fixed length ordered array

> each element of a tuple can be of a different type

> tuples let you define the exact type and number of elements


## Fixing the errors got in the console on non - executing the faker library

#### 📦 Node Modules: CommonJS vs ESM

* **CommonJS (old Node)**

  ```js
  const lib = require('lib');
  module.exports = {};
  ```

* **ESM (modern JS)**

  ```js
  import lib from 'lib';
  export {};
  ```

---

#### 🧠 What is a Node-style ESM package?

* Uses **`import/export`**
* Follows **Node.js ESM rules**
* Example: `@faker-js/faker`
* Requires proper ESM setup in your project

---

#### ❗ Root cause of errors

> Mismatch between:

* Your code → `import`
* TypeScript config → CommonJS ❌
* Package → ESM ✅

👉 Result: module not found / import errors

---

#### ⚙️ Required TypeScript config (ESM setup)

```json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "esModuleInterop": true,
    "types": ["node"]
  }
}
```

---

#### 📦 package.json requirement

```json
{
  "type": "module"
}
```

---

#### ▶️ Execution flow (important)

```
TypeScript Code (.ts)
        ↓
TypeScript Compiler (tsconfig)
        ↓
Module Resolution (NodeNext)
        ↓
Node.js Runtime (ESM/CommonJS)
        ↓
Execution
```

---

#### 🚨 Key rule

* `import` → use **ESM (NodeNext)**
* `require` → use **CommonJS**

👉 Don’t mix both

---

#### 💡 Practical takeaway

* ESM = modern standard
* NodeNext = aligns TS with Node behavior
* Errors happen when **TS + Node + package are not aligned**

---

#### 🎯 Quick fallback (when stuck)

```js
const { faker } = require('@faker-js/faker');
```

👉 Use this to avoid config issues during learning

---

#### 🧠 Interview-ready line

> “Module errors in TypeScript usually come from mismatched module systems (CommonJS vs ESM) and incorrect moduleResolution settings.”
