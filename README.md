# vue2-pdf
基于Vue2 + webpack + PDF.js版的PDF预览插件

## 安装
```bash
npm install --save vue2-pdf
```

## 全局引入
```js
import pdf from 'vue2-pdf';

Vue.use(pdf);
```
```base
<template>
  <div id="app">
    <pdf-preview :url="url" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {url:"https://zuopengd.github.io/vue-pdf3/dist/欢迎使用WPS Office for Mac同步文件夹.pdf"}
  },
}
</script>
```

## 演示

[vue2-pdf 演示链接](https://zuopengd.github.io/vue2-pdf/dist/index.html)

## 浏览器支持
与 [Vue.js 2](https://github.com/vuejs/vue/blob/dev/README.md) 相同
