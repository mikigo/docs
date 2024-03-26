set -e

# check path
docs_path="$( cd "$( dirname "$0")" && pwd)"
if [[ "${docs_path}" != "${PWD}" ]]; then
    cd "${docs_path}" || exit 1
fi


if ! command -v node &> /dev/null; then
	# 定义下载版本
	node_version=v18.16.1

	# 定义/opt目录下node目录的名称，以兼容多个node版本
	opt_node_dir="node${node_version}"

	# 下载node包
	wget https://cdn.npmmirror.com/binaries/node/${node_version}/node-${node_version}-linux-x64.tar.xz

	# 解压安装包
	tar -xvJf node-${node_version}-linux-x64.tar.xz

	# 放到/opt目录下
	sudo rm -rf /opt/${opt_node_dir}
	sudo mv node-${node_version}-linux-x64 /opt/${opt_node_dir}

	# 创建npm、node链接到系统目录
	sudo rm -rf /usr/local/bin/npm; sudo ln -s /opt/${opt_node_dir}/bin/npm   /usr/local/bin/npm
	sudo rm -rf /usr/local/bin/node; sudo ln -s /opt/${opt_node_dir}/bin/node   /usr/local/bin/node

elif ! command -v pnpm  &> /dev/null; then
	# 设置淘宝镜像源
	npm config set registry https://registry.npmmirror.com

	# 安装pnpm
	npm install -g pnpm
fi

# 创建pnpm链接到系统目录
sudo rm -rf /usr/local/bin/pnpm; sudo ln -s /opt/${opt_node_dir}/bin/pnpm /usr/local/bin/pnpm
sudo rm -rf /usr/local/bin/pnpx; sudo ln -s /opt/${opt_node_dir}/bin/pnpx /usr/local/bin/pnpx

# pnpm add -g pnpm
pnpm add -D vitepress
pnpm i vite-plugin-vitepress-auto-sidebar
pnpm i vitepress-plugin-comment-with-giscus
pnpm i vitepress-plugin-back-to-top
pnpm add -D busuanzi.pure.js
pnpm add -D markdown-it-mathjax3
pnpm i @mermaid-js/mermaid-mindmap@9.3.0 mermaid@9.1.0 vitepress-plugin-mermaid@2.0.10
pnpm i medium-zoom
pnpm add -D vitepress-markdown-timeline