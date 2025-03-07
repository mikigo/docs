---
Author: lixintao
---


# JS基础教程

## 简介



JavaScript 是一种轻量级的编程语言，广泛用于网页开发中，为网页添加动态功能。

## 基本用法



### 输出语句



在浏览器窗口弹出警告框
```js
alert('Hello Js!')
```

在控制台输出信息，执行过程中会将输出的信息打印在控制台上

- 控制台输出信息多用于调试

```js
console.log("111")
```




例子，需结合HTML来实现
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>示例CSS应用</title>
</head>
<body>
  <p>欢迎来到我的网页！</p>
</body>
<script>
  console.log('Not Found!')
  alert('未满24岁禁止访问!')
</script>
</html>
```

浏览器打开编写的HTML文件

![image-20241022100409172](/html_css_js_asset/image-20241022100409172.png)

## JS代码引入方式



在HTML中使用js的几种方式

```html
 <!-- js行内写法 -->
 <!-- onclick点击事件 -->
 <button onclick="window.alert('点击次数太多了')">请点我</button>  

<!-- 嵌入式 -->
<scrip>window.alert("内部样式")</script>

<!-- 外链式 -->
<script src="./本地js文件.js"></script>
<script src="https://xxx.js" type="text/javascript"></script>
```





外链式引入本地js文件例子

js本地文件，simple.js

```js
console.log('Not Found!')
alert('未满24岁禁止访问!')
```

HTML文件中引入

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
  <script src="./simple.js"></script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>示例CSS应用</title>
</head>
<body>
  <p>欢迎来到我的网页！</p>
</body>
</html>
```

页面效果和上节一样



## JS基础语法



### 变量的声明与赋值



```js
// 使用var声明的变量,可以多次赋值,但是其结果只与最后一次赋值有关
var wordH ="Hello"
var wordH ="Word"
console.log(wordH);

// let不允许在一个代码块里有变量和他取一样的名字,但是允许修改同一个变量值
let wordC ="三年"
console.log(wordC);
wordC = "四年"
console.log(wordC);
```



## 变量声明和区别



`var` 是 JavaScript 最初用于声明变量的关键字。以下是 `var` 的特点：

- **函数作用域**：`var` 声明的变量拥有函数作用域，这意味着如果 `var` 在函数外部声明，它是全局变量；如果在函数内部声明，它只能在该函数内部访问。
- **变量提升**：使用 `var` 声明的变量会被提升到其所在作用域的顶部，但是赋值不会提升。
- **可重声明**：在同一作用域内，可以多次声明同一个变量。



`let` 是 ES6（ECMAScript 2015）中引入的新关键字，用于声明块级作用域的变量：

- **块级作用域**：`let` 声明的变量仅在它被声明的代码块（如 `{}` 内部）中可见。
- **不会变量提升**：在声明之前访问 `let` 变量会导致一个引用错误（ReferenceError）。
- **不可重声明**：在同一作用域内，不能重新声明同一个变量。



## 常量



`const` 也同样是 ES6 引入的，用于声明常量，即一旦赋值后就不能更改其值的变量。

- **块级作用域**：与 `let` 一样，`const` 声明的变量具有块级作用域。
- **不会变量提升**：同 `let`，`const` 声明的变量也不会被提升。
- **不可更改**：一旦声明并初始化，`const` 变量的值就不能更改（对于基本数据类型而言）。但是，如果 `const` 变量引用的是一个对象，那么对象的属性是可以被修改的。
- **不可重声明**：与 `let` 一样，在同一作用域内不可重声明。

```js
const c = 3;
c = 4; // TypeError: Assignment to constant variable.
```



## 基本数据类型



布尔型

```js
let flag1 = true;
let flag2 = false;
```

数字型

```js
let age =18;
let date ="0306";
console.log(age);
console.log(date);

console.log(Number.MAX_VALUE);     //最大值
console.log(Number.MAX_VALUE*2);   //Infinity(无穷大)
```

字符串

```js
let demo1 = "字符串";
let demo2 = '字符串';
let demo3 =`字符串`;
let demo4 = "老师说`今天晚上不上晚自习`";

```

未定义

```js
// [undefined-未定义的]
// 表示声明的变量还未赋值
let grade;
console.log(grade); //undefined

// [null-空]
var a=null;
console.log(a);  //null
```



