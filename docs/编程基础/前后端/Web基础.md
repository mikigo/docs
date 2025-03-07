dom,请求方式,事件，浏览器开发工具介绍

# web基础



本教程旨在帮助初学者了解 Web 开发的基础知识，包括 DOM 操作、请求方式、事件处理以及如何使用浏览器开发工具。



## DOM

DOM它提供了对文档的结构化的表述，并定义了一种方式可以使程序和脚本能够对文档的内容、结构和样式进行访问和操作。

### DOM 树结构

- 文档：整个 HTML 页面
- 元素：页面中的所有标签，如 `<div>`, `<a>`, `<span>` 等
- 属性：元素的属性，如 `class`, `id`, `href` 等
- 文本：元素中的文本内容

### 操作 DOM 元素简述

DOM 操作是指对页面标签进行操作。如：设置样式、设置文本、设置属性、删除标签、事件绑定等

### 获取标签

`document.getElementById()`

返回对拥有指定 `id` 的第一个元素的引用。ID 是唯一的，所以这个方法每次最多只返回一个元素。

```html
<div id="myId"></div>
<script>
var element = document.getElementById("myId");
</script>
```



`document.getElementsByTagName()`

返回一个包含所有指定标签名称的元素的 HTML 集合（HTMLCollection）。这是一个动态的集合，意味着如果文档中的元素发生变化，它也会随之更新。

```js
var elements = document.getElementsByTagName("p"); // 获取所有 <p> 标签元素
```



`document.getElementsByClassName()`

此方法返回一个包含了所有拥有指定类名的元素的 HTML 集合（HTMLCollection）。

```html
<div class="myClass">111</div>
<h1 class="myClass">Hello</h1>

<script>
var elements = document.getElementsByClassName("myClass"); // 获取所有类名为 "myClass" 的元素
</script>
```



`document.querySelector()`

此方法返回文档中第一个匹配指定选择器的元素。选择器可以是 CSS 选择器。

```js
var element = document.querySelector("#myId"); // 使用ID选择器
var element = document.querySelector(".myClass"); // 使用类选择器
var element = document.querySelector("p"); // 使用标签选择器
```



`document.querySelectorAll()`

此方法返回一个包含了所有匹配指定选择器的元素的 节点 集合。与`querySelector()`不同，它返回所有匹配的元素而不仅是第一个。

```
var elements = document.querySelectorAll(".myClass"); // 获取所有类名为 "myClass" 的元素
```



`element.querySelector()`&`element.querySelectorAll()`

与 `document.querySelector()` 和 `document.querySelectorAll()` 类似，但它们是在已存在的 DOM 元素上调用，用于查找该元素的后代元素。

```js
var container = document.getElementById("myContainer");
var element = container.querySelector(".myClass"); // 在#myContainer内部查找类名为"myClass"的第一个元素
var elements = container.querySelectorAll(".myClass"); // 在#myContainer内部查找所有类名为"myClass"的元素
```



`element.children` & `element.childNodes`

- `element.children` 是一个 HTMLCollection，包含了元素的所有子元素（不包含文本节点和注释）。

- `element.childNodes` 是一个 NodeList，包含了元素的所有子节点，包括元素节点、文本节点和注释节点。

``` js
var children = element.children; // 获取子元素
var childNodes = element.childNodes; // 获取所有子节点
```



`element.parentNode` 和 `element.parentElement`

- `element.parentNode` 返回元素的父节点，可能是元素节点，也可能是文本节点或其他类型的节点。
- `element.parentElement` 返回元素的父元素节点（不包括文本节点和注释节点）。

```js
var parentNode = element.parentNode; // 获取父节点
var parentElement = element.parentElement; // 获取父元素节点
```



### 修改内容

`innerHTML`

`innerHTML` 属性设置或获取 HTML 元素的内容。当用来设置时，它会解析字符串中的 HTML 标签，并将其插入到元素中。

```js
// 获取元素的内容
var content = element.innerHTML;

// 设置元素的内容，并解析HTML标签
element.innerHTML = "Some <strong>text</strong>";
```



`textContent` 或 `innerText`

- `textContent` 属性设置或获取元素及其后代的文本内容。与`innerHTML`不同，`textContent`不会解析 HTML 标签。

- `innerText` 是一个类似的属性，但它在处理空白符时与`textContent`有所不同，并且不是标准的 DOM 属性。

