---
Author: lixintao
---

# HTML 基础


## HTML、CSS、JS三者关系

HTML、CSS、JS共同构建了我们看到的所有网页展示和交互。

1. **HTML (HyperText Markup Language)**:
   - HTML 是构建网页的标准标记语言。
   - 它定义了网页的结构和内容，比如标题、段落和链接等。
   - HTML 文档由一系列的元素构成，这些元素通过标签（如`<html>`、`<title>`、`<body>`等）来定义。
2. **CSS (Cascading Style Sheets)**:
   - CSS 用于设置 HTML 文档的样式和布局。
   - 它允许你指定字体、颜色、间距和其他页面元素的外观属性。
   - CSS 规则由选择器和一组属性构成，它们定义了如何显示选定的 HTML 元素。
3. **JavaScript (JS)**:
   - JavaScript 是一种编程语言，用于使网页具有交互性。
   - 它可以用来动态更新内容、控制多媒体、制作动画效果、以及与用户进行交互。
   - JavaScript 代码可以直接嵌入 HTML 页面中，或在单独的.js 文件中定义。

**三者之间的关系**：

- **结构（HTML）**：HTML 提供了网页的骨架和内容。没有 HTML，网页就失去了结构和意义。
- **样式（CSS）**：CSS 用于装饰 HTML 结构，使网页看起来更加美观和用户友好。
- **行为（JavaScript）**：JavaScript 则负责网页的行为，它使得网页不仅仅是静态的文档，而是能够响应用户操作并与用户互动的动态界面。

在创建现代的、动态的、交互式的网页时，通常需要同时使用 HTML、CSS 和 JS：

- HTML 定义了网页的内容。
- CSS 描述了网页的外观和格式。
- JavaScript 则增加了网页的交互性和功能。



## HTML语法概述和基本结构

语法

1. 标签：HTML 文档由一系列标签组成，标签通常成对出现，如`<p>`和`</p>`。
2. 属性：标签可以包含属性，用于提供额外的信息，如`<img src="image.jpg" alt="图片描述">`。
3. 注释：注释用于解释代码，不会被浏览器显示。格式为：`<!-- 注释内容 -->`。

基本结构

- 将代码保存在本地以`html`结尾，使用浏览器打开即可看到页面效果

```html
<!DOCTYPE html>
<html>
<head>
    <title>网页标题</title>
</head>
<body>
    <!-- 网页内容 -->
</body>
</html>
```



## 常用标签

文档结构

- `<html>`: 根元素，包含整个页面的内容。
- `<head>`: 文档头部，包含页面的元数据，如字符编码声明、页面标题、引用 CSS 和 JavaScript 文件等。
- `<title>`: 定义文档的标题，显示在浏览器标签页上。
- `<body>`: 文档主体，包含可见的页面内容。

文本和段落

- `<h1>` - `<h6>`: 标题标签，定义六级标题，`<h1>` 是最高级别。
- `<p>`: 段落标签，定义文本段落。
- `<br>`: 换行标签，用于在文本中插入换行。
- `<hr>`: 水平线标签，用于创建一条水平分隔线。

格式化

- `<strong>` 或 `<b>`: 加粗文本。
- `<em>` 或 `<i>`: 斜体文本，`<em>` 表示强调，`<i>` 表示文本的风格。
- `<del>` 或 `<s>`: 删除线文本，表示文本已被删除或不再准确。
- `<ins>` 或 `<u>`: 下划线文本，表示文本是插入的。
- `<sup>` 标签用于上标文本，`<sub>` 标签用于下标文本。

链接和图像

- `<a>`: 锚点标签，用于创建超链接。
- `<img>`: 图像标签，用于嵌入图像。

列表

- `<ul>`: 无序列表。
- `<ol>`: 有序列表。
- `<li>`: 列表项，用于 `<ul>` 或 `<ol>` 中。
- `<dl>`, `<dt>`, `<dd>`: 描述列表，用于项目及其描述。