## 数据类型检查



使用typeof关键字

```js
console.log(typeof("123"));  //string
console.log(typeof(false)); //boolean
console.log(typeof(NaN));  //number
console.log(typeof(Infinity));  //number
console.log(typeof("true"));  //string
console.log(typeof(undefined)); //undefined
console.log(typeof(null));  //object

console.log(typeof('aaa'*2)); //Number
console.log("aaa"*2); //NaN

console.log(2-"true"); //NaN
console.log(typeof(2-"true")); //Number

// 布尔类型true,会在运算中转化为数字1
// 布尔类型false,会在运算中转化为数字0
console.log(2-true);  //1
console.log(typeof(2-true));  //Number

// 加号遇上字符串,做拼接使用
console.log(2+"true");  //2true
console.log(typeof(2+"true"));  //string
```



## 算数运算符



加法 (`+`)

加法运算符用于两个数值相加，或者连接两个字符串。

```javascript
let result = 5 + 3; // 结果是 8
let string = "Hello, " + "world!"; // 结果是 "Hello, world!"
```

减法 (`-`)

减法运算符用于从一个数值中减去另一个数值。

```javascript
let difference = 10 - 4; // 结果是 6
```

乘法 (`*`)

乘法运算符用于两个数值相乘。

```javascript
let product = 6 * 7; // 结果是 42
```

除法 (`/`)

除法运算符用于一个数值除以另一个数值。

```javascript
let quotient = 20 / 5; // 结果是 4
```

取模 (`%`)

取模运算符（有时称为取余运算符）返回两个数值相除后的余数。

```javascript
let remainder = 18 % 5; // 结果是 3
```

指数 (`**`)

指数运算符用于计算幂运算，即一个数的指数次方。

```javascript
let power = 2 ** 3; // 结果是 8 (即 2 的 3 次方)
```

自增 (`++`)

自增运算符将变量的值增加 1。它有两种形式：前置自增（`++variable`）和后置自增（`variable++`）。

```javascript
let num = 1;
let preIncrement = ++num; // 结果是 2, num 的值也变成了 2
let postIncrement = num++; // 结果是 2, num 的值在返回后增加，变成了 3
```

自减 (`--`)

自减运算符将变量的值减少 1。它也有两种形式：前置自减（`--variable`）和后置自减（`variable--`）。

```javascript
let num = 3;
let preDecrement = --num; // 结果是 2, num 的值也变成了 2
let postDecrement = num--; // 结果是 2, num 的值在返回后减少，变成了 1
```



## 字符串运算符&隐式转换 



两个字符串：当使用加号运算符连接字符串时，它会将两个字符串拼接起来。

```javascript
let str1 = "Hello, ";
let str2 = "World!";
let result = str1 + str2; // 结果是 "Hello, World!"
```

字符串与数值：如果操作数之一是字符串，另一个是数值，那么数值会被转换为字符串，然后执行字符串连接。

```javascript
let str = "5";
let num = 10;
let result = str + num; // 结果是字符串 "510"
```



数值与布尔值：如果操作数之一是数值，另一个是布尔值，那么布尔值 `true` 会被转换为 `1`，`false` 会被转换为 `0`，然后执行数值运算。

```javascript
let num = 5;
let bool = true;
let result = num + bool; // 结果是数值 6
```



布尔值与字符串：如果操作数之一是布尔值，另一个是字符串，那么布尔值会被转换为字符串，然后执行字符串连接。

```javascript
let bool = true;
let str = "Hello";
let result = bool + str; // 结果是字符串 "trueHello"
```



null 和 undefined：`null` 和 `undefined` 在进行字符串连接时会被转换为字符串 `"null"` 和 `"undefined"`。

```javascript
let result1 = "Value is " + null; // 结果是 "Value is null"
let result2 = "Value is " + undefined; // 结果是 "Value is undefined"
```



如果操作数是对象，那么对象会调用其 `toString()` 方法转换为字符串。

```javascript
let obj = { valueOf: () => 42 };
let result = "Object value is " + obj; // 结果是 "Object value is [object Object]"，除非重写了 toString() 方法
```



以下是一些隐式转换的例子：

