<template>
  <div>
    <Form  ref="formDynamic" :model="formDynamic" :label-width="80" style="width:20%">
      <FormItem
        v-for="(item, index) in formDynamic.items"
        v-if="item.status"
        :key="index"
        :label="a"
        :prop="'items.' + index + '.value'"
      >
        <Row>
          <FormItem
            :prop="'items.' + index + '.sqlDescribe'"
            style="margin-bottom: 10px"
          >
            <Col span="4">spl描述</Col>
            <Col span="15">
              <Button type="primary">Delete</Button>
            </Col>
            <Col span="4" offset="1">
              <Button type="primary">Delete</Button>
            </Col>
          </FormItem>
        </Row>
      </FormItem>
    </Form>
    <Button @click="addItems('formDynamic')">add</Button>
    <Modal v-model="showAdd" title="add modal"   footer-hide width="75%">
      <Form ref="formDynamic" :model="formDynamic" :label-width="80" style="width:95%">
        <FormItem
          v-for="(item, index) in formDynamic.items"
          v-if="item.status"
          :key="index"
          :label="a"
          :prop="'items.' + index + '.value'"
        >
          <Row>
            <FormItem
              :prop="'items.' + index + '.sqlDescribe'"
              style="margin-bottom: 10px"
            >
              <Col span="2">spl描述</Col>
              <Col span="17">
                <Input type="text" v-model="item.sqlDescribe" placeholder="Enter something..."></Input>
              </Col>
              <Col span="4" offset="1">
                <Button @click="handleRemove(index)" >Delete</Button>
              </Col>
            </FormItem>
          </Row>
          <Row>
            <FormItem
              :prop="'items.' + index + '.sqlStatement'"
              style="margin-bottom: 10px"
            >
              <Col span="2">spl语句</Col>
              <Col span="17">
                <Input type="text" v-model="item.sqlStatement" placeholder="Enter something..."></Input>
              </Col>
            </FormItem>
          </Row>
          <Row>
            <FormItem
              :prop="'items.' + index + '.dba'"
              style="margin-bottom: 10px"
            >
              <Col span="2">数据库</Col>
              <Col span="17">
                <Input type="text" v-model="item.dba" placeholder="Enter something..."></Input>
              </Col>
            </FormItem>
          </Row>
          <Row>
            <FormItem
              :prop="'items.' + index + '.time'"
              style="margin-bottom: 10px"
            >
              <Col span="2">执行时期</Col>
              <Col span="17">
<!--                <Input type="text" v-model="item.time" placeholder="Enter something..."></Input>-->
                <Select v-model="item.time">
                  <Option value="1" :key="1">发布前</Option>
                  <Option value="2" :key="2">发布后</Option>
                </Select>
              </Col>
            </FormItem>
          </Row>
        </FormItem>
        <FormItem>
          <Row>
            <Col span="22">
              <Button type="dashed" long @click="handleAdd" icon="md-add">Add item</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formDynamic')">Submit</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        a:'▶',
        showAdd:false,
        index: 1,
        formDynamic: {
          items: [
            {
              sqlDescribe: '',
              sqlStatement:'',
              dba:'',
              time:'1',
              index: 1,
              status: 1
            },{
              sqlDescribe: '',
              sqlStatement:'',
              dba:'',
              time:'1',
              index: 1,
              status: 1
            },
          ]
        }
      }
    },
    methods: {
      addItems(name){
        this.showAdd=true;
        this.$refs[name].resetFields();
      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.showAdd=false;
            this.index=1;
            this.formDynamic={
              items: [
                {
                  sqlDescribe: '',
                  sqlStatement:'',
                  dba:'',
                  time:'',
                  index: 1,
                  status: 1
                }
              ]
            }
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleAdd () {
        this.index++;
        this.formDynamic.items.push(
          {
            sqlDescribe: '',
            sqlStatement:'',
            dba:'',
            time:'',
          index: this.index,
          status: 1
        }
          );
      },
      handleRemove (index) {
        this.formDynamic.items[index].status = 0;
      }
    },
    created() {
      (function() {
       console.log('====')
      })();


      function f1()
      {
        let N = 0; // N是f1函数的局部变量
        function f2() // f2是f1函数的内部函数，是闭包
        {
          N += 1; // 内部函数f2中使用了外部函数f1中的变量N
          console.log(N);
        }
        return f2;
      }
      let result = f1();


    //  3、使用闭包定义私有变量
      function Product() {
        let name;
        this.setName = function(value) {
          name = value;
        };
        this.getName = function() {
          return name;
        };
      }
      let p = new Product();
      p.setName("Fundebug");
      console.log(p.name); // 输出undefined
      console.log(p.getName()); // 输出Fundebug

      // 4. prototype
      // 每个JavaScript构造函数都有一个prototype属性，用于设置所有实例对象需要共享的属性和方法。prototype属性不能列举。JavaScript仅支持通过prototype属性进行继承属性和方法。
      function Rectangle(x, y) {
        this._length = x;
        this._breadth = y;
      }
      Rectangle.prototype.getDimensions = function() {
        return {
          length: this._length,
          breadth: this._breadth
        };
      };

      let x = new Rectangle(3, 4);
      let y = new Rectangle(4, 3);

      console.log(x.getDimensions()); // { length: 3, breadth: 4 }
      console.log(y.getDimensions()); // { length: 4, breadth: 3 }

      // 5. 模块化
      // JavaScript并非模块化编程语言，至少ES6落地之前都不是。然而对于一个复杂的Web应用，模块化编程是一个最基本的要求。这时，
      // 可以使用立即执行函数来实现模块化，正如很多JS库比如jQuery以及我们Fundebug都是这样实现的。

      let module = (function() {
        let N = 5;
        function print(x) {
          console.log("The result is: " + x);
        }
        function add(a) {
          let x = a + N;
          print(x);
        }
        return {
          description: "This is description",
          add: add
        };
      })();
      console.log(module.description); // 输出"this is description"
      module.add(5); // 输出“The result is: 10”
   }
  }
</script>
