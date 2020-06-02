<template >
  <div>
    <div v-for="item in childListData">
      <div v-if="item.childList.length>0" >
        <Submenu :name="item.id"   >
          <template slot="title"  >
            {{item.name}}
          </template>
          <a :target="`myFrameName${value.id}`"  :href="value.url"   v-for="value in item.childList" style="color: #000000">
            <menu-item :name="value.id" >
              {{value.name}}
            </menu-item>
          </a>
        </Submenu>
      </div>
      <div v-else>
        <a  :target="`myFrameName${item.id}`"  :href="item.url"    style="color: #000000">
          <menu-item :name="item.id" >
            {{item.name}}
          </menu-item>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import treeMenu from './menuTreeChild'
  export default {
    name: "menuTree",

    data(){
      return{

      }
    },
    props:['childListData'],
    components:{
      treeMenu,
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
