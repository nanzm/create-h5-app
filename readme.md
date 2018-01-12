HTML5 构建工具

>脚手架改自[凹凸实验室](https://github.com/o2team)，自定义配置，构建工具与项目分离，目录更清爽，功能齐全，建议github上clone项目，通过npm link的方式使用，自定义程度更高！


```sh
# 初始化项目
$ h5 init demo

# 安装依赖
$ cd demo && npm install

# 开发运行
$ h5 start

# 查看 help
$ h5 --help
```

>模板来源 [elf-templates](https://github.com/elf-templates)

### 主要功能

- 开发时样式热加载
- 支持 Sass、Less 和 Stylus 样式预处理自动编译
- Autoprefixer 前缀补全
- px -> rem 自动转换
- 雪碧图合成
- 自动获取图片 width 和 height
- 部署构建时图片压缩
- 部署构建时代码合并压缩
