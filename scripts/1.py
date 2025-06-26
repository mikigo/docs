import time

import requests
import base64

url = "http://10.0.21.14:8866/predict/ocr_system"

# 读取图片并转换为base64（不带前缀）
with open("2.png", "rb") as image_file:
    base64_image = base64.b64encode(image_file.read()).decode('utf-8')

# 准备请求数据
payload = {
    "images": [base64_image]
}

# 设置请求头
headers = {
    "Content-Type": "application/json"
}
start_time = time.time()
# 发送POST请求
response = requests.post(url, json=payload, headers=headers)

# 输出响应
print(response.status_code)
from pprint import pprint
pprint(response.json())
# 输出响应时间
end_time = time.time()
print(f"Response time: {end_time - start_time} seconds")