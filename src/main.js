import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import vueJsonExcel from 'vue-json-excel'
import common from './common/config'
import JsonViewer from 'vue-json-viewer'
import ElementUI from 'element-ui'
import VueCodemirror  from 'vue-codemirror'
import 'element-ui/lib/theme-chalk/index.css'
import 'iview/dist/styles/iview.css'
import 'codemirror/lib/codemirror.css'
// import './common/decrypt'
import VueQuill from 'vue-quill'
import VueCodeMirror from 'vue-codemirror'
Vue.config.productionTip = false;
Vue.prototype.defines=common;

Vue.use(VueQuill);
Vue.use(VueCodeMirror);
Vue.use(iView);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
// Vue.use(VueCodemirror);
Vue.component('uploadExcel',vueJsonExcel);
Vue.component('JsonViewer',JsonViewer);
Vue.component('VueCodemirror',VueCodemirror);
let d = new Date().getTime();
let i = 0;
let param = {logId: ++i, value: `U_${d}`};
param = JSON.stringify(param);
Vue.http.interceptors.push((request, next) => {
  request.headers.set(`logId${i}`, `U_${d}`);
  next((response) => {
    console.log(response);
    let data=response.body;
    console.log(data.code);
   // common.setName(data.code)
  })
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
