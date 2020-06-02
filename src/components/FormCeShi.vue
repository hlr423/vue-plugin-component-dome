<template>
  <div>

    <upload-excel
      class   = "btn btn-default"
      :data   = "data9"
      :fields = "json_fields"
      title="my first table"
      worksheet = "My Worksheet"
      name    = "filename.xls">
      <Button>导出</Button>
    </upload-excel>
    <Table :columns="columns10" :data="data9"></Table>
    <Modal
      v-model="showModal"
      draggable
      scrollable
      title="Modal 2"
      footer-hide
    >
      <Form ref="formCustom" :model="formCustom"  :label-width="80" style="width: 80%">
        <FormItem label="Password" prop="passwd">
          <Input type="password" v-model="formCustom.passwd"></Input>
        </FormItem>
        <FormItem label="Confirm" prop="passwdCheck">
          <Input type="password" v-model="formCustom.passwdCheck"></Input>
        </FormItem>
        <FormItem label="Age" prop="age">
          <Input type="text" v-model="formCustom.age" number></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
          <Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        formCustom: {
          passwd: '',
          passwdCheck: '',
          age: ''
        },
        columns10: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          } ,
          {
            title: 'Name',
            key: 'name',
            render: (h, params) => {
              let buttons = [];
              let i = 0;
              buttons[i++] = h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.detail(params)
                  }
                }
              }, '详情');
              return  h('div', buttons);
            }
          },
          {
            title: '电话',
            key: 'phone'

          },
          {
            title: '邮件',
            key: 'eMail'
          }
        ],
        data9: [
          {
            id:1,
            name: '张三',
            age: 17,
            address: '成都高新区',
           phone:'18111434933',
            eMail: '121548954@qq.com',
          },      {
            id:2,
            name: '张三',
            age: 18,
            address: '成都高新区',
           phone:'18111434933',
            eMail: '121548954@qq.com',
          },      {
            id:3,
            name: '张三',
            age: 16,
            address: '成都高新区',
           phone:'18111434933',
            eMail: '121548954@qq.com',
          },      {
            id:4,
            name: '张三',
            age: 12,
            address: '成都高新区',
           phone:'18111434933',
            eMail: '121548954@qq.com',
          },      {
            id:5,
            name: '张三',
            age: 13,
            address: '成都高新区',
           phone:'18111434933',
            eMail: '121548954@qq.com',
          },
        ],
        json_fields: {
          '序号':'id',
          '姓名': 'name',
          '年龄': 'age',
          '地址': 'address',
          '电话': 'phone',
          '邮件': 'eMail',
        },
        json_meta: [
          [
            {
              'key': 'charset',
              'value': 'utf-8'
            }
          ]
        ],
        showModal:false
      }
    },
    methods: {
      showBtn:function(name){

      },
      // showBtn:function(name){
      //   this.$refs[name].resetFields()
      //   this.showModal=true
      // },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!')
          } else {
            this.$Message.error('Fail!')
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields()
      }
    }
  }
</script>
