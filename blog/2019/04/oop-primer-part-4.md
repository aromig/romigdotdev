---
title: "C# OOP Primer: Method Overloading"
excerpt: "Object-oriented programming can be a complex paradigm to learn for a beginner. I will try to explain how some of it works. In this article, we'll cover method overloading, its usefulness, and its oddities."
date: "2019-04-23T11:36:00-04:00"
cover: "/assets/images/blog/oop_primer/oop_primer_part4_cover.jpg"
---

<div class="article_nav">

Articles

- [Data Types, Structs, and Classes](/blog/c-oop-primer-data-types-structs-and-classes)
- [Class Modifiers](/blog/c-oop-primer-class-modifiers)
- [Inheritance & Polymorphism](/blog/c-oop-primer-inheritance-and-polymorphism)
- Method Overloading
- [Operator Overloading](/blog/c-oop-primer-operator-overloading)
- [Generics](/blog/c-oop-primer-generics)

Jump to:

- [What is overloading?](#what-is-overloading)
- [Method Overloading](#method-overloading)
  - [Type Promotion](#type-promotion)
  - [Optional Parameters](#optional-parameters)
  - [Named Arguments](#named-arguments)
- [Overloading and Inheritance](#overloading-and-inheritance)

</div>

## What is overloading?

Overloading usually refers to the ability to have multiple definitions for the same function call. We can use overloading to execute the same task but with slightly different parameters, usually of different data types. Implementing a method this way can eliminate unneeded complexity and make code easier to read.

## Method Overloading

Method overloading is actually a form of polymorphism. In C#, methods can have different _method signatures_, which means method has multiple definitions with the same name but different parameters that it can accept. Not only different data types, but also number of parameters allowed and their order.

- Overloaded methods are differentiated by the number and type of parameters it accepts. A couple of examples:
  - `FunMethod(int param1)` + `FunMethod(int param1, int param2)`
  - `FunMethod(int param1)` + `FunMethod(string param1)`
- A method cannot be defined with the exact same name, order, and types more than once. Each overload needs to be different in some way.
- Return types are not considered while differentiating overloaded methods. That is, two overloaded methods cannot have the same signature but different return types. The methods _can_ have different return values, but ultimately it's the parameter list that matters.

A simple example:

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/FdgqdP" frameborder="0"></iframe>
</div>

### Type Promotion

So our simple example handles integers and doubles but what if we wanted to pass a different data type as one of the parameters, say a float?

We can just add an overload for that as well, easy peasy.

```cpp
static float Multiply(float a, float b)
{
  float product = a * b;
  return product;
}
```

What if... we didn't? Technically we can do just that. Type promotion happens when a _lesser_ data type can be _upgraded_ to a _bigger_ one. For example: a short can be promoted an int, an int to a long, a float to a double.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/u3D0oh" frameborder="0"></iframe>
</div>

Even though our code only has overloads for types int and double, the line with the float (3.14f - the _f_ denotes a float value) runs just fine. And it does so by utilizing the "double" overload. Even the int, 5, got promoted. Come to think of it, the second parameter for the method call in the "Multiply with doubles" line is technically an integer, not a double. It was type promoting even in the first example!

Type promotion doesn't always happen. If there is an overload for the exact data types that are used when calling the method, the program will choose that one first.

> Resource: [Implicit numeric conversion table @ Microsoft](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/implicit-numeric-conversions-table)

### Optional Parameters

A very useful benefit of method overloading is with optional parameters. We create an optional parameter by declaring a _default value_ with the variable name.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/nWALvh" frameborder="0"></iframe>
</div>

Nothing really different in the rules of how it picks the overloaded method, just that the second argument is not needed to successfully call it. But when we do supply it, the default value is ignored.

### Named Arguments

Another feature that can be used to work with overloaded methods is _named arguments_. Calling the method is the same except that the argument supplied is prefixed with the variable name in the parameter list.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/zgUoiy" frameborder="0"></iframe>
</div>

Even though an integer was passed as the argument to the Square method, the double overload was called because we called it with `b:` as a named argument. If we had used `a:`, the integer overload would have been used.

## Overloading and Inheritance

Using method overloading along with class inheritance can be confusing sometimes. Overloads are handled by considering the class of the "target" of the method call and checking the methods that belong to it first. If there isn't a suitable method among that class, consideration then goes to its parent class. And then to that class's parent class and so on, outwards. It won't look at the target class's children.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/h8LPvx" frameborder="0"></iframe>
</div>

Above the target of the method is `c` which is of the `Child` class. With only method (and an applicable one because of type promotion), there's no need to look at the `Parent` class's method.

C# does this on purpose to help avoid a fundamental problem with object-oriented programming called the [brittle base class problem](https://en.wikipedia.org/wiki/Fragile_base_class). The idea is that base classes can be considered fragile because seemingly small changes to them can cause unexpected and sometimes drastic problems in derived classes. There are a number of things that languages have done to help prevent these types of problems but it's something to be aware of when designing classes. This includes overloading methods across classes.

Additional weirdness incoming.

So let's change the base class method to a virtual method so we can add an override method of `Method(int x)`. Now when we call `c.Method(10);`, it's still passing an integer type as before. So it will call the new override method, right?

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/Qca8Gu" frameborder="0"></iframe>
</div>

Nope, it does not! In C# if you override a base class method, it doesn't count as a declaration towards overloaded methods. Try editing out the `override` keyword from the method declaration. Now it does what we thought it would do.

Confused any? It may be a good option to avoid overloading methods across inheritance lines and keep it within the target class.

> Interesting reads: [Eric Lippert's articles about the Brittle Base Class](https://blogs.msdn.microsoft.com/ericlippert/tag/brittle-base-classes/)

---

## Wow, that's a doozy.

Hopefully you can see how overloading methods can be useful even with all of the rules and potential quirkiness. My advice would be to keep the structure and use of overloaded methods as simple as possible.

A possible idea for good overloads would be for class constructors, either through overloading the constructor itself or a separate static method that can create the new instances in the background (keeping construction as well-defined limited processes).

Another is for various helper functions that will accept different types of arguments. For example, I've written an error logging method that either takes an `Exception` object or a plain text `string` in case the Exception was not available.

Or sometimes it may get a bit complicated. Don't be afraid to take a step back. You may find that overloading isn't the best option and just create the other method as a separate stand-alone one.

With a lot of things in technology, I tend to opt for the simplest solutions. Next article, though, we'll discuss more on overloading but this time with _operators_.
