---
layout: post
title: "2.Kotlin基础语法"
date:       2017-08-13
author:     认知弱点
categories: 技术-Kotlin
excerpt: "Kotlin基本使用"
tags: 
    - Kotlin
---
[本文参考地址 http://www.runoob.com/kotlin/kotlin-basic-syntax.html](http://www.runoob.com/kotlin/kotlin-basic-syntax.html)
[本文参考地址  https://www.kotlincn.net/docs/tutorials/getting-started.html](http://www.runoob.com/kotlin/kotlin-basic-syntax.html)


## 包申明

```java
package com.twp.kontlin.demo 
```

## 函数定义
函数定义使用关键字 fun，参数格式为：参数 : 类型 , 语法有点像oc

```java
fun sum(a : Int ,b: Int): Int{
    return a+b;
}

//表达式作为函数体，返回类型自动推断： a+b 为表达式,作为了函数的返回
fun sum1(a: Int, b: Int) = a + b

// public 方法则必须明确写出返回类型
public fun sum2(a: Int, b: Int): Int = a + b


//无返回值的函数(类似Java中的void)：
fun printSum(a: Int, b: Int): Unit {
    println("not public method "+(a + b))
}


// 如果是返回 Unit类型，则可以省略(对于public方法也是这样)：
public fun printSum1(a: Int, b: Int) {
    println("public method "+(a + b))
}
```

## lambda

```java
//lambda表达式使用实例
val sumLambda: (Int, Int) -> Int = {x,y -> x+y}
val voidLambda: (Int ,Int) -> Unit ={x,y -> x+y ; println(" this is unit return method")}

println("lambda:"+sumLambda(10,10));
voidLambda(1,2);
```

## 常量&变量
```java
//常量和变量
//变量: var <标识符>:<类型>=<初始化值>
val firstval:Int = 100;
val secondVal = 200;
val thirdVal = "ddd";

//常量: val <标识符>:<类型>=<初始化值>
var finalVar = 5;
```

## 字符模板

```java
//字符串模板
fun stringMode():Unit {
    var firstString = 1
    // 模板中的简单名称：
    val s1 = "firstString is $firstString"
    println(s1)
    firstString = 2;
    // 模板中的任意表达式：
    val s2 = "${s1.replace("is", "was")}, but now is $firstString"
    println(s2)
}
```

## NULL检查机制
Kotlin的空安全设计对于声明可为空的参数，在使用时要进行空判断处理，有两种处理方式，字段后加!!像Java一样抛出空异常，另一种字段后加?可不做处理返回值为 null或配合?:做空判断处理
```java
fun main(args: Array<String>) {
    //类型后面加?表示可为空
    //var age: String? = "aa"
   // var age: String? = "1"
    var age: String? = null
     //抛出空指针异常
    try {
        val ages = age!!.toInt()
        println("ages:"+ages)
    }catch (e : KotlinNullPointerException){
        println("parse has exception ")
    }
    //不做处理返回 null
    val ages1 = age?.toInt()
     //age为空返回-1
    val ages2 = age?.toInt() ?: -1
    println("age:"+age)
    println("ages1:"+ages1)
    println("ages2:"+ages2)

}
```
`age = null` 输出
```java
parse has exception 
age:null
ages1:null
ages2:-1
```
`age = "aa"` 所有的 toInt()都会报错 `NumberFormatException`

```java
fun parseInt(str : String):Int?{
    try {
        return str.toInt()
    }catch (e: NumberFormatException){
        return null
    }
}

fun main(args: Array<String>){
     val x = parseInt("3")
    val y = parseInt("4")
    if(x != null && y!= null){
        //函数parseInt 声明了返回值可以为NULL所以需要对x,y进行空判断
        println(x*y)
    }
}
输出：
12
```

## 区间

```java
fun main(args: Array<String>) {
    // i >=1 && i<=4
    print("for in 1..4  ")
    for (i in 1..4){
        print( i)
        print(",")
    }
    println()
    // .. 表示从小到大,所以这个条件下是没有范围的
    println("for in 4..1 ")
    for (i in 4..1){
        print(i)
        print(",")
    }
    println()
    // downTo  表示从大到小,
    println("for in 4 downTo 1  ")
    for (i in 4 downTo 1 ){
        print(i)
        print(",")
    }
    //step 指定步长
    println()
    println("for in 4 downTo 1 step 2")
    for (i in 4 downTo 1 step 2){
        print(i)
        print(",")
    }
    // 使用 until 函数排除结束元素
    println("for in 1 until 10")
    for (i in 1 until 10) {   // i in [1, 10) 排除了 10
        print(i)
    }
    // until 不区分正反
    println("for in 10 until 1")
    for (i in 1 until 10) {   // i in [1, 10) 排除了 10
        print(i)
    }
}
```

## Kotlin 基本数据类型
> Kotlin 的基本数值类型包括 Byte、Short、Int、Long、Float、Double 等。不同于Java的是，字符不属于数值类型，是一个独立的数据类型。

类型    |  位宽度
--------|--------
Double  |  64
Float   |  32
Long    |  64
Int     |  32
Short   |  16
Byte    |  8


### 数字
在 Java 平台数字是物理存储为 JVM 的原生类型，除非我们需要一个可空的引用（如 Int?）或泛型。 后者情况下会把数字装箱。
在 Kotlin 中，**三个等号 === 表示比较对象地址，两个 == 表示比较两个值大小。**
```java
fun main(args: Array<String>) {
    val a: Int = 10000
    val b: Int = 10000
    println(a === a) // true，值相等，对象地址相等
    println(a === b) // true，值相等，对象地址相等
    println(a == b) // true，值相等，对象地址相等 这个时候的 a 和 b 是没有经过装箱的,空引用和泛型才会装箱
    //经过了装箱，创建了两个不同的对象
    val boxedA: Int? = a
    val anotherBoxedA: Int? = a
    //虽然经过了装箱，但是值是相等的，都是10000
    println(boxedA === anotherBoxedA) //  false，值相等，对象地址不一样
    println(boxedA == anotherBoxedA) // true，值相等
}
```

因此较小的类型不能隐式转换为较大的类型。 这意味着在不进行显式转换的情况下我们不能把 Byte 型值赋给一个 Int 变量。
```java
val b: Byte = 1 // OK, 字面值是静态检测的
val i: Int = b // 错误
//我们可以显式转换来拓宽数字
val i: Int = b.toInt() // OK: 显式拓宽
```

