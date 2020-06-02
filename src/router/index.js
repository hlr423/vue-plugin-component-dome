import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/6',
      name: 'json展示与copy组件',
      component: resolve => require(['@/components/fabu.vue'], resolve)  //json展示与copy组件
      // component: resolve => require(['@/components/uploadExcel.vue'], resolve)     //上传excel变和上传图片dome
      // component: resolve => require(['@/components/uploadImg.vue'], resolve)   //上传图片dome
    },
    {
      path: '/5',
      name: 'step流程记录模板',
      component: resolve => require(['@/components/stepC.vue'], resolve)
    },
    {
      path: '/3',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/1',
      name: '从表中导出excel功能',
      component: resolve => require(['@/components/FormCeShi.vue'], resolve)
    },
    {
      path: '/2',
      name: '动态添加和删除列表',
      component: resolve => require(['@/components/autoAdd.vue'], resolve)
    },
    {
      path: '/8',
      name: '主页菜单配合iframe使用',
      component: resolve => require(['@/layout/index.vue'], resolve)
    },
    {
      path: '/tables',
      name: 'iframe的简单使用',
      component: resolve => require(['@/components/menuTree-iframe.vue'], resolve)
    },
    {
      path: '/info',
      name: 'iframe与menu的使用',
      component: resolve => require(['@/components/info.vue'], resolve)
    },
    {
      path: '/vueCodeDiff',
      name: 'vueCodeDiff对比',
      component: resolve => require(['@/components/vueCodeDiff.vue'], resolve)
    },
    {
      path: '/listAuto',
      name: '动态列表和验证dome',
      component: resolve => require(['@/components/listAuto.vue'], resolve)
    },
    {
      path: '/',
      name: '命令行简易功能',
      component: resolve => require(['@/components/commander.vue'], resolve)
    },
    {
      path: '/mergely',
      name: '原生yaml对比',
      component: resolve => require(['@/components/mergely.vue'], resolve)
    },
    {
      path: '/codemirror',
      name: 'yaml编辑',
      component: resolve => require(['@/components/codemirrorEdit.vue'], resolve)
    },
    {
      path: '/jsonEditor',
      name: 'json编辑',
      component: resolve => require(['@/components/jsonEditor.vue'], resolve)
    },
    {
      path: '/pullEditor',
      name: '简易编辑器pull',
      component: resolve => require(['@/components/pullEditor.vue'], resolve)
    },
    {
      path: '/corsComponents',
      name: '跨域技术',
      component: resolve => require(['@/components/corsComponents.vue'], resolve)
    },
    {
      path: '/ceshi',
      name: 'element popover',
      component: resolve => require(['@/layout/ceshi.vue'], resolve)
    },
    {
      path: '/commanderx',
      name: '命令行',
      component: resolve => require(['@/components/commanderx.vue'], resolve)
    },
  ]
})
