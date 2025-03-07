# Vue基础



## Vue简介

Vue.js（通常简称为 Vue）是一个用于构建用户界面的渐进式 JavaScript 框架。它被设计为易于上手的同时，也能在需要时支持高级功能和复杂的应用架构。



核心特点

1. **声明式渲染**：Vue 使用声明式语法，使得开发者只需描述应用的状态，Vue 会自动渲染视图。这简化了 DOM 操作的复杂性。
2. **组件系统**：Vue 允许开发者通过小型、独立的可复用组件构建大型应用。组件可以独立编写，然后组合在一起。
3. **响应式原理**：Vue 的数据模型是响应式的，当数据变化时，视图会自动更新。这种数据绑定大大减少了 DOM 操作的代码量。
4. **虚拟 DOM**：Vue 使用虚拟 DOM 来提高渲染性能。在数据变化时，Vue 会先在虚拟 DOM 上进行操作，然后通过对比算法找出实际 DOM 需要变更的最小部分。
5. **过渡效果**：Vue 提供了过渡效果的封装，使得在插入、更新或移除 DOM 元素时，可以轻松实现动画效果。
6. **插件和生态系统**：Vue 拥有一个丰富的插件生态系统，包括路由器（Vue Router）和状态管理库（Vuex），以及其他工具和服务。
7. **单文件组件**：使用 Vue 的单文件组件（.vue 文件），可以将模板、脚本和样式封装在一个文件中，使得组件更加模块化。



## 使用Vue的三种方式

官方文档：https://cn.vuejs.org

使用vue的三中方式：

- 直接下载并用`<script>`标签导入
- CDN方式引入：`<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>`
- `npm install vue`



CDN方式

```js
// 对于制作原型或学习，你可以这样使用最新版本：
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

//对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏：
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
```



npm 安装的方式

要使用vue需要先下载安装nodejs，下载地址：`https://nodejs.org/en/`，其自带包管理器：npm。

新建一个项目目录，在该项目目录下安装`vue`: `npm install vue --save`



## 基本语法

Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析。



在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。



### 创建Vue对象

使用 `new Vue()` 创建一个 Vue 实例是使用 Vue.js 框架构建应用的第一步

当你创建一个新的 Vue 实例时，基本的语法结构如下：

```vue
var vm = new Vue({
  // 选项对象
  el: '#app', // 绑定元素
  data: { // 数据对象
    // 数据属性
  },
});
```

el

- 提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是 DOM 元素本身。

  ```vue
  el: '#app' // CSS 选择器
  // 或者
  el: document.getElementById('app') // DOM 元素
  ```



data

- Vue 实例的数据对象

  ```vue
  data: {
    message: 'Hello Vue!',
    user: {
      name: 'Alice'
    }
  }
  ```

  







### HTML插值

格式：{{XXX}}
功能：用于解析标签体内容。
写法：xxx是js表达式，且可以直接读取到data中的所有属性。

```vue
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<div id="app">
	<!-- 模板语法主要作用是插入值， {{ data中的数据属性 }}， 将数据属性渲染到页面 -->
	<h3>{{ msg }}</h3>
	<h3>{{ name }}</h3>
	<h3>{{ 1+1 }}</h3>
	<h3>{{ 1==1 ? "真的" : "假的" }}</h3>
</div>


<script type="text/javascript" src="./node_modules/vue/dist/vue.js"></script>
<script type="text/javascript">
    // 创建Vue
	var app = new Vue({
		el: '#app',  // 目的地，要到哪个标签。
		data: {   // 可以是函数，也可以是对象
			// 数据属性
			// 数据驱动视图，数据更改，视图进行更改
			msg:"hello vue",
			name:"123"
		}
	});

	app.name = "xx";
	console.log(app)
</script>
</body>
</html>

```



![image-20241025101349157](/html_css_js_asset/image-20241025101349157.png)



## 指令系统

在vue中提供了一套为(数据驱动视图)更方便的操作，这些操作称为指令系统，以v-xxx表示。



### v-text和v-html

v-text等价于{{}}插值，内部实现原理 innerText
v-html内部实现原理 innerHTML



```vue
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<div id="app">
	<h3>{{ msg }}</h3>
	ss
</div>


<script type="text/javascript" src="./node_modules/vue/dist/vue.js"></script>
<script type="text/javascript">
	var app = new Vue({
		el: '#app',  // 目的地，要到哪个标签。
		data: {
			msg:"hello vue",
			msg2:"<a href='#'>跳转</a>",
		},

		template: ` 
			<div>
				<h3>{{msg}}</h3>
				<h2 v-text='msg2'></h2>
				<p v-html='msg2'></p>
			</div>
		`
		// template的优先级高于el,即出现了template就不会渲染el指定目的地的内容。会渲染到body下
	});
</script>
</body>
</html>

```