```javascript
let value1 = "10";
let value2 = 20;
let value3 = true;

let resultA = value1 + value2; // "1020" (数值 20 转换为字符串 "20")
let resultB = value2 + value3; // "21" (布尔值 true 转换为数值 1)
let resultC = value3 + value1; // "true10" (布尔值 true 转换为字符串 "true")
```



理解隐式转换对于避免在编程中遇到意外的结果非常重要。通常，为了代码的可读性和可维护性，建议避免依赖隐式转换，并在需要时进行显式类型转换。



## 赋值运算符



将右侧表达式的值赋给左侧的变量。

```javascript
let x = 10; // 将数值 10 赋值给变量 x
```



复合赋值运算符将一个算术运算符与赋值运算符组合在一起，使得操作更加简洁。



加法赋值 (`+=`)

将右侧表达式的值与左侧变量的值相加，然后将结果赋给左侧变量。

```javascript
x += 5; // 等同于 x = x + 5
```

减法赋值 (`-=`)

将右侧表达式的值从左侧变量的值中减去，然后将结果赋给左侧变量。

```javascript
x -= 5; // 等同于 x = x - 5
```

乘法赋值 (`*=`)

将右侧表达式的值与左侧变量的值相乘，然后将结果赋给左侧变量。

```javascript
x *= 5; // 等同于 x = x * 5
```

除法赋值 (`/=`)

将左侧变量的值除以右侧表达式的值，然后将结果赋给左侧变量。

```javascript
x /= 5; // 等同于 x = x / 5
```

取模赋值 (`%=`)

将左侧变量的值除以右侧表达式的值并取余数，然后将结果赋给左侧变量。

```javascript
x %= 5; // 等同于 x = x % 5
```



## 比较运算符

```js
 
// != 不等于
console.log(41!=5); //true
console.log(4!=4); //false

// !== 不全等
console.log(5 !==5); //false

// == 等等于
console.log(4=="4"); //true

// === 全等于
console.log(4==="4");//false
```



## 逻辑运算符

- && 逻辑运算符  一假则假
- || 逻辑或运算符 一真则真

```js
console.log(true && true); //true
console.log(false && true); //false
console.log(true &&false); //false
console.log(false &&false); //false

console.log(3>2 && 2>1); //true
console.log(3<2 && 2>1); //false
console.log(3<2 && 2<1); //false

console.log(true || true); //true
console.log(true ||false); //true
console.log(false ||true); //true
console.log(false || false); //false

console.log(3>2 || 2>1); //true
console.log(3<2 || 2>1); //true
console.log(3<2 || 2<1); //false
```



## 三元表达式

JavaScript 中的三元表达式是一种简洁的条件表达式，它由三个操作数和一个问号 (`?`) 以及一个冒号 (`:`) 组成。它是一种简化版的 `if-else` 语句，允许在单行内完成条件判断和相应的操作。

```javascript
condition ? valueIfTrue : valueIfFalse;
```

这里的 `condition` 是要判断的条件，它应该是一个能够返回布尔值 `true` 或 `false` 的表达式。如果 `condition` 为真 (`true`)，则表达式的结果是 `valueIfTrue`；如果 `condition` 为假 (`false`)，则表达式的结果是 `valueIfFalse`。

```js
// 运算优先级：一元运算符>比较运算符>逻辑运算符(逻辑与>逻辑或) > 赋值运算符

let a =3>5 && 2<7 && 3==4
console.log(a); //false

let b =3>5 || 2<7 && 3==="3"
console.log(b); //false

let c =2 == "2"
console.log(c); //true

let d =!c && (b||a) 
console.log(d); //false
```



## if选择结构

`if` 选择结构是一种基本的控制流语句，它允许程序根据指定的条件执行不同的代码块。`if` 语句根据条件的真值来决定执行哪个代码块。

基本用法

```js
if (condition) {
  // 当 condition 为真时执行的代码块
}
```

```js
if (condition) {
  // 当 condition 为真时执行的代码块
} else {
  // 当 condition 为假时执行的代码块
}
```

```js
if (condition1) {
  // 当 condition1 为真时执行的代码块
} else if (condition2) {
  // 当 condition1 为假且 condition2 为真时执行的代码块
} else {
  // 当以上所有条件都为假时执行的代码块
}
```

例子

