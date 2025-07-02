import os
import glob
from openai import OpenAI


class DeepSeekMarkdownTranslator:
    def __init__(self, api_key, prompt_template=None):
        """
        初始化DeepSeek翻译器

        :param api_key: DeepSeek API密钥
        :param prompt_template: 自定义提示词模板
        """
        self.client = OpenAI(api_key=api_key, base_url="https://openrouter.ai/api/v1")
        self.model = "deepseek/deepseek-chat-v3-0324:free"
        self.prompt_template = prompt_template

    def translate_text(self, text):
        """使用DeepSeek API翻译文本"""

        prompt = self.prompt_template.format(
            content=text[:15000]  # 限制长度防止超过模型限制
        )

        try:
            response = self.client.chat.completions.create(
                extra_headers={
                    "HTTP-Referer": "<YOUR_SITE_URL>",  # Optional. Site URL for rankings on openrouter.ai.
                    "X-Title": "<YOUR_SITE_NAME>",  # Optional. Site title for rankings on openrouter.ai.
                },
                model=self.model,
                messages=[
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]
            )
            return response.choices[0].message.content
        except Exception as e:
            print(f"翻译出错: {str(e)}")
            return None

    def process_markdown_file(self, input_path, output_path):
        """处理单个Markdown文件"""
        try:
            with open(input_path, 'r', encoding='utf-8') as f:
                content = f.read()

            print(f"正在翻译: {os.path.basename(input_path)}")
            translated = self.translate_text(content)

            if translated:
                with open(output_path, 'w', encoding='utf-8') as f:
                    f.write(translated)
                print(f"翻译完成: {os.path.basename(input_path)} -> {output_path}")
                return True
            return False
        except Exception as e:
            print(f"处理文件 {input_path} 时出错: {str(e)}")
            return False

    def process_directory(self, input_dir, output_dir, file_pattern="*.md"):
        """
        处理目录中的所有Markdown文件

        :param input_dir: 输入目录路径
        :param output_dir: 输出目录路径
        :param file_pattern: 文件匹配模式
        :param kwargs: 传递给translate_text的其他参数
        """
        os.makedirs(output_dir, exist_ok=True)
        md_files = glob.glob(os.path.join(input_dir, file_pattern))

        for md_file in md_files:
            output_path = os.path.join(output_dir, os.path.basename(md_file))
            self.process_markdown_file(md_file, output_path)


if __name__ == "__main__":
    # 配置参数
    CONFIG = {
        "api_key": "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",  # 替换为你的DeepSeek API密钥
        "prompt_template": """
您是一位专业的EDA电子设计行业技术文档翻译专家，负责将英文技术文档翻译为中文，同时严格保留原始Markdown格式。请遵循以下规则：

1. 格式保留

- 逐字逐句翻译，不要遗漏
- 保留所有Markdown标记（标题、列表、代码块、加粗/斜体等）
- 保持原始文档的层级结构和排版，不要将整个内容输入到一个markdown代码快中
- 不修改任何Markdown语法符号（如#、*、`等）
- 图片路径不需要处理、翻译，保留原文即可
- 如果已经存在有序列表的序号，则去除无序列表的符号“-”
- 去除目录中的加粗符号“**”
- 中文与英文之间需要空格，中文与数字之间需要空格，中文与符号（如+、-、>等）之间需要空格

2. 专业术语处理

- 专业术语缩写可不翻译（如"PCB"、"FPGA"、"CAE"等）
- 电子设计行业术语需准确翻译（如PCB→印刷电路板）
- 计算机术语使用行业标准译法（如"render"→"渲染"）
- 硬件术语保持专业（如"FPGA"→"现场可编程门阵列"，"Decal"->封装）

3. 特殊词汇处理

- "modless"统一翻译为"无模"
- "SailWind"不翻译，保留原样
- 其他专有名词首字母大写

4. 翻译风格

- 技术文档风格，语言简洁准确
- 避免口语化表达
- 术语前后一致

5. 质量检查

- 翻译后需检查：
  - 技术术语准确性
  - Markdown格式完整性
  - 特殊词汇处理
  - 语句通顺性

[示例]
输入：

```markdown
# SailWind Layout Engine
The **modless** design allows for rapid PCB prototyping.
```

输出：

```markdown
# SailWind 布局引擎
**无模**设计可实现快速PCB原型制作。
```

请严格遵循以上规则进行翻译，完成后请检查格式和术语是否准确。

内容：
{content}
        """
    }

    # 创建实例并运行
    translator = DeepSeekMarkdownTranslator(
        api_key=CONFIG["api_key"],
        prompt_template=CONFIG["prompt_template"]
    )

    translator.process_directory(
        input_dir="./32",
        output_dir="./32_zh",
    )
