---
title: "C# OOP Primer: Class Modifiers"
excerpt: "Object-oriented programming can be a complex paradigm to learn for a beginner. I will try to explain how some of it works. In this article, we'll cover class modifiers and constructors."
date: "2019-04-11T11:36:00-04:00"
cover: "/assets/images/blog/oop_primer/oop_primer_part2_cover.jpg"
---

<div class="article_nav">

Articles

- [Data Types, Structs, and Classes](/blog/c-oop-primer-data-types-structs-and-classes)
- Class Modifiers
- [Inheritance & Polymorphism](/blog/c-oop-primer-inheritance-and-polymorphism)
- [Method Overloading](/blog/c-oop-primer-method-overloading)
- [Operator Overloading](/blog/c-oop-primer-operator-overloading)
- [Generics](/blog/c-oop-primer-generics)

Jump to:

- [Encapsulation](#encapsulation)
- [Class Access Modifiers](#class-access-modifiers)
  - [Public](#public)
  - [Private](#private)
    - [Auto-Implemented Properties](#auto-implemented-properties)
  - [Protected](#protected)
  - [Sealed](#sealed)
- [Other Modifiers](#other-modifiers)
  - [Constants & Read-only Variables](#constants--read-only-variables)
  - [Static](#static)
- [Class Constructors](#class-constructors)
- [Class Destructors](#class-destructors)
- [this](#this)

</div>

In the [previous article](/blog/c-oop-primer-data-types-structs-and-classes), we discussed classes in their basic form. At this point, we've just seen the tip of the iceberg. Here we'll explore what more we can do with them.

## Encapsulation

As mentioned before, encapsulation is the organizing of xrelated items (such as fields, properties, methods, etc) within a logical unit. This process is more than combining members in a class. Its purpose is more about "protecting" members of a class and the ability to hide information from other parts of the program. We can use the above modifiers to assist in that effort.

## Class Access Modifiers

Objects can be modified with special keywords to change their accessibility. These modifiers change the scope of what we can do with the object and how other namespaces can access them, if at all.

> Namespaces are logical collections of objects that provide a hierarchical organization for classes, structs, functions, variables, etc in a project. Typically a single class or many related classes will be a part of a namespace, or a subsection of an existing namespace.
>
> [More information at Microsoft](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/namespaces/)

### Public

Objects marked as **public** can be accessed by any other code, whether it's in the same class or another that references it. There are no restrictions on accessing them.

```cpp
class Coords
{
  public int x;
  public int y;
}

static void Main()
{
  Coords point = new Coords();
  point.x = 40;
  point.y = 80;
  // We can access x & y directly because they are public
}
```

---

### Private

**Private** objects are only accessible by the class or struct that it directly declared within. If an access modifier (e.g. private or public) is not specified, the object is private by default.

```cpp
class Dog
{
  private string name;

  public string Name
  {
    get { return name; }
    set { name = value; }
  }
}

static void Main()
{
  Dog doggo = new Dog();

  // Cannot do this because 'name' is private
  string dog_name = doggo.name;

  // Instead access 'name' indirectly via the Name property
  string dog_name = doggo.Name;

  // And we can use the same property for setting the value on 'name'
  doggo.Name = "Doggo";
}
```

> **Why are we doing this?**
>
> The answer to this question is called **Abstraction**. While encapsulation is the process of organizing items within a logical unit, abstraction takes it a step further by hiding unnecessary details and providing properties and methods in order for the programmer to implement more complex logic on top of it.
>
> One example of a real world abstraction is a bank transaction. You can make deposits, withdraw mone, check your balance, pay your bills, etc. There are processes behind each of these activities but you don't have to worry about it, especially with an online bill-pay system: You know there's a process of writing a check and mailing it to your cable company but you don't have to do that part. You just fill out the form on the web site and it's getting taken care of. The major leg-work has been abstracted away.
>
> This concept is very noticeable in coding frameworks, where we can write out an application without needing to code the implementation of the finer details like database connections, URL routing, and DOM manipulation.
>
> Abstraction separates the interface from the implementation. In OOP, we don't want any class or namespace to be able to change a class field's value. We want those changes to come through a common channel, like a property or method, so all changes are uniform and allows for regulation of data, verification, and security.

#### Auto-Implemented Properties

If there is no additional logic required for a property other than a getter & setter, we can use an auto-implemented property to save a few lines of code.

```cpp
// Instead of
class Dog
{
  private string name;

  public string Name
  {
    get { return name; }
    set { name = value; }
  }
}

// Use this
class Dog
{
  public string Name { get; set; }
}
```

### Protected

An objected marked as **protected** is only accessible within its class and any class derived from it. Further in this series, we'll explore classes that are made from other classes. The protected keyword allows a class member to be a part of those as well.

### Sealed

A **sealed** class prevents other classes from inheriting from it, quite the opposite of the protected modifier.

### Summary of Access Modifiers

| modifier  | accessibility                             |
| :-------- | :---------------------------------------- |
| public    | within and outside the class              |
| private   | only within the class                     |
| protected | within the class and derived classes      |
| sealed    | within the class but prevents inheritance |

---

## Other Modifiers

### Constants & Read-only Variables

You can use the `const` keyword to indicate that the variable is a constant, which is resolved at compile-time. That is - when the program is compiled, the `const` declared variable is replaced with the value it had been assigned instead.

Constants are fairly usable for things such as standard paths or custom values that are easier to read in the code as a name versus a number value.

```cpp
const string PUBLIC_URL = "http://www.site.com/";
const int ACCESS_LVL_ADMIN = 5;
```

Use the `readonly` modifier to prevent a variable from being modified after construction.

Readonly and constants differ in 3 major ways:

- A constant must be initialized when it is declared. A readonly field does not need to be.
- A readonly field value can be changed in a constructor.
- A readonly field can be assigned a value that is a result of a calculation. Constants cannot.

```cpp
class Age
{
  readonly int year;
  Age(int year)
  {
    this.year = year;
  }
  void ChangeYear()
  {
    year = 1942; // This won't work; it will give a compile error.
  }
}
```

### Static

Variables and methods marked as **static** belong _only_ to the class, not the object that is created. Within memory, there is only one copy of the static member. This member must be accessed by the class, not the object. In the example below in the Main() method, try changing `Cat.Meow();` to `c2.Meow();` and notice the error that is reported.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/x2hLJ1" frameborder="0"></iframe>
</div>

Static classes can only contain static members and cannot be instantiated into an object. Common examples of static classes are the Main and Math classes.

Constant members (initialized by `const`) are static by definition.

---

## Class Constructors

A constructor is a method that is defined within a class (or struct) and is invoked upon instantiation. It has the exact same name as its class, has no return type, and is always public.

```cpp
class Person
{
  public string Name { get; set; }

  // v-- this is the constructor
  public Person()
  {
    Console.WriteLine("Hello there!");
  }
}
```

In this example, every time a Person object is created, "Hello there!" will be written to the console.

Constructors can be used for setting intial values via parameters.

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/5EVyaM" frameborder="0"></iframe>
</div>

## Class Destructors

A destructor is a method that is defined within a class and is invoked when an object is destroyed. It has the exact same name as its class, like a constructor, except that it is prefixed with a tilde (~).

```cpp
class Person()
{
  ~Person()
  {
    // things to do when an object is destroyed
  }
}
```

---

## this

The `this` keyword can be used inside a class to refer to the current instance of the class (the current object). It also can be used to differentiate between method parameters and class fields if they have the same name (such as in a constructor).

If you're still confused how on what `this` refers to, go outside its code block (where its braces `{ }`'s are) one level. See below:

<div class="fiddle_container">
<iframe src="https://dotnetfiddle.net/Widget/kkrWBn" frameborder="0"></iframe>
</div>

The constructor parameter "name" is assigned to class property "name" using `this.name` to specifically tell which one you are talking about in the code.

Also we're using `this` as an argument to the MakeNumberFromName method in the Stuff class (which is separate from the Person class). It may sound like we're sending the Person class to it but we're not. We are sending the current instance of the class, which when the program is run, the current instance is the Bob object we created from the Person class.

---

## That's a handful!

Now we know how to apply keywords to classes, variables, objects, etc to control how they are accessed and used. There is a lot to learn and we'll be getting to the fun parts soon but this foundation will show its purpose as we learn more about classes.
