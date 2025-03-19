"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4358"],{2715:function(n,e,s){s.r(e),s.d(e,{default:()=>c});var i=s(2676),l=s(453);function d(n){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",pre:"pre",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",img:"img",strong:"strong"},(0,l.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"at-开发规范",children:["AT 开发规范",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#at-开发规范",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"AT 开发规范是根据自动化测试运行多年以来，遇到问题解决问题而形成的一些解决方案，或者说经验总结；"}),"\n",(0,i.jsx)(e.p,{children:"这些经验符合我们现阶段 AT 所应用的场景需要，也是我们经过长期思考，不断试错不断修正，并在自动化测试项目实践中检验过可行的。"}),"\n",(0,i.jsx)(e.p,{children:"以此，希望能帮助参与到自动化的相关人员减少试错成本，更好、更快的编写用例及维护用例。"}),"\n",(0,i.jsxs)(e.h2,{id:"1-版本及依赖",children:["1. 版本及依赖",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1-版本及依赖",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"基础框架会根据自身的功能开发进行版本迭代发布，基础框架不与某个应用版本绑定；"}),"\n",(0,i.jsxs)(e.p,{children:["但是，应用库会依赖于基础框架的版本。因此，我们建议在 应用库 目录下保存一个文本文件用于记录所依赖的基础框架版本，类似于开发应用的 ",(0,i.jsx)(e.code,{children:"debian/control"})," 文件的功能，为了保持统一，这个文件就命名为 ",(0,i.jsx)(e.code,{children:"control"}),"，放在应用库根目录下。"]}),"\n",(0,i.jsxs)(e.h2,{id:"2-命名规范",children:["2. 命名规范",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#2-命名规范",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"用例 ID"}),"\n",(0,i.jsx)(e.p,{children:"每个应用自己维护一套 ID，可以是你自定义的 ID 值，也可以是用某些特有的 ID（比如 PMS 用例ID）；"}),"\n",(0,i.jsx)(e.p,{children:"一个用例类里面有多个用例时，在用例名称后面加序号。"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",meta:'title="多用例函数命名"',children:'class TestFileManager(BaseCase):\n    """文管用例"""\n    \n    def test_xxx_015_1(self):\n        pass\n    def test_xxx_015_2(self):\n        pass\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"方法函数命名"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.div,{className:"rspress-directive tip",children:[(0,i.jsx)(e.div,{className:"rspress-directive-title",children:"方法函数命名关键词列表"}),(0,i.jsxs)(e.div,{className:"rspress-directive-content",children:["\n",(0,i.jsxs)(e.table,{children:["\n",(0,i.jsxs)(e.thead,{children:["\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.th,{align:"left",children:"名称"}),"\n",(0,i.jsx)(e.th,{align:"left",children:"单词"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.tbody,{children:["\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"左键点击"}),"\n",(0,i.jsx)(e.td,{align:"left",children:"click"}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"右键点击"}),"\n",(0,i.jsx)(e.td,{align:"left",children:"right_click"}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"双击"}),"\n",(0,i.jsx)(e.td,{align:"left",children:"double_click"}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"移动"}),"\n",(0,i.jsx)(e.td,{align:"left",children:"move_to"}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"拖动"}),"\n",(0,i.jsx)(e.td,{align:"left",children:"drag"}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"新建"}),"\n",(0,i.jsx)(e.td,{align:"left",children:"new"}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"拖动到"}),"\n",(0,i.jsx)(e.td,{align:"left",children:"drag_to"}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"从哪里拖动到哪里"}),"\n",(0,i.jsx)(e.td,{align:"left",children:"drag_something_from_xxx_to_xxx"}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"获取"}),"\n",(0,i.jsx)(e.td,{align:"left",children:"get"}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"获取某个元素的坐标"}),"\n",(0,i.jsx)(e.td,{align:"left",children:"get_location"}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"非特殊文件"}),"\n",(0,i.jsx)(e.td,{align:"left",children:"file"}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"word文件"}),"\n",(0,i.jsx)(e.td,{align:"left",children:"doc"}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"text文件"}),"\n",(0,i.jsx)(e.td,{align:"left",children:"text"}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"文件夹"}),"\n",(0,i.jsx)(e.td,{align:"left",children:"dir"}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:":::"}),"\n",(0,i.jsx)(e.td,{align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"常量命名"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"::: tip 常量关键词列表"}),"\n",(0,i.jsxs)(e.table,{children:["\n",(0,i.jsxs)(e.thead,{children:["\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.th,{align:"left",children:"名称"}),"\n",(0,i.jsx)(e.th,{align:"left",children:"单词"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.tbody,{children:["\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"应用名称"}),"\n",(0,i.jsx)(e.td,{align:"left",children:(0,i.jsx)(e.code,{children:"APP_NAME"})}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"应用描述"}),"\n",(0,i.jsx)(e.td,{align:"left",children:(0,i.jsx)(e.code,{children:"DESC"})}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"本应用以外的其他应用，比如帮助"}),"\n",(0,i.jsx)(e.td,{align:"left",children:(0,i.jsx)(e.code,{children:"HELP"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"方法层文件名"}),"\n"]}),"\n",(0,i.jsxs)(e.div,{className:"rspress-directive tip",children:[(0,i.jsx)(e.div,{className:"rspress-directive-title",children:"方法层文件名称列表"}),(0,i.jsxs)(e.div,{className:"rspress-directive-content",children:["\n",(0,i.jsxs)(e.table,{children:["\n",(0,i.jsxs)(e.thead,{children:["\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.th,{children:"名称"}),"\n",(0,i.jsx)(e.th,{align:"left",children:"单词"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.tbody,{children:["\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{children:"方法包名"}),"\n",(0,i.jsx)(e.td,{align:"left",children:"widget"}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsxs)(e.td,{children:["方法文件名","（文管举例）"]}),"\n",(0,i.jsxs)(e.td,{align:"left",children:[(0,i.jsx)(e.code,{children:"dfm_widget.py"}),(0,i.jsx)(e.code,{children:"title_widget.py"}),(0,i.jsx)(e.code,{children:"right_view_widget.py"}),(0,i.jsx)(e.code,{children:"left_view_widget.py"}),(0,i.jsx)(e.code,{children:"pop_widget.py"}),(0,i.jsx)(e.code,{children:"base_widget.py"}),(0,i.jsx)(e.code,{children:"dfm_assert.py"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"断言语句名称"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"::: tip 断言语句命名规范\n断言语句都是以 assert 开头"}),"\n",(0,i.jsxs)(e.table,{children:["\n",(0,i.jsxs)(e.thead,{children:["\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.th,{align:"left",children:"断言"}),"\n",(0,i.jsx)(e.th,{align:"left",children:"语句"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.tbody,{children:["\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"判断文件是否存在"}),"\n",(0,i.jsxs)(e.td,{align:"left",children:["assert_file_exists","assert_file_not_exists"]}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"判断桌面目录下文件是否存在"}),"\n",(0,i.jsxs)(e.td,{align:"left",children:["assert_file_exists_in_desktop","assert_file_not_exists_in_desktop"]}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"判断图片存在"}),"\n",(0,i.jsxs)(e.td,{align:"left",children:["assert_image_exists","assert_image_not_exists"]}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"判断影院中是否存在图片"}),"\n",(0,i.jsxs)(e.td,{align:"left",children:["assert_image_exists_in_movie","assert_image_not_exists_in_movie"]}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"判断元素是否存在"}),"\n",(0,i.jsxs)(e.td,{align:"left",children:["assert_element_exist","assert_element_not_exist"]}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"判断是否相等"}),"\n",(0,i.jsxs)(e.td,{align:"left",children:["assert_equal","assert_not_equal"]}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:"判断是否为真"}),"\n",(0,i.jsxs)(e.td,{align:"left",children:["assert_true","assert_false"]}),"\n"]}),"\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{align:"left",children:":::"}),"\n",(0,i.jsx)(e.td,{align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"3-fixture-规范",children:["3. Fixture 规范",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#3-fixture-规范",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"为统一编码风格方便后续用例代码维护，现做以下规范说明："}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["不建议使用 ",(0,i.jsx)(e.code,{children:"Xunit"})," 的写法，统一采用 ",(0,i.jsx)(e.code,{children:"Pytest"})," ",(0,i.jsx)(e.code,{children:"fixture"})," 的写法。"]}),"\n",(0,i.jsxs)(e.li,{children:["应用内 ",(0,i.jsx)(e.code,{children:"fixture"})," 谨慎使用 ",(0,i.jsx)(e.code,{children:"autouse=True"})," ，非必要的情况下非常不建议使用这个参数。"]}),"\n",(0,i.jsxs)(e.li,{children:["调用 ",(0,i.jsx)(e.code,{children:"fixture"})," 不能使用 ",(0,i.jsx)(e.code,{children:"@pytest.mark.usefixture()"}),"，使用直接在用例里面传入函数对象。"]}),"\n",(0,i.jsxs)(e.li,{children:["建议在一个 ",(0,i.jsx)(e.code,{children:"conftest.py"})," 里面去写 ",(0,i.jsx)(e.code,{children:"fixture"}),"，一个应用也尽量维护一个 ",(0,i.jsx)(e.code,{children:"conftest.py "}),"文件。"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"fixture"})," 也需要写功能说明，函数名称要有具体含义。"]}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"4-方法编写调用规范",children:["4. 方法编写&调用规范",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#4-方法编写调用规范",children:"#"})]}),"\n",(0,i.jsxs)(e.h3,{id:"41-方法编写",children:["4.1. 方法编写",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#41-方法编写",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"写方法的时候注意方法归属；"}),"\n",(0,i.jsxs)(e.p,{children:["比如文件管理器的界面区域划分为：",(0,i.jsx)(e.code,{children:"TitleWidget"})," 、",(0,i.jsx)(e.code,{children:"RightViewWidget"}),"、",(0,i.jsx)(e.code,{children:"LeftViewWidget"})," 、",(0,i.jsx)(e.code,{children:"PopWidget"}),"，方法是在哪个区域操作的，就写在哪个类里面。"]}),"\n",(0,i.jsx)(e.p,{children:"举例："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",meta:'hl_lines="3"',children:'from apps.autotest_dde_file_manager.widget import BaseWidget\n\nclass TitleWidget(BaseWidget):\n    """标题栏方法类"""\n\n    def click_xxx_in_title_by_ui(self):\n        """点击标题栏xxx"""\n        # self.dog.find_element_by_attr("xxxx").click()\n        self.click(*self.ui.btn_center("xxx"))\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"动作开头，注意是动词；"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"click\ndouble_click\nright_click\nget\nmake\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"元素对象名称；"}),"\n",(0,i.jsx)(e.p,{children:"	界面元素直接与元素名称相同，没有名称的就取一个好听易懂的名字。"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"加上类的关键词；"}),"\n",(0,i.jsx)(e.p,{children:"	避免方法重名，同时可以标记区域。"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"标定操作方法类型；"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"by_ui\nby_attr\nby_mk\nby_img\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"正确使用方法类型；"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",meta:'title="方法类型使用逻辑"',children:"if 没有用到实例对象：\nif 没有用到类对象：\n    写静态方法，函数前加 @staticmethod\n  else：\n    写类方法，函数前加 @classmethod\nelse:\n  直接写实例方法\n"})}),"\n",(0,i.jsx)(e.p,{children:"举例:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",meta:'hl_lines="2-3 6-7 10-11"',children:"class TitleWidget:\n\n  def click_xxx_by_ui(self):\n      pass\n\n  @staticmethod\n  def click_xxx_by_ui():\n      pass\n\n  @classmethod\n  def click_xxx_by_ui(cls):\n      pass\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"函数名称尽量不出现数字，需要表示数量的用单词表示。"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"函数功能注释；"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"没有参数，没有返回，直接写函数功能说明；"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'"""点击某个元素"""\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"有参数，没有返回，需要写各参数说明；"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'"""点击某个元素\narg1:xxx\narg2:xxx\n"""\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"有参数，有返回，需要写返回值说明；"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'"""点击某个元素\narg1:xxx\narg1:xxx \nreturn: xxx\n"""\n'})}),"\n",(0,i.jsxs)(e.p,{children:["用 ",(0,i.jsx)(e.code,{children:"Pycharm"})," 的注释模板也可以，只要体现了参数的类型和返回就行了。"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"暂不要求写类型注解。"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"42-方法调用",children:["4.2. 方法调用",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#42-方法调用",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"在用例中调用方法，通过该应用唯一的出口进行调用，比如文件管理器的统一出口类："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",meta:'hl_lines="1"',children:"class DfmWidget(TitleWidget, RightViewWidget, LeftViewWidget, PopWidget):\n    pass\n"})}),"\n",(0,i.jsx)(e.p,{children:"在用例里面只需要导入这一个类即可；"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",meta:'hl_lines="1 9"',children:'from apps.autotest_dde_file_manager.widget import DfmWidget\nfrom apps.autotest_dde_file_manager.case.base_case import BaseCase\n\nclass TestDdeFileManager(BaseCase):\n    """文件管理器用例"""\n    \n    def test_xxx_001(self):\n        """xxx"""\n        dfm = DfmWidget()\n        dfm.click_xxx_by_attr()\n'})}),"\n",(0,i.jsx)(e.p,{children:"尽量不要在用例中单独去调用 TitleWidget 、RightViewWidget、LeftViewWidget 、PopWidget  这些类，否则后期用例会变得不好维护；"}),"\n",(0,i.jsxs)(e.h2,{id:"5-用例编写规范",children:["5. 用例编写规范",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#5-用例编写规范",children:"#"})]}),"\n",(0,i.jsxs)(e.h3,{id:"51-基于类写用例",children:["5.1. 基于类写用例",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#51-基于类写用例",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"所有用例都应该基于类去写："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",meta:'hl_lines="1"',children:'class TestMusic(BaseCase):\n    """音乐用例"""\n    \n    def test_music_679537(self):\n        """音乐启动"""\n'})}),"\n",(0,i.jsx)(e.p,{children:"注意以下几点："}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"类名不要随便取，同一个应用应该使用同一个类名，用例类名称必须以 Test 开头，遵循大驼峰命名规范；"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["用例类继承 BaseCase，一个应用只有一个 ",(0,i.jsx)(e.code,{children:"BaseCase"})," ；"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"一个 py 文件里面只有一个类，我们称为一个测试类；"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"一个类里面可以有多个用例函数，这取决这条用例有多少个测试点："}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",meta:'title="test_music_679537.py" hl_lines="4 7 10"',children:'class TestMusic(BaseCase):\n    """音乐用例"""\n    \n    def test_music_679537_1(self):\n        """任务栏启动音乐"""\n        \n    def test_music_679537_2(self):\n        """启动器启动音乐"""    \n        \n    def test_music_679537_3(self):\n        """桌面启动音乐"""\n'})}),"\n",(0,i.jsxs)(e.h3,{id:"52-用例函数规范",children:["5.2. 用例函数规范",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#52-用例函数规范",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"用例函数以 test 开头，遵循蛇形命名规范，中间为用例的模块名称，后面加用例 ID，最后加测试点序号，即："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"test_{module}_{case_id}[_{index}]\n"})}),"\n",(0,i.jsxs)(e.p,{children:["比如：",(0,i.jsx)(e.code,{children:"test_music_679537_1"}),"，",(0,i.jsx)(e.code,{children:"index"})," 从 1 开始。"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"函数功能说明里面写用例标题，直接复制 PMS 上用例标题即可，注意用三对双引号；"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"复制 PMS 用例步骤"}),"\n",(0,i.jsxs)(e.p,{children:["直接将 ",(0,i.jsx)(e.code,{children:"PMS"}),' 上用例步骤和预期复制进来，然后进行批量注释（ ++ctrl+"/"++ ），在注释的基础上去写用例脚本会更加方便全面，也比你自己写注释更节约时间：']}),"\n",(0,i.jsxs)(e.p,{children:['举例：\n	???+ note "PMS用例"\n',(0,i.jsx)(e.img,{src:"https://pic.imgdb.cn/item/64f054c8661c6c8e54ff4c71.png",alt:""})]}),"\n",(0,i.jsx)(e.p,{children:"直接选中用例内容，复制下来，然后粘贴到自动化用例脚本中："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",meta:'title="test_music_679537.py" hl_lines="7-12"',children:'class TestMusic(BaseCase):\n"""音乐用例"""\n\ndef test_music_679537(self):\n    """演唱者-平铺视图下进入演唱者详情页"""  <-- 从PMS上复制的用例标题\n\n    # 1\n    # 点击右上角的【平铺视图】按钮\n    # 切换为平铺视图\n    # 2\n    # 双击任意演唱者封面\n    # 进入演唱者详情页面\n'})}),"\n",(0,i.jsxs)(e.p,{children:["上例中井号（#）注释部分就是直接从 ",(0,i.jsx)(e.code,{children:"PMS"})," 上复制过来的，在此基础上写用例："]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",meta:'title="test_music_679537.py"',children:'class TestMusic(BaseCase):\n"""音乐用例"""\n\ndef test_music_679537(self):\n    """演唱者-平铺视图下进入演唱者详情页"""\n    music = DeepinMusicWidget()\n    music.click_singer_btn_in_music_by_ui()\n    # 1\n    # 点击右上角的【平铺视图】按钮\n    music.click_icon_mode_in_music_by_ui()\n    # 切换为平铺视图\n    # 2\n    # 双击任意演唱者封面\n    music.double_click_first_singer_in_singer_icon_view_by_ui()\n    # 进入演唱者详情页面\n    self.assert_xxx\n'})}),"\n",(0,i.jsx)(e.p,{children:"你看，非常清楚每一步在做什么，重点是省去了写注释的时间，真的炒鸡方便。"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"53-数据驱动",children:["5.3. 数据驱动",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#53-数据驱动",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"如果用例操作步骤是相同的，只是一些参数变化，尽量使用数据驱动来实现用例；"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["如果你需要使用外部文件 存放数据驱动的数据，尽量不要因此引入依赖，可以使用一些标准库能读取的文件格式，比如 ",(0,i.jsx)(e.code,{children:"json、ini、CSV、xml、txt"})," 等文件格式；不建议使用 ",(0,i.jsx)(e.code,{children:"Yaml、Excel、MySQL"})," 等数据格式；"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["读取数据时也尽量使用标准库去做，如使用 ",(0,i.jsx)(e.code,{children:"pandas"})," 处理 ",(0,i.jsx)(e.code,{children:"CSV"})," 就属于大材小用了，正常的数据驱动还没到需要大数据分析来处理的地步；"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"数据驱动的 外部文件存放在widget/ddt/ 目录下；"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"数据驱动的写法："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",meta:'hl_lines="1"',children:'@pytest.mark.parametrize("value", data)\ndef test_smb_049(self, value):\n    ...\n'})}),"\n",(0,i.jsx)(e.p,{children:"以上这种参数化的写法本身没什么问题；"}),"\n",(0,i.jsx)(e.p,{children:"但是，这里必须要补充一个没有用的小知识："}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"使用 ids 参数；"}),"\n",(0,i.jsx)(e.p,{children:"加 ids 参数之前："}),"\n",(0,i.jsxs)(e.p,{children:["如果参数化数据里面的字符会原封不动的输出到 ",(0,i.jsx)(e.code,{children:"item.name"})," 里面，显示非常不优雅，而且可能会引入一些意想不到的问题，可以感受一下："]}),"\n",(0,i.jsx)(e.p,{children:"参数："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'data = [\n    "一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三",\n    "qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyui", \n    "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678",\n    ]\n'})}),"\n",(0,i.jsx)(e.p,{children:"终端日志打印出来，现象是这样色儿的："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"test_smb_049.py::TestFileManager::test_smb_049[一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三]\ntest_smb_049.py::TestFileManager::test_smb_049[qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyui]\ntest_smb_049.py::TestFileManager::test_smb_049[12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678]\n"})}),"\n",(0,i.jsxs)(e.p,{children:["说实话，看着心里堵得慌，如果这里面包含一些",(0,i.jsx)(e.strong,{children:"特殊字符"}),"或者是",(0,i.jsx)(e.strong,{children:"超长"}),"，可能还会有一些很奇妙的事情发生。"]}),"\n",(0,i.jsx)(e.p,{children:"加 ids 参数之后："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",meta:'hl_lines="1"',children:'@pytest.mark.parametrize("value", data, ids=[1, 2, 3])\ndef test_smb_049(self, value):\n    ...\n'})}),"\n",(0,i.jsx)(e.p,{children:"再来感受一下："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"test_smb_049.py::TestFileManager::test_smb_049[1]\ntest_smb_049.py::TestFileManager::test_smb_049[2]\ntest_smb_049.py::TestFileManager::test_smb_049[3]\n"})}),"\n",(0,i.jsx)(e.p,{children:"明显好多了，所以尽量使用 ids 这个参数。"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["不建议使用 ",(0,i.jsx)(e.code,{children:"fixture"})," 的数据驱动方式，框架虽然支持，但可读性比较差；"]}),"\n",(0,i.jsx)(e.p,{children:"	如果你不知道这句话在说啥，那你可以忽略，我也不打算详细说这种实现方式，操作比较骚。"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"54-断言资源",children:["5.4. 断言资源",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#54-断言资源",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"用例断言的图片资源，直接放在 用例模块的同级目录下的 assert_res 目录 下，图片名称以 用例的模块名称 + 用例 ID 命名；"}),"\n",(0,i.jsx)(e.li,{children:"图像识别断言，不要截取一张很大的图，图片资源包含的元素太多了，非常容易受到需求影响，建议是进行局部的断言；"}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"55-元素定位",children:["5.5. 元素定位",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#55-元素定位",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"用于 用例操作步骤中进行元素定位的图片资源，放到 widget/pic_res 目录 下，图片名称命名为该元素的名称；"}),"\n",(0,i.jsx)(e.li,{children:"用于元素定位的图片截取时尽量精确到这个具体的按钮，图片也不要太大；"}),"\n",(0,i.jsx)(e.li,{children:"基于 UI 定位的操作较快，合理加入等待时间能提高用例的稳定性。"}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"56-用例资源",children:["5.6. 用例资源",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#56-用例资源",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"用例执行过程中需要使用到的一些资源，存放在 widget/case_res 目录 下，前提是这些资源不超过 10M；"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"如果是一些比较大的资源，建议放到统一的 ftp 服务器，需要执行用例的时候再下载下来；"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"确保一个资源在一次用例执行中只需要下载一次，如果每次使用的时候都去下载，这样可能会耗费大量的网络资源，而因为先判断本地是否存在此资源，如果不存在再去下载；"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"测试用例执行过程中，你可能需要将资源拷贝到对应的测试目录下；"}),"\n",(0,i.jsxs)(e.p,{children:["比如将 mp3 文件拷贝到 ",(0,i.jsx)(e.code,{children:"~/Music"})," 目录下，但是我们更建议你使用发送快捷链接的方式替代拷贝的操作，因为在拷贝大文件时是很消耗系统资源的，而创建链接则不会；"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'class DeepinMusicWidget:	\n\n  @classmethod\n  def recovery_many_movies_in_movie_by_cmd(cls):\n      """恢复多个视频文件至视频目录中"""\n      work_path = f"/home/{Config.USERNAME}/Videos/auto"\n      code_path = f"{Config.CASE_RES_PATH}/auto"\n      cls.run_cmd(f"rm -rf {work_path};mkdir {work_path}")\n      sleep(1)\n      flag = False\n      if not exists(code_path):\n          cls.run_cmd(f"mkdir -p {code_path}")\n          flag = True\n      logger.info(f"ln -s {code_path}/* {work_path}/")\n      cls.run_cmd(\n          f"cd {code_path}/;"\n          f"{cls.wget_file(\'auto.zip\') if flag else \'\'}"\n            f"ln -s {code_path}/* {work_path}/ > /dev/null 2>&1"\n        )\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"资源下载过程中注意 超时 的问题；\n"})}),"\n",(0,i.jsxs)(e.p,{children:["如果你的测试资源很大，要特别注意这问题，如果你使用强制等待下载结束( ",(0,i.jsx)(e.code,{children:"os.system"})," )，可能会造成用例执行时长变得不可接受；"]}),"\n",(0,i.jsxs)(e.p,{children:["在持续集成环境执行时网络下载速度很慢，所以超时机制是很有必要的；",(0,i.jsx)(e.code,{children:"run_cmd"})," 方法有一个默认超时的时间，你可以根据资源大小对超时时间进行调整；"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"6-标签化管理规范",children:["6. 标签化管理规范",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#6-标签化管理规范",children:"#"})]}),"\n",(0,i.jsxs)(e.h3,{id:"61-对应关系",children:["6.1. 对应关系",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#61-对应关系",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["写完自动化用例之后，请在 ",(0,i.jsx)(e.code,{children:"CSV"})," 文件中标记用例的 ID、等级等标签。"]}),"\n",(0,i.jsxs)(e.p,{children:["为了提醒标记，执行用例时在首行会输出 ",(0,i.jsx)(e.code,{children:"ERROR"})," 日志： ",(0,i.jsx)(e.code,{children:"CSV 文件里面没有对应的 ID"}),"；"]}),"\n",(0,i.jsx)(e.p,{children:"如果 CSV 文件里面没有对应 ID，后续在批量执行的时候，这些用例是不会执行的。"}),"\n",(0,i.jsxs)(e.h3,{id:"62-名称一致",children:["6.2. 名称一致",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#62-名称一致",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"CSV 文件的文件名、用例 py 文件中间的名称、用例函数中间的名称，这三个名称一致。"}),"\n",(0,i.jsx)(e.p,{children:"举例："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",meta:'title="test_music_679537.py" hl_lines="3"',children:'class TestMusic:\n    \n    def test_music_679537():\n        """用例标题"""\n'})}),"\n",(0,i.jsxs)(e.p,{children:["那么 ",(0,i.jsx)(e.code,{children:"CSV"})," 文件的名称为 music.csv。"]}),"\n",(0,i.jsx)(e.p,{children:"框架底层代码实现是将 CSV 文件的名称 与 用例脚本名称 进行对应（建立映射）；"}),"\n",(0,i.jsxs)(e.h2,{id:"7-子应用tag管理规范",children:["7. 子应用Tag管理规范",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#7-子应用tag管理规范",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"应用库 tag 根据应用交付节点生成，每次打 tag 之前，相关测试人员需要进行用例调试；"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"调试用例是指的在全架构上调试通过；"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"tag 号怎么打？"}),"\n",(0,i.jsx)(e.p,{children:"根据持续集成的要求生成，其中应用版本号需要与项目经理确认本次即将集成的应用版本号是多少；"}),"\n",(0,i.jsx)(e.p,{children:"tag 的 commit 信息格式："}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ini",meta:'title="# commit msg"',children:"version:5.6.5\n"})}),"\n",(0,i.jsxs)(e.p,{children:["	其中 ",(0,i.jsx)(e.code,{children:"5.6.5"})," 写应用的集成版本号。"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.h2,{id:"8-其他规范",children:["8. 其他规范",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#8-其他规范",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["不写 ",(0,i.jsx)(e.code,{children:"if __name__  '__main__':"}),"，不写多余的代码；"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"统一文件注释头。"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",meta:'title="xxx.py"',children:'#!/usr/bin/env python3\n# _*_ coding:utf-8 _*_\n"""\n:Author:email@uniontech.com\n:Date  :${DATE} ${TIME}\n"""\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"日志打印要在方法最前面，否则代码报错没有日志输出，不好定位问题；"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["hook 函数只能写到根目录下的 ",(0,i.jsx)(e.code,{children:"conftest.py"})," 里面；"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"apps"})," 目录下的 ",(0,i.jsx)(e.code,{children:"conftest.py"})," 原则上不会写 ",(0,i.jsx)(e.code,{children:"fixture"}),"；"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"固定目录或元素控件的操作，将操作方法写死，类似文件的操作可以将文件名留参数；"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"路径拼接规范："}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["系统中固定目录，路径拼接时使用波浪符号，比如：",(0,i.jsx)(e.code,{children:"~/Desktop/"}),"，下层使用 ",(0,i.jsx)(e.code,{children:"os.path.expanduser()"}),"，它可以自动识别波浪符号；"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["项目下路径使用配置文件中的路径，比如：",(0,i.jsx)(e.code,{children:"Config.BASE_PATH"}),"，因为项目是可以在任意路径运行的，需要动态拼接路径。"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function r(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}let c=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["blog%2F2024%2FAT%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83.md"]={toc:[{text:"1. 版本及依赖",id:"1-版本及依赖",depth:2},{text:"2. 命名规范",id:"2-命名规范",depth:2},{text:"3. Fixture 规范",id:"3-fixture-规范",depth:2},{text:"4. 方法编写&调用规范",id:"4-方法编写调用规范",depth:2},{text:"4.1. 方法编写",id:"41-方法编写",depth:3},{text:"4.2. 方法调用",id:"42-方法调用",depth:3},{text:"5. 用例编写规范",id:"5-用例编写规范",depth:2},{text:"5.1. 基于类写用例",id:"51-基于类写用例",depth:3},{text:"5.2. 用例函数规范",id:"52-用例函数规范",depth:3},{text:"5.3. 数据驱动",id:"53-数据驱动",depth:3},{text:"5.4. 断言资源",id:"54-断言资源",depth:3},{text:"5.5. 元素定位",id:"55-元素定位",depth:3},{text:"5.6. 用例资源",id:"56-用例资源",depth:3},{text:"6. 标签化管理规范",id:"6-标签化管理规范",depth:2},{text:"6.1. 对应关系",id:"61-对应关系",depth:3},{text:"6.2. 名称一致",id:"62-名称一致",depth:3},{text:"7. 子应用Tag管理规范",id:"7-子应用tag管理规范",depth:2},{text:"8. 其他规范",id:"8-其他规范",depth:2}],title:"AT 开发规范",headingTitle:"AT 开发规范",frontmatter:{Author:"mikigo"}}}}]);