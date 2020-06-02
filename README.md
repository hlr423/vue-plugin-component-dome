# dome

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
汇集各种项目采坑，好用的插件，和自己的 small dome 
#
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##  vue模拟终端命令行
> commander component

``` bash
1、npm install xterm  -- ^3.0 与^4.0.0 版本差不很大，不能兼容
2、xterm不能好框架ui使用，iview 和element ui 的组件使用，
3、xterm在dom渲染的时完成渲染，在组件中不能正常显示
4、xterm 和弹框使用，需要用原生html自己封装
5、在封装modal时，在隐藏和显示modal用visibility ，在dom渲染时同时渲染，但不显示
6、在vue 中显示xterm不能用v-show和v-if，否则会出现彩蛋
```


##  vue-codemirror yaml编辑
> commander component

``` bash
# npm install vue-codemirror  
  可导出为文本
  对比不同
  界面简单
  
```

##  vue-json-editor
> vue-json-editor component

``` bash
# npm install vue-json-editor 
  data type of number 只显示18位 
  可增删查改
  创建不同类型数据
  改变数据结构
  具有搜索功能
  可撤销编辑
   界面nice
```

##  vue-Code-Diff对比
> vue-Code-Diff component

``` bash
# npm install vue-code-diff 
  JSON String yaml  数据对比器
  增删改都有标识，查看一目了然
  界面nice
```


##  vue中 动态添加和删除列表
> Custom small dome

``` bash
# 在新增和编辑某条数据时，可批量新增、删除和修改
```

##  Json Viewer
> JsonViewer

``` bash
# npm install vue-json-viewer 
  分级显示与复制
  界面nice
```

##  vue iframe dome
> iframe 

``` bash
# iframe的简单使用
# 在vue组件中嵌套iframe访问第三方页面  
# 配合tabs 与menu 完成一个简单的框架
```

##  vue 动态列表和验证dome
> iframe 

``` bash
# 根据数据渲染列表
# 验证列表
```