```js
let x = 10;

if (x > 20) {
  console.log('x is greater than 20');
} else if (x > 10) {
  console.log('x is greater than 10 but less than or equal to 20');
} else {
  console.log('x is 10 or less');
}
```



嵌套写法

可以在一个 `if` 语句内部嵌套另一个 `if` 语句

```js
let x = 10;
let y = 5;

if (x > 5) {
  if (y > 5) {
    console.log('Both x and y are greater than 5');
  } else {
    console.log('x is greater than 5 but y is not');
  }
} else {
  console.log('x is not greater than 5');
}
```



## 循环结构

### for循环



`for` 循环是一种用于重复执行一段代码的循环控制结构，通常当你提前知道需要执行循环的次数时使用

`for` 循环的四个部分：

1. **初始化表达式（initialization）**：在循环开始前执行一次，通常用于声明和初始化一个计数器变量。
2. **条件表达式（condition）**：在每次循环迭代之前检查，如果为真（`true`），则执行循环体。如果为假（`false`），循环终止。
3. **迭代表达式（iteration）**：在每次循环体执行后执行，通常用于更新计数器变量。
4. **循环体（body）**：这是循环中重复执行的代码块。



```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```



在这个例子中：

- `let i = 0` 是初始化表达式，它声明了一个变量 `i` 并将其初始化为 `0`。
- `i < 10` 是条件表达式，它在每次迭代前检查 `i` 是否小于 `10`。
- `i++` 是迭代表达式，它在每次循环体执行后增加 `i` 的值。
- `console.log(i);` 是循环体，它会重复执行，直到条件表达式返回 `false`。



### while循环



`while` 循环是一种基本的循环控制结构，用于重复执行一段代码直到指定的条件为假（`false`）。与 `for` 循环不同，`while` 循环通常用于当你事先不知道循环要执行多少次，只是需要根据某个条件来结束循环时。

```js
while (condition) {
  // 当 condition 为真时重复执行的代码块
}
```



这里的 `condition` 是循环每次迭代前都要检查的表达式。如果 `condition` 的计算结果为真（`true`），则循环体中的代码块会被执行。一旦 `condition` 的结果为假（`false`），循环就会终止。



```js
let i = 0;

while (i < 10) {
  console.log(i);
  i++; // 更新计数器变量
}
```

在这个例子中，循环会一直执行直到 `i` 的值不再小于 `10`。在每次循环的末尾，`i` 的值都会通过 `i++` 递增。



### do...while循环



`do...while` 循环，这是 `while` 循环的变体，它至少执行一次循环体，然后根据条件判断是否继续执行。

```js
do {
  // 至少执行一次的代码块
} while (condition);
```

在 `do...while` 循环中，循环体会在检查条件之前先执行一次，然后条件会被检查以确定是否继续循环。

```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);
```

在这个例子中，循环的行为与上面的 `while` 循环类似，不同之处在于即使初始条件为假，循环体也至少会执行一次。



### 循环控制

 `for` 循环， `while` 和 `do...while` 循环中使用 `break` 和 `continue` 语句来控制循环的流程：

- `break` 用于立即退出循环。
- `continue` 用于跳过当前迭代中剩余的代码，直接进入下一次迭代的条件检查。



## 数组



数组是一种特殊的对象，用于存储多个值的有序集合。数组中的每个值都有一个索引，索引从 0 开始计数，这使得你可以方便地访问和操作数组中的元素。

### 创建数组

使用数组字面量

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];
```

 Array 构造函数

```javascript
let fruits = new Array('Apple', 'Banana', 'Cherry');
```

创建一个具有特定长度的空数组：

```javascript
let emptyArray = new Array(3); // 创建一个长度为3的空数组
```

使用索引来访问数组中的元素：

```javascript
let firstFruit = fruits[0]; // 'Apple'
let secondFruit = fruits[1]; // 'Banana'
```

可以直接通过索引修改数组中的元素：

```javascript
fruits[2] = 'Date'; // 将 'Cherry' 替换为 'Date'
```

使用 `length` 属性可以获取或设置数组的长度：

```javascript
console.log(fruits.length); // 输出数组的长度