表格

- `<table>`: 表格标签。
- `<tr>`: 表格行。
- `<th>`: 表格头单元格。
- `<td>`: 表格数据单元格。

表单

- `<form>`: 表单标签，用于收集用户输入。
- `<input>`: 输入标签，可以是文本框、复选框、单选按钮等。
- `<label>`: 标签标签，定义输入字段的描述性标签。
- `<button>`: 按钮标签，用于在表单中创建按钮。

分区和布局

- `<div>`: 分区标签，用于布局，是一个块级容器。
- `<span>`: 用来组合文档中的行内元素。

元数据

- `<meta>`: 元数据标签，提供关于 HTML 文档的元信息，如页面描述、关键词、作者等。

其他

- `<script>`: 脚本标签，用于嵌入或引用 JavaScript 代码。
- `<style>`: 样式标签，用于嵌入 CSS 样式。

## 标签详解

### head 标签

`<head>`标签定义了文档的头部，它是一个包含所有头部元素的容器。头部元素通常包含了与页面显示内容不直接相关的信息，但这些信息对于浏览器来说是非常重要的，因为它们描述了页面的整体属性和设置。

例子:

```html
<head>
  <meta charset="UTF-8">
  <title>我的标题</title>
  <meta name="description" content="页面描述">
  <meta name="keywords" content="关键词1, 关键词2">
  <meta name="author" content="作者名字">
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
  <script src="script.js"></script>
</head>
```

解释:

`<meta>`标签

提供了关于 HTML 文档的元信息，不会显示在页面上。它可以用来指定页面的字符集、页面描述、关键词、作者、视图窗口设置等。

- `charset`: 指定字符编码，如`<meta charset="UTF-8">`。
- `name`: 提供文档级别的元数据，如描述、关键词、作者等。
- `http-equiv`: 相当于 HTTP 头的作用，用于浏览器和服务器之间的通信，如内容类型、缓存政策、刷新等。

`<title>` - 页面标题

定义了浏览器工具栏的标题，当网页添加到收藏夹时，显示在收藏夹中的标题也是这个。它还显示在搜索结果中。

![image-20240925133401949](/html_css_js_asset/image-20240925133401949.png)

`<link>`用于链接外部资源，最常用的是链接 CSS 样式表和网站图标（favicon）。

- `rel`: 定义了当前文档与链接资源的关系。
- `href`: 指定了资源的 URL。
- 链接的css样式可直接使用

网站图标：

![image-20240925101011393](/html_css_js_asset/image-20240925101011393.png)

`<script>` - 脚本

用于在文档中嵌入或引用 JavaScript 脚本。脚本可以放在`<head>`或`<body>`中，具体取决于脚本的作用和是否需要等待页面加载。

- 内置脚本

  ```js
  <script>
    // JavaScript代码
    console.log('页面正在加载...');
  </script>
  ```

- 外部脚本，引入外部脚本后可直接使用外部脚本中的功能

  ```
  <script src="path/to/your-script.js"></script>
  ```



### body 标签

HTML `<body>` 标签是网页中不可或缺的一个元素，它代表了 HTML 文档的主体部分，包含了用户在浏览器中看到的所有内容，如文本、图片、视频、表单等。

- 在body标签中，可以自由组合内容标签来构建页面展示的内容

```html
<!DOCTYPE html>
<html>
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
</head>
<body>
  <h1>这是一个标题</h1>
  <p>这是一个段落。</p>
</body>
</html>
```

![image-20240925110632141](/html_css_js_asset/image-20240925110632141.png)

body标签中的属性

- text 指定文本颜色

- bgcolor 指定背景颜色

- backgroud 指定背景图片

- 设置边框

  ```html
  <body leftmargin=“边距值” rightmargin=“边距值” topmargin=“边距值” bottommargin="边距值" >
  ```

  

设置文本颜色和页面背景颜色

