<template>
  <div>
    <Table :columns="columns11" :data="data10" border height="500"></Table>
    <div>
      <Button type="primary" @click="A">A</Button>
      <Button type="primary" @click="B">C</Button>
      <Button type="primary" @click="C">C</Button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        columns11: [
          {
            title: 'Name',
            key: 'name',
            align: 'center',
          },
          {
            title: 'Company',
            align: 'center',
            children: [
              {
                title: 'Company Address',
                key: 'caddress',
                align: 'center',
              },
              {
                title: 'Company Name',
                key: 'cname',
                align: 'center',
              }
            ]
          },
          {
            title: 'Gender',
            key: 'gender',
            align: 'center',
            fixed: 'right'
          }
        ],
        data10: []
      }
    },
    mounted () {
      const data = [];
      for (let i = 0; i < 20; i++) {
        data.push({
          key: i,
          name: 'John Brown',
          age: i + 1,
          street: 'Lake Park',
          building: 'C',
          door: 2035,
          caddress: 'Lake Street 42',
          cname: 'SoftLake Co',
          gender: 'M',
        });
      }
      this.data10 = data;
    },
    methods:{
      A(){
        let num=10;
        let timer=setInterval(function () {
          num-=1;
          if(num==0){
            clearInterval(timer)
          }
          console.log(num)
        },1000)
      },
      B(){
        let num=20;
        let timer=setInterval(function () {
          num-=1;
          if(num==10){
            clearInterval(timer)
          }
          console.log(num)
        },1000)
      },
      C(){
        let num=30;
        this.timer=setInterval(function () {
          num-=1;
          if(num==20){
            clearInterval(this.timer)
          }
          console.log(num)
        },1000)
      }
    }
  }
</script>
