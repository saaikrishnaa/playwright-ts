# TypeScript Basics

<<<<<<< HEAD
## 📌 Variables: `const`, `let`, `var`

* **Definition:** Variable declarations with scope + mutability differences
* **Core Idea:** Prefer immutability + block scope
* **Interview Why:** Scope + hoisting questions are common

---

## ⚙️ Syntax / Usage

```ts
const a = 10;        // no reassignment
let b = 20;          // reassignment allowed
var c = 30;          // function-scoped (avoid)
```

---

## 🧠 Key Points

* `const` → block-scoped, no reassignment (object mutation allowed)
* `let` → block-scoped, reassignable
* `var` → function-scoped, hoisted, can redeclare
* Hoisting:

  * `var` → initialized as `undefined`
  * `let`/`const` → TDZ (Temporal Dead Zone)

---

## ⚠️ Gotchas

* `const` does **not** mean immutable object
* `var` causes scope leaks in loops
* Accessing `let`/`const` before declaration → runtime error

---

## 🔥 Interview Focus

* Q: Difference between `let` and `var`
  A: Scope + hoisting + redeclaration

* Q: Is `const` immutable?
  A: No, only binding is immutable

---

## ⚡ Cheat Sheet

* `var` → avoid
* `let` → mutable
* `const` → default choice

---

## 🧪 Example

```ts
const obj = { name: "ska" };
obj.name = "new";   // ✅ allowed
// obj = {}         // ❌ error
```

---

## 🔗 Related Concepts

* `scope`
* `hoisting`
* `closure`

---

# TypeScript Typing

## 📌 Concept

* **Definition:** Static typing on top of JavaScript
* **Core Idea:** Catch errors at compile time
* **Interview Why:** Type safety + design clarity

---

## ⚙️ Syntax / Usage

```ts
let age: number = 20;
let name: string = "ska";
let isEnabled: boolean = true;
```

---

## 🧠 Key Points

* Type inference works automatically
* Explicit types improve readability
* Prefer strict typing (`noImplicitAny`)

---

## ⚠️ Gotchas

* `any` disables type safety
* Inconsistent typing → runtime bugs

---

## 🔥 Interview Focus

* Q: `any` vs `unknown`
  A: `any` → no checks, `unknown` → requires type narrowing

---

## ⚡ Cheat Sheet

* `number`, `string`, `boolean`
* `any` ❌
* `unknown` ✅ safer

---

## 🧪 Example

```ts
let data: unknown = "hi";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

---

## 🔗 Related Concepts

* `type inference`
* `type narrowing`

---

# Common & Advanced Types

## 📌 Concept

* **Definition:** Structured typing for real-world data
* **Core Idea:** Combine and constrain types
* **Interview Why:** Used in API models + test data

---

## ⚙️ Syntax / Usage

```ts
// union
let value: string | number;

// array
let nums: number[] = [1, 2, 3];
let names: Array<string> = ["a", "b"];

// tuple
let details: [string, number] = ["ska", 10];

// enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let move: Direction = Direction.Up;

// object
let person: { name: string; age: number } = {
  name: "ska",
  age: 10
};
```

---

## 🧠 Key Points

* Union → multiple allowed types
* Tuple → fixed length + order
* Enum → named constants (numeric by default)
* Arrays → homogeneous types

---

## ⚠️ Gotchas

* Tuple order mismatch → error
* Enum values default to `0,1,2...`
* Object type must match structure exactly

---

## 🔥 Interview Focus

* Q: Union vs Any
  A: Union restricts, `any` allows everything

* Q: Tuple vs Array
  A: Tuple = fixed structure, Array = dynamic

---

## ⚡ Cheat Sheet

* `|` → union
* `[]` → array
* `[type, type]` → tuple
* `enum` → constants

---

## 🧪 Example

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  }
}
```

---

## 🔗 Related Concepts

* `interface`
* `type alias`
* `generics`

---

# Operators (`=`, `==`, `===`)

## 📌 Concept

* **Definition:** Assignment vs equality checks
* **Core Idea:** Avoid coercion bugs
* **Interview Why:** Classic JS trap

---

## ⚙️ Syntax / Usage

```ts
let a = 1;
a = 2;

1 == "1";   // true
1 === "1";  // false
```

---

## 🧠 Key Points

* `=` → assignment
* `==` → loose equality (type coercion)
* `===` → strict equality (no coercion)

---

## ⚠️ Gotchas

* `==` leads to unpredictable results
* Always prefer `===`

---

## 🔥 Interview Focus

* Q: Why avoid `==`?
  A: Implicit type conversion → bugs

---

## ⚡ Cheat Sheet

* `=` → assign
* `==` → avoid
* `===` → use

---

## 🧪 Example

```ts
console.log(0 == false);   // true ❌
console.log(0 === false);  // false ✅
```

---

## 🔗 Related Concepts

* `type coercion`
* `truthy/falsy`

-----------------
operators:

ts supports complete js operators along with type safety benefits

1. arithmetic
eg:
    let a = 10;
    let b = 5;
    console.log(a+b); //15
2. assignment
    eg:
3. comparision
4. logical
5. bitwise - low level binary operations
6. unary - operate on single operand
7. ternary - short form of if else
8. type - type checking, type assertions in ts
=======
## 📌 Variables: const, let, var

- `var` → Not frequently used (avoid in modern code)
- `let` → Used for variables that can change
- `const` → Used for constants (cannot be reassigned)

---

## 🧠 TypeScript Typing

- You can assign types to variables

### ✅ Examples
```ts
let age: number = 20;
let firstName: string = "ska";
let isEnabled = true;
```
### common types
```ts
let string "hey"
let boolean true, false
let value: any = 10; -- not recommended to use
value="changed";
- instead of any, use unknown type
array string[], number[]
```

### special types
```ts
let data: any = "hi";
data = 100;

let data: unknown = "hi";
if(typeof data ===  "string")
console.log(data.toString());

> =, ==, ===
=   -> assignment operator
==  -> equality operator, in js, this do unexpected type conversions
=== -> strict equality operator, this actually will do the type comparisions

eg: in javascript
1 == '1' -> true
1 === '1' -> false 

> const person = {name: "ska"};
i cannot reassign this value as this is constant
```

### more types
``` ts
> union types : with this a variable hold more than 1 type
let value: string | number

value = "ska";//ok
value = 10;//ok

> array type: holds same values
two ways to declare array:
1. let numbers: number[] = {1,2,324,45};

2. let names: Array<string> = ["a", "b"];





```
>>>>>>> 890d2eb7d24130fa645f9858f0567f8466b3d122
