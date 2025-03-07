---
Author: 海针 - 搬运 Google开源项目风格指南之《Python风格指南》
---


# Python风格指南


## **1.** **引言**

### **1.1.** **目的**

本规范用于指导Python脚本编写人员，统一编码风格，提交代码的易读性和健壮性。

本规范不能替代Pylint/ruff等静态检查工具，请在提升代码前使用Pylint/ruff进行静态检查。

### **1.2.** **说明**

本规范中条目分为如下三个级别：

【强制】必须遵守的编码规范，新增代码必须严格按照规范编写，历史代码根据项目实际情况决定是否修改。

【建议】建议遵守的编码规范，根据代码所处上下文决定编码风格，但需要保持在同一项目中统一风格。

【注意】编码过程中的注意事项，通常为容易出现缺陷的代码，应当用合理的编码方式进行替代。

## 2. **环境**

### 2.1. **版本**

【强制】请使用Python 3.7 及以上版本编写代码。

【强制】请使用pylint 2.6 及以上版本进行静态代码检查。

### 2.2. **IDE**

【强制】使用PyCharm Community Edition 和 Visual Studio Code 作为代码编码及调试工具，保持同一项目中团队成员统一IDE。

## 3. **Python风格规范**

### 3.1. **符号**

#### 3.1.1. **分号**

【强制】 不要在行尾加分号，也不要用分号将两条命令放在同一行。

#### 3.1.2. **逗号**

【强制】 方法返回值中结束不能加逗号，加逗号后，返回值会自动变成元组，在使用过程中需要格外注意，用逗号的情况只有列表，元组，字典方法参数分割这一种情况。 

```python
def test**()**：
    """
    Returns：
    """
    return 1,
```



### 3.2. **空行，空格，缩进**

#### 3.2.1. **空行**

【强制】 

1，导包部分与类，方法之间隔开两个空行。

2，类和类之间隔开两个空行(内部类除外)。

3，类之外的方法隔开两行空行(装饰器中钩子函数除外)。

4，类中的方法和类之间隔开一个空行。

5，文件结尾部分应空一行。

#### 3.2.2. **空格**

1，【强制】 字典中key和冒号之间不能有空格。

2，【强制】 数组，元组，字典逗号之前不能有空格。

3，【强制】 等号，大于，小于符号两边必须有空格。

```python
# spam( ham[  ]，{ eggs： 2 }，[])

# x ，y = y ，x

# spam (1)

# dict ['key'] = list [index]

# x<1

# foo    = 1000

# dictionary = {

#     "foo"    ： 1，

#     "long_name"： 2，

#     }

# Yes： def complex(real，imag=0.0)： return magic(r=real，i=imag)

# Yes： def complex(real，imag： float = 0.0)： return Magic(r=real，i=imag)

# No： def complex(real，imag = 0.0)： return magic(r = real，i = imag)

# No： def complex(real，imag： float=0.0)： return Magic(r = real，i = imag)
```



上述代码中的空格是不规范的。

#### 3.2.3. **缩进**

【强制】 用4个空格来缩进代码，绝对不要用tab，也不要tab和空格混用(部分IDE设置tab为4个空格例外)。

### 3.3. **注释**

【强制】 注释中尽量使用全英文，以免系统或编码不同导致乱码。

1，文件注释，使用三引号。

```python
"""
* Copyright (C) 2020～2021 Uniontech Software Technology Co.，Ltd.
* This program is free software： you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation，either version 3 of the License，or
* any later version.
* This program is distributed in the hope that it will be useful，
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not，see <http：//www.gnu.org/licenses/>.
*
@File   ：   xx.py
@Desc   ：   xx
@Author ：   xx
@Time   ：   2021/8/20 18：14
@Connect：   xx@uniontech.com
"""
```



2，【强制】 方法和类描述，方法作用，参数说明，返回值说明使用三引号。

```python
def run(args)：
    """
    description
    Args：
    args： args
    Returns： return
    """
    return __ghost(args)
```

3，【强制】 行注释，使用# 开头，#后有一个空格，此类注释，注释变量，逻辑描述。

4，【强制】 TODO注释，# TODO开头，暂时使用代码，同时也可以用于未完成步骤描述，部分IDE有查看TODO注释，便于查看未完成部分或临时修改部分。

![img](/public/风格指南_assets/todo.png) 