fruits.length = 5; // 将数组的长度扩展到5
```



### 数组方法



#### 添加元素



`push()`：向数组的末尾添加一个或多个元素，并返回新的长度。

```javascript
fruits.push('Elderberry'); // 添加一个元素到数组的末尾
```



`unshift()`：向数组的开头添加一个或多个元素，并返回新的长度。

```javascript
fruits.unshift('Strawberry'); // 添加一个元素到数组的前端
```



#### 删除元素

`pop()`：删除数组的最后一个元素，并返回该元素。

```javascript
let removedFruit = fruits.pop(); // 移除最后一个元素
```



`shift()`：删除数组的第一个元素，并返回该元素。

```javascript
let firstRemovedFruit = fruits.shift(); // 移除第一个元素
```



#### 其他方法

`slice()`：提取数组的一部分，并返回一个新数组。

```javascript
let citrus = fruits.slice(1, 3); // 获取索引1到2的元素
```



`splice()`：通过删除现有元素和 / 或添加新元素来更改数组的内容。

```javascript
fruits.splice(1, 0, 'Orange', 'Grape'); // 从索引1开始，删除0个元素，然后添加'Orange'和'Grape'
```



`map()`、`filter()`、`reduce()` 等迭代方法用于对数组的每个元素执行操作。

```javascript
let prices = fruits.map((fruit) => fruit + ' $1'); // 返回一个新数组，元素后面添加了'$1'
```

#### 遍历数组

使用 `for` 循环可以遍历数组中的所有元素：

```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```



使用 `forEach()` 方法：

```javascript
fruits.forEach((fruit) => {
  console.log(fruit);
});
```



## 函数



### 函数定义



- 函数用于封装完成一段特定功能的代码

- 相当于将一条或多条语句组成的代码块包裹起来

- 用户在使用时只需要关心参数和返回值,就能完成特定的功能,而不用了解具体的实现



```
function name(params) {

}
```

 function是用来声明函数的一个语句

- name是函数名
-  params是函数参数
-  {}内放函数的具体功能



### 函数返回值



 函数的返回值是指函数在调用后获得的数据

在定义函数时,可以为函数指定一个返回值并退出函数，使用 `return` 语句来返回一个值。如果没有指定返回值，则函数会返回 `undefined`。

```js
 function total01(price,num) {
 	all = price * num 
 	return all
 }
 console.log(total01(9999,12));    
```

 

### 获取函数调用时传递所有实参



```js
 
 function num (a,b){
 	console.log(a,b);
 }  
 num (1,2) //1,2
 num (1,2,3,4,5)
 num(1) //1 undefined
```



### ...扩展运算符



```js
 
 function num1(...nums){
 	console.log(nums);
 }
 num1(1,2,3,4,5) //1,2,3,4,5
 num1(1,2,3) //1,2,3
```



### arguments 对象

如果不确定形参的个数,可以不设置形参，在函数体中直接通过arguments对象获取函数调用时传递的实参

```js
function num2(){
	console.log(arguments);
	console.log(arguments.length);
}
num2(1,2,3,4,5)
num2(1,2,3)
```



### 函数中变量作用域

全局变量: 在函数体外声明的变量或者在函数体内省略var关键字声明的变量

```js
var a =10
 
function demo(){

	console.log(a);

}

demo()

console.log(a); //  a为全局变量,在函数体外也可以被访问
```



局部变量:在函数体内利用let关键声明的变量

```js
 function demo1(){
 
     let b =10

     console.log(b); // 函数内部定义的局部变量b,可以在函数内部被访问


     c = 20; //c是省略var关键字声明的变量,为全局变量

     console.log(c);

 }

demo1() //10

// console.log(b);  //b is notdefined 不可以在函数外访问局部变量b

console.log(c); // 可以在函数外访问到全局变量c
```



### 匿名函数

在声明函数的时候没有指定函数名，而是赋值给一个变量

```js
var fn2 = function (num1,num2) {
    console.log(num1+num2);
}
fn2(1,2) //3

var fn3 = function (num1,num2) {
    console.log(num1+num2);
}
fn3(1,2) //3

var fn4 = function (num1,num2) {
    console.log(num1+num2);
}
fn4(1,2) //3
```



### 箭头函数

```js
var fn5 =  (num1,num2) => {
    console.log(num1+num2);
}
fn5(1,2)
//  当函数体只有一句话时,可以省略大括号
var fn6 =  (num1,num2) =>  console.log(num1+num2);
fn6(1,2)

