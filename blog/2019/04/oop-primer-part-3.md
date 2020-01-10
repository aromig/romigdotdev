---
title: "C# OOP Primer: Inheritance & Polymorphism"
excerpt: "Object-oriented programming can be a complex paradigm to learn for a beginner. I will try to explain how some of it works. In this article, we'll cover class inheritance and polymorphism."
date: "2019-04-19T11:36:00-04:00"
cover: "/assets/images/blog/oop_primer/oop_primer_part3_cover.jpg"
---

<div class="article_nav">

Articles

- [Data Types, Structs, and Classes](/blog/c-oop-primer-data-types-structs-and-classes)
- [Class Modifiers](/blog/c-oop-primer-class-modifiers)
- Inheritance & Polymorphism
- [Method Overloading](/blog/c-oop-primer-method-overloading)
- [Operator Overloading](/blog/c-oop-primer-operator-overloading)
- [Generics](/blog/c-oop-primer-generics)

Jump to:

- [Inheritance](#inheritance)
  - [base()](#base)
- [Polymorphism](#polymorphism)
  - [Abstract Classes](#abstract-classes)
  - [Interfaces](#interfaces)

</div>

Let's learn how to make more complex classes and the objects we can make from them.

## Inheritance

In object-oriented programming, we can create objects from classes. Though what if we want to make a class that's everything that another class is (properties and methods) but more? Should we copy & paste everything from one class to another? If that thought makes you cringe a bit, no worries. We can use inheritance for doing just this.

Inheritance allows a class to take on (inherit) properties & methods from another class. The class that is used as a basis for the new class is called the **base class** and the class that is inheriting from it is called the **derived class**. The derived class not only will contain the properties of the base class, but also properties of its own. And there can be multiple derived classes from a base class. In addition, a derived class can be a base class for another class.

> The base/derived relationship can be understood as a **"is a"** clause.
>
> - An apple _is a_ fruit.
> - A square _is a_ shape. Also a triangle _is a_ shape.
> - A pug _is a_ dog, and a dog _is an_ animal.

In C#, we designate that we are inheriting from another class using a colon : followed by the base class name. Then we can reference the base properties & methods.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/68tjy7" frameborder="0"></iframe>
</div>

Notice that both classes have their own constructors. Both constructors are called when the object is created, as well as destructors (if defined). The order for when they are called is outlined below:

1. base constructor
2. derived constructor
3. derived destructor
4. base destructor

Basically the call order is going inward (from base to derived) when constructing and outward when destructing. If there are multiple levels of derived classes (e.g. base > derived from base > derived from 1st derived), this pattern follows.

### base()

Notice the `base` keyword in the Dog class's constructor. When used with a derived class constructor, it specifies which base class constructor that the derived class's constructor should be derived from. We need to specify which one because a class can have multiple constructors: a default (no parameters), with parameters, and others with different parameters (overloaded constructors).

> The base class that is accessed is the base class specified in the class declaration, regardless if that class itself is based on another class.

The base keyword can also be used to access members of the base class from within the derived class. If the `Animal` class above had a method of its own, we could call it from within a method in the `Dog` class. i.e. `base.MethodName();`

---

## Polymorphism

[Dictionary Definition](https://www.merriam-webster.com/dictionary/polymorphism): the quality or state of existing in or assuming different forms

Polymorphism is declaring one interface but its implementation details are left to the derived classes.

> Simply put, a member of a class can be implemented in different ways in different derived classes..

**keywords when defining polymorphic methods**

- virtual - used on the base class member
- override - used on the derived class member

Let's create a simple hero for a role-playing game. This _Hero_ can specialize in a particular weapon discipline. We'll make a base class of a generic hero and each specialization is derived from it.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/6yjeNX" frameborder="0"></iframe>
</div>

The use of polymorphism may not seem apparent right away but without it, the base class would have to account for each and every version of our hero types. This can lead to overly complicated [spaghetti code](https://en.wikipedia.org/wiki/Spaghetti_code) and overloaded methods (methods with mutiple implementations, explained in detail later), all within the base class. These variations belong in the derived classes, keeping it organized. The purpose of polymorphism has a lot to do with having concise and semantic code that will be maintainable.

Using this example, the different Weapon attributes cannot be placed in the base Hero class. Not all heroes know how to use all weapons, only those who trained with them - hence the derived classes for each specialty.

In the .NET Fiddle box above in the Main() method, go ahead and change the class that we're using to create our avatar (e.g. change Rogue to Archer, Warrior, or even just plain Hero).

### Abstract Classes

Polymorphism can be taken a step further and the base class can be considered **abstract**, where there is no implementation at all. A regular base class can have polymorphic properties & methods **and** have its own that aren't defined by derived classes.

In an abstract class, the implementation must be defined in the derived classes.

**Abstract classes:**

- cannot be instantiated; they must be derived from
- may include concrete & abstract members
- must have their implementations defined in the derived classes for _all_ inherited abstract members

Why do this? Because in some situations, there is no meaningful need for the virtual member to have a separate definition in the base class. The class is declared as abstract to provide a sort of _template_.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/LQYCfU" frameborder="0"></iframe>
</div>

### Interfaces

An interface is a completely abstract class, containing only abstract properties and methods (no fields/variables). It's common to preface an interface's name with a capital letter `I`.

An interface simply describes what a class should do. The class implementing the interface must define how to accomplish the behaviors. Think of an interface as a strict guideline to creating the blueprint (class).

> A simplified metaphor could be: A house is going to need walls and a roof but how they are built (quantities, sizes, colors, etc) is up to the architect.

Each member in the interface **must** be implemented in the derived class.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/PK3EAW" frameborder="0"></iframe>
</div>

A class can inherit from just one base class but it can implement from _multiple_ interfaces. So by using interfaces you can include behavior form multiple sources in a single class.

Maybe we want to make an object that implements from both the `IShape` and `IAnimal` interfaces: `class AnimalShape : IShape, IAnimal { }`

---

## That escalated quickly!

To summarize, we've gone over how to create classes based on other classes through inheritance & understanding the basics of polymorphism and abstract classes including a short introduction to interfaces.

Main take-aways:

- Think of the base/derived relationship as a **"is a"** clause.
- We use a colon : to designate that a class is inheriting from a base class.
- Polymorphism is having class members that can be defined in different ways when they are implemented in a derived class.
- Abstract classes and interfaces can be used to provide a stricter guideline on how to build classes that implement them.

I admit that all of this information can be a lot to take in but hopefully you can imagine how these complex classes can give a program more structure and maintainability.

In my next article in this series, we'll learn about method overloading as a type of polymorphism.