```js
// 获取元素的文本内容
var text = element.textContent;

// 设置元素的文本内容
element.textContent = "Some text";
```



`value`

对于表单元素（如`<input>`, `<textarea>`），可以使用`value`属性来获取或设置其值。

```js
// 获取input元素的值
var inputValue = inputElement.value;

// 设置input元素的值
inputElement.value = "New Value";
```



`setAttribute()`

`setAttribute()` 方法用于设置元素属性的值。

```js
// 设置元素的属性
element.setAttribute("class", "newClass");
element.setAttribute("href", "http://www.example.com");
```



### 创建标签

通过 `document.createElement("标签名") `创建标签。

```js
var lis = document.createElement("li")
```



### 插入和删除

在元素内部的末尾插入内容

```javascript
var newElement = document.createElement("div")
element.appendChild(newElement);
```

在元素内部的开头插入内容

```js
element.insertBefore(newElement, element.firstChild);
```

移除元素

```javascript
element.removeChild(oldElement);
```

替换元素内容，使用`replaceChild()`替换子元素

```javascript
element.replaceChild(newElement, oldElement);
```





## 事件

事件是指某种程序的驱动行为。事件就是行为，行为发生了，代码块被执行了 ，触发了事件。用户或浏览器自身执行的某种动作，如点击按钮、加载页面或按下键盘按键等事件。

通常通过 `dom. 事件行为 = function(){函数内容} `绑定事件。

### 事件的基本概念

- **事件（Event）**：是文档或浏览器窗口中发生的特定交互瞬间。
- **事件监听器（Event Listener）**：也称为事件处理器，是等待事件发生并触发响应代码的函数。
- **事件目标（Event Target）**：是发生事件的对象，例如按钮、输入框等。



### 事件类型

鼠标事件：

- `click`：鼠标点击
- `dblclick`：鼠标双击
- `mousedown`：鼠标按钮被按下
- `mouseup`：鼠标按钮被释放
- `mousemove`：鼠标移动
- `mouseover`：鼠标移入元素
- `mouseout`：鼠标移出元素
- `contextmenu`：右键点击



键盘事件：

- `keydown`：键盘按键被按下
- `keyup`：键盘按键被释放
- `keypress`：键盘按键被按下并释放



表单事件：

- `submit`：表单提交
- `change`：表单元素值改变
- `focus`：元素获得焦点
- `blur`：元素失去焦点



文档事件：

- `DOMContentLoaded`：文档加载完成
- `load`：整个页面及所有依赖资源加载完成
- `unload`：页面正在卸载



窗口事件：

- `resize`：窗口大小改变
- `scroll`：页面滚动



### 事件处理

行内事件处理：直接在 HTML 标签内添加事件处理属性，例如 `onclick`。

```html
<button onclick="alert('Clicked!')">Click me</button>
```

属性添加事件处理：在 JavaScript 中获取 DOM 元素，然后为其事件属性赋值一个函数。

```javascript
document.getElementById('myButton').onclick = function() { alert('Clicked!'); };
```

添加事件监听器：使用`addEventListener`方法为元素添加事件监听器。

```javascript
document.getElementById('myButton').addEventListener('click', function() { alert('Clicked!'); });
```



### 事件对象

当一个事件被触发时，浏览器会自动生成一个事件对象并将其作为参数传递给事件处理函数。这个事件对象包含了有关该事件的各种信息可以用来获取和操作事件的相关属性和方法。

- `event.type`：事件的类型
- `event.target`：触发事件的目标元素
- `event.clientX / event.clientY`：鼠标事件发生时的窗口坐标
- `event.key`：键盘事件中按下的键的值







## 请求方式

在 Web 开发中，HTTP 请求方式定义了客户端与服务器之间的不同类型的交互，以下是常见请求方式的详解：

###  GET

用于请求服务器发送资源或数据。

- 数据在 URL 中传递，通过查询字符串的形式附加在请求地址后。

- 没有请求体（body）。
- 安全性较低，因为数据在 URL 中暴露。
- 幂等操作，意味着多次执行同一请求，资源的状态不会改变。

适用场景：获取资源，如检索页面、查询数据。



###  POST

用于向服务器提交数据。

- 数据在请求体中传递。
- 可以发送大量数据。
- 不是幂等操作，多次执行同一请求可能会产生不同的结果。
- 更安全，因为数据不会在 URL 中暴露。