// 当函数只有一句话代码,并且函数的执行结果就是函数的返回值
// 可以省略函数的大括号和return关键字 
var fn7 = (num1,num2) => num1 + num2
fn7(1,2)

// 当参数只有一个时,可以省略函数外部的小括号
var fn8 = num1 => num1 + num1 
console.log(fn8(9));
```



## 定时器

`setInterval()`

指定时间间隔，间隔时间一到，代码就会执行一次

```js
setInterval(function(){
    console.log("起来走一走");
},5000)

```



`setTimeout`

用来指某个函数或某段代码在多少毫秒以后执行

setTinmeout指定的代码,必须等同步代码执行完成后执行

```js
setTimeout(function(){
    console.log("下班");
},3000)
console.log(1);

setTimeout(function(){
    console.log(2);
},0)

console.log(3);

```





## 对象

对象是一种复杂数据类型，以赋值的形式存储多个数据

新建对象

```js
let obj= {
    // 键: 值
    name: "张三",
    age:30,
    sex :"男",
    gfs:["小花","小美","小绿"],
    sayHi: function(){
        console.log("哈哈哈");
    }
}
console.log(obj);  // {name:"张三",age: 30,  sex: "男"}
```

对象查询

```js
console.log(obj.name);
console.log(obj["age"]);
console.log(obj.sayHi());
```

对象新增

```js
obj.bf="李四"
console.log(obj);
```

对象修改

- 对于对象的属性,如果有这个属性,是修改属性值:如果没有这个属性,是新增

```js
obj.bf="王五"
console.log(obj);
```



对象删除

```js
delete obj.age
console.log(obj);
```



对象遍历

```js
let score = {
    math:99,
    history:80,
    geology:70,
    ehglish:60
}
for (let key in score) {
    console.log(key); // 打印属性名
    console.log(score[key]); //打印属性值

}
```

## String对象



`String` 对象是用于表示和操作字符串的内置对象。字符串是表示文本数据的字符序列。在 JavaScript 中，字符串是不可变的，这意味着字符串一旦创建，其值就不能更改。

### 创建字符串



字面量

```javascript
let str = "Hello, World!";
```

String 构造函数

```javascript
let str = new String("Hello, World!");
```



### 字符串的属性



`length`获取字符串的长度

```js
let message = "Hello";
console.log(message.length); // 输出: 5
```



### 字符串方法



查找和替换

- `charAt(index)`：返回指定索引位置的字符。
- `charCodeAt(index)`：返回在指定的索引处字符的 Unicode 编码。
- `indexOf(searchValue, fromIndex)`：返回指定值第一次出现的索引，如果不存在，则返回 - 1。
- `lastIndexOf(searchValue, fromIndex)`：返回指定值最后一次出现的索引，如果不存在，则返回 - 1。
- `search(regexp)`：对正则表达式和指定的字符串进行匹配搜索。
- `replace(searchFor, replaceWith)`：在字符串中用一些字符替换另一些字符，或者替换一个与正则表达式匹配的子串。

```js
let str = "Hello world!";
console.log(str.charAt(1)); // 输出: 'e'
console.log(str.charCodeAt(1)); // 输出: 101
console.log(str.indexOf("world")); // 输出: 6
console.log(str.search(/world/)); // 输出: 6
console.log(str.replace("world", "everyone")); // 输出: "Hello everyone!"
```



切片和分割

- `slice(startIndex, endIndex)`：提取字符串的某个部分，并返回一个新的字符串。
- `substring(startIndex, endIndex)`：返回字符串中介于两个指定索引之间的字符。
- `split(separator, limit)`：把一个字符串分割成字符串数组。

```js
console.log(str.slice(0, 5)); // 输出: "Hello"
console.log(str.substring(0, 5)); // 输出: "Hello"
console.log(str.split(" ")); // 输出: ["Hello", "world!"]
```



转换大小写

- `toLowerCase()`：将字符串转换为小写。
- `toUpperCase()`：将字符串转换为大写。
- `toLocaleLowerCase()`：根据当前区域设置，将字符串转换为小写。
- `toLocaleUpperCase()`：根据当前区域设置，将字符串转换为大写。

```js
console.log(str.toLowerCase()); // 输出: "hello world!"
console.log(str.toUpperCase()); // 输出: "HELLO WORLD!"
```



其他方法

- `concat(value1, value2, ..., valueN)`：连接两个或多个字符串，并返回新的字符串。
- `includes(searchString, position)`：判断字符串是否包含指定的子字符串。
- `startsWith(searchString, position)`：判断字符串是否以指定的子字符串开头。
- `endsWith(searchString, position)`：判断字符串是否以指定的子字符串结尾。
- `trim()`：从字符串的两端删除空白字符。

```js
console.log(str.concat(" ", "Have a nice day.")); // 输出: "Hello world! Have a nice day."
console.log(str.includes("world")); // 输出: true
console.log(str.startsWith("Hello")); // 输出: true
console.log(str.endsWith("!")); // 输出: true
console.log(str.trim()); // 如果str有前后空格，将删除它们
```



## Array对象

`Array` 对象用于表示一组有序的数据集合，数组中的每个数据项称为元素。数组是动态的数据结构，可以包含任意数量的元素，这些元素可以是不同类型的值。



### 创建数组

使用数组字面量

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];
```

