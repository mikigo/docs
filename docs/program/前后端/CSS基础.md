# CSS 基础

## CSS 简介

CSS（层叠样式表，Cascading Style Sheets）是一种用于描述 HTML 或 XML（包括如 SVG、MathML 等各种 XML 方言）文档样式的样式表语言。CSS 描述了如何将结构化文档（例如 HTML 文档或 XML 应用）呈现在屏幕、纸质、语音或其他媒体上。简单地说，CSS 用于控制网页元素的布局和外观。

CSS 在网页设计和开发中扮演着至关重要的角色：

- **美化网页：** CSS 能够使网页更加美观，通过样式定义，可以创建具有吸引力的布局和设计，提升用户体验。
- **布局控制：** CSS 提供了一系列的布局技术，如 Flexbox 和 Grid，允许开发者创建复杂的页面布局，这些布局在不同的设备和屏幕尺寸上都能保持一致性和响应性。
- **提高网站的可维护性：** 通过将样式与内容分离，CSS 使得网站的维护变得更加简单。更新网站风格时，只需修改样式表，而不必触及 HTML 代码。

## CSS 语法

CSS 语法由一个由花括号包围的声明块组成，该声明块前面是一个选择器。选择器指向你想要样式化的 HTML 元素，而声明块包含一个或多个由分号分隔的 CSS 声明。

CSS 规则的结构，一个 CSS 规则通常由以下两部分组成：

1. **选择器（Selector）：** 指定要应用样式的 HTML 元素。
   1. 用于定位到 HTML 文档中的元素。选择器可以是元素名称、类（`.`前缀）、ID（`#`前缀）或更复杂的组合，比如属性选择器、伪类等。
2. **声明块（Declaration Block）：** 包含一个或多个声明，每个声明是一个属性 - 值对。
   1. 属性: 要改变 HTML 元素的样式，你需要指定 CSS 属性，比如`color`、`font-size`、`margin`等
   2. 值: 为属性分配的值，比如`red`、`12px`、`1em`等。值决定了属性如何影响所选元素。

CSS 属性定义了如何渲染 HTML 元素。以下是一些常用的 CSS 属性：

- `color`: 设置文本颜色。
- `font-size`: 设置字体大小。
- `background-color`: 设置背景颜色。
- `margin`: 设置元素的外边距。
- `padding`: 设置元素的内边距。
- `border`: 设置元素的边框。
- `width`, `height`: 设置元素的宽度和高度。
- `display`: 设置元素的显示类型（如`block`, `inline`, `none`等）。
- `float`: 设置元素的浮动布局。
- `position`: 设置元素的定位方式（如`static`, `relative`, `absolute`, `fixed`）。

CSS 值定义了属性的具体设置。以下是不同类型的 CSS 值：

- **颜色值**：如`red`, `#ff0000`, `rgb(255,0,0)`。
- **长度值**：如`10px`, `2em`, `50%`。
- **字符串值**：如`"Open Sans"`, `"Arial"`（用于`font-family`）。
- **数值值**：如`100`, `2.5`（用于`line-height`, `z-index`等）。
- **函数值**：如`url('path/to/image.jpg')`（用于`background-image`）

一个简单的例子

```css
h1 {
  color: blue;    /* 设置文字颜色为蓝色 */
  font-size: 20px; /* 设置字体大小为20像素 */
  margin: 0 auto;  /* 水平居中显示 */
}

/* 以下是针对类选择器的样式规则 */
.center-text {
  text-align: center; /* 文本居中对齐 */
}

/* ID选择器的样式规则 */
# introduction {
  background-color: lightgrey; /* 设置背景颜色为浅灰色 */
  padding: 20px; /* 设置内边距为20像素 */
}

/* 这里的注释说明了下一个规则将应用于所有带有特定属性的<a>元素 */
a[target="_blank"] {
  color: green; /* 将具有target="_blank"属性的链接文字设置为绿色 */
}
```



## 选择器

### 基础选择器

CSS 选择器用于定位 HTML 文档中的元素，以便应用样式。

#### 元素选择器

选择所有相同类型的元素。

基本写法

```css
/* 所有的 p 标签都应用样式，设置字体颜色为蓝色*/   
p { color: blue; }
```

应用例子

- 所有的`<p>`标签都应用了样式

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>示例CSS应用</title>
<style>
  p { color: blue; }
</style>
</head>
<body>
  <p>欢迎来到我的网页！</p>
  <p>这是一个示例段落。</p>