适用场景：表单提交、上传文件、创建资源。



###  PUT

用于更新服务器上的资源。

- 数据在请求体中传递。
- 通常用于完整地替换资源或集合。
- 幂等操作，多次执行同一请求，资源的状态最终是相同的。

适用场景：更新资源，如更新用户信息。



###  DELETE

用于删除服务器上的资源。

- 通常没有请求体。

- 幂等操作，多次执行同一请求，资源最终都会被删除。

适用场景：删除资源，如删除一条用户记录。



###  PATCH

用于对资源进行部分更新。

- 数据在请求体中传递。

- 不是幂等操作，因为多次执行同一请求可能会得到不同的结果

适用场景：对资源进行部分修改，如修改用户的部分信息。



###  HEAD

类似于 GET 请求，但服务器不会返回请求的资源，只返回响应头。

- 用于检查资源的元数据，如验证资源是否存在或获取资源的最后修改时间。

适用场景：获取资源的元信息。



###  OPTIONS

用于获取指定 URL 支持的方法列表。

允许客户端查看服务器支持哪些 HTTP 方法。

适用场景：CORS（跨源资源共享）中的 “预检” 请求。





## AJAX发送各种请求



AJAX，全称“Asynchronous JavaScript and XML”（异步JavaScript和XML），是一种用于创建交互式网页应用的网页开发技术。

它允许浏览器与服务器之间进行异步数据交互，可以在不重新加载整个页面的情况下，更新页面的部分内容。



### 结合jQuery发送AJAX请求



使用 jQuery 结合 AJAX 发送 HTTP 请求可以更加简洁和方便，因为 jQuery 提供了一套高层次的 AJAX 实现。以下是使用 jQuery 发送各种 HTTP 请求的示例。

引入 jQuery

首先，确保在 HTML 文件中引入了 jQuery 库。

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

GET 请求

```javascript
$.get('https://api.example.com/data', function(response) {
  console.log('GET Response:', response);
}).fail(function(xhr, status, error) {
  console.error('GET Error:', error);
});
```

POST 请求

```javascript
var data = { key: 'value' };

$.post('https://api.example.com/data', data, function(response) {
  console.log('POST Response:', response);
}).fail(function(xhr, status, error) {
  console.error('POST Error:', error);
});
```

PUT 请求

```javascript
var data = { key: 'new-value' };

$.ajax({
  url: 'https://api.example.com/data/123',
  type: 'PUT',
  data: JSON.stringify(data),
  contentType: 'application/json',
  success: function(response) {
    console.log('PUT Response:', response);
  },
  error: function(xhr, status, error) {
    console.error('PUT Error:', error);
  }
});
```

DELETE 请求

```javascript
$.ajax({
  url: 'https://api.example.com/data/123',
  type: 'DELETE',
  success: function() {
    console.log('DELETE Request was successful.');
  },
  error: function(xhr, status, error) {
    console.error('DELETE Error:', error);
  }
});
```

PATCH 请求

```javascript
var data = { key: 'partial-value' };

$.ajax({
  url: 'https://api.example.com/data/123',
  type: 'PATCH',
  data: JSON.stringify(data),
  contentType: 'application/json',
  success: function(response) {
    console.log('PATCH Response:', response);
  },
  error: function(xhr, status, error) {
    console.error('PATCH Error:', error);
  }
});
```

HEAD 请求

```javascript
$.ajax({
  url: 'https://api.example.com/data',
  type: 'HEAD',
  success: function(xhr, status) {
    console.log('HEAD Headers:', xhr.getAllResponseHeaders());
  },
  error: function(xhr, status, error) {
    console.error('HEAD Error:', error);
  }
});
```

OPTIONS 请求

```javascript
$.ajax({
  url: 'https://api.example.com/data',
  type: 'OPTIONS',
  success: function(response) {
    console.log('OPTIONS Response:', response);
  },
  error: function(xhr, status, error) {
    console.error('OPTIONS Error:', error);
  }
});
```



### 结合HTML发送

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!-- 1.引入 jquery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
  <button onclick="ajaxTestGet()">get请求示例</button>
  <button onclick="ajaxTestPost()">post请求示例</button>