使用 Array 构造函数

```javascript
let fruits = new Array('Apple', 'Banana', 'Cherry');
```

如果 `Array` 构造函数只接收一个数字参数，它将创建一个具有指定长度的空数组。

```javascript
let emptyArray = new Array(3); // 创建一个长度为3的空数组
```



### 数组属性

`length`：表示数组中元素的个数。

```javascript
console.log(fruits.length); // 输出: 3
```



### 数组方法

这些方法会改变原数组。

- `push(element1, ..., elementN)`：在数组末尾添加一个或多个元素，并返回新的长度。
- `pop()`：删除数组的最后一个元素，并返回该元素。
- `shift()`：删除数组的第一个元素，并返回该元素。
- `unshift(element1, ..., elementN)`：在数组开头添加一个或多个元素，并返回新的长度。
- `splice(start, deleteCount, item1, ..., itemN)`：通过删除现有元素和 / 或添加新元素来更改数组内容。
- `sort()`：对数组元素进行排序。
- `reverse()`：颠倒数组中元素的顺序。

```js
fruits.push('Durian'); // 添加元素到数组末尾
fruits.pop(); // 移除数组末尾的元素
fruits.unshift('Strawberry'); // 添加元素到数组开头
fruits.shift(); // 移除数组开头的元素
fruits.splice(1, 1, 'Peach', 'Plum'); // 从索引1开始删除1个元素，并添加'Peach'和'Plum'
fruits.sort(); // 对数组进行排序
fruits.reverse(); // 颠转数组顺序
```



这些方法返回数组的一个部分或新数组，不会改变原数组。

- `slice(start, end)`：提取数组的一部分，并返回一个新数组。
- `join(separator)`：将数组元素连接成一个字符串，用指定的分隔符分隔每个元素。
- `concat(value1, value2, ..., valueN)`：合并多个数组，并返回一个新数组。

```js
let selectedFruits = fruits.slice(1, 3); // 获取索引1到2的元素
let fruitString = fruits.join(', '); // 将数组元素连接成一个以逗号分隔的字符串
let moreFruits = fruits.concat(['Grape', 'Mango']); // 合并数组
```



检查方法

- `indexOf(searchElement, fromIndex)`：返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回 - 1。
- `lastIndexOf(searchElement, fromIndex)`：返回指定元素在数组中的最后一个的索引，如果不存在则返回 - 1。

```js
let index = fruits.indexOf('Banana'); // 寻找'Banana'的索引
```



迭代方法

这些方法对数组的每个元素执行一个提供的函数。

- `forEach(callback(currentValue, index, array), thisArg)`：对数组的每个元素执行一次提供的函数。
- `map(callback(currentValue, index, array), thisArg)`：创建一个新数组，其结果是该数组中的每个元素调用一次提供的函数后的返回值。
- `filter(callback(element, index, array), thisArg)`：创建一个新数组，包含通过所提供函数实现的测试的所有元素。

```js
fruits.forEach(function(item, index) {
  console.log(item, index);
});
let mappedFruits = fruits.map(function(item) {
  return item.toUpperCase();
});
let filteredFruits = fruits.filter(function(item) {
  return item.startsWith('P');
});
```



