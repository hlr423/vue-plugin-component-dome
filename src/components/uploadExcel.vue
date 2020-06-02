<template>
    <div>
      <Upload
        action="//jsonplaceholder.typicode.com/posts/"
        @before-upload="beforeUpload"
        accept=".xls ,.xlsx"
      >
        <Button icon="ios-cloud-upload-outline">选择上传的文件</Button>
      </Upload>
      <uploadImg/>
    </div>
</template>
<script>
  import uploadImg from '../components/uploadImg'
  export default {


    data(){
      return{

      }
    },
    components:{
      uploadImg
    },
    methods:{
      beforeUpload(r){
        console.log(r)
      }
    }
  }
</script>
