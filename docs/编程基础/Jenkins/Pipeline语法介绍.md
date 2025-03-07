---
Author: zhx
---

# Pipeline语法介绍



## 简介

Pipeline 是一种用于定义和自动化软件交付过程的工具，它可以通过代码进行持续集成和持续交付。Pipeline 主要有两种模式：**Declarative Pipeline** 和 **Scripted Pipeline**。Declarative Pipeline 提供了一种更简单、结构化的方式来定义构建过程，适合大多数用户；而 Scripted Pipeline 则允许更大的灵活性，采用 Groovy 语言编写，适合需要复杂逻辑的场景

## Declarative Pipline

### demo演示

```groovy
pipeline {
    agent { label 'test_XXX' }

    stages {
        stage('测试阶段1') {
            steps {
                echo '安装虚拟机'
            }
        }
        stage('测试阶段2') {
            steps {
                echo '功能测试'
            }
        }
    }
    post {
        always {
            echo "清理环境"
        }
    }
}
```

上面是一个简单的流水线，其中包含两个测试阶段，在我们实际工作中可以根据不同的使用场景，设计不同的阶段，每个stage代表一个测试阶段，Jenkins会按照从上到下的顺序依次执行每个stage，当前两个测试阶段执行完成后，最后执行post内操作，以上示例只是为了让大家先简单感受一下Pipeline的玩法，下面会详细介绍Pipeline的重点语法

### 语法讲解

- stages

​	含义：包括一个或者多个stage的序列，Pipeline的大部分工作在此执行，必须出现的指令，每个Pipeline代码区间中必须只有一个stages

- stage

​	含义：包含在stages中，Pipeline完成的所有实际工作都需要包含在stage中，必须出现的指令，需要定义stage的名字

- step

​	含义：具体执行步骤，包含stage代码区间中，必须出现的指令

```groovy
stages{
	stage('描述本阶段的任务') {
		step{
			echo "开始下载代码"
			git "https:XXXXXXX"
			}
		}
}
```



- agent

  含义：定义Pipeline执行节点，是必须出现的指令

  参数：

  - any：可以在任意节点上执行Pipeline
  - none：不配全局agent，每个stage分配自己的agent
  - label:指定运行节点的label
  - node：自定义运行节点配置
    - label：设置运行节点
    - customWorkspace：指定工作目录
  - docker：控制目标节点上的docker运行相关内容

  使用node参数指定执行节点和工作目录：

  ```groovy
  Pipeline{
  	agent{
  		node{
  		label "myslave"
  		customWorkspace "myWorkspace"
  			}
  		}
  }
  ```

  每个阶段使用不同的节点环境：

  ```groovy
  Pipeline {
  agent none // 表示流水线中的所有阶段都不会自动分配代理
  	stages {
  		stage('Build') {
  			agent any // 这个阶段会使用任意可用的代理
  			steps {
  				echo 'Building...'
  				}
  		}
  	stage('Test') {
  		agent none // 这个阶段不会分配任何代理
  		steps {
          echo 'Testing...'
  			}
  		}
  	stage('Deploy') {
  		agent {
  			label 'my-label' // 这个阶段会在具有特定标签的代理上运行
  		}
  		steps {
  			echo 'Deploying...'
  			}
  		}
  	}
  }
  ```

- environment

​	含义：定义全局变量，不是必须出现的指令

```groovy
environment {
version = "1070"
version_a = "1070a"
}
```

- post

  含义：定义Pipeline或者stage运行结束时的操作

  参数

  - always：无论Pipeline运行的完成状态如何都会运行
  - changed：只有当前Pipeline运行的状态与之前完成的Pipeline的状态不同时，才会运行
  - failure:仅当当前Pipeline处于失败状态时才会运行
  - success：仅当当前Pipeline处于成功状态时才会运行
  - unstable：只有当前Pipeline具有不稳定状态才能运行
  - aborded：只有当前Pipeline处于中止状态时才能运行

```groovy
post {
     always {
         echo "总是运行"
        }
	success {
		echo "成功了，运行起来"
	}
 }
```

- options

  含义：定义一些Pipeline的特殊属性，不是必须出现的指令

  - buildDiscarder:保留构建的最大个数（页面上可以显示多少次构建）
  - disableConcurrentBuilds:不允许并行执行Pipeline任务
  - timeout：Pipeline超时时间
  -  retry:失败后，重试整个Pipeline的次数
  -  timestamps:预定义由Pipeline生成的所有控制台输出时间
  - skipStagesAfterUnstable:一旦构建状态进入了“Unstable”状态，就跳过后续stage

使用示例：

```groovy
options {
    timestamps()     //日志会显示时间  需要安装timestamps插件
    skipDefaultCheckout()     //删除隐式的checkout scm语句，比如说，流水线中有代码库，他会查看你是否下载，帮你下载，设置后会取消这些操作
    disableConcurrentBuilds()  //禁止并行
    timeout(time:1,unit:'HOURS')  //流水线超时时间设置为1h
}
```

skipStagesAfterUnstable使用示例，此情景会跳过Deploy测试阶段：

```groovy
Pipeline {
	agent any
    options {
    skipStagesAfterUnstable() // 启用这个选项
    }
	stages {
        stage('Build') {
            steps {
            echo 'Building...'
                }
        }
        stage('Test') {
            steps {
                script {
                // 定义实际的条件，例如：
                def someCondition = true
                // 模拟测试不稳定
                if (someCondition) {
                currentBuild.result = 'UNSTABLE'
                	}
            	}
        	}
        }
        stage('Deploy') {
            steps {
            echo 'Deploying...'
            }
        }
	}
}
```

