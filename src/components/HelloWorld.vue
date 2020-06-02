<template>
  <div class="hello">
    <span>你好</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.$http.post('api/publish/deploys').then((res) => {
      console.log(res)
      const target = { a: 1 }
      // const source1 = { b: undefined }
      // const source2 = { c: null }
      Object.assign(target, undefined, null)
      console.log(target);
      // 如果只有一个参数，Object.assign会直接返回该参数。
      const obj = {a: 1};
      Object.assign(obj); // === obj // true
      // 如果该参数不是对象，则会先转成对象，然后返回。
      // typeof Object.assign(2) // "object"
      // 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
      // Object.assign(undefined) // 报错
      // Object.assign(null) // 报错
      const OBJ = {
        foo: 123,
        get Bar () { return 'abc' }
      }
      console.log(Object.getOwnPropertyDescriptors(OBJ))
      const prot = {
        foo: 121212
      }
      const A = Object.create(prot)
      // A.foo = 123
      console.log(A)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
