<template>
    <div>
<!--    <img :src="imgs" style="filter: blur(1);background-size: contain"/>-->
<!--    <div>{{defines.name}}</div>-->
      <Button type="primary" @click="changeName">change</Button>
      <JsonViewer :value="json" :expand-depth=5
                  copyable
                  boxed
                  sort/>
    </div>
</template>

<script>
import AA from 'vue-json-editor'
    export default {
        name: "fabu",
      data(){
          return{
            json:{"envs":{"info.version":"$IMAGE_VERSION","eureka.client.register-with-eureka":"true","spring.metrics.servo.enabled":"false","SPRING_PROFILES_ACTIVE":"dev","JAVA_OPTS":"-server -XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap -XX:InitialRAMFraction=2 -XX:MaxRAMFraction=2","app.run-mode":"server"},"limitMemory":"1000Mi","profile":"dev","requestMemory":"1000Mi","volumes":[{"mountPath":"/logs","name":"logs","path":"/logs","type":"hostpath"}]},
            text:'第一次发布',
            visible:false,
          }
      },
      components:{
        AA:AA,
      },
      methods:{
        changeName(){
          this.defines.setName("hlr");
          // console.log(this.defines.name)
        },
      },
      created() {
          let str='1,0,0,0,0';
          let arr=str.split(',');
        // console.log(arr)

        //  ====引入线上图片的两种方式========
        this.img=new Image();
        this.img.src='https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=d985fb87d81b0ef473e89e5eedc551a1/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg';
      // <img :src="img.src"/>
        this.imgs='https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=d985fb87d81b0ef473e89e5eedc551a1/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg';
        // <img :src="imgs"/>

        //======图片存在本地==================
        //方法1.直接将图片引入为模块
        // require imgUrl from "../assets/test.png"
        //方法2.将imgUrl放在数据里
        // data(){
        //   return {
        //     imgUrl:require("../assets/test.png")
        //   }}
        //方法3.在生命周期函数中设置
        // let urlTemp = "assets/test.png";
        // this.imgUrl = require("@/"+urlTemp)

        // setTimeout(this.defines.setName("hlr"),5000)



        //将嵌套数组解析为一个新的数组
        let arr2 = [1, 2, [3, 4]];
        // console.log(arr1.flat());



         //注意：reduce与concat的用法
        // 反嵌套一层数组下面的两种方法：
         arr2.reduce((acc, val) => acc.concat(val), [6,6]);   //[6, 6, 1, 2, 3, 4]
        const flatSingle=arr=>[8,9].concat(...arr)
        // console.log(flatSingle(arr1))  //[8, 9, 1, 2, 3, 4]


        // 使用 reduce、concat 和递归无限反嵌套多层嵌套的数组
        let arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];

        function flattenDeep(arr1) {
          return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
        }

        // console.log(flattenDeep(arr1));// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
        // console.log(new Set(flattenDeep(arr1)));    //Set {_c: Set(4)}
        // console.log(...flattenDeep(arr1));//1 2 3 1 2 3 4 2 3 4

        const object2 = { 0: 'a', 1: 'b', 2: 'c' };
        // console.log(Object.entries(object2)[2]);  //Array ["2", "c"]
        const result = Object.entries(object2).sort((a, b) => a - b);
        // console.log(result)  // [Array(2), Array(2), Array(2)]


      //  程序异步执行的方式
      //  1、回调函数方式（总结：回调函数易于实现、便于理解，但是多次回调会导致代码高度耦合）
        function f1(f2) {
          setTimeout(function(){
            console.log('先执行 f1')
          },1000);   //两个函数相差一秒的时差
          f2()
        }
        function f2() {
          console.log('再执行 f2')
        }
        f1(f2);

        //事件监听(jquery方式)
        // 脚本的执行不取决代码的顺序，而取决于某一个事件是否发生。
        //事件监听的demo
        // $(document).ready(function(){
        //   console.log('DOM 已经 ready')
        // });















      }
    }
</script>

<style scoped lang="less">



</style>