### 3.4. **类和方法**

#### 3.4.1. **类**

【强制】 python3中，如果类不继承其他类，类名后不要加括号，如存在括号需要显示的继承object，内部类和嵌套也一样。

【强制】 类名字采用驼峰形式命令，并类名定义能表达该类最基本功能。

```python
class NoInputException**(**Exception**)**：
    pass
```

【建议】多继承容易造成逻辑混乱变量类型改变，故应尽量避免多继承。

#### 3.4.2. **方法**

【强制】 类内部的私有方法以_开头，单独定义的私有方法以__开头。

【强制】 使用全小写字母和_隔开，命名定义能体现方法的功能，例：get_conf。

### 3.5. **字符串**

【强制】 在同一个文件中，保持使用字符串引号的一致性，统一使用双引号。

【建议】避免在循环中用+和+=操作符来累加字符串，由于字符串是不可变的，这样做会创建不必要的临时对象，并且导致二次方而不是线性的运行时间。作为替代方案，你可以将每个子串加入列表，然后在循环结束后用 .join 连接列表。

```python
items = ['<table>']
for last_name，first_name in [1，2，3，4]：
    items.append('<tr><td>%s，%s</td></tr>' % (last_name，first_name))
items.append('</table>')
employee_table = ''.join(items)
```

【强制】 Python3.6及其以上的版本尽量使用f-string的方式格式化字符串，不仅简单而且效率相比%和format也是最高的。

