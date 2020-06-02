<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <codemirror v-model="code" :options="cmOptions"></codemirror>

  <!-- or to manually control the datasynchronization（或者手动控制数据流，需要像这样手动监听changed事件） -->
<!--  <codemirror ref="myCm"-->
<!--              :value="code"-->
<!--              :options="cmOptions"-->
<!--              @ready="onCmReady"-->
<!--              @focus="onCmFocus"-->
<!--              @input="onCmCodeChange">-->
<!--  </codemirror>-->

<!--  &lt;!&ndash; if Nust.js/SSR（如果在 Nuxt.js 环境下，需要外面包裹一层 no-ssr） &ndash;&gt;-->
<!--&lt;!&ndash;  <no-ssr placeholder="Codemirror Loading...">&ndash;&gt;-->
<!--    <codemirror ref="myCm"-->
<!--                :value="code"-->
<!--                :options="cmOptions"-->
<!--                @ready="onCmReady"-->
<!--                @focus="onCmFocus"-->
<!--                @input="onCmCodeChange">-->
<!--    </codemirror>-->
</template>

<script>
  // language js
  import 'codemirror/mode/javascript/javascript.js'
  // theme css
  import 'codemirror/theme/base16-dark.css'
  import codemirror from 'vue-codemirror'
  // more codemirror resources
  // import 'codemirror/some-resource...'
  export default {
    data () {
      return {
        code: 'const a = 10',
        cmOptions: {
          // codemirror options
          tabSize: 4,
          mode: 'text/javascript',
          theme: 'base16-dark',
          lineNumbers: true,
          line: true,
          // more codemirror options, 更多 codemirror 的高级配置...
        }
      }
    },
    components: {
      codemirror
    },
    methods: {
      onCmReady(cm) {
        console.log('the editor is readied!', cm)
      },
      onCmFocus(cm) {
        console.log('the editor is focus!', cm)
      },
      onCmCodeChange(newCode) {
        console.log('this is new code', newCode)
        this.code = newCode
      }
    },
    computed: {
      codemirror() {
        return this.$refs.myCm.codemirror
      }
    },
    mounted() {
      console.log('this is current codemirror object', this.codemirror)
      // you can use this.codemirror to do something...
    }
  }
</script>
<!--Codemirror Merge-->
<!--<template>-->
<!--  <codemirror :merge="true" :options="cmOption" @scroll="onCmScroll"></codemirror>-->
<!--</template>-->

<!--<script>-->
<!--  // merge js-->
<!--  import 'codemirror/addon/merge/merge.js'-->
<!--  // merge css-->
<!--  import 'codemirror/addon/merge/merge.css'-->
<!--  // google DiffMatchPatch-->
<!--  import DiffMatchPatch from 'diff-match-patch'-->
<!--  // DiffMatchPatch config with global-->
<!--  window.diff_match_patch = DiffMatchPatch-->
<!--  window.DIFF_DELETE = -1-->
<!--  window.DIFF_INSERT = 1-->
<!--  window.DIFF_EQUAL = 0-->
<!--  export default {-->
<!--    data() {-->
<!--      return {-->
<!--        cmOption: {-->
<!--          value: '<p>hello</p>',-->
<!--          origLeft: null,-->
<!--          orig: '<p>hello world</p>',-->
<!--          connect: 'align',-->
<!--          mode: 'text/html',-->
<!--          lineNumbers: true,-->
<!--          collapseIdentical: false,-->
<!--          highlightDifferences: true-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      onCmScroll() {-->
<!--        console.log('onCmScroll')-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<style scoped lang="less">
  h1, ul {
    margin: .3em 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0 .5em;
  }
  .diffs {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;

  header * {
    display: inline-block;
    vertical-align: middle;
  }

  .compare-wrapper {
    flex: 1 1 auto;
    position: relative;

  #compare {
    position: absolute;
    top:0; left:0; bottom:0; right:0;
  }
  }
  }

  /* Auto-height fix */
  .mergely-column .CodeMirror {
    height: 100%;
  }

</style>
