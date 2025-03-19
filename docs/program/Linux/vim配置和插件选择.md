---
Author: 徐小东
---

# vim配置和插件使用

类 Unix 系统中有两大编辑器，Emacs 是神的编辑器，而 Vim 是编辑器之神， 而 Vim 是从 vi 发展出来的一个文本编辑器。有代码补完、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。

vim键盘图：

![img](https://www.runoob.com/wp-content/uploads/2015/10/vi-vim-cheat-sheet-sch.gif)

`Vim` 之所以被称为编辑器之神，就是因为系统资源占用小, 打开大文件毫无压力,可配置性强，自定义性高，可根据编码语言和个人喜好进行配置和选择。

## 1. VIM使用

`vim`有三种模式，命令模式，可视模式，输入模式

#### 1.1 搜索和替换

`?word`：反向搜索，效果上跟`/word`, 按 `N` 一样

`:n1,n2s/word1/word2/g`： n1 与 n2 为数字。在第 n1 与 n2 行之间寻找 word1 这个字符串，并将该字符串取代为 word2 

`:1,$s/word1/word2/g`或者`:%s/word1/word2/g`：从第一行到最后一行寻找 word1 字符串，并将该字符串取代为 word2

#### 1.2 删除与复制

`x,X`：在一行字当中，x 为向后删除一个字符 (相当于 [del] 按键)， X 为向前删除一个字符(相当于 [backspace] 亦即是退格键) (常用)

`nx`：n 为数字，连续向后删除 n 个字符。举例来说，我要连续删除 10 个字符

`dd`： 删除游标所在的那一整行(常用)

`ndd`：n 为数字。删除光标所在的向下 n 行，例如 20dd 则是删除 20 行

`d1G`：删除光标所在到第一行的所有数据，相对dG就是删除光标所在行到最后一行的数据。

`d$`：删除游标所在处，到该行的最后一个字符

`d0`：是数字0不是o，删除行首到光标处的字符

`tips`：把d换成y就是复制相关操作。

`p,P`：p 为将已复制的数据在光标下一行贴上，P 则为贴在游标上一行

`J`：合并光标所在行和下一行。

`[Ctrl]+r`：重做上一个动作

`. `：英文中的点号，就是重复上一个动作，比如先执行了dd命令，如果还想删除当前行，就按.就行了。

#### 1.3 编辑模式

` I` ：大写的字符I，所在行的第一个非空格符处开始输入

`a, A`：a 为从目前光标所在的下一个字符处开始输入 ，A 为从光标所在行的最后一个字符处开始输入

`r, R`：r 只会取代光标所在的那一个字符一次；R会一直取代光标所在的文字

#### 1.4 一般模式切换到指令行模式

`ZZ`：大写的Z，相当于:wq

`ZQ`：不保存强制退出

`:w filename`：保存到另外一个新文件

`:n1,n2 w filename`：将 n1 到 n2 的内容储存成 filename 这个档案

#### 1.5 环境变量设置

`:set number`：设置显示行号

`:set nonumber`：设置隐藏行号

`:set paste`：粘贴模式，从外部复制代码到vim编辑器中，直接粘贴原来的代码格式就不会保留，这么模式下会保留原来的格式

#### 1.6 可视模式

批量添加注释：`ctrl+v`进入块选择模式，按下选中要添加注释的行，再按大写的字母`I`，输入注释，再按两次`ESC`保存

批量删除注释：`ctrl+v`进入块选择模式，如果注释为 `//`,那么就按右键，选中 `//`，再按下，选择要删除的行，再按小写字符`d`，再按`ESC`保存

## 2. 配置说明

vim 样式配置

```ini
" 基础配置设置
filetype on                                                                             "检测文件类型
filetype indent on                                                                      "针对不同的文件类型采用不同的缩进格式
filetype plugin on                                                                      "允许插件
filetype plugin indent on                                                               "启动自动补全
"autocmd! bufwritepost _vimrc source %                                                  "vimrc文件修改之后自动加载。 windows。
"autocmd! bufwritepost .vimrc source %                                                  "vimrc文件修改之后自动加载。 linux。
syntax enable                                                                           "开启代码高亮
syntax on                                                                               "打开高亮
set completeopt=longest,menu                                                            "自动补全配置,让Vim的补全菜单行为与一般IDE一致(参考VimTip1228)
"set relativenumber number                                                               "相对行号，可用Ctrl+n在相对/绝对行号间切换
set cursorcolumn                                                                        "突出显示当前列，可用Ctrl+m切换是否显示
"set cursorline                                                                         "突出显示当前行，可用Ctrl+m切换是否显示
set history=3000                                                                        "history存储长度
set nocompatible                                                                        "非兼容vi模式,避免以前版本的一些bug和局限
set nu                                                                                  "显示行数 
set shiftwidth=4                                                                        "换行时行间交错使用4空格
set cindent shiftwidth=4                                                                "自动缩进4空格
set tabstop=4                                                                           "让一个tab等于4个空格,Python必须设置.
set vb t_vb=
set showmatch                                                                           "显示括号配对情况
set autoread                                                                            "当文件在外部被改变时，Vim自动更新载入
set nowrap                                                                              "设置不自动换行
set writebackup                                                                         "设置无备份文件
set nobackup                                                                            "取消备份。 视情况自己改
set noswapfile                                                                          "关闭交换文件
set showmode                                                                            "开启模式显示  
set cmdheight=1                                                                         "命令部分高度为1 
set shortmess=atI                                                                       "启动的时候不显示那个援助索马里儿童的提示
set t_ti= t_te=                                                                         "退出vim后，内容显示在终端屏幕 设置 退出vim后，内容显示在终端屏幕, 可以用于查看和复制好处：误删什么的，如果以前屏幕打开，可以找回
" 去掉输入错误的提示声音
set title                                                                               "change the terminal's title
set novisualbell                                                                        "don't beep
set noerrorbells                                                                        "don't beep
set t_vb=
set tm=500

"set backup                                                                             "备份
"set backupext=.bak
"set backupdir=/tmp/vimbk/
set mat=4                                                                               "Blink times every second when matching brackets
set hidden                                                                              "A buffer becomes hidden when it is abandoned
set wildmode=list:longest																":e 打开文件的时候,tab键显示的结果,显示不了则显																						"示--More--
set ttyfast
set wildignore=*.swp,*.bak,*.pyc,*.class
set scrolloff=3                                                                         "至少有3行在光标所在行上下
set selection=old
set textwidth=80                                                                        "字符超过80自动换行
set wrapmargin=2																		"从窗口右侧向左数的列数来自动换行
set selectmode=mouse,key
set viminfo^=%                                                                          "Remember info about open buffers on close
set viminfo+=!                                                                          " 保存全局变量
set magic                                                                               "正则表达式匹配形式
set backspace=eol,start,indent                                                          "Configure backspace so it acts as it should act
"set backspace=indent,eol,start whichwrap+=<,>,[,]                                      "允许退格键的使用
"set iskeyword+=_,$,@,%,#,-                                                             "带有如下符号的单词不要被换行分割 
set iskeyword+=_,$,@,%,#                                                                "带有如下符号的单词不要被换行分割 
" 字符间插入的像素行数目
au BufRead,BufNewFile *.{md,mdown,mkd,mkdn,markdown,mdwn}   set filetype=mkd   "markdown配置

"set go=                                                                                        "不要图形按钮 set guioptions缩写 
set cul                                                                                         "高亮光标所在行
autocmd InsertEnter * se cul                                                                    "用浅色高亮当前行  
set ruler                                                                                       "显示标尺  
set showcmd                                                                                     "输入的命令显示出来，看的清楚些  
"设置标记一列的背景颜色和数字一行颜色一致
hi! link SignColumn   LineNr
hi! link ShowMarksHLl DiffAdd
hi! link ShowMarksHLu DiffChange
"set statusline=%F%m%r%h%w\ [FORMAT=%{&ff}]\ [TYPE=%Y]\ [POS=%l,%v][%p%%]\ %{strftime(\"%d/%m/%y\ -\ %H:%M\")}  "状态行显示的内容
set statusline+=%f                                                                              "不显示工具条
set laststatus=5                                                                                "启动显示状态行(1),总是显示状态行(2)  
"set ignorecase                                                                                  "搜索时忽略大小写 
set hlsearch                                                                                     "高亮显示结果
"set nohlsearch                                                                                  "关闭搜索高亮  
set incsearch                                                                                    "在输入要搜索的文字时，vim会实时匹配
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"""""""""""""""""""""" color""""""""""""""""""""""""""""""""""""""""""""""""""""
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
if &bg == "dark"                                                                                        " 根据你的背景色风格来设置不同的书签颜色
 highlight SignColor ctermfg=white ctermbg=blue guifg=wheat guibg=peru
else                                                                                                    " 主要就是修改guibg的值来设置书签的颜色
 highlight SignColor ctermbg=white ctermfg=blue guibg=grey guifg=RoyalBlue3
endif

if $TERM =~ '^xterm' || $TERM =~ '^screen' || $TERM=~ '256color$'
    set t_Co=256
    set background=dark
        colorscheme maroloccio
elseif has('gui_running')
    set background=light
    colorscheme solarized
elseif $TERM =~ 'cons256'
    colorscheme default
endif

```

#### 2.1 快捷键设置

vim设置快捷键共4中方法

* map系列命令

`map {lhs} {rhs}`。这个命令就是将`{lhs}`代表的按键映射成`{rhs}`所代表的按键。例如map L `$`就是将`$`键映射成L。此外需要注意的是map命令定义的快捷键是可以嵌套的

* noremap系列命令

`no[remap] {lhs} {rhs}`，顾名思义，就是不可以重新映射的命令。这个命令和 map 命令类似，不过它所定义的命令不可以被重新映射

* unmap系列命令

就是用来取消所在模式下快捷键的定义

* mapclear系命令

清除所在模式下定义的所有快捷键

#### 2.2 自定义快捷键相关的六种模式

在Vim中，共有六种模式，不同的定义快捷键的命令生效的模式不同，这六种模式如下：

- N ormal Mode: 即Vim的普通模式，我们打开Vim后进入的第一个模式即此模式。
- V isual Mode: 即Vim的Visual模式，我们在选中了一定的文本之后(通过v或者V命令)即进入此模式。
- S elect Mode: 这种模式和Visual模式相似，不过输入的文本都会替换选中的文本。在普通模式下，通过鼠标选中或者使用gH命令都可以进入此模式。
- O perator-pending Mode: 当我们输入一个操作符后(例如，d，y，c等等)，就会进入此模式。
- I nsert Mode: 即Vim的插入模式，普通模式下我们输入i(或者s,a等等)就会进入此模式。
- C ommand-line Mode: 命令行模式，我们在普通模式下输入:或者/等就会进入此模式
```
        noremap <F1> <Esc>"
        nnoremap <F2> :set nonumber! number?<CR>
        nnoremap <F3> :set wrap! wrap?<CR>
        nmap <silent> <F4> :TagbarToggle<CR> "按下F4就可以呼出文件的函数列表及变量
        map <F12> :call Do_CsTag()<CR>
        function Do_CsTag()
        endfunction
```
插件寻找位置：https://vimawesome.com/

## 3. vim插件

插件管理器：顾名思义就是管理插件的工具，在 vim8 之前都是采用三方工具管理插件，vim8有了自己插件管理器package，

常见的第三方vim插件管理有Vundle， vim-plug， dein， pathogen，Volt

本文只介绍Vundle，最早的 vim 插件管理器，最新的 vim-plug 相比 Vundle 多了异步功能

项目地址：https://github.com/VundleVim/Vundle.vim

安装 Vundle ：

```shell
mkdir ~/.vim
mkdir ~/.vim/bundle
cd ~/.vim/bundle
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
```

修改 .vimrc 配置文件，在 call vundle#begin() 和 call vundle#end() 之间添加指定的插件保存并执行PluginInstall命令进行安装

```
call vundle#begin()
"call vundle#begin('~/some/path/here')
" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
" The following are examples of different formats supported.
" Keep Plugin commands between vundle#begin/end.
" plugin on GitHub repo
Plugin 'tpope/vim-fugitive'
" plugin from http://vim-scripts.org/vim/scripts.html
" Plugin 'L9'
" Git plugin not hosted on GitHub
Plugin 'git://git.wincent.com/command-t.git'
" git repos on your local machine (i.e. when working on your own plugin)
Plugin 'file:///home/gmarik/path/to/plugin'
" The sparkup vim script is in a subdirectory of this repo called vim.
" Pass the path to set the runtimepath properly.
Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}
Plugin 'MarcWeber/vim-addon-mw-utils'
Plugin 'tomtom/tlib_vim'
Plugin 'garbas/vim-snipmate'
Plugin 'davidhalter/jedi-vim'
Plugin 'nvie/vim-flake8'
Plugin 'klen/python-mode'
Plugin 'google/vim-maktaba'
Plugin 'google/vim-codefmt'
Plugin 'google/vim-glaive'
call vundle#end() " requiredfiletype plugin indent on " required
```

执行安装命令后的效果，有些插件需要需要梯子才能正常安装

Vundle可以进行插件安装卸载，及列出插件列表，对应命令：PluginClean    PluginDocs     PluginInstall  PluginList     PluginSearch   PluginUpdate

### 3.1 插件安装方式

* 从github上安装：

`Plugin 'user/plugin'`

* 从特定的网址安装

`Plugin 'plugin_name'`

* 从一个git库里面安装

`Plugin 'git://url.git'`

* 本地安装

`Plugin 'file:///path'`

从github安装，如果没有梯子，可能会安装失败，国内有个代码托管平台码云（gitee）可以直接同步到gitee中，然后再指定选择ssh的地址进行安装，再通过git仓库的方式进行安装。

还可以将插件克隆到 `.vim/bundle` 下，使用本地安装的方式进行安装

### 3.2 安装ack插件使用

- 安装ack, `sudo apt install ack`
- clone 代码到.vim/bundle,
- 使用命令: `Ack word`搜索字符串
- 设置快捷键`nnoremap <F8> :Ack`

### 3.3 插件介绍

#### 3.3.1 NERDTree

该插件显示一个目录树，可以执行文件的操作命令。在大型项目中，你很难找到你要编辑的那一行的文件确切名称和位置。通过快捷键，一个资源管理器窗口就会以目录树的方式打开，你可以轻松找到你想要的文件并打开它，假如你有大量代码或者容易忘记文件名的人，NERDTree 是必须要有的

#### 3.3.2 ack

当我需要搜索包含某一行或者某个单词的文件时，我就很喜欢 ack 插件，你最好把它和 ag 结合使用，这是一个名为“The Silver Searcher”的全局搜索工具。这个组合非常快，涵盖了我可以使用 grep 或 vimgrep 做的绝大多数事情。缺点是你需要安装 ack 或 ag 才能正常运行，优点是 ag 和 ack 都可以用于 Fedora 和 EPEL7

#### 3.3.3 YouCompleteMe

自动补全插件,依赖环境变量

