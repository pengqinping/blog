---
title: Kotlin的class
author: RoyalPeng
date: 2017-11-05 21:05:25
categories: 技术-Kotlin
tags: Kotlin
---

### 类
> 关键字 `class` 类申明由类名、类头(指定其类型参数，主构造函数)和由大括号包括的类体构成。

```java
class Empty //一个类没有实体，可以省略花括号

class Invoice{}
```

### 构造函数
>主构造器跟在类名后

```java
class Person constructor(firstName: String){
    
}
//主构造器没有其他注解和可见性的修饰符，可以省略这个constructor
class Person(firstName: String)

//初始化代码可以放到`init`的初始化快中

class Customer(name: String){
    init{
      print("init class")
   }
}
```
**次构造器**

```java
class Person {
    constructor(parent: Person){
      parent.children.add(this)
   }
}
```
>如果类有一个主构造函数，每个次构造函数需要委托给主构造函数， 可以直接委托或者通过别的次构造函数间接委托。委托到同一个类的另一个构造函数用 this 关键字即可

```java
class Person(val name: String) {
    constructor(name: String, parent: Person) : this(name) {
        parent.children.add(this)
    }
}
```

**创建类的实例**
>要创建一个类的实例，我们就像普通函数一样调用构造函数：

```java
val invoice = Invoice()
val customer = Customer("Joe Smith")
```
**类成员**
包含：
-- 构造器函数和初始化块
-- 函数(成员函数)
-- 属性(成员函数)
-- 嵌套类和内部类
-- 对象声明

### 继承
>在Kotlin中所有的类都有一个共同的超类 **Any** 对于没有超类型申明的类是默认超类
**Any** 只有三个成员函数  *equals*、*hashCode* 、*toString*

```java
//open 标注 表示允许其他类从这个类继承，默认都是final 不允许继承的。
open class Base(p: Int)
//声明一个显示的超类
class Drived(p: Int) : Base(p)
```

