---
title: "C# OOP Primer: Operator Overloading"
excerpt: "Object-oriented programming can be a complex paradigm to learn for a beginner. I will try to explain how some of it works. In this article, we'll cover operator overloading."
date: "2019-05-08T11:36:00-04:00"
cover: "/assets/images/blog/oop_primer/oop_primer_part5_cover.jpg"
---

<div class="article_nav">

Articles

- [Data Types, Structs, and Classes](/blog/c-oop-primer-data-types-structs-and-classes)
- [Class Modifiers](/blog/c-oop-primer-class-modifiers)
- [Inheritance & Polymorphism](/blog/c-oop-primer-inheritance-and-polymorphism)
- [Method Overloading](/blog/c-oop-primer-method-overloading)
- Operator Overloading
- [Generics](/blog/c-oop-primer-generics)

Jump to:

- [What is operator overloading?](#what-is-operator-overloading)
  - [Refresher: What are operators?](#refresher-what-are-operators)
- [Syntax](#syntax)
  - [On a Unary Operator](#on-a-unary-operator)
  - [On a Binary Operator](#on-a-binary-operator)
  - [On a Relational Operator](#on-a-relational-operator)

</div>

## What is operator overloading?

The concept of overloading a method (same method, different inputs) can also be applied to operators. Operator overloading gives us the ability to use an operator to provide its services to not just basic data types, but custom types like classes. This gives us a more natural abstraction of implementing those operations.

![Operator Cloud](/assets/images/blog/oop_primer/operator_cloud.gif)
_About to rain down some operations._

### Refresher: What are operators?

In basic terms, operators are symbols that specify what type of operation (such as addition & substraction) to perform in an expression. Math isn't the only available operation in programming though!

Operators that can be overloaded:

- Unary operators (one operand e.g. +x)
  - \+x - returns the value of x
  - \-x - negates x
  - !x - logically negate x (translates to NOT x)
  - ~x - bitwise complement (changes all bits in value by swapping 1s & 0s)
  - \++x - prefixed increment (returns value after updating value)
  - x++ - postfixed increment (returns value before updating value)
  - \--x - prefixed decrement (returns value after updating value)
  - x-- - postfixed decrement (returns value before updating value)
- Binary operators (two operands e.g. x + y)
  - \+ - addition
  - \- - subtraction
  - \* - multiplication
  - / - division
  - % - modulo / remainder
- Relational (Comparison) operators (two operands, returns a boolean value e.g. x == y)
  - == - equal to
  - != - not equal to
  - \>, \>= - greater than, greater than or equal to
  - <, <= - less than, greather than or equal to

> Resource: [C# Operators @ Microsoft](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/operators)

## Syntax

The overloaded operator method follows these rules:

- It should be a member of the class it is returning.
- The method must be _static_.
- The method must have the keyword `operator` followed by the operator that will be overridden.
- The parameters will be the operand(s).

So the syntax looks something like the below, replacing [return type] with a data type (e.g. class type, bool), [?] with an operator, and [parameters] with the appropriate parameters like in a regular method.

```cpp
// Operator Overload syntax:
// public static [return type] operator [?]([parameters])

// Example:
public static Foo operator +(Foo foo1, Foo foo2)
{
  // ... overload stuff where I add foo1 to foo2
}
```

### On a Unary Operator

A unary operator takes only one operand, so its overload syntax would look something like below.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/kGan2g" frameborder="0"></iframe>
</div>

We were able to reverse the signs of both numbers within the Calc object at the same time. Crazy, huh?

### On a Binary Operator

Let's try another example. Let's say we have this Box class.

```cpp
public class Box
{
  public int Height { get; set; }
  public int Width { get; set; }

  public Box(int h, int w)
  {
    Height = h;
    Width = w;
  }
}
```

And we would like to add Box objects to make a bigger Box. We're thinking it should work with a simple equation like `Box b3 = b1 + b2;`, resulting in b3 having dimensions of the combined heights and widths of the other two boxes. We'll overload the binary plus operator for this.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/VlHLu5" frameborder="0"></iframe>
</div>

The overloaded operator method takes the Height and Width values from both of the Box operands and adds them together, respectively. Then it creates a new Box object with those new values. Working just like we imagined it - possibly more! See the code above where a new box was made by adding 3 boxes together. The operator overload works when chained to multiple operands!

What if we wanted to make a new box by increasing both height and width by an integer value? Like `Box b4 = b1 + 10;`. Absolutely! There's no rule saying both operands have to be the class's type.

```cpp
public static Box operator +(Box box1, int num)
{
  int h = box1.Height + num;
  int w = box1.Width + num;
  Box result = new Box(h, w);
  return result;
}
```

This is very similar to the overload we already made except that the second operand is an integer.

Now what if the integer was the first operand? Like `Box b5 = 10 + b1;`. No problem. We'll just have to create an overloaded method of that operator overload. This will be easier than that last sentence sounds.

```cpp
public static Box operator +(int num, Box box1)
{
  return box1 + num;
}
```

For this overload, we can simplify it by just calling the previous operator overload we already made with the operands in the order it accepts. Check out the complete code below:

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/RYq0i1" frameborder="0"></iframe>
</div>

### On a Relational Operator

Relational operators, like < and >, can be set up similar to binary operators (with two parameters). The important thing to remember is that they need to be overloaded in pairs. For example, if we overload the < operator, we need to overload the > as well. The same is true for the <= & >= and == & != operator pairs.

Let's see how we can implement this with our Box class.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/DXdx4P" frameborder="0"></iframe>
</div>

For this example, we'll use the box's area as the basis of comparison. And notice the return type is _bool_ because relational operations return a true or false value.

## Neat stuff, right?

You can see from these examples how operator overloading can be an intuitive and natural abstraction. It is possible to abuse this though and unintentionally create convoluted implementations. A good rule of thumb is to use operator overloading when it brings simplicity to the class type and overall mainability to the application.

Next in this series, we'll learn about more about methods and classes, specifically Generics.
