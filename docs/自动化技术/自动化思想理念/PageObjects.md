---
Author: mikigo
---

# PageObjects（PO）

## PO是什么

PageObjects 又称 PO 设计模式，以下简称 PO，通常翻译过来叫`页面对象设计模式`，是一种 UI 自动化测试领域流行的设计模式。

在圈内流行起来主要源于 Web UI 自动化测试领域的明星级项目 Selenium，在 Selenium 官方文档 `最佳实践 - 指南` 中描述了 PO 设计模式；

但实际早在 2013 年国外有个哥们儿 `Martin Fowler` 在他的[博客](https://martinfowler.com/bliki/PageObject.html#footnote-panel-object)里就提到了 PO 设计模式，Selenium 官方 2015 年对其做了进一步诠释；

有了 Selenium 的官方背书，这种设计模式迅速在圈内流行起来，几乎是每个自动化测试工程师必备技能。

## PO设计思想

其设计思想简单讲就是，将一个页面中元素操作方法封装为一个页面类，测试用例中涉及到与这些元素交互时，调用页面类里面的方法即可。

这样做可以减少重复代码，并且当 UI 界面改变时，只需要修改一个地方。

![](/pageobjects_assets/1.png)

## PO实现

下面以在百度搜索一个东西举例，写一个线性脚本：

```python
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# 设置Chrome选项，例如无头模式
chrome_options = Options()
chrome_options.add_argument('--headless')

# 创建Chrome实例，并指定ChromeDriver路径
service = Service('path/to/chromedriver')
driver = webdriver.Chrome(service=service, options=chrome_options)

# 打开百度首页
driver.get('https://www.baidu.com')

# 定位搜索输入框并输入搜索关键字
search_box = driver.find_element(By.ID, 'kw')
search_box.send_keys('Selenium')

# 定位搜索按钮并点击
search_button = driver.find_element(By.ID, 'su')
search_button.click()

# 等待搜索结果加载完成
WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, 'content_left'))
)

# 提取搜索结果（例如，第一条结果的标题和链接）
search_results = driver.find_elements(By.CLASS_NAME, 't')
first_result = search_results[0]
title = first_result.find_element(By.CLASS_NAME, 't a').text
link = first_result.find_element(By.CLASS_NAME, 't a').get_attribute('href')

# 输出搜索结果
print(f'标题： {title}')
print(f'链接： {link}')

# 将提取的数据保存到文件或数据库中
# ...
# 关闭浏览器
driver.quit()
```

脚本看起来很好理解，不用过多解释对吧。

那现在你可以想象一下，如果所有用例都这样写，是不是会存在一个问题，就是当页面中某个元素发生改变时，你需要到你所有的脚本中去修改。

这茫茫多的脚本，得改到什么时候。。

所以这就说到 PageObjects 的理念，需要将每一步操作封装成一个方法，这些方法统一放到一个页面类（Page Class）里面。

首先我们写一个页面基类 `BasePage` 来处理通用页面行为，如打开页面和等待页面加载完成：

```python
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

class BasePage:
    
    def __init__(self, driver):
        self.driver = driver
        
    def open(self, url):
        self.driver.get(url)
        
    def wait_for_element_to_be_present(self, locator, timeout=10):
        WebDriverWait(self.driver, timeout).until(
            EC.presence_of_element_located(locator)
        )
        
    def wait_for_element_to_be_clickable(self, locator, timeout=10):
        WebDriverWait(self.driver, timeout).until(
            EC.element_to_be_clickable(locator)
        )
```

然后，为百度搜索页面创建一个专门的类 `BaiduSearchPage`：

```python
class BaiduSearchPage(BasePage):
    
    def __init__(self, driver):
        super().__init__(driver)
        self.search_url = 'https://www.baidu.com'
        
    def search(self, keyword):
        self.open(self.search_url)
        self.wait_for_element_to_be_present((By.ID, 'kw'))
        search_box = self.driver.find_element(By.ID, 'kw')
        search_box.send_keys(keyword)
        search_button = self.driver.find_element(By.ID, 'su')
        search_button.click()
        self.wait_for_element_to_be_present((By.ID, 'content_left'))
```

最后，创建一个主类 `SearchScript` 来执行搜索并处理结果：

```python
class SearchScript:
    
    def __init__(self, driver):
        self.driver = driver
        self.search_page = BaiduSearchPage(driver)
        
    def run_search(self, keyword):
        self.search_page.search(keyword)
        search_results = self.driver.find_elements(By.CLASS_NAME, 't')
        first_result = search_results[0]
        title = first_result.find_element(By.CLASS_NAME, 't a').text
        link = first_result.find_element(By.CLASS_NAME, 't a').get_attribute('href')
        print(f'标题： {title}')
        print(f'链接： {link}')
        
```

你看，经过一顿操作，方法封装好之后再写脚本就方便许多了：

```python
# 创建浏览器实例，并指定ChromeDriver路径
service = Service('path/to/chromedriver')
driver = webdriver.Chrome(service=service)

# 创建SearchScript实例
search_script = SearchScript(driver)

# 执行搜索
search_script.run_search('Selenium')

# 关闭浏览器
driver.quit()
```

用例里面只需要调用方法即可，而方法是可以复用的，如果某个元素发生改变，你只需要修改方法里面这一个地方就可以；

而且你有没有发现，封装之后，用例脚本看起来更容易理解，可读性更好。

## 总结

### 核心理念

一个页面一个类，一个元素一个方法。

### 使用PO的好处

- 提高脚本可维护性，某个元素改变只需要修改一个地方；
- 提高脚本可读性，用例层和方法层各司其职，用例层主要关注用例逻辑（业务场景），方法层主要关注元素操作。

