
<template>
  <div>
    <code-diff
      :old-string="oldStr"
      :new-string="newStr"
      :context="context"
      :output-format="outputFormat"
    />

    <div v-html="html"></div>
  </div>
</template>

<script>
  import codeDiff from 'vue-code-diff'
  export default {
    name: "vueCodeDiff",
    components: {
      codeDiff
    },
    data () {
      return {
        oldStr:"",
        newStr:"" ,
        fotMat: false,
        context: 10,
        aa:'',
        dd:'',
      }
    },
    computed: {
      outputFormat () {
        return this.fotMat ? 'line-by-line' : 'side-by-side'
      },
      html(){
        let elementS='<span>max-file-size:10MB</span>';
        return elementS
      }
    },
    watch: {
      oldStr (v) {
        localStorage.setItem('oldStr', v)
      },
      newStr (v) {
        localStorage.setItem('newStr', v)
      }
    },
    created () {
      let oldJSON = [
        {
          "id": 1738,
          "ruleId": "1c1b95802b2542a78dc9e0d4381139a6",
          "itemId": 144,
          "script": "[{\"op\":\"equals\",\"field\":\"version\",\"value\":\"129\"}]",
          "value": "6.0.2",
          "status": 1,
          "sort": 0,
          "createTime": "2020-05-21 15:19:12.0",
          "updateTime": "2020-05-21 15:19:12.0",
          "prettyScript": "version equals 129 "
        },
        {
          "id": 1739,
          "ruleId": "fdf4b08be03649d8b35430bce2b78777",
          "itemId": 144,
          "script": "[{\"op\":\"equals\",\"field\":\"version\",\"value\":\"6.1.0\",\"connect\":\"&&\"},{\"op\":\"equals\",\"field\":\"channel\",\"value\":\"1\"}]",
          "value": "channel=1",
          "status": 1,
          "sort": 1,
          "createTime": "2020-02-25 00:24:55.0",
          "updateTime": "2020-02-25 00:24:55.0",
          "prettyScript": "version equals 6.1.0 && channel equals 1 "
        },
        {
          "id": 1740,
          "ruleId": "84a970658a8449cab5396cd7147a3357",
          "itemId": 144,
          "script": "[{\"op\":\"equals\",\"field\":\"version\",\"value\":\"6.1.0\"}]",
          "value": "6.1.01",
          "status": 1,
          "sort": 2,
          "createTime": "2020-04-27 10:49:41.0",
          "updateTime": "2020-04-27 10:49:41.0",
          "prettyScript": "version equals 6.1.0 "
        },
        {
          "id": 1742,
          "ruleId": "a88189ff67d84542b5303f15c89e0948",
          "itemId": 144,
          "script": "[{\"op\":\"equals\",\"field\":\"version\",\"value\":\"6.3.0\"}]",
          "value": "6.3.0",
          "status": 1,
          "sort": 3,
          "createTime": "2020-02-25 00:24:55.0",
          "updateTime": "2020-02-25 00:24:55.0",
          "prettyScript": "version equals 6.3.0 "
        },
        {
          "id": 1741,
          "ruleId": "b739651deb6a468cb963e90d9be84d5c",
          "itemId": 144,
          "script": "[{\"op\":\"equals\",\"field\":\"version\",\"value\":\"6.2.0\"}]",
          "value": "6.2.0",
          "status": 1,
          "sort": 4,
          "createTime": "2020-02-25 00:24:55.0",
          "updateTime": "2020-02-25 00:24:55.0",
          "prettyScript": "version equals 6.2.0 "
        },
        {
          "id": 1855,
          "ruleId": "31f4b777375741b69e6522e3f8344e3c",
          "itemId": 144,
          "script": "[{\"op\":\"greaterThanOrEqual\",\"field\":\"version\",\"value\":\"6.9.10\"}]",
          "value": "333333",
          "status": 1,
          "sort": 5,
          "createTime": "2020-02-25 00:27:20.0",
          "updateTime": "2020-02-25 00:27:20.0",
          "prettyScript": "version greaterThanOrEqual 6.9.10 "
        },
        {
          "id": 1854,
          "ruleId": "920572bf86f94fb392f4ac468c9a991b",
          "itemId": 144,
          "script": "[{\"op\":\"greaterThan\",\"field\":\"version\",\"value\":\"6.9.10\"}]",
          "value": "222222",
          "status": 1,
          "sort": 6,
          "createTime": "2020-02-25 00:27:29.0",
          "updateTime": "2020-02-25 00:27:29.0",
          "prettyScript": "version greaterThan 6.9.10 "
        },
        {
          "id": 1853,
          "ruleId": "5b7defa6220e4b3e9010c70e6725f1d2",
          "itemId": 144,
          "script": "[{\"op\":\"greaterThanOrEqual\",\"field\":\"version\",\"value\":\"6.9.11\"}]",
          "value": "111111",
          "status": 1,
          "sort": 7,
          "createTime": "2020-02-25 00:27:37.0",
          "updateTime": "2020-02-25 00:27:37.0",
          "prettyScript": "version greaterThanOrEqual 6.9.11 "
        },
        {
          "id": 1852,
          "ruleId": "e66f6d5913454c7c92d88cf6ca5ba657",
          "itemId": 144,
          "script": "[{\"op\":\"lessThan\",\"field\":\"version\",\"value\":\"6.9.12\"}]",
          "value": "000000",
          "status": 1,
          "sort": 8,
          "createTime": "2020-02-25 00:27:45.0",
          "updateTime": "2020-02-25 00:27:45.0",
          "prettyScript": "version lessThan 6.9.12 "
        }
      ]
      let newJSON=[
        {
          "id": 1738,
          "ruleId": "1c1b95802b2542a78dc9e0d4381139a6",
          "itemId": 144,
          "script": "[{\"op\":\"equals\",\"field\":\"version\",\"value\":\"129\"}]",
          "value": "6.0.2",
          "status": 1,
          "sort": 0,
          "createTime": "2020-05-21 15:19:12.0",
          "updateTime": "2020-05-21 15:19:12.0",
          "prettyScript": "version equals 129 "
        },
        {
          "id": 1739,
          "ruleId": "fdf4b08be03649d8b35430bce2b78777",
          "itemId": 144,
          "script": "[{\"op\":\"equals\",\"field\":\"version\",\"value\":\"6.1.0\",\"connect\":\"&&\"},{\"op\":\"equals\",\"field\":\"channel\",\"value\":\"1\"}]",
          "value": "channel=1",
          "status": 1,
          "sort": 1,
          "createTime": "2020-02-25 00:24:55.0",
          "updateTime": "2020-02-25 00:24:55.0"
        },
        {
          "id": 1740,
          "ruleId": "84a970658a8449cab5396cd7147a3357",
          "itemId": 144,
          "script": "[{\"op\":\"equals\",\"field\":\"version\",\"value\":\"6.1.0\"}]",
          "value": "6.1.01",
          "status": 1,
          "sort": 2,
          "createTime": "2020-04-27 10:49:41.0",
          "updateTime": "2020-04-27 10:49:41.0",
          "prettyScript": "version equals 6.1.0 "
        },
        {
          "id": 1742,
          "ruleId": "a88189ff67d84542b5303f15c89e0948",
          "itemId": 144,
          "script": "[{\"op\":\"equals\",\"field\":\"version\",\"value\":\"6.3.0\"}]",
          "value": "6.3.0",
          "status": 1,
          "sort": 3,
          "createTime": "2020-02-25 00:24:55.0",
          "updateTime": "2020-02-25 00:24:55.0",
          "prettyScript": "version equals 6.3.0 "
        },
        {
          "id": 1741,
          "ruleId": "afsdfsaaaaaaaaa",
          "itemId": 144,
          "script": "[{\"op\":\"equals\",\"field\":\"version\",\"value\":\"6.2.0\"}]",
          "value": "6.2.0",
          "status": 1,
          "sort": 4,
          "createTime": "2020-02-25 00:24:55.0",
          "updateTime": "2020-02-25 00:24:55.0",
          "prettyScript": "version equals 6.2.0 "
        },
        {
          "id": 1855,
          "ruleId": "31f4b777375741b69e6522e3f8344e3c",
          "itemId": 144,
          "script": "[{\"op\":\"greaterThanOrEqual\",\"field\":\"version\",\"value\":\"6.9.10\"}]",
          "value": "333333",
          "status": 1,
          "sort": 5,
          "createTime": "2020-02-25 00:27:20.0",
          "updateTime": "2020-02-25 00:27:20.0",
          "prettyScript": "version greaterThanOrEqual 6.9.10 "
        },
        {
          "id": 1854,
          "ruleId": "920572bf86f94fb392f4ac468c9a991b",
          "itemId": 144,
          "script": "[{\"op\":\"greaterThan\",\"field\":\"version\",\"value\":\"6.9.10\"}]",
          "value": "222222",
          "status": 1,
          "sort": 6,
          "createTime": "2020-02-25 00:27:29.0",
          "updateTime": "2020-02-25 00:27:29.0",
          "prettyScript": "version greaterThan 6.9.10 "
        },
        {
          "id": 1853,
          "ruleId": "5b7defa6220e4b3e9010c70e6725f1d2",
          "itemId": 144,
          "script": "[{\"op\":\"greaterThanOrEqual\",\"field\":\"version\",\"value\":\"6.9.11\"}]",
          "value": "111111",
          "status": 1,
          "sort": 7,
          "createTime": "2020-02-25 00:27:37.0",
          "updateTime": "2020-02-25 00:27:37.0",
          "prettyScript": "version greaterThanOrEqual 6.9.11 "
        },
        {
          "id": 1852,
          "ruleId": "e66f6d5913454c7c92d88cf6ca5ba657",
          "itemId": 144,
          "script": "[{\"op\":\"lessThan\",\"field\":\"version\",\"value\":\"6.9.12\"}]",
          "value": "000000",
          "status": 1,
          "sort": 8,
          "createTime": "2020-02-25 00:27:45.0",
          "updateTime": "2020-02-25 00:27:45.0",
          "prettyScript": "version lessThan 6.9.12 "
        },
        {
          "id": 1853,
          "ruleId": "e66f6d5913454c7c92d88cf6ca5ba657",
          "itemId": 145,
          "script": "[{\"op\":\"lessThan\",\"field\":\"version\",\"value\":\"6.9.12\"}]",
          "value": "fsdfsdfsd",
          "status": 1,
          "sort": 8,
          "createTime": "2020-02-25 00:27:45.0",
          "updateTime": "2020-02-25 00:27:45.0",
          "prettyScript": "version lessThan 6.9.10 "
        }
      ]
      this.oldStr = JSON.stringify(oldJSON, null, 4);
      this.newStr = JSON.stringify(newJSON, null, 4);
    },
    methods: {
    }
  }
</script>
