<template>
    <div style="display: flex;" >
      <Menu active-name="1-2" :open-names="['1']"  >
        <Submenu name="1">
          <MenuItem name="4-1" @click="sendMessage"><a target="myFrameName" href="https://cn.vuejs.org/v2/guide/" > 跳转</a></MenuItem>
          <MenuItem name="4-2"><a target="myFrameName" href="https://ant.design/components/menu-cn/" > 跳转2</a></MenuItem>
          <MenuItem name="4-3">Option 11</MenuItem>
          <MenuItem name="4-4">Option 12</MenuItem>
        </Submenu>
      </Menu>
      <iframe name="myFrameName" ref="iframe"  frameborder="0" width="100%" :height="height" >

      </iframe>
    </div>
</template>

<script>
    export default {
        name: "info",
      data(){
          return{
          height:document.body.clientHeight
          }
      },
      methods:{
        sendMessage () {
          // 外部vue向iframe内部传数据

          // this.iframeWin.postMessage({
          //   cmd: 'getFormJson',
          //   params: {}
          // }, '*')
        },
      },
      mounted () {
        // 这里就拿到了iframe的对象
        console.log(this.$refs.iframe)
        // console.log(this.$refs.iframe.contentWindow.postMessage('hlr', '*'));
        // 这里就拿到了iframe的window对象
        // this.iframeWin=this.$refs.iframe.contentWindow.postMessage('hlr','https://www.baidu.com/');
      },
      created() {
     // window.addEventListener('hlr',this.rec,false);
     // const iframeI=this.iframeWin

      }
    }
</script>

<style scoped>

</style>
