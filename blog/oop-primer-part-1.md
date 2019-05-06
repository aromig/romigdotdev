---
title: "C# OOP Primer: Data Types, Structs, & Classes"
excerpt: "Object-oriented programming can be a complex paradigm to learn for a beginner. I will try to explain how some of it works. In this article, we'll cover the basics: data types, structs, and classes."
date: "2019-04-06T11:36:00-04:00"
cover: "/assets/images/blog/oop_primer/oop_primer_part1_cover.jpg"
---

<div class="article_nav">

Articles

- Data Types, Structs, and Classes
- [Class Modifiers](/blog/c-oop-primer-class-modifiers)
- [Inheritance & Polymorphism](/blog/c-oop-primer-inheritance-and-polymorphism)
- [Method Overloading](/blog/c-oop-primer-method-overloading)
- [Operator Overloading](/blog/c-oop-primer-operator-overloading)

Jump to:

- [Data Types](#data-types)
- [Structs](#structs)
- [Classes](#classes)
- [Value Types vs Reference Types](#value-types-vs-reference-types)
  - [Memory Allocation](#memory-allocation)

</div>

Object Oriented Programming, or OOP, is a programming pattern where everything is grouped as _objects_ allowing the programmer to gain reusability and collaboration between them. An object in OOP is a set of code that can perform a set of related activities such as:

- Store Information
- Perform Actions
- Describe Behaviors

Objects can correspond to things found in the real world (e.g. shapes, devices, products) and also concepts (e.g. shopping carts, payment systems).

How do we make those objects?

## Data Types

Data types are used in order to create variables and objects. Every language has its own set of basic, built-in data types. They are called by their reserved keywords when we want to create a new variable.

The primitive data types in C# are:

- _Booleans_: true or false - **bool**
- _Characters_: A single Unicode character - **char**
- _Integers_: There are different integer types with their own ranges. An unsigned integer only allows whole numbers (no negatives).
  - Signed: **sbyte**, **short**, **int**, **long**
  - Unsigned: **byte**, **ushort**, **uint**, **ulong**
- _Floating Point_: A real number with single or double precision (number of digits to the right of the decimal point) stored in memory as a binary value. - **float**, **double**
- _Decimal_: Similar to a floating point, a decimal has more precision but a smaller range. A decimal is stored as a decimal value instead of binary. Ideal for financial calculations. - **decimal**

> **Resource:** [C# Types and Variables](https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/types-and-variables) @ Microsoft

Variable initialization examples:

```cpp
bool isCoding = true;
char first_initial = 'A';
int x = 12;
float pi = 3.14f;
double fraction = 5.25;
decimal money = 300.5m;
// Real numbers assigned to a variable default to a double data type.
// Use the f & m suffixes to cast the type as float and decimal, respectively.

string FirstName = "Adam";
// Not actually a primitive but very common to use no less.
```

> Primitives are the main value types that are built into the language and they can be use to build other data types such as structs, classes, and other objects.

You may have noticed that the **string** data type is not among the list of primitives. That's because strings are _reference types_ and can be considered arrays of characters. The difference between value & reference types is [discussed near the end of this article](#values-types-vs-reference-types).

---

## Structs

A **struct** is a _value type_ (a data type that stores a value in memory) that is used to encapsulate small groups of related variables.

> encapsulation: enclosing related elements within a container, creating a new structure

Structs can:

- contain things like fields, properties, and methods.
- have constructors with parameters.

Think of structs as a _custom data type_!

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/vfjHGA" frameborder="0"></iframe>
</div>

When we create a variable or object, it is said to be **instantiated**. This means that we're taking the concept of the struct (or class) and making it a real object that we can use in our program.

These two structs are being instantiated in different ways. The _point_ object is created by using what's called a [constructor](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/constructors) for the Coords struct (`Coords point = new Coords(42, 69);`) giving values directly to the struct which will be passed to its x & y fields.

> structs can be created in two ways - with or without a constructor

myFavBook is created in a different way - without a constructor. When an object is created against a struct in this fashion, all fields will be assigned [default values](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/default-value-expressions). Usually though, we'd want to set our own default values within the struct itself to be sure we (and other programmers) know what they're going to be.

---

## Classes

A **class** is a collection of items such as fields, properties, & methods that share the same attributes and actions. These items relate to each other in a logical way. If this sounds a lot like a struct, that's because they are similar but they differ in the scale of how they are used. Classes are used to model more complex structures and behaviors than structs can allow.

> Think of a class as a blueprint of how we want our object to look and behave, designing its characteristics and actions.

Example class:

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/VneOF9" frameborder="0"></iframe>
</div>

Like a struct, a class must be instantiated into an object. Above, the object _Bob_ is created by instantiating the _Person_ class as such: `Person Bob = new Person();`. Then `Bob` becomes usable as an object. A class can be instantiated multiple times to create as many objects as needed. There is a few more things going on here but those will be covered in the next section of the primer.

---

## Value Types vs Reference Types

### How different is a class from a struct?

Though they seem similar and both can act like a blueprint for data strcuture, there are a few major differences between structs and classes.

#### Structs are value types

When an object is instantiated from a struct, the variable that is assigned to it holds the struct's actual data.

When a struct object is assigned to a new variable, it is **copied** - the structure, the data, all of it. Both variables are separate in every way and contain their own copies of the same data. Changes made to one copy do not affect the other one.

#### Classes are reference types

When an object is instantiated from a class, the variable that is assigned to it **holds only a reference** to the memory location where the actual data is stored. That reference is usually referred to as a **pointer**.

When a class object is assigned to a new variable, the only thing that is copied is that reference. So both variables will referencing the same object. Changes made to one will affect the other because they are pointing to the same object.

A struct also does not support more complex behavior as a class does, such as inheritance and polymorphism (to be explained next time).

In general, use structs for small data structures that contain primarily data that is not intended to be changed after it is created.

Below is an example of the difference between them:

```cpp
// Point is a *struct*, which allocates a value in memory
Point p1 = new Point();

// Form is a *class*
// which allocates the object (new Form) in memory
// and a reference (f1)
Form f1 = new Form();

// p2 is a copy of p1 but a seperate value in memory
Point p2 = p1;

// f2 is a copy of the reference f1,
// still pointing to the first object that was created
Form f2 = f1;

// a new value type variable
Point myPoint = new Point(0, 0);
// a new reference-type variable
Form myForm = new Form();

// Test() is a method defined below
Test(myPoint, myForm);

void Test(Point p, Form f)
{
  // No effect on myPoint since p is a copy
  p.X = 100;
  // myForm.Text is changed to "Hello, World" since myForm
  // and f point to the same object
  f.Text = "Hello, World";
  // f is now null (erased) but no effect on myForm
  // because f is only a copy of the reference
  f = null;
}
```

However if the parameters are passed by reference (using the `ref` modifier), there are different results. _ref_ passes the original variable to the method, not a copy.

```cpp
// a new value type variable
Point myPoint = new Point(0, 0);
// a new reference-type variable
Form myForm = new Form();

// pass myPoint and myForm by reference
Test(ref myPoint, ref myForm);

void Test (ref Point p, ref Form f); {
  // myPoint.X is changed to 100
  p.X = 100;
  // myForm.Text is changed to "Hello, World"
  f.Text = "Hello, World";
  // Both f and myForm are null (erased)
  f = null;
}
```

### Memory Allocation

This part gets a bit more technical but it can be useful to understand how it works on a slightly deeper level.

Built-in data types (such as string, int, double, struct) are used to declare variables that are **value types**. When a value type instance is created, a single space in memory is allocated to store its value. When the program accesses a value type, it's directly accessing its underlying data.

**Reference types** (such as a class) are handled differently. An object is created in memory and the class instantiation is a reference to that. When we "access the object" we are actually accessing a pointer that finds the actual object in another part of memory.

---

The .Net CLR (Common Language Runtime) allocates memory for objects in two places: the **stack** and the **heap**.

![Stack vs Heap Visual](/assets/images/blog/oop_primer/stack-v-heap.jpg "Stack vs Heap Visual")

The stack is a "last-in, first-out" (LIFO) memory structure. When a method is invoked, the CLR bookmarks the top of the stack and then _pushes_ data on the stack when it executes. When the method completes, the CLR resets back to the previous state, essentially _popping_ the method's memory allocations from it.

The heap, however, is better described as a random mess of objects. This allows objects to be allocated and de-allocated in any order. [Memory managers and garbage collectors](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals) help keep this area of memory tidy.

> Value types put the actual data in the stack.
>
> Reference types put a pointer in the stack that references a location in the heap that contains the actual data.

#### Example

```cpp
void CreateTextBox()
{
  string txt = "Hello World";
  TextBox myTextBox = new TextBox(txt);
}
```

From this example, here's what belongs where:

- The variable `txt` → Stack
- The `myTextBox` reference → Stack
- The `myTextBox` _object_ (with its properties like text, size, color, etc) → Heap

The stack stores:

- The reference portion of reference-type local variables and parameters (i.e. myTextBox reference)
- Value type local variables and method parameters (structs, int, string, bool, char, DateTime, etc)

The heap stores:

- The content of reference type objects
- Anything structured inside a reference type object (e.g. variables inside of a class)

#### Why do we have a stack and a heap?

The stack's structure is simple and very fast. However its size is very limited and the amount of memory the program uses is allocated at compile-time.

> If using macOS or Linux, check your own machine's maximum stack size by typing the command `ulimit -s` and its output will be in terms of kilobytes. The amount will vary depending on your CPU and operating system.

> ```bash
> $ ulimit -s
> 8192
> ```

> You can see above that my results show that my system has a max stack size of 8 megabytes.

Think it's not a lot of room to play in? For normal operations, it should be. But this is why we are careful to not create situations where an infinite loop can take place because that will result in a [stack overflow](https://en.wikipedia.org/wiki/Stack_overflow).

Also a stack is always using the LIFO structure. In order to free up the memory used by a certain variable or method (after its use is over), the program needs to resolve freeing up things that were allocated _after_ it before it can deal with that one.

The heap looks like a mess. Objects are allocated space in memory in seemingly random places. Access to those places are slower than it would be in a stack. So why have a heap? To take care of the issues that stacks have. The program can use as much memory as it needs and it can free up memory objects use at any time, without waiting for other objects to go away before its turn.

With C# we can let the CLR take care of the technical bits of memory allocation as it's abstracted away so we can focus on writing other code. It's good to keep this kind of information in mind, though, when we're planning out data structures or debugging our application.

---

## Whew!

Thank you for reading! That was quite a bit to go through. I hope this article helped you understand the basics of data types, structs, and classes. In the next primer, we will talk more about classes and how to build more complex objects with them.
