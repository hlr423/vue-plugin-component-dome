<template>
<div>
  <div class="content">
    <div id="text">
      <ul>
      </ul>
      <div style="height: 40px;font-size: 14px">
        bash-4.4# <input type="text" name="" id='in' style="display: inline-block;height: 40px;font-size: 14px;caret-color:red;"/>
      </div>
    </div>
  </div>
</div>
</template>


<script>
  import $ from 'jquery'
    export default {
        name: "commander",
      data(){
          return{

          }
      },
      methods:{
      },
      created() {
        document.onkeydown = function(e) {
          console.log(e);
          //1.规避页面上方的搜索框等是否获取了焦点，是则不触发本次快捷键
          let inputs = document.getElementsByClassName('isfocus_enter'); //找到这一组元素
          if(event.keyCode ==13){
            $("ul").append("<li>bash-4.4# "+$("#in").val()+"</li>");  //将输入的输出到界面
            $("ul").append("<li>555</li>");             //获取返回值并输出
            $("#in").val("");                               //清空输入框
            $("#text").scrollTop($("#text").scrollTop()+32);//滚动条拉到最下面，显示出输入框
          }
           $("#in")[0].focus();
          }
      }
    }
</script>

<style scoped lang="less">
  .content{
    width: 100%;
    height: 50%;
    color: white;
    font-size: 14px;
    background-color: black;
    p{
      height: 20px;
    }
  }
.pointer{
  display: inline-block;
    width: 1vw;
    height: 18px;
    transition: opacity 0s ease 0s, background-color 100ms linear 0s;
    background-color: rgba(255, 0, 0, 0.5);
    border-color: rgba(255, 0, 0, 0.5);
}

  #text {
    background-color:#000;
    border-top:#ccc outset 2px;
    height:100vh;
  }
  ul {
    margin:0;
    padding:0;
    list-style:none;
  }

  input {
    background-color: #000;
    border: 0;
    color: #fff;
    outline: none;
    font-size: 12px;
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-text-fill-color: #29333e !important;
      transition: background-color 5000s ease-in-out 0s;
      color: #29333e !important;
      width: 20px;
      height: 50px;
    }
  }
</style>
