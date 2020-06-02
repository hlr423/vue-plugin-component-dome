<template>
  <div style="margin: 20px">
    <p>vue-json-editor</p>
    <vue-json-editor v-model="json" :show-btns="true"  :modes="true" mode="tree" lang="zh" @json-change="onJsonChange" @json-save="onJsonSave" @has-error="onError"></vue-json-editor>
<!--    <json-viewer :value="json"></json-viewer>-->
  </div>

</template>

<script>
  import vueJsonEditor from 'vue-json-editor'

  export default{
    data () {
      return {
        json:""
      }

    },

    components: {
      vueJsonEditor
    },
  created(){
    let aa={
      "spring": {
        "cloud": {
          "config": {
            "override-system-properties": false,
            "oktest": "ok"
          }
        },
        "rabbitmq": {
          "password": "password",
          "username": "username1",
          "addresses": "10.25.246.53:5672"
        },
        "http": {
          "multipart": {
            "max-file-size": "1120M",
          }
        },
        "val": "100M",
        "val1": "2000M"
      },
      "test": {
        "key": "value1",
        "key1": 100000012315246584
      }
    };
    console.log(aa)
    this.printValue(aa,',','>');

    // let bb=JSON.stringify(aa);
    // this.json=JSON.parse(bb);
    // this.json=aa;
    // console.log(this.json);
    // console.log(this.dd(aa))

  },
    methods: {
      printValue(js,key,sign){
    if(key == ""||key == undefined){
      key="json"
    }
    for(let p in js){
      let k=key+sign+p;
      if(!(js[p] instanceof Object)){
        let value=js[p].toString().length;
        console.log(js[p].toString().length);
        if(value>16){
          js[p]=js[p].toString()
        }
        // console.log(k+" = "+js[p]);    //如果不是Object则打印键值
      }
      else
        this.printValue(js[p],k,sign)    //如果是Object则递归
    }
    this.json=js;
        console.log(js)
  },

      aaa(aa){
        for(let item in aa) {
          console.log(item.length);
          if(item.length>1){
              this.aaa(item)
          }
        console.log(aa[item]);
          if (aa[item].length>16) {  //item 表示Json串中的属性，如'name'
            let jValue = aa[item];//key所对应的value
            alert(jValue);
          }
        }
      },










      // dd(str){
      //     let arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
      //     return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
      //
      //   },
      onJsonSave(dd){
        console.log(JSON.stringify(dd))
      },
      onError(dd){
        console.log(dd)
      },
      onJsonChange (value) {
        console.log('value:', value);
        let flag='true';
        if(Boolean(flag)){
          console.log('================');
        }
      }
    }
  }
</script>