```html
<!DOCTYPE html>
<html>
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
</head>
<body bgcolor="#336699" text="white">
  <h1>这是一个标题</h1>
  <p>这是一个段落。</p>
</body>
</html>
```

![image-20240925112022776](/html_css_js_asset/image-20240925112022776.png)

设置边框和背景照片

```html
<!DOCTYPE html>
<html>
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
</head>
<body background="https://img-blog.csdnimg.cn/166e183e84094c44bbc8ad66500cef5b.jpeg#pic_center">
  <h1>这是一个标题</h1>
  <p>这是一个段落。</p>
</body>
</html>
```

![image-20240925113820167](/html_css_js_asset/image-20240925113820167.png)

### 文本和段落标签

`<h1>`-`<h6>`

标题标签用于定义六级标题，`<h1>` 是最高级别的标题，`<h6>` 是最低级别的标题。

```html
<!DOCTYPE html>
<html>
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
</head>
<body>
  <h1>这是一个标题</h1>
  <h2>这是一个二级标题</h2>
  <h3>这是一个三级标题</h3>
  <h4>这是一个四级标题</h4>
  <h5>这是一个五级标题</h5>
  <h6>这是一个六级标题</h6>
</body>
</html>
```

![image-20240925114516658](/html_css_js_asset/image-20240925114516658.png)

`<p>`标签

段落标签用于定义文本段落。浏览器会自动在段落之间添加空白。

```html
<!DOCTYPE html>
<html>
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
</head>
<body>
  <p>这是一个段落。</p>
  <p>这是另一个段落。</p>
</body>
</html>
```

![image-20240925133223770](/html_css_js_asset/image-20240925133223770.png)

`<br>`标签

对一行内容进行换行

```html
<!DOCTYPE html>
<html>
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
</head>
<body>
  我是第一行<br>我是第二行
</body>
</html>
```

![image-20240925133744240](/html_css_js_asset/image-20240925133744240.png)

`<hr>`

 水平线标签，用于创建一条水平分隔线。

```html
<!DOCTYPE html>
<html>
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
</head>
<body>
  我是第一行<hr>我是第二行
</body>
</html>
```

![image-20240925133855612](/html_css_js_asset/image-20240925133855612.png)

### 格式化文本

`<strong>` 或 `<b>`: 加粗文本。

`<em>` 或 `<i>`: 斜体文本，`<em>` 表示强调，`<i>` 表示文本的风格。

`<del>` 或 `<s>`: 删除线文本，表示文本已被删除或不再准确。

`<ins>` 或 `<u>`: 下划线文本，表示文本是插入的。

`<sup>` 标签用于上标文本，`<sub>` 标签用于下标文本。

```html
<!DOCTYPE html>
<html>
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
</head>
<body>
  加粗:<strong>我是第一行</strong>
  <br>
  斜体: <em>我是第二行</em>
  <br>
  加粗: <b>加粗文本</b>
  <br>
  斜体: <i>斜体文本</i>
  <br>
  删除线: <del>删除线文本</del>
  <br>
  下划线: <ins>下划线文本</ins>
  <br>
  商标:<sup>上标文本</sup>
  <br>
  商标<sub>下标文本</sub>
</body>
</html>
```

![image-20240925135806595](/html_css_js_asset/image-20240925135806595.png)

### 链接和图像

`<a>`: 锚点标签，用于创建超链接。

- 点击链接跳转目标网址

`<img>`: 图像标签，用于嵌入图像。

```html
<!DOCTYPE html>
<html>
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
</head>
<body>
  <img src="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png" alt="Logo">
  <br>
  <a href="http://adtmp.uniontech.com">Visit UnionTech</a>
</body>
</html>
```



![image-20240925141740778](/html_css_js_asset/image-20240925141740778.png)

### 列表

`<ul>`: 无序列表。

`<ol>`: 有序列表。

`<li>`: 列表项，用于 `<ul>` 或 `<ol>` 中。