</body>
</html>
<script>
  function ajaxTestGet(){
    $.ajax({
      // 请求地址
      url: './static/json/test.json',
      // 请求方式
      type: 'get',
      // 请求头
      headers:{
        'loginToken': "null"
      },
      // 请求参数
      data: {
        "username": "username",
        "password": "password"
      },
      //请求数据类型
      contentType: 'application/json',
      // 请求成功回调函数
      success: function (result) {
        console.log("result--->", result);
      },
      // 请求失败回调函数
      error: function () {
        console.error("result--->", result);
      },
      // 请求超时时间
      timeout: 180000,
    });
  }

  function ajaxTestPost(){
    $.ajax({
      // 请求地址
      url: './static/json/test.json',
      // 请求方式
      type: 'post',
      // 请求头
      headers:{
        'loginToken': "null"
      },
      // 请求参数
      data: {
        "username": "username",
        "password": "password"
      },
      //请求数据类型
      contentType: 'application/json',
      // 请求成功回调函数
      success: function (result) {
        console.log("result--->", result);
      },
      // 请求失败回调函数
      error: function () {
        console.error("result--->", result);
      },
      // 请求超时时间
      timeout: 180000,
    });
  }
</script>
```



## 浏览器开发工具

浏览器开发者工具是一套内置于浏览器中的工具集，用于帮助开发者调试网页、查看源代码、检查网络请求等。



### 初识开发者工具

打开浏览器开发者工具。你可以通过右键点击页面，选择“检查”，会打开浏览器开发者工具。或者使用快捷键`Ctrl + Shift + I`

![image-20241023151922907](/html_css_js_asset/image-20241023151922907.png)

重要面板简介

- Elements（元素）面板：用于查看和编辑HTML结构。你可以通过这个面板直接修改页面元素的HTML代码，实时预览修改效果。
- Console（控制台）面板：用于输出调试信息、执行JavaScript代码等。这个面板在开发过程中非常有用，可以快速测试代码片段和查看错误信息。
- Sources（源代码）面板：用于查看和管理网页的JavaScript、CSS等资源文件。你可以在这里查看文件内容、设置断点以及单步执行代码。
- Network（网络）面板：用于监控网页加载过程中发送和接收的所有网络请求。你可以查看请求的详细信息、请求/响应头和内容等。
- Performance（性能）面板：用于分析网页性能瓶颈，通过记录和分析页面加载过程中的事件，找出影响性能的因素。
- Memory（内存）面板：用于分析内存使用情况，帮助查找内存泄漏和优化内存使用。



### Elements 元素面板

主要用于查看和编辑网页的HTML结构。通过Elements面板，开发者可以方便地导航和修改HTML代码，实时预览修改后的效果。

![image-20241023152746303](/html_css_js_asset/image-20241023152746303.png)



以下是Elements面板的详细作用：

- 查看和编辑HTML：在Elements面板中，你可以直接查看网页的HTML源代码，并且可以即时地编辑这些代码。这种交互式编辑的特点使得开发者可以快速尝试不同的代码修改，实时查看修改后的效果。
- 定位和选择元素：通过使用鼠标或键盘快捷键，你可以在Elements面板中定位和选择特定的HTML元素。这对于精确地定位和修改页面中的特定部分非常有用。
- 查找和替换文本：在Elements面板中，你可以在整个HTML文档中查找和替换特定的文本或标记，这在需要批量修改页面内容时非常方便。
- 检查元素属性：每个HTML元素都有一系列的属性和方法。在Elements面板中，你可以查看和编辑这些属性，进一步了解元素的特性和行为。
- DOM树形视图：Elements面板以树形结构展示了整个HTML文档的结构，这有助于开发者更好地理解页面布局和结构。
- 样式编辑器：除了可以查看和编辑HTML外，Elements面板还提供了样式编辑器，允许你直接编辑元素的CSS样式。这使得开发者可以更快地调整样式，而无
- 需在HTML和CSS之间来回切换。
- 实时预览：在编辑HTML或CSS时，Elements面板会实时预览所做的更改。这意味着你无需刷新页面就可以看到修改后的效果，大大提高了开发效率。



查看和编辑HTML，直接在Elements中编辑元素页面即可立即呈现

直接左键双击页面元素进行编辑，下面将`<a>`标签中的内容修改，页面立即展示出修改的内容

![image-20241023153104029](/html_css_js_asset/image-20241023153104029.png)



根据页面内容定位元素位置，点击面板左上角的箭头，就可以选中页面中的内容直接定位到面板中的元素位置

![image-20241023153327013](/html_css_js_asset/image-20241023153327013.png)

点击后，图标颜色变为蓝色说明启动了该功能，鼠标在页面上滑动，右侧面板中实时展示到对应元素的位置

![image-20241023153538168](/html_css_js_asset/image-20241023153538168.png)

### Console 控制台面板

主要用于显示网页在加载过程中产生的各类信息，包括错误、警告、调试信息等，也可以直接在这个面板中编辑js代码

![image-20241023153817306](/html_css_js_asset/image-20241023153817306.png)



以下是Console面板的主要功能和使用方法：

- 日志输出：Console面板可以显示由JavaScript代码输出的日志信息，包括普通信息（log）、警告（warning）、错误（error）等。这些信息对于调试和排查问题非常有用。
- 命令行交互：Console面板提供了一个类似于命令行的界面，允许你直接输入和执行JavaScript代码。你可以在这里测试代码片段、查看变量值、调用函数等。
- 自动完成和历史记录：Console提供了自动完成功能，根据你输入的内容提供代码补全建议。此外，还会保存你输入的历史记录，方便你快速复用之前的命令。
- 格式化输出：Console面板支持格式化输出，允许你控制日志信息的显示格式，包括控制台输出的颜色、字体等。
- 清除控制台：如果你在控制台中输出了很多日志信息，可以使用清除按钮来清空控制台的内容。你也可以使用快捷键（通常是Ctrl+L或Cmd+K）来快速清除控制台。



使用Console面板是开发过程中排查问题、调试代码的重要手段之一。通过查看控制台中的日志信息，你可以快速定位和解决潜在的问题。同时，利用控制台的命令行交互功能，你可以方便地进行代码测试和调试。





### Sources 源代码面板

主要用于浏览和管理网页的源代码，页面请求和加载的源代码都在这个面板中可见。

![image-20241023154409008](/html_css_js_asset/image-20241023154409008.png)



以下是Sources面板的主要功能和使用方法：

- 浏览源代码：在Sources面板中，你可以查看网页的HTML、CSS、JavaScript等源文件。这些文件通常保存在本地或在服务器上，Sources面板允许你方便地访问和查看它们。
- 实时编辑：在Sources面板中，你可以实时编辑网页的源代码。对于JavaScript代码，你甚至可以设置断点，进行单步执行等操作。这种交互式的编辑方式使得开发者可以快速尝试不同的代码修改，实时查看修改后的效果。
- 调试代码：在编辑器中打开JavaScript文件时，你可以在代码行号旁边单击来设置断点。当代码执行到断点处时，执行会暂停，允许你检查当前作用域中的变量值、调用栈等信息。你可以使用控制台来输出调试信息、执行特定命令等。
- 控制台输出：在Sources面板中，你可以使用控制台来输出调试信息、执行JavaScript代码等。控制台提供了一个交互式的环境，方便你进行代码测试和调试。
- 资源管理：除了浏览和编辑源代码，Sources面板还提供了资源管理功能。你可以查看和管理网页加载的所有资源文件，包括脚本、样式表、图片等。这些资源文件可以在面板中直接编辑或删除。



### Network 网络面板



主要用于监控和记录网页加载过程中发生的所有网络请求

![image-20241023154944753](/html_css_js_asset/image-20241023154944753.png)



以下是Network面板的主要功能和使用方法：

- 请求监控：Network面板以表格形式列出了所有网络请求的详细信息，包括请求的URL、方法、状态码、响应大小等。你可以实时查看每个请求的详细信息，了解请求的流程和状态。
- 时间轴视图：除了表格视图外，Network面板还提供了时间轴视图，以更直观的方式展示网络请求的顺序和加载时间。你可以查看每个请求的发起时间、完成时间以及在时间轴上的位置。
- 筛选和排序：Network面板提供了筛选和排序功能，你可以根据请求的类型、状态码、资源类型等对请求进行筛选，或者按照时间、大小等对请求进行排序。这有助于你快速找到特定的请求或分析请求的性能瓶颈。
- 查看请求/响应详情：对于每个网络请求，Network面板提供了详细的请求和响应头信息，以及响应的内容。你可以查看HTTP请求和响应的完整内容，以便更好地理解网络请求的过程和结果。
- 性能分析：通过Network面板，你可以分析网页加载的性能瓶颈。你可以查看每个请求的加载时间、大小以及在时间轴上的位置，找出导致性能问题的原因。