【强制】 多行字符串注释，使用三重双引号”””而非三重单引号’’’，多行字符串不应随着代码其他部分缩进的调整而发生位置移动。如果需要避免在字符串中嵌入额外的空间，可以使用串联的单行字符串或者使用 [textwrap.dedent()](#textwrap.dedent) 来删除每行多余的空间。

```python
long_string = """This is fine if your use case can accept
  extraneous leading spaces."""
long_string = ("And this is fine if you cannot accept\n" +
       "extraneous leading spaces.")
long_string = ("And this too is fine if you cannot accept\n"
       "extraneous leading spaces.")
import textwrap
long_string = textwrap.dedent("""\
  This is also fine，because textwrap.dedent()
```

 

### 3.6. **文件和sockets等其他句柄**

【强制】 使用with打开文件，不能使用with关键字的句柄，可以自定义，实现__enter__和__exit__方法，同时还可以是用contextlib.closing

```python
with contextlib.closing(urllib.urlopen("http：//www.python.org/")) as front_page：
    for line in front_page：
        print(line)
```

### 3.7. **导入**

【强制】 每个 import 语句只导入一个模块，尽量避免一次导入多个模块。

【强制】 导入总应该放在文件顶部，位于模块注释和文档字符串之后，模块全局变量和常量之前。导入应该按照从最通用到最不通用的顺序分组：

1. __future__导入。

```python
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
```

2. 标准库导入，例如sys。

3. 第三方库导入。

4. 本独代码子包导入。

### 3.8. **命名规范**

【强制】 

模块名写法： module_name

包名写法： package_name

类名： ClassName

方法名： method_name

异常名： ExceptionName

函数名： function_name

全局常量名： GLOBAL_CONSTANT_NAME

全局变量名： global_var_name

实例名： instance_var_name

函数参数名： function_parameter_name

局部变量名： local_var_name

函数名，变量名和文件名应该是描述性的，尽量避免缩写，特别要避免使用非项目人员不清楚难以理解的缩写，不要通过删除单词中的字母来进行缩写。始终使用 .py 作为文件后缀名，不要用破折号。

#### 3.8.1. **应该避免的命名**

【推荐】

1，单字符名称，除了计数器和迭代器，作为 try/except 中异常声明的 e，作为 with 语句中文件句柄的 f。

2，包/模块名中的连字符(-)。

3，双下划线开头并结尾的名称(Python保留，例如__init__)。

#### 3.8.2. **命名的约定**

【强制】用单下划线_开头表示模块变量或函数是protected的(使用from module import *时不会包含)。

【强制】用双下划线(__)开头的实例变量或方法表示类内私有。

#### 3.8.3. **文件名**

【强制】 所有python脚本文件都应该以 .py 为后缀名且不包含 -.若是需要一个无后缀名的可执行文件，可以使用软联接或者包含 exec "$0.py" "$@" 的bash脚本。

 

## 4. **Python语言规范**

### 4.1. **异常**

 【强制】永远不要使用 except： 语句来捕获所有异常，也不要捕获 Exception 或者 StandardError ，除非你打算重新触发该异常，或者你已经在当前线程的最外层(记得还是要打印一条错误消息). 在异常这方面，Python非常宽容， except： 真的会捕获包括Python语法错误在内的任何错误. 使用 except： 很容易隐藏真正的bug。

 【推荐】模块或包应该定义自己的异常基类，这个基类继承Exception，模块的异常基类后缀应该叫做 Error。

 【推荐】优先合理的使用内置异常类，比如 ValueError 指示了一个程序错误，不要用 assert，用 raise 语句（手动抛出异常例外）。

 【推荐】尽量减少try/except块中的代码量. try块的体积越大，期望之外的异常就越容易被触发. 这种情况下，try/except块将隐藏真正的错误。

 【推荐】使用finally子句来执行那些无论try块中有没有异常都应该被执行的代码，这对于清理资源常常很有用，例如关闭文件。

### 4.2. **推导式，生成式及其循环控制**

【强制】循环的时候同时获取当前index使用enumerate。

【推荐】在简单的情况下创建列表使用生成器

【推荐】在字典循环的时候如果只需要value，可用_作为占位符占据key的位置。

```python
for _, item in dict.items()：
	pass
```

### 4.3. **默认参数值和代码类型注释**

【强制】不要在函数或方法定义中使用可变对象作为默认值。

```python
def foo(a, b=None)
def foo(a, b: Optional[Sequence] = None)
def foo(a, b: Sequence = ())
```

### 4.4. **True/False的求值**

 【强制】永远不要用==将一个布尔量与false相比较. 使用 if not x： 代替，如果你需要区分false和None，你应该用像 if not x and x is not None： 这样的语句

 【推荐】对于序列(字符串，列表，元组)，要注意空序列是false. 因此 if not seq： 或者 if seq： 比 if len(seq)： 或 if not len(seq)： 要更好

### 4.5. **特性**

【推荐】 访问和设置数据成员时，建议使用特性(properties)来代替它们。

```python
class Test(object)：

    def __init__(self，side)：
        self.side = side

    @property
    def area(self)：
        """Area of the square."""
        return self._get_area()

    @area.setter
    def area(self，area)：
        return self._set_area(area)

    def _get_area(self)：
        """Indirect accessor to calculate the 'area' property."""
        return self.side ** 2

    def _set_area(self，area)：
        """Indirect setter to set the 'area' property."""
        self.side = math.sqrt(area)

    @property
    def perimeter(self)：
        return self.side * 4
```

### 4.6. **倒序**

【推荐】可以使用[：：-1]和reversed方式进行反转。 使用reversed。

### 4.7. **对象类型判断**

【推荐】 可以使用isinstance和type方式，使用isinstance。

### 4.8. **判断空和非空**

在Python中，数字0，空字符串，空列表，空元组，空字典都为False

【推荐】判断非空直接使用if，判断空直接if not

### 4.9. **数据拷贝**

【强制】单纯的数据拷贝，使用深拷贝，避免造成不必要的麻烦。

【注意】判断两个对象是否指向同一地址，通常手段采用id()方法判断，但是在Python中有小数据对象池，Python会将一定规则的字符串和-5到256，True和False，None创建一份放在驻留池中，无论程序中变量指向这些值都不会创建对象，而是直接引用。

### 4.10. **模块划分**

【推荐】 Python或其他语言划分包或者代码归类，一般都采用按功能划分，比如：

* 项目中需要很多脚本，那么就需要把这些脚本放在一个scripts的文件夹中

* 公共的方法及其常量文件constant放在utils文件夹中

* 模型类放在models中

* 数据库处理相关放在db中

* ......

  按功能划分，且文件夹名能体现下面模块的大体功能。

### 4.11. **配置**

【推荐】 可变资源，都应该采用配置的方法进行处理，如数据库用户名，密码，地址等。

### 4.12. **日志**

【推荐】 日志的目的是便于查看程序运行各类信息，日志等级分四个等级，不同的逻辑配合不同的日志等级记录相关日志，比如接口地方，打印info等级的日志，异常和错误信息打印error日志，且配置日志颜色便于查看，同时必须设置日志存档的时间，不然日志累计导致磁盘空间不够的问题。

