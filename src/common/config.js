import Vue from 'vue'
import {Message as info,} from 'iview';
import 'iview/dist/styles/iview.css'
Vue.component('Message',info);
export default {
  name: 'Who',
  sex: 'Male',
  setName (newName) {
    this.name = newName;
    info.info(this.name)
    info.error({
      content: newName,
      duration: 0,
      closable: true
    });
  }
}