`<dl>`, `<dt>`, `<dd>`: 描述列表，用于项目及其描述。

#### 无序列表

无序列表用于表示没有特定顺序的项目列表。它由 `<ul>` 标签定义，列表项则使用 `<li>` 标签。

```html
<body>
  <ul>
    <li>列表项 1</li>
    <li>列表项 2</li>
    <li>列表项 3</li>
  </ul>
</body>
```



![image-20240925142321697](/html_css_js_asset/image-20240925142321697.png)

#### 有序列表

有序列表用于表示有特定顺序或优先级的项目列表。它由 `<ol>` 标签定义，列表项同样使用 `<li>` 标签。

```html
<body>
  <ol>
    <li>第一项</li>
    <li>第二项</li>
    <li>第三项</li>
  </ol>
</body>
```

![image-20240925142641867](/html_css_js_asset/image-20240925142641867.png)

`<ul>`和`<ol>`的属性

- `type`: 设置列表项标记的类型（对于 `<ol>` 可以为 `1`, `A`, `a`, `I`, `i`；对于 `<ul>` 可以为 `disc`, `circle`, `square`）。
- `start`: 仅适用于 `<ol>`，设置列表项的起始编号。
- `reversed`: 仅适用于 `<ol>`，设置列表项编号是否倒序。

```html
<body>
  <ol type="A" start="10" reversed>
    <li>第一项</li>
    <li>第二项</li>
    <li>第三项</li>
  </ol>
</body>
```

有序列表排序是大写字母形式

start是开始的数字

reversed是倒叙排列

![image-20240925143123590](/html_css_js_asset/image-20240925143123590.png)



`<li>` 的属性

- `value`: 仅适用于 `<ol>` 中的 `<li>`，设置当前列表项的编号。

```html
<body>
  <ol type="1" start="10">
    <li>第一项</li>
    <li value="19">第二项</li>
    <li>第三项</li>
  </ol>
</body>
```

![image-20240925143640331](/html_css_js_asset/image-20240925143640331.png)

#### 自定义列表(描述列表)

自定义列表用于描述列表项，通常用于术语和定义。它由 `<dl>` 标签定义，列表项的标题使用 `<dt>` 标签，描述则使用 `<dd>` 标签。

```html
<body>
  <dl>
    <dt>术语 1</dt>
    <dd>定义描述 1</dd>
    <dt>术语 2</dt>
    <dd>定义描述 2</dd>
  </dl>
</body>
```

![image-20240925143842950](/html_css_js_asset/image-20240925143842950.png)

#### 嵌套列表

列表中可以嵌套其他列表来创建复杂的列表结构

```html
<body>
  <ul>
    <li>水果
      <ul>
        <li>苹果</li>
        <li>香蕉</li>
      </ul>
    </li>
    <li>蔬菜
      <ol>
        <li>菠菜</li>
        <li>胡萝卜</li>
      </ol>
    </li>
  </ul>
</body>
```

![image-20240925144725469](/html_css_js_asset/image-20240925144725469.png)

### 表格

表格是一种用于展示数据的结构化方式。表格由 `<table>` 元素创建，其中包含行 (`<tr>`)、单元格 (`<td>` 或 `<th>`) 等标签。

`<table>`定义 HTML 文档中的表格。

- **属性**：
  - `border`：设置表格边框的宽度。
  - `width`：设置表格的宽度。
  - `height`：设置表格的高度。
  - `align`：设置表格在页面中的水平对齐方式（`left`, `center`, `right`）。
  - `cellspacing`：设置单元格之间的空间。
  - `cellpadding`：设置单元格内容与其边框之间的空间。
  - `summary`：提供表格内容的摘要，主要用于辅助技术如屏幕阅读器。

`<tr>`定义表格中的行。

- **属性**：
  - `align`：设置行内单元格内容的水平对齐方式。
  - `valign`：设置行内单元格内容的垂直对齐方式。

