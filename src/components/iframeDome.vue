<template>
    <div>
      <iframe  name="myFrameName"    src="http://stable.admin.migu.cn/ms/index"  ref="iframe"     :frameborder="0" width="100%" height="700px"  @load="vueFunc" >

      </iframe>
    </div>
</template>

<script>
    export default {
        name: "iframeDome",
      data(){
          return{

          }
      },methods:{
        vueFunc(v){
          console.log(v)
        }
      },
      mounted () {
        console.log(this.$refs.iframe);
        // console.log(this.$refs.iframe.contentWindow);
        console.log(top.window)
      },
      created() {
        console.log(this.$refs.iframe);
        console.log(parent.window);
// //同理
//         top.window.func();
//         top.window.document.getElementById('父页面中的元素ID');
      }
    }
</script>

<style scoped>

</style>
