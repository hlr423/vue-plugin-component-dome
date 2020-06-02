<template>

    <div>
      <Button @click="showStepModal">哈哈哈</Button>
      <Modal
        title="审核记录"
        v-model="visible"
      >
        <div>
          <Steps :current="2" direction="vertical" style="float: left">
            <Step    v-for="item in data1" :title="item.name+item.time" :key="item.id" :content="item.describe"></Step>
          </Steps>
        </div>
      </Modal>
    </div>
</template>

<script>
    export default {
        name: "stepC",
      data(){
          return{
            visible:false,
            time:'2019.4.24',
            data1:[
              {
                id:1,
              name:'甲 ',
              time:'2019.4.24',
              describe:'同意某某在某某地方于某某时间做某某事同意某某在某某地方于某某时间做某某事同意某某在某某地方于某某时间做某某事同意某某在某某地方于某某时间做某某事同意某某在某某地方于某某时间做某某事！'
            },
              {
                id:2,
              name:'乙 ',
              time:'2019.4.24',
              describe:'同意某某在某某地方于某某时间做某某事！'
            },
              {
                id:3,
              name:'丙 ',
              time:'2019.4.24',
              describe:'同意某某在某某地方于某某时间做某某事！'
            },
              {
                id:4,
              name:'丁 ',
              time:'2019.4.24',
              describe:'同意某某在某某地方于某某时间做某某事！'
            },
            ]
          }
      },
      methods:{
          showStepModal(){
            this.visible=true
          }
      }
    }
</script>

<style scoped>

</style>