![image-20241025101734411](/html_css_js_asset/image-20241025101734411.png)

### v-if 和 v-else

根据表达式的布尔值(true/false)进行判断是否**渲染**/**显示**该元素

- v-if
- v-else
- v-else-if



```vue
<!-- 模板部分 -->
<div v-if="score >= 90">
  优秀
</div>
<div v-else-if="score >= 80 && score < 90">
  良好
</div>
<div v-else-if="score >= 70 && score < 80">
  一般
</div>
<div v-else>
  不及格
</div>
<!-- v-show -->
<div v-show='flag'>测试v-show</div>

<script type="text/javascript">
	var app = new Vue({
		el: '#app',
		data: {
            score: 88,
            flag:false
		},
	});
</script>
```



### v-if和v-show

两者都可以用来对当前DOM显示或者隐藏，当isShow是true时显示，是false时隐藏。

不过两者隐藏的方式不一致。

- **v-if** 是一个条件渲染指令，它确保在切换过程中条件块内的事件监听器和子组件被适当地销毁和重建。当条件为假时，元素不会被渲染到 DOM 中；当条件为真时，元素会被渲染到 DOM 中。换句话说，`v-if` 是 “真正” 的条件渲染，因为它会根据条件动态地添加或移除 DOM 元素。
- **v-show** 则简单得多，不管初始条件是什么，元素总是会被渲染到 DOM 中，并且仅仅通过切换 CSS 的 `display` 属性来控制显示和隐藏。当条件为真时，元素的 `display` 属性设置为默认值（通常是 `display: block`），当条件为假时，`display` 属性被设置为 `display: none`。



性能影响的区别

- **v-if** 有更高的切换开销，因为每次切换时它都必须进行 DOM 的添加或删除操作，以及事件监听器和子组件的销毁和重建。
- **v-show** 有更高的初始渲染开销，因为无论条件如何，元素都会被渲染到 DOM 中。但是，由于它只是简单地切换 CSS 属性，所以在条件频繁变化时，`v-show` 的性能通常比 `v-if` 更好。



```vue
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		.box{
            width:300px;
            height:300px;
            background-color:red;
        }
	</style>
</head>
<body>
<div id="app">
	<h3>{{ msg }}</h3>
	ss
</div>


<script type="text/javascript" src="./node_modules/vue/dist/vue.js"></script>
<script type="text/javascript">
	var app = new Vue({
		el: '#app',  // 目的地，要到哪个标签。
		data: {
			msg:"hello vue",
			msg2:"<a href='#'>跳转</a>",
			isShow:false
		},

		template: ` 
			<div>
				<h3>{{msg}}</h3>
				<h2 v-text='msg2'></h2>
				<p v-html='msg2'></p>
				<div class="box" v-if='isShow'></div>
				<div class="box" v-show='isShow'></div>
			</div>
		`
	});
</script>
</body>
</html>

```



![image-20241025102333880](/html_css_js_asset/image-20241025102333880.png)





v-if不仅可以插入数据属性，也可以做运算判断来判断是否显示

```vue
<div id="app">
	<h3>{{ msg }}</h3>
	ss
</div>


<script type="text/javascript" src="./node_modules/vue/dist/vue.js"></script>
<script type="text/javascript">
	var app = new Vue({
		el: '#app',  // 目的地，要到哪个标签。
		data: {
			msg:"hello vue",
			msg2:"<a href='#'>跳转</a>",
			isShow:false
		},

		template: ` 
			<div>
				<h3>{{msg}}</h3>
				<div class="box" v-if='Math.random() > 0.5'>大于0.5</div>
				<div class="box" v-else>小于0.5</div>
			</div>
		`
	});
</script>

```



### v-for

Vue 中的 `v-for` 指令用于基于一个数组渲染一个列表。它可以遍历数组或对象，然后为每个元素生成模板中定义的 DOM 结构。

```vue
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		.box{
            width:300px;
            height:300px;
            background-color:red;
        }
	</style>
</head>
<body>
<div id="app">
	<h3>{{ msg }}</h3>
	ss
</div>


<script type="text/javascript" src="./node_modules/vue/dist/vue.js"></script>
<script type="text/javascript">
	var app = new Vue({
		el: '#app',  // 目的地，要到哪个标签。
		data: {
			msg:"hello vue",
			msg2:"<a href='#'>跳转</a>",
			isShow:false,
			itemList:[
				{id:1,name:"面",price:15},
				{id:2,name:"炒面",price:16},
				{id:3,name:"烩面",price:17},
			],
			per:{
				name:"zhansan",
				age:18,
				hobby:"sleep"
			}
		},

		template: ` 
			<div>
				<h3>{{msg}}</h3>
				<h2 v-text='msg2'></h2>
				
				<ul>
					<li v-for = '(item,index) in itemList'>
						<h1>{{index}}--菜名：{{ item.name }}</h1>
						<h1>价格：{{ item.price }}</h1>
					</li>
				</ul>
				<p v-for = '(value, key) in per'>{{key}}:{{value}}</p>
			</div>
		`
		// item是itemList中的每个元素，index是元素的索引
		// 遍历对象(value,key), 第一个是value值，第二个是key值
	});
</script>
</body>
</html>


```



![image-20241025103039628](/html_css_js_asset/image-20241025103039628.png)





### v-bind

用于动态地绑定一个或多个属性，或者一个组件 prop 到表达式。这意味着绑定后的属性值会随着表达式的变化而变化。



`v-bind` 指令的基本语法格式如下：

```html
v-bind:attribute="expression"
```

或者使用简写形式：

```html
:attribute="expression"
```

其中 `attribute` 是 HTML 元素的属性名（如 `href`, `src`, `title`, `class` 等），而 `expression` 是一个 Vue.js 表达式，其结果会被计算然后用于更新相应的属性。



```vue
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		.box{
            width:300px;
            height:300px;
            background-color:red;
        }
        .active{
        	background-color:yellow;
        }
	</style>
</head>
<body>

<div id="app">
	<h3>{{ msg }}</h3>
	<div>
		<div class="box" v-bind:class="{ active: isActive }"></div>
		<!-- isActive为true时，active会加到class中 -->
		<a v-bind:href="href">百度</a>
	</div>
</div>


<script type="text/javascript" src="./node_modules/vue/dist/vue.js"></script>
<script type="text/javascript">
	var app = new Vue({
		el: '#app',  // 目的地，要到哪个标签。
		data: {
			msg:"hello vue",
			msg2:"<a href='#'>跳转</a>",
			isShow:false,
			isActive:true,
			href:"http://www.baidu.com",
		},
	});
</script>
</body>
</html>


```



### v-on

Vue 中的 `v-on` 指令用于监听 DOM 事件，当指定的事件被触发时，可以执行相应的 JavaScript 代码。它是最常用的指令之一，尤其是在构建用户交互界面时。



`v-on` 指令的基本语法格式如下：

```vue
v-on:event="handler"
```

或者使用简写形式：

```vue
@event="handler"
```

其中 `event` 是要监听的事件名称（如 `click`, `submit`, `mouseover` 等），而 `handler` 是一个方法名或者内联 JavaScript 代码。



通常，`handler` 是组件方法中的一个函数名：

```html
<template>
  <button v-on:click="handler">Increment</button>
</template>

<script>
var app = new Vue({
		// 在vue中所有的事件都声明在methods中
		methods:{
			handler(){
				this.isShow = !this.isShow;
			}
		}
	});
</script>
```

在这个例子中，当按钮被点击时，`increment` 方法将被调用。



点击button会对指定DOM进行隐藏和显示

```vue
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		.box{
            width:300px;
            height:300px;
            background-color:red;
        }
        .active{
        	background-color:yellow;
        }
	</style>
</head>
<body>

<div id="app">
	<h3>{{ msg }}</h3>
	<div>
		<!-- <div class="box" v-on:click="isShow=false" v-if="isShow"></div> -->   <!-- 直接写处理逻辑-->
		<!-- <div class="box" v-on:click="showHandler()" v-if="isShow"></div> -->  <!-- 通过函数调用 -->
		<button v-on:click="showHandler">显示/隐藏</button>
		<div class="box" v-if="isShow"></div>
	</div>
</div>


<script type="text/javascript" src="./node_modules/vue/dist/vue.js"></script>
<script type="text/javascript">
	var app = new Vue({
		el: '#app',  // 目的地，要到哪个标签。
		data: {
			msg:"hello vue",
			isShow:true,
		},
		template: ``,
		// 在vue中所有的事件都声明在methods中
		methods:{
			showHandler(){
				this.isShow = !this.isShow;
			}
		}
	});
</script>
</body>
</html>


```

![image-20241025110114885](/html_css_js_asset/image-20241025110114885.png)



### v-models

它用于在输入和应用状态之间创建双向数据绑定。这意味着当用户在输入框中输入内容时，绑定的数据模型会实时更新；反之，当更新了数据模型，绑定的输入也会更新其显示值。



基本语法

```vue
<input v-model="dataProperty">
```

这里的 `dataProperty` 是 Vue 实例数据对象中的一个属性。`v-model` 会监听用户的输入事件，并在输入框的值变化时更新 `dataProperty`。



双向绑定原理

在 Vue 中，`v-model` 是一个语法糖，本质上它是由两个操作组成的：

1. `v-bind` 用于绑定一个 `value` 属性到输入元素上。
2. `v-on` 用于监听输入事件（如 `input` 事件），并在事件触发时更新数据。



以下是一个等价的例子，展示了 `v-model` 背后的原理：

```html
<input :value="dataProperty" @input="dataProperty = $event.target.value">
```

这里的 `:value` 是 `v-bind:value` 的缩写，而 `@input` 是 `v-on:input` 的缩写。



```vue
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
	</style>
</head>
<body>

<div id="app">
	<input type="" name="name" v-model="msg">
	<p>{{msg}}</p>
</div>


<script type="text/javascript" src="./node_modules/vue/dist/vue.js"></script>
<script type="text/javascript">

	var app = new Vue({
		el: '#app',  // 目的地，要到哪个标签。
		data: {
			msg:"heh",
		},
	});
</script>
</body>
</html>

```

![image-20241025111305188](/html_css_js_asset/image-20241025111305188.png)

## 组件

### 简介

在 Vue 中，组件是可复用的 UI片段，它封装了特定的功能和外观。可以将组件视为独立的小模块，每个组件负责一部分特定的任务，比如显示一个按钮、一个表单或者一个复杂的页面布局。

![image-20241025112152866](/html_css_js_asset/image-20241025112152866.png)



### 组件作用

- 提高可维护性：将应用拆分成多个小的组件，使得每个组件的功能相对单一，易于理解和修改。当应用的某个部分出现问题时，可以快速定位到相应的组件进行修复。
- 可复用性：一旦创建了一个组件，可以在不同的地方重复使用，减少代码重复。例如，一个通用的输入框组件可以在多个页面中使用。
- 团队协作：不同的开发人员可以同时开发不同的组件，提高开发效率。

### 组件的本质

组件的本质是一个带有 template、script 和 style 的自包含模块：

template：定义了组件的结构和内容。
- script：包含组件的逻辑，如数据、方法和生命周期钩子。
- style：定义了组件的样式，可以使用 Scoped CSS 来确保样式仅作用于当前组件。



### 组件分类

组件分为

- 全局组件
- 局部组件



全局组件：
在整个应用中都可以使用的组件。通过在 Vue 实例创建之前使用 Vue.component() 方法进行注册。例如：

```vue
Vue.component('MyGlobalComponent', {
  template: '<div>Global Component</div>'
});

```

局部组件：
只在特定的组件内部使用的组件。在组件的选项中通过 components 属性进行注册。例如：

```vue
const App = {
  components: {
    'MyLocalComponent': {
      template: '<div>Local Component</div>'
    }
  }
};

```



局部组件创建和使用

```vue
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
	</style>
</head>
<body>

<div id='app'>
</div>


<script type="text/javascript" src="./node_modules/vue/dist/vue.js"></script>
<script type="text/javascript">
	//1. 声明入口组件，这是局部组件
	var Vmain = {
		template:`
			<div class='main'>
				这里是入口
			</div>
		`
	}
	var app = new Vue({
		el: '#app',
		//3.使用子组件，像标签一样使用子组件，一定是闭合标签
		template: `<Vmain />`,
		data: {
			msg:"heh",
		},
		components: {
			//2. 挂载子组件
			Vmain:Vmain
		},
	});
</script>
</body>
</html>


```



使用全局组件

单文件组件是 Vue 中推荐的组件编写方式，它将一个组件的模板、脚本和样式写在一个以 .vue 为后缀的文件中

```vue
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!'
    };
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>

```

全局组件注册，注册后用法和局部组件一样

```vue
import MyGlobalComponent from './MyGlobalComponent.vue';

Vue.component('MyGlobalComponent', MyGlobalComponent);
```



### 组件命名格式

组件的命名可以使用驼峰式命名法或短横线分隔命名法。在注册组件时，需要保持命名的一致性。例如：

```vue
// 驼峰式命名
const MyComponent = { /*... */ };
Vue.component('MyComponent', MyComponent);

// 短横线分隔命名
const my-component = { /*... */ };
Vue.component('my-component', my-component);

```





