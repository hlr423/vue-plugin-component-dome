
<template>
  <div class="layout">

    <Sider :style="{position: 'fixed', height: '99vh', left: 0, overflow: 'auto'}"  ref="side1" width="250px" hide-trigger collapsible :collapsed-width="0" v-model="isCollapsed">
      <div style="height: 20vh;background-color: #4255be;border-bottom: 1px solid rgba(114,114,114,0.2)">

      </div>
      <Menu active-name="0"   theme="light" width="auto" :open-names="['1']" accordion  :class="menuitemClasses"  @on-select="onMenuselect">
        <menu-item name="45">
          <Icon type="ios-navigate"/>
          首页
        </menu-item>
        <div>
          <Submenu :name="item.key"  :key="index" v-for="(item,index) in menuList">
            <template slot="title">
              {{item.name}}
            </template>
            <a target="myFrameName" :href="i.url"  :key="i.url" v-for="i in item.children"><menu-item :name="i.url" > {{i.title}}</menu-item></a>
          </Submenu>
        </div>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: isCollapsed?'0':'250px',width: '100%'}">
      <Header style="background-color: #4255be;box-shadow: 0 5px 3px 1px rgba(0,0,0,0.1)">
        <div :style="{width:isCollapsed?'100%':'85%',display:'flex',justifyContent:'space-between'}">
          <div>
            <p :style="{fontSize: '2rem',color:'#fff'}">MIGU  <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon></p>
          </div>
          <div>
            <Input placeholder="Enter text" name="search" style="width: auto">
              <Icon type="ios-search" slot="suffix" />
            </Input>
            <Dropdown trigger="click" style="margin-left: 20px">
              <a href="javascript:void(0)" style="color: white">
                click 触发
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem>北京烤鸭</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown trigger="click" style="margin-left: 20px">
              <a href="javascript:void(0)" style="color: white">
                click 触发
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem>北京烤鸭</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </Header>
      <div :style="{padding: '0 15px 0px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card :style="{width:isCollapsed?'100%':'88%',height:'87vh',padding: 0}">
          <div  :style="{width:'100%',height:'87vh',overflow: 'hidden'}">
            <iframe name="myFrameName" ref="iframe"  frameborder="0" width="100%" height="100%" >

            </iframe>
          </div>
        </Card>
      </div>
    </Layout>
  </div>
</template>
<script>
  // import HeaderContent from './components/headerContent'
  export default {
    name:'app',
    data(){
      return{
        isCollapsed:false,
        menuList:[
          {name:'第一个菜单',
            key:1,
            children:[
              {
                title : '人员管理',
                module: '组织机构',
                url: 'https://cn.vuejs.org/v2/guide/'
              },
              {
                title : '权限管理',
                module: '组织机构',
                url: 'http://stable.admin.migu.cn/ms-admin/manage/index'
              },
              {
                title : '文档配置',
                module: '文档中心',
                url: 'https://www.jianshu.com/p/'
              }
            ]},
          {name:'第二个菜单',
            key:2,
            children:[
              {
                title : '人员管理',
                module: '组织机构',
                url: '/person2'
              },
              {
                title : '权限管理',
                module: '组织机构',
                url: '/authority2'
              },
              {
                title : '文档配置',
                module: '文档中心',
                url: '/doc2'
              }
            ]},
        ],

      }
    },
    components:{
      // HeaderContent,
    },
    methods:{
      collapsedSider () {
        this.$refs.side1.toggleCollapse();
      },
      onMenuselect(){
        // console.log(value)
      }
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },

  }
</script>
<style scoped lang="less">
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;

  }
  .ivu-layout-sider{
      background: white!important;
    }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
