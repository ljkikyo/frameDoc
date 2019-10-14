# 使用说明

## 本地使用
- git clone https://github.com/ljkikyo/frameDoc.git
- npm install
- npm run docs:dev

- 打开浏览器，访问http://localhost:8080/frameDoc/

## gitlab
- 参考https://www.vuepress.cn/guide/deploy.html#github-%E9%A1%B5%E9%9D%A2
- 根据自己项目修改deploy.sh脚本

## 项目结构
- package.json : 项目描述及依赖
- deploy.sh : github 脚本
- docs > README.md : 首页
- docs > .vuepress > config.js : 项目配置文件，几乎所有配置都可在此完成
- docs > guide : guide页面