</body>
</html>
```

![image-20240925163800633](/html_css_js_asset/image-20240925163800633.png)

#### 类选择器

选择所有具有相同类名的元素。类名前有一个点（`.`）。

写法

```css
/* 对所有标签中 class属性值是highlight的标签应用样式，设置标签背景颜色 */
.highlight { background-color: yellow; }
```

应用例子

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>示例CSS应用</title>
<style>
  .highlight { background-color: yellow; }
</style>
</head>
<body>
  <p>欢迎来到我的网页！</p>
  <p class="highlight">这是一个示例段落。背景颜色是黄色</p>
  <p>这是另一个示例段落</p>
</body>
</html>
```

![image-20240925164545905](/html_css_js_asset/image-20240925164545905.png)

#### ID选择器

选择具有特定 ID 的单一元素。ID 名前有一个井号（`#`）

写法

```css
/* 对标签中 id属性值为main-header的应用样式, 设置字体 */
#main-header { font-size: 24px; }
```

应用例子

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>示例CSS应用</title>
<style>
  #main-header { font-size: 24px; }
</style>
</head>
<body>
  <p>欢迎来到我的网页！</p>
  <p id="main-header">这是一个示例段落</p>
  <p>这是另一个示例段落</p>
</body>
</html>
```

![image-20240925170637843](/html_css_js_asset/image-20240925170637843.png)

### 复合选择器

#### 后代选择器

选择一个元素内部的所有匹配的后代元素。

```css
   div p { margin: 10px; }
```

给`div`标签下所有的`p`标签应用样式，多级的`p`标签也会应用样式。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>示例CSS应用</title>
<style>
     div p { color: red; }
</style>
</head>
<body>
  <p>欢迎来到我的网页！</p>
  <div>
    <p>这是一个在div中的段落</p>
    <div>
      <p>这是一个嵌套多层在div中的段落</p>
    </div>
  </div>
  <p>这是另一个示例段落</p>
</body>
</html>
```

![image-20240925171832053](/html_css_js_asset/image-20240925171832053.png)

#### 子选择器

选择一个元素直接子代的匹配元素。

```css
   div p { margin: 10px; }
```

给`div`下所有p标签应用样式

#### 相邻兄弟选择器

选择紧跟在指定元素后面的匹配元素。

```css
   h2 + p { font-weight: bold; }
```

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>示例CSS应用</title>
<style>
  h2 + p { color: blue; }
</style>
</head>
<body>
  <p>欢迎来到我的网页！</p>
  <div>
    <p>这是一个在div中的段落</p>
    <div>
      <div><p>这是一个嵌套多层在div中的段落</p></div>
    </div>
  </div>
  <p>这是另一个示例段落</p>
  <h2>这是h2标题</h2>
  <p>这是另一个示例段落</p>
</body>
</html>
```

![image-20240925172911014](/html_css_js_asset/image-20240925172911014.png)



#### 一般兄弟选择器

选择在指定元素后面的所有匹配的兄弟元素。

```css
   h2 ~ p { font-style: italic; }
```

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>示例CSS应用</title>
<style>
  h2 ~ p { color: blue; }
</style>
</head>
<body>
  <p>欢迎来到我的网页！</p>
  <div>
    <p>这是一个在div中的段落</p>
    <div>
      <div><p>这是一个嵌套多层在div中的段落</p></div>
    </div>
  </div>
  <p>这是另一个示例段落</p>
  <h2>这是h2标题</h2>
  <p>这是另一个示例段落</p>
</body>
</html>
```

![image-20240925173142694](/html_css_js_asset/image-20240925173142694.png)

#### 属性选择器

选择具有特定属性或属性值的元素。

`[attribute]`选择所有具有指定属性的元素，不论该属性的值是什么。

```css
input[type] { color: blue; }
```

这将选择所有具有`type`属性的`input`元素，并应用蓝色文本。



`[attribute=value]`选择所有具有指定属性且属性值恰好等于给定值的元素。

```css
input[type="text"] { border: 1px solid black; }
```

这将选择所有`type`属性值为`text`的`input`元素，并为其添加黑色边框。



 `[attribute~=value]`选择所有具有指定属性且属性值为以空格分隔的一系列值中包含给定值的元素。

```css
div[class~="example"] { background-color: yellow; }
```

这将选择所有`class`属性值中包含单词`example`的`div`元素，并设置其背景颜色为黄色。



 `[attribute|=value]`选择所有具有指定属性且属性值是以给定值开头的元素，或者属性值是给定值，后面紧跟着一个连字符`-`。

```css
p[lang|="en"] { font-style: italic; }
```

这将选择所有`lang`属性值为`en`或以`en-`开头的`p`元素，并将其字体设置为斜体。



 `[attribute^=value]`选择所有具有指定属性且属性值以给定值开头的元素。

```css
a[href^="https"] { background-image: url('lock-icon.png'); }
```

这将选择所有`href`属性值以`https`开头的`a`元素，并在其背景上显示一个锁形图标。



 `[attribute$=value]`选择所有具有指定属性且属性值以给定值结尾的元素。