`<td>`定义表格中的标准单元格。

- **属性**：
  - `align`：设置单元格内容的水平对齐方式。
  - `valign`：设置单元格内容的垂直对齐方式。
  - `colspan`：设置单元格应该横跨的列数。
  - `rowspan`：设置单元格应该横跨的行数。

`<th>`定义表格中的表头单元格。其内容通常呈现为粗体并且居中。

- **属性**：与 `<td>` 标签具有相同的属性。

`<thead>`, `<tbody>`, `<tfoot>`这些标签用于将表格内容分为三个部分：表头 (`<thead>`), 表体 (`<tbody>`), 和表脚 (`<tfoot>`)。它们有助于文档的语义结构，并允许浏览器进行更复杂的表格处理。

简单表格

```html
<!DOCTYPE html>
<html>
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
</head>
<body>
  <table border="1" cellspacing="0" cellpadding="10">
    <tr>
      <th>表头1</th>
      <th>表头2</th>
    </tr>
    <tr>
      <td>单元格1</td>
      <td>单元格2</td>
    </tr>
  </table>
</body>
</html>
```

![image-20240925145723222](/html_css_js_asset/image-20240925145723222.png)

结合上面标签及属性的表格例子

- `<thead>`, `<tbody>`, `<tfoot>` 是可选标签，在表格也可以不使用

```html
<!DOCTYPE html>
<html>
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
</head>
<body>
  <table border="1" width="50%" height="200" align="center" cellspacing="5" cellpadding="10" summary="这是一个展示表格标签用法的示例表格">
    <thead>
      <tr align="center" valign="middle">
        <th>表头1</th>
        <th>表头2</th>
        <th>表头3</th>
      </tr>
    </thead>
    <tbody>
      <tr align="left" valign="top">
        <td>单元格1</td>
        <td>单元格2</td>
        <td>单元格3</td>
      </tr>
      <tr align="right" valign="bottom">
        <td>单元格4</td>
        <td>单元格5</td>
        <td>单元格6</td>
      </tr>
    </tbody>
    <tfoot>
      <tr align="center" valign="middle">
        <td colspan="3">表脚内容</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>
```

![image-20240925145437051](/html_css_js_asset/image-20240925145437051.png)

### 表单

 表单通常由以下部分组成：

- `<form>` 标签：定义了表单的边界，`action` 属性指定了表单数据提交到的 URL，`method` 属性指定了数据的提交方式（通常是 GET 或 POST）。
- 输入元素：如文本框、密码框、单选按钮、复选框等，通常使用 `<input>` 标签创建。
- 标签 `<label>`：用于定义输入元素的描述性标签。
- 提交按钮：用于提交表单数据。

简单例子

```html
<form action="/submit-form" method="post">
  <label for="username">用户名:</label>
  <input type="text" id="username" name="username">
  
  <label for="password">密码:</label>
  <input type="password" id="password" name="password">
  
  <input type="submit" value="提交">
</form>
```

![image-20240925151059251](/html_css_js_asset/image-20240925151059251.png)

`<input>` 元素

- `type="text"`：创建单行文本输入框。
- `type="password"`：创建密码输入框，输入内容会被隐藏。
- `type="checkbox"`：创建复选框。
- `type="radio"`：创建单选按钮。
- `type="submit"`：创建提交按钮。
- `type="reset"`：创建重置按钮，可以重置表单字段。
- `type="button"`：创建一个普通按钮，通常与 JavaScript 一起使用。

`<input>` 属性

- **name**：定义输入字段的名称。这是当表单提交时，发送到服务器的数据的一部分。
- **value**：定义输入字段的初始值。对于 `type="button"`, `type="submit"`, `type="reset"`, 它定义了按钮上的文本。
- **id**: `id`属性是一个全局属性，意味着它可以用于任何 HTML 元素。它用于为元素指定一个唯一的标识符（ID）。

`<select>` 和 `<option>` 元素

