<template>
    <div style="display: flex" class="questionList">
<!--      <Form ref="formDynamic" :model="formDynamic"  :label-width="80" style="width: 400px;border: 1px solid gainsboro;border-radius: 5px;margin: 50px;">-->
<!--        <FormItem  :key="index"-->
<!--                   v-for="(item,index) in formDynamic.items"-->
<!--                   :label="item.title+(index+1)"-->
<!--                  :prop="'items.' + index + '.value'"-->
<!--                  :rules="{required: true, message: 'Item ' + index +' can not be empty', trigger: 'blur'}"-->

<!--        >-->
<!--              <Row>-->
<!--                <Col span="14">-->
<!--                   <span>{{item.title+(index+1)}}</span>-->
<!--                </Col>-->
<!--              </Row>-->
<!--              <Row>-->
<!--                <Col span="14">-->
<!--                    <textarea v-model="item.value" placeholder="输入答案" rows="1" cols="40" style="border-radius: 5px;padding-left:5px"/>-->
<!--                </Col>-->
<!--              </Row>-->
<!--        </FormItem>-->
<!--        <FormItem>-->
<!--          <Button type="primary" @click="handleSubmit('formDynamic')">Submit</Button>-->
<!--        </FormItem>-->
<!--      </Form>-->
<!--      <Form ref="formDynamic" :model="formDynamic"  :label-width="80" style="width: 400px;border: 1px solid gainsboro;border-radius: 5px;margin: 50px">-->
<!--        <FormItem  :key="index"-->
<!--                   v-for="(item,index) in formDynamic.items"-->
<!--                   :label="item.title+(index+1)"-->
<!--                  :prop="'items.' + index + '.value'"-->
<!--                  :rules="{required: true, message: 'Item ' + item.index +' can not be empty', trigger: 'blur'}"-->

<!--        >-->
<!--              <Row>-->
<!--                <Col span="14">-->
<!--                   <span>{{item.title+(index+1)}}</span>-->
<!--                </Col>-->
<!--              </Row>-->
<!--              <Row style="border-bottom: 1px solid gainsboro">-->
<!--                <Col span="14">-->
<!--                    <p>{{item.value}}</p>-->
<!--                </Col>-->
<!--              </Row>-->
<!--        </FormItem>-->
<!--        <FormItem>-->
<!--&lt;!&ndash;          <Button type="primary" @click="handleSubmit('formDynamic')">关闭</Button>&ndash;&gt;-->
<!--        </FormItem>-->
<!--      </Form>-->
      <Form ref="formDynamic" :model="formDynamic" :label-width="80" style="width: 300px">
        <FormItem
          v-for="(item, index) in formDynamic.items"
          :key="index"
          :label="item.title"
          :prop="'items.' + index + '.value'"
          :rules="{required: true, message: 'Item ' + index +' can not be empty', trigger: 'blur'}">
          <Row>
            <Col span="4" offset="1">
              <span>dddd</span>
            </Col>
            <Col span="18">
              <Input type="text" v-model="item.value" placeholder="Enter something..."></Input>
            </Col>
          </Row>
        </FormItem>
<!--        <FormItem>-->
<!--          <Row>-->
<!--            <Col span="12">-->
<!--              <Button type="dashed" long @click="handleAdd" icon="md-add">Add item</Button>-->
<!--            </Col>-->
<!--          </Row>-->
<!--        </FormItem>-->
        <FormItem>
          <Button type="primary" @click="handleSubmit('formDynamic')">Submit</Button>
          <Button @click="handleReset('formDynamic')" style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>
    </div>

</template>

<script>
  export default {
        name: "listAuto",
      data(){
          return{
            formDynamic1: {
              items:[
                {title:'问题1',value:''},
                {title:'问题',value:''},
              ],
            },
            index: 1,
            formDynamic: {
              items: [
                {
                  value: '',
                  index: 1,
                  title:'问题1',
                }  ,   {
                  value: '',
                  index: 2,
                  title:'问题1',
                }    , {
                  value: '',
                  index: 3,
                  title:'问题1',
                }  ,   {
                  value: '',
                  index: 4,
                  title:'问题1',
                }
              ]
            }
          }
      },
      methods:{
        // handleSubmit(name){
        //   this.$refs[name].validate((valid) => {
        //     console.log(valid)
        //     console.log(this.formDynamic)
        //   })
        // },
        handleSubmit (name) {
          this.$refs[name].validate((valid) => {
            if (valid) {
              this.$Message.success('Success!');
            } else {
              this.$Message.error('Fail!');
            }
          })
        },
        handleReset (name) {
          this.$refs[name].resetFields();
        },
        handleAdd () {
          this.index++;
          this.formDynamic.items.push({
            value: '',
            index: this.index,
            status: 1
          });
        },
        handleRemove (index) {
          this.formDynamic.items[index].status = 0;
        }
      }
    }
</script>

<style scoped>

</style>
