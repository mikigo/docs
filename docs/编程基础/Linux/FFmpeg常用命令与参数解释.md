---
Author: 禄烨
---

## FFmpeg 概述

FFmpeg 是一个极为强大且广泛使用的开源计算机程序，专为处理多媒体文件（包括音频、视频）而设计。它是快速前进（FastForward）MPEG 的缩写，强调了其在多媒体处理方面的高效性。FFmpeg 的核心功能围绕着音视频的记录、转换、解码、编码以及流化，提供了一个全面的解决方案。

[官方文档：https://ffmpeg.org/](https://ffmpeg.org/)



## FFmpeg 常用参数释义

```python
"""
-i: 输入文件路径。指定要处理的多媒体文件或数据流的来源。

-c: 指定编解码器。例如 -c:v libx264 表示使用H.264视频编解码器，-c:a aac 表示
    使用AAC音频编解码器。
    
-f: 强制输出格式。如 -f mp4 强制输出为MP4格式。

-b:v/-b:a: 视频/音频比特率。如 -b:v 500k 设置视频比特率为500kbps，-b:a 128k 
    设置音频比特率为128kbps。
    
-s: 设置输出分辨率。如 -s 640x480 设置输出分辨率为640x480像素。

-r: 设置帧率。如 -r 30 设置输出视频的帧率为每秒30帧。

-ss: 搜索到指定时间开始转换。如 -ss 00:01:00 从1分钟处开始处理。

-t: 指定处理时长。如 -t 00:01:30 只处理前1分30秒的内容。

-vf: 视频过滤器链。用于视频处理，如缩放、裁剪、旋转等。如 -vf "scale=640:360,rotate=90" 
    先将视频缩放到640x360，再旋转90度。
    
-af: 音频过滤器链。用于音频处理，如音量调整、均衡器等。

-preset: 编码预设值。影响编码速度和输出文件大小，如-preset slow 较慢但压缩效果好，
    -preset ultrafast 编码速度快但文件可能较大。
    
-crf: 对于某些编解码器（如libx264），控制输出的质量。范围通常在0-51之间，数值越小质量越高，
    如 -crf 23 是一个常见设置。
    
-acodec/-vcodec: 分别指定音频和视频编解码器，与-c:a和-c:v等效。

-threads: 指定FFmpeg使用的线程数，以利用多核CPU加速处理。

-y: 如果输出文件已存在，则覆盖原有文件，不询问确认。
"""
```

::: tip 提示

这只是 FFmpeg 参数中的一小部分，实际应用中可根据需要组合使用这些参数来完成复杂的多媒体处理任务。

ffmpeg -h 命令来获取完整的参数列表和最新信息

:::



## FFmpeg 常用场景

1、将视频进行重新编码，转换为其他格式

```bash
ffmpeg -i input.mp4 -c:v libx264 -c:a copy output.avi

# -c:v 参数用于指定视频编码器，包括但不限于以下几种：

# libx264 - 常用的H.264编码器，适用于高质量视频压缩。
# libx265 - H.265编码器，也称为HEVC，提供比H.264更高的压缩效率。
# libvpx-vp9 - vp9编码器，用于VP9编码视频压缩。
# mpeg4 - 标准MPEG-4视频编码。
# libvpx - vp8编码器，用于VP8编码视频压缩。
# h263 - MPEG-4 Part 3视频编码。
# mpeg2video- MPEG-2视频编码。

```

2、提取视频文件中的音频内容，不进行编码，直接复制出来

```bash
ffmpeg -i input.mp4 -acodec copy -map a output.mp3

# -acodec 参数用于指定在 FFmpeg 转换过程中用于编码音频的编解码器

# copy：直接复制音频流，不进行重新编码。
# libopus：使用 Opus 编码器，适用于需要高质量音频同时保持低比特率的场景。
# ac3：使用 AC-3 编码器，常用于家庭影院和 DVD 音频。
# dts：使用数字影院系统（DTS）编码器，适用于高质量音频压缩。

# -map 参数用于选择输入文件中的特定流（视频、音频、字幕等）将其映射到输出文件中
# v:0 或 video:0：选择第一个视频流。
# a:0 或 audio:0：选择第一个音频流。

```

3、视频剪辑，并不进行额外编码

```bash
ffmpeg -i video.mp4 -ss 00:00:10 -to 00:00:20 -c copy output.mp4

# -ss：起始时间。
# -to：结束时间。
# -c copy：无损剪辑，直接复制编码。

```

4、对视频进行分辨率裁切，并以 H.265 编码，进行视频重新编码

```bash
ffmpeg -i video.mp4 -s 1280x720 -c:v libx265 -c:a copy output.mp4

# -s：指定输出尺寸。
# -c:v：指定视频编解码器。
# -c:a：指定音频编解码器。

```

5、对视频进行分帧

```bash
ffmpeg -i input.mp4 -vf 'fps=30' %005d.png

# -vf：设置视频过滤器，并设置过滤器提取每秒30帧画面
# %005d：%005d是一个占位符，表示一个递增的数字，如：00001.png, 00002.png

```

6、对视频进行常见编码的转换

```bash
INPUT='/home/lxs/Videos/source.mp4'

ffmpeg -i $INPUT -c:v libx265 output.hevc.mp4
ffmpeg -i $INPUT -c:v libx264 output.h264.mp4
ffmpeg -i $INPUT -c:v libvpx-vp9 output.vp9.webm
ffmpeg -i $INPUT -c:v libvpx output.vp8.webm
ffmpeg -i $INPUT -c:v mpeg2video output.mpeg2.mp4
ffmpeg -i $INPUT -c:v mpeg4 output.mpeg4.mp4
```

[视频编解码分享（视频）](https://tdoc.uniontech.com/%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B/%E8%A7%86%E9%A2%91%E7%BC%96%E8%A7%A3%E7%A0%81%E5%88%86%E4%BA%AB.html)