```css
img[src$=".png"] { border-radius: 5px; }
```

这将选择所有`src`属性值以`.png`结尾的`img`元素，并为其添加圆角边框。



 `[attribute*=value]`选择所有具有指定属性且属性值中包含给定值的元素。

```css
li[title*="chapter"] { font-weight: bold; }
```

这将选择所有`title`属性值中包含单词`chapter`的`li`元素，并将其文本设置为粗体。



 `[attribute operator value i]`这是一个带有`i`修饰符的属性选择器，它用于表示选择时不区分大小写。

```css
a[href="example.com" i] { color: green; }
```

这将选择所有`href`属性值为`example.com`的`a`元素，不论其大小写如何，并将其文本颜色设置为绿色。

### 组合选择器

上面选择器可以自由组合，从而创建更复杂的选择器来精确匹配特点的元素

```css
input[type="submit"].button { padding: 10px; }
```

这将选择所有`type`属性为`submit`且具有`button`类的`input`元素，并设置其填充为 10 像素。



### 应用选择器的例子

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <title>我的网页</title>
  <link rel="icon" href="http://adtmp.uniontech.com/static/img/logo.c1b427eb.png">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>示例CSS应用</title>
<style>
  /* 这是页面的内嵌样式表 */

  /* 样式化标题 */
  h1 {
    color: blue;    /* 设置标题颜色为蓝色 */
    font-size: 20px; /* 设置标题字体大小为20像素 */
    margin: 0 auto;  /* 水平居中显示标题 */
    text-align: center; /* 文本居中对齐 */
  }

  /* 样式化类选择器应用于的段落 */
  .center-text {
    text-align: center; /* 段落文本居中对齐 */
  }

  /* 样式化ID选择器应用于的段落 */
  #introduction {
    background-color: lightgrey; /* 设置背景颜色为浅灰色 */
    padding: 20px; /* 设置内边距为20像素 */
  }

  /* 样式化特定属性的链接 */
  a[target="_blank"] {
    color: green; /* 将链接文字设置为绿色 */
  }
</style>
</head>
<body>

<!-- 应用了CSS样式的标题 -->
<h1>我的简介</h1>

<!-- 应用了类选择器的段落 -->
<p class="center-text">这是一个应用了类选择器的居中段落。</p>
<!-- 应用了ID选择器的段落 -->
<p id="introduction">这个段落有一个唯一的ID，并且样式为浅灰色背景和内边距。</p>
<!-- 应用了属性选择器的链接 -->
<a href="http://adtmp.uniontech.com" target="_blank">访问adtmp.com</a>

</body>
</html>
```

![image-20240925162849292](/html_css_js_asset/image-20240925162849292.png)

## CSS常用属性

### 常用字体属性

- font-family 字体类型 宋体、⿊体、⾪书、楷体
- font-size 22px
- font-style 字体的⻛格 normal | intalic | oblique | inherit 默认值、斜体、倾斜、继承
- font-weight 粗细程度 100-900 | bold | bolder | lighter | normal
  数值、粗体、更粗、更细、默认



### 常用文本属性

```html
<style>
p{
  font-family: Arial; /* 字体类型：Arial */
  font-size: 40px; /* 字体大小：40个像素点 */
  color: orangered; /* 字体颜色：橙红色 */
  font-weight: bolder; /* 文本重量：文本加粗 */
  font-style: italic; /* 字体样式：斜体 */
  text-align: center; /* 文本水平位置：居中 */
  text-decoration: underline; /* 文本修饰：下划线 */
  text-transform: uppercase; /* 文本转换：转大写 */
  line-height: 1; /* 行高 - 可以用来调整上下高度 */
  text-shadow: 15px 15px 2px #000000; /* 文本阴影：x轴 y轴 模糊度 颜色 */
}
</style>
<p>HelloWorld</p>
```



### 常用颜色属性

- color 设置颜⾊
- background-color 背景颜⾊
- background-image 背景图⽚
- background-repeat no-repeat | repeat-x|repeat-y 不重复 横向重复 纵向重复 横向重复

## HTML中引入CSS的方式

### 内联方式

直接在标签中的 `style` 属性中添加 `css`

```html
<div style="background: red"></div>
```



### 嵌入方式

在HTML的`<head>`标签中的`<style>`标签中写下CSS代码，根据CSS中的选择器来使用到样式

```html
<head>
	<style>
	.content {
		background: red;
	}
	</style>
</head>
```



### 连接引入方式

在HTML的`<head>`标签中直接引入外部的css文件

- 本地的css文件
- 网上的css文件

```html
<head>
	<link rel="stylesheet" type="text/css" href="xxxx.css">
</head>
```



