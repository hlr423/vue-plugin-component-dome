<template>
  <div >
    <div style="margin: 10px auto">
    <Button type="warning" @click="goback">命令行</Button>
  </div>
    <div  class="content" :style="{visibility:commanderModal?'visible':'hidden'} " >
      <div class="mask" ></div>
      <div class='board'>
        <div style="margin: 20px;height:90%">
          <div style="margin: 10px auto">
            <Button type="warning" @click="goback">返回</Button>
          </div>
          <section>
            <div class="console" id="terminal"></div>
          </section>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import "xterm/css/xterm.css";
import { Terminal } from "xterm";
export default {
  name: "commander",
  data() {
    return {
      commanderModal: false,
      title: "bash-4.4#",
      row: {},
      commanderData: "",
    };
  },
  created(){

  },
   mounted(){
        const term = new Terminal({
        rendererType: "canvas", //渲染类型
        cols: 100,// 设置之后会输入多行之后覆盖现象
        rows: 40, //行数
        convertEol: true, //启用时，光标将设置为下一行的开头
        fontSize: 14, //字体大小
        disableStdin: false, //是否应禁用输入。
        cursorStyle: "underline", //光标样式
        cursorBlink: true,
        scrollback: 30,
        tabStopWidth: 4,
        theme: {
          foreground: "#fff", //字体
          background: "#000", //背景色
          cursor: "help" //设置光标
        }
      });
      term.open(document.getElementById("terminal"));
     this.runFakeTerminal(term)
  },
  methods: {
    goback(){
      this.commanderModal=!this.commanderModal;
    },
     runFakeTerminal(term) {
        if (term._initialized) {
          return;
        }
        term._initialized = true;

        term.prompt = () => {
          term.write('\r\n~$ ');
        };

        term.writeln('终端命令');
        this.prompt(term);
        let Str="";
        term.onKey(e => {
           const printable = !e.domEvent.altKey && !e.domEvent.altGraphKey && !e.domEvent.ctrlKey && !e.domEvent.metaKey;
          Str+=e.key;
          console.log(e);
           if (e.domEvent.keyCode === 13) {
             console.log(Str);
            this.prompt(term);
         } else if (e.domEvent.keyCode === 8) {
          // Do not delete the prompt
             if (term._core.buffer.x > 2) {
                  term.write('\b \b');
             }
         } else if (printable) {
            term.write(e.key);
        }


  });
},
 prompt(term) {
  term.write('\r\n~$ ');
}
  }
};
</script>

<style scoped lang="less">
.content{
  position: relative;
  top: 0;
  left: 0;
  z-index: 9999;
  visibility: hidden;
}
.mask {
  position:fixed;
  top:0;
  left:0;
  z-index:555;
  width:100%;
  height:100%;
  background-color:#000;
  opacity:0.5;
  overflow:hidden;
  display:block;
}
.board {
  position:fixed;
  background-color:#fff;
  top:5%;
  left:10%;
  width:80%;
  height:80%;
  z-index:999;
  border-radius: 12px;
  display:block;
}


</style>
