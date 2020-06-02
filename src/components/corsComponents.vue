<template>
    <div style="margin: 10%">
      <p>跨域技术常用方案介绍</p>
      <Input type="text" v-on:[event]="doSomething" style="width: 300px"/>
      <Button type="primary" v-on:click="event='focus'">change</Button>
    </div>
</template>

<script>
    export default {
        name: "corsComponents",
      data(){
        return{
          event:'input'
        }
      },
      methods:{
        doSomething(value){
          console.log(value)
          console.log('sssssss')
        }
      },
      created() {
          console.log('dd');
        let script = document.createElement("script");
        script.src = "https://xxxx.com/v0/search?q=xuxi&callback=handleData";
        document.body.insertBefore(script, document.body.firstChild);
        window.handleData = function(data){
          console.log(data)
        }
      }
    }
</script>

<style scoped>

</style>