- `<select>` 创建下拉列表。
- `<option>` 定义下拉列表中的一个选项。

`<select>` 和 `<option>` 属性



`<textarea>` 元素

- 创建一个多行文本输入框。

表单属性

- `action`：指定服务器上处理表单数据的脚本的 URL。
- `method`：指定提交表单数据的方法（GET 或 POST）。
- `enctype`：当 method 属性为 POST 时，enctype 属性指定表单数据的编码类型（例如，`application/x-www-form-urlencoded` 或 `multipart/form-data`）。



```html
<!DOCTYPE html>
<html>
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
</head>
<body>
  <form>
    <label for="username">用户名:</label>
    <input type="text" id="username" name="username"><br><br>

    <label for="password">密码:</label>
    <input type="password" id="password" name="password"><br><br>

    <label>兴趣爱好:</label><br>
    <input type="checkbox" id="hobby1" name="hobby" value="reading">
    <label for="hobby1">阅读</label><br>
    <input type="checkbox" id="hobby2" name="hobby" value="traveling">
    <label for="hobby2">旅行</label><br>
    <input type="checkbox" id="hobby3" name="hobby" value="sports">
    <label for="hobby3">运动</label><br><br>

    <label>性别:</label><br>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">男</label><br>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">女</label><br><br>

    <label for="cars">选择汽车:</label>
    <select id="cars" name="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select><br><br>

    <label for="message">留言:</label><br>
    <textarea id="message" name="message" rows="10" cols="30">
在此输入文本...
    </textarea><br><br>

    <input type="submit" value="提交">
    <input type="reset" value="重置">
    <input type="button" value="普通按钮">
  </form>
</body>
</html>
```





![image-20240925152453853](/html_css_js_asset/image-20240925152453853.png)

### 分区和布局

### 块级标签

块级元素通常表示一个 “块”，它们会开始新的行，并占据其父元素的全部宽度。以下是一些块级标签的例子和特性：

**例子**: `<p>`, `<div>`, `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, `<dd>`, `<form>`, `<table>`,`<div>`等。

**特性**:

- 默认情况下，块级元素占据整个容器的宽度。
- 每个块级元素都会在其前后创建一个 “换行”。
- 可以设置宽度、高度、内边距（padding）和外边距（margin）。
- 宽度默认是它的容器的 100%，即占满整个容器宽度。

### 行内标签

行内元素通常表示文档中的 “内容”，它们不会开始新的行，并且只占据必要的宽度以容纳其内容。以下是一些行内标签的例子和特性：

**例子**: `<a>`, `<span>`, `<em>`, `<strong>`, `<b>`, `<i>`, `<u>`, `<del>`, `<ins>`, `<label>`等。

**特性**:

- 行内元素不会占据整行，它们允许其他元素在同一行显示。
- 一般情况下，行内元素的宽度、高度、内边距的顶部和底部以及外边距的顶部和底部不会影响布局。
- 宽度和高度通常由其内容决定。

### div 标签

`<div>` 是一个块级元素，这意味着它在页面中会开始一个新的块，并默认占据其父元素的全部宽度。`<div>` 元素通常用于对页面进行分区，组织内容和创建布局结构。

使用场景

- **页面布局**：`<div>` 常用于创建网页的布局框架，如创建页眉、页脚、主要内容区域、侧边栏等。
- **内容分组**：当一组内容在逻辑上属于一个整体时，可以使用 `<div>` 将其包裹起来，以便于样式化和脚本操作。
- **样式应用**：通过给 `<div>` 添加 `class` 或 `id` 属性，可以应用 CSS 样式来定制其外观和行为。



```html
<!DOCTYPE html>
<html>
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
</head>
<body>
  <div>第一个div块</div>
  <div>第二个div块</div>
  <div>第三个div块</div>
</body>
</html>
```

![image-20240925160744382](/html_css_js_asset/image-20240925160744382.png)

