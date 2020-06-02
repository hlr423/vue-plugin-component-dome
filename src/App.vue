<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'h',
      msg1: 'HANG'
    }
  },
  methods: {
    // dd: function () {
    //   console.log(this.msg1.toLowerCase().includes('h')) // 将大写字母转成小，再比较
    // }
  },
  created () {
    // this.dd()
    // this.$http.get('')
  }
}
</script>

<style lang="less">
/* 全局样式*/
  .ivu-card-body{
    padding: 0!important;
  }

.questionList{
  .ivu-form-item{
    /*margin-bottom: 5px!important;*/
    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
      color: #b3b3b3;
      text-indent:6px
    }
  }
}
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
/*.cardStyle{*/
/*  .ivu-card-head{*/
/*    padding: 5px 10px!important;*/
/*  }*/
/*  .ivu-card-body{*/
/*    padding: 10px!important;*/
/*  }*/
/*}*/
.CodeMirror-merge, .CodeMirror-merge .CodeMirror {
  height: 100vh!important;
  .CodeMirror-line {
    /*background-color: #ddffdd;*/
    /*color: red;*/
  }
  .CodeMirror-merge-r-deleted{
    background-color: #ffc86a;
    color: red;
  }
  .CodeMirror-merge-r-inserted{
    background-color: #ffc86a;
    color: red;
  }
}

</style>
