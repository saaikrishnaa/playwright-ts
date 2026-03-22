# TypeScript Basics

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