- parameters

  含义：

  定义Pipeline的触发参数，不是必须出现的指令，支持数据类型：booleanParam(布尔),choice（选择）,credentials（证书）,file（文件），text（文本）,password（密码）,run（运行时参数）,string（字符串）

定义参数PERSON，触发jenkins工程的时候，需要输入参数的值，才能成功触发工程

```groovy
parameters {
	string(name:'PERSON',defaultValue:'zuohanxu',description:'左含旭')
    }
```



- triggers

  ​	含义：

  ​	定义了Pipeline自动触发的方式

  ​	参数：

  - cron：接受一个cron风格的字符串来定义Pipeline触发的常规间隔
  - pollSCM：接受一个cron风格的字符串来定义jenkins检查SCM源更改的常规间隔，如果存在新的更改，则Pipeline将被重新触发

cron demo：

```groovy
triggers{
    cron('* * * * *')
    }
```

日志显示：

![cron日志](/Pipeline语法介绍_assets/cron日志.png)

pollSCM demo：

```groovy
triggers{
pollSCM('H */4 * * 1-5')
}
```

日志显示：

![pollSCM日志](/Pipeline语法介绍_assets/pollSCM_log.png)

- parallel

  含义：

  可以让多个stage并行执行

  demo：

  ```groovy
  pipeline {
      agent any
  
      stages {
          stage('并行测试阶段') {
              parallel {
                  stage('测试阶段1') {
                      steps {
                          echo '安装虚拟机1'
                      }
                  }
                  stage('测试阶段2') {
                      steps {
                          echo '安装虚拟机2'
                      }
                  }
              }
          }
      }
  }
  ```

  运行流程：

  ![运行流程](/Pipeline语法介绍_assets/运行流程.png)

## Scripts Pipeline

### demo演示

```groovy
node {
    stage('构建') {
        echo '正在构建项目...'
        // 这里可以添加构建命令，例如 Maven 或 Gradle
    }
    
    stage('测试') {
        echo '正在运行测试...'
        // 这里可以添加测试命令，例如单元测试
    }
    
    stage('部署') {
        echo '正在部署应用...'
        // 这里可以添加部署命令
    }
}
```

Scripts Pipeline相比Declarative Pipline更加灵活，支持条件判断、循环语句等，下面主要讲解一下重点语句用法：

- try catch语句

  ```groovy
  stage('Build') {
      node {           //此处没有指定节点，意思是在任何节点运行都可以
      	echo "this is build stage"
      }
  }
  stage('Test') {
  	node('ubuntu_docker') {
      try {
          echo "执行tyr语句"
          error "触发异常"
      }catch (exc) {
      echo "执行catch语句${exc}"
      }finally {
      echo "执行finally语句"
      	}
      }
  }
  ```

  流水线可以通过try语句捕捉异常，防止异常退出的情况发生

- 条件语句

  demo：

  ```groovy
  stage('Test') {
      node('ubuntu_docker') {
          if (1 == 1) {
          echo "条件成立"
          } else {
          echo "条件不成立"
          }
      }
  }
  ```

- 循环语句

  - for循环

    ```groovy
    node {
        stage('Loop Example') {
            for (int i = 1; i <= 5; i++) {
                echo "This is iteration number: ${i}"
            }
        }
    }
    ```

  - while循环

    ```groovy
    node {
        stage('While Loop Example') {
            int count = 0
            while (count < 5) {
                count++
                echo "This is iteration number: ${count}"
            }
        }
    }
    ```

  - each方法循环列表

    ```groovy
    node {
        stage('Each Loop Example') {
            def items = ['apple', 'banana', 'cherry']
            items.each { item ->
                echo "Current fruit: ${item}"
            }
        }
    }
    ```

- 执行shell

  - 书写方式：

    ```groovy
    stage('Test') {
        node('ubuntu_docker') {
            def output = sh(script: "cd /home; pwd", returnStdout: true , label:"into home")
                                echo "Current directory: ${output}"
        } 
    }
    ```

    - 参数含义：

      script：执行的 Shell 命令或脚本

      returnStdout（可选）：如果设置为 true，命令的标准输出将被捕获并作为字符串返回，而不是直接打印到 Jenkins 日志中

      label（可选）：为当前的 Shell 执行步骤提供一个描述性标签

      returnStatus：如果设置为 true，则会返回命令的退出状态码，而不是输出

      运行日志：

      ![shell日志](/Pipeline语法介绍_assets/scrip_sh_log.png)

## Declarative Pipline和Scripts Pipeline结合使用

实际工作中，流水线的设计大多会将Declarative和Scripts结合起来使用，这样设计的流水线，在保证结构清晰、简单的情况下，还可以灵活的满足多种场景。结合使用的写法也很简单，主体框架采用Declarative的结构书写方式，在需要Scripts语句的时候，只需要把Scripts语句写在script当中即可，下面是一个简单的demo：

```groovy
pipeline {
    agent any

    stages {
        stage('Preparation') {
            steps {
                script {
                    echo 'Preparing the environment...'
                    // 这里可以使用 Scripted Pipeline 的逻辑
                    def branch = 'main'
                    echo "Checking out branch: ${branch}"
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    // 使用 Scripted Pipeline 来执行循环
                    for (int i = 1; i <= 3; i++) {
                        echo "Building iteration ${i}..."
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // 使用 Scripted Pipeline 的条件判断
                    def testsPassed = true
                    if (testsPassed) {
                        echo 'All tests passed.'
                    } else {
                        echo 'Some tests failed.'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // 可以继续使用 Declarative 的方式
            }
        }
    }
    
    post {
        always {
            echo 'Cleaning up...'
        }
    }
}
```