其他方法

- `some(callback(element, index, array), thisArg)`：测试数组中的元素是否至少有一个满足提供的测试函数。
- `every(callback(element, index, array), thisArg)`：测试数组中的所有元素是否都满足提供的测试函数。

```js
let hasP = fruits.some(function(item) {
  return item.startsWith('P');
});
let allStartWithP = fruits.every(function(item) {
  return item.startsWith('P');
});
```

## Date对象



JavaScript 的 `Date` 对象用于处理日期和时间。它基于 1970 年 1 月 1 日（UTC）以来的毫秒数来表示日期。



### 创建Date对象

创建一个表示当前日期和时间的 `Date` 对象。

```javascript
let now = new Date();
```

使用时间戳

时间戳是自 1970 年 1 月 1 日（UTC）以来经过的毫秒数。

```javascript
let timestamp = new Date(1637232000000); // 使用时间戳创建日期
```

使用日期字符串

你可以传递一个表示日期的字符串给 `Date` 构造函数。

```javascript
let date = new Date("2023-11-18");
```

使用年、月、日等参数

你可以直接指定年、月、日、时、分、秒和毫秒来创建一个 `Date` 对象。

```javascript
let specificDate = new Date(2023, 10, 18, 12, 30, 45, 0); // 注意月份是从0开始的，即0代表1月
```



### 属性

`Date` 对象没有直接可供访问的属性，但以下方法返回日期的组成部分：



- `getTime()`：返回自 1970 年 1 月 1 日以来的毫秒数（时间戳）。
- `getUTCFullYear()`：返回表示年份的整数（根据 UTC）。
- `getUTCMonth()`：返回表示月份的整数（0-11，根据 UTC）。
- `getUTCDate()`：返回表示月份中的某一天（1-31，根据 UTC）。
- `getUTCHours()`：返回表示小时数的整数（0-23，根据 UTC）。
- `getUTCMinutes()`：返回表示分钟数的整数（0-59，根据 UTC）。
- `getUTCSeconds()`：返回表示秒钟数的整数（0-59，根据 UTC）。
- `getUTCMilliseconds()`：返回表示毫秒数的整数（0-999，根据 UTC）。



### 方法

以下方法用于获取日期和时间的不同部分：

- `getTime()`：获取时间戳（毫秒）。
- `getUTCDate()`：获取月份中的某一天（UTC）。
- `getUTCDay()`：获取星期中的某一天（0-6，UTC）。
- `getUTCFullYear()`：获取四位数的年份（UTC）。
- `getUTCHours()`：获取小时数（UTC）。
- `getUTCMilliseconds()`：获取毫秒数（UTC）。
- `getUTCMinutes()`：获取分钟数（UTC）。
- `getUTCMonth()`：获取月份（0-11，UTC）。
- `getUTCSeconds()`：获取秒数（UTC）。



以下方法用于设置日期和时间的不同部分：

- `setTime(milliseconds)`：设置时间戳（毫秒）。
- `setUTCDate(day)`：设置月份中的某一天（UTC）。
- `setUTCFullYear(year, month, day)`：设置年份（UTC）。
- `setUTCHours(hours, minutes, seconds, milliseconds)`：设置小时数（UTC）。
- `setUTCMinutes(minutes, seconds, milliseconds)`：设置分钟数（UTC）。
- `setUTCMonth(month, day)`：设置月份（UTC）。
- `setUTCSeconds(seconds, milliseconds)`：设置秒数（UTC）。



以下方法用于转换格式

- `toString()`：将 `Date` 对象转换为易读的字符串形式。
- `toUTCString()`：将 `Date` 对象转换为对应的 UTC 字符串。
- `toISOString()`：将 `Date` 对象转换为 ISO 格式的字符串。
- `toJSON()`：将 `Date` 对象转换为 JSON 格式的字符串。



其他方法

- `valueOf()`：返回 `Date` 对象的原始值（时间戳）。
- `toLocaleString()`：根据本地时间格式，将 `Date` 对象转换为字符串。
- `toLocaleDateString()`：根据本地时间格式，将 `Date` 对象的日期部分转换为字符串。
- `toLocaleTimeString()`：根据本地时间格式，将 `Date` 对象的时间部分转换为字符串。
