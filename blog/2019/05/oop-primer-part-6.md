---
title: "C# OOP Primer: Generics"
excerpt: "Object-oriented programming can be a complex paradigm to learn for a beginner. I will try to explain how some of it works. In this article, we'll cover creating generic methods and classes."
date: "2019-05-17T11:36:00-04:00"
cover: "/assets/images/blog/oop_primer/oop_primer_part6_cover.jpg"
---

<div class="article_nav">

Articles

- [Data Types, Structs, and Classes](/blog/c-oop-primer-data-types-structs-and-classes)
- [Class Modifiers](/blog/c-oop-primer-class-modifiers)
- [Inheritance & Polymorphism](/blog/c-oop-primer-inheritance-and-polymorphism)
- [Method Overloading](/blog/c-oop-primer-method-overloading)
- [Operator Overloading](/blog/c-oop-primer-operator-overloading)
- Generics

Jump to:

- [What is a Generic?](#what-is-a-generic)
  - [Defining a Generic](#defining-a-generic)
- [Generic Method](#generic-method)
- [Generic Class](#generic-class)
- [Constraints](#constraints)
- [Collections](#collections)
- [Benefits](#benefits)

</div>

## What is a Generic?

Generics in OOP allow us to define a specification of a class or method that can be used with any data type. When we design a generic, the data types of the method parameters or class isn't known - not until it is called or instantiated.

### Defining a Generic

A generic class or method can be defined using angle brackets < > and an identifier. The standard identifier used for generics is a capital letter T i.e. `<T>` but any letter can be used - even a word. If it makes sense to use an identifier other than _T_, feel free. It's not a rule, just a guideline that most programmers follow.

```cpp
public static void Method<T>(T param1) { }
```

We can also use multiple generic types if needed, typically the second one is denoted as `<U>`.

```cpp
public static void Method<T, U>(T param1, U param2) { }
```

---

## Generic Method

See the below example of an [overloaded method](/blog/c-oop-primer-method-overloading) that swaps two integers or strings values via reference.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/vWGwm8" frameborder="0"></iframe>
</div>

Works like a charm, of course. But what if we added another overload for floats? And another for booleans. And another for class objects. This overloaded method is getting big. Now what if we needed to make a fundamental change to all of the overloads? Wouldn't it be nicer and easier to just have one method to rule them all?

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/x0gSYy" frameborder="0"></iframe>
</div>

Instead of two separate overloaded methods, we can trim it down to just one. The major difference is the `<T>` right after the method name and replacing the data type for the parameters and temp variable with `T` as well.

When we call the method from the Main program, we can specify the data type for _T_. In the first part, we're passing integers so the method is called as `Swap<int>(...)` instead of just `Swap(...)`. In the second part, we do the same thing but since we're passing strings, the method is called as `Swap<string>(...)`.

Although, we can actually omit specifying the _<T>_ type when calling the generic method because the compiler will infer the data type from the arguments being passed.

```cpp
// This works too!
Maths.Swap(ref twenty, ref thirty);
Maths.Swap(ref forty, ref fifty);
```

---

## Generic Class

Classes can be generic along the same lines of thinking. A common use for a generic class is for defining collectios of items, where adding & removing are performed in the same way regardless of data type.

One common generic class is a collection called a stack, where items are **pushed** (added to the top of the stack) and **popped** (removed from the top of the stack). This is referred to as LIFO (Last In, First Out) since the item that is removed on a _pop_ operation is teh last one that was recently added.

![LIFO Example, credit Wikipedia](/assets/images/blog/oop_primer/lifo_stack.png)
_LIFO Example, credit Wikipedia_

While the below example is not the Stack<> class exactly (as defined in the .Net Framework), it should show what we're talking about in regards to a use of a generic class.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/cVqGfB" frameborder="0"></iframe>
</div>

Remember the [Coords struct](/blog/c-oop-primer-data-types-structs-and-classes#structs)?

```cpp
struct Coords {
  public int x;
  public int y;

  // constructor
  public Coords(int p1, int p2) {
    x = p1;
    y = p2;
  }
}
```

Use a Generic struct (yes, structs too!) instead and it's no longer limited to integers.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/J5Pzof" frameborder="0"></iframe>
</div>

---

## Constraints

We can also place a restriction on a generic to only accept a certain type, such as a struct, class or specific class/interface.

A constraint is implemented on a generic by using the _where_ keyword followed by the generic type variable (e.g. T), a colon, and the constraint type.

There are 6 types of constraints:

|                        |     |                                                                    |
| :--------------------- | :-: | ------------------------------------------------------------------ |
| where T : struct       |  →  | Type argument must be a value type                                 |
| where T : class        |  →  | Type argument must be a reference type                             |
| where T : new()        |  →  | Type argument must have a public parameterless constructor         |
| where T : <base class> |  →  | Type argument must inherit from <base class> class                 |
| where T : <interface>  |  →  | Type argument must implement from <interface> interface            |
| where T : U            |  →  | There are two type arguments T and U. T must be inheritted from U. |

Maybe the above example with the Coords struct doesn't make sense for its X & Y values to be strings. Let's add a constraint to it.

```cpp
struct Coords<T> where T : struct {
  public T X;
  public T Y;
}
```

Neat! But why are we constraining with a struct? The table above shows that using a struct constraint will restrict the type argument to value types. Since strings are reference types, this should allow this struct to not accept a string. It will; however, accept a single character though. Unfortunately a generic cannot be constrained to invididual data types but this is close enough to demonstrate a constraint.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/397uBQ" frameborder="0"></iframe>
</div>

This would result in an error on line 22:

```cpp
Compilation error (line 22, col 12): The type 'string' must be a non-nullable value type in order to use it as parameter 'T' in the generic type or method 'Coords<T>'
```

## Collections

As mentioned above, there are collections of generic classes like Stack<>. Another common one is List<>.

| List<>      |     | Function                                |
| :---------- | :-: | :-------------------------------------- |
| .Add()      |  →  | Adds an item at the end of the list     |
| .Clear()    |  →  | Removes all items from the list         |
| .Contains() |  →  | Checks for an item; returns a boolean   |
| .Count      |  →  | Returns the number of items in the list |
| .Insert()   |  →  | Adds an item at a specified index       |

Below is a small example of using the List<> collection.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/bBK0Rr" frameborder="0"></iframe>
</div>

.Net has other several built-in collection classes in the [_System.Collections.Generic_ namespace](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic?view=netframework-4.8), such as Queues, LinkedLists, Dictionaries, etc. The types of collections available in this namespace is fairly diverse so if one of those will provide the functionality of your needs, use them! However if it will make sense to create your own generic collection, go right ahead.

---

## Benefits

- **Reusability:** A single generic type definition can be used for multiple purposes with the same code without any alterations. It's much easier to maintain one version of the method/class than multiple overloads.
- **Type Safety:** Generic data types provide better type safety, especially when used with collections since we need to specify the type of objects that are passed to them. Type checking is done at complile time instead of run-time, allowing bugs to be caught before release.
- **Performance:** Methods & classes utilizing generics provide better performance since they reduce the need for boxing/unboxing (conversion from value type to object and vice versa), and typecasting of the objects used. The actual code for data typed versions of a generic is done on demand instead of multiple typed versions that may not be used.

---

## Awesome stuff!

Generics are a powerful feature of C# that allows us to create more versatile data structures and methods. Using generics can provide great abstraction and extensibility, allowing for code reuse, type-safety, and performance gains. Finding where to use them can take some practice and forethought as it may not be readily apparent. No problem though! Keep the concepts in mind for refactoring opportuntities at the least.
