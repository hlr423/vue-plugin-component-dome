
<template>
  <div class="layout">
    <div class="closeMenu"  v-on:mouseover="collapsedSider" :style="{zIndex:isCollapsed?1:-1}">
      <div style="display: flex;flex-direction: column;justify-content: space-around;margin-top: 25px">
        <Icon type="md-arrow-round-forward"  style="color: #2a6bcc;margin-left: 3px" />
        <p >MENU</p>
      </div>
    </div>
    <Layout>
      <Header style="background-color: #3982ed;box-shadow: 0 5px 3px 1px rgba(0,0,0,0.1)">
        <div :style="{width:isCollapsed?'auto':'100%',}">
          <div style="display: inline-block">
            <p :style="{fontSize: '2rem',color:'#fff'}">
              <img  :src="require('../assets/logo.png')"  alt="咪咕音乐" class="logoStyle" style="width:30px;vertical-align: middle;margin-right: 20px;margin-bottom: 5px;box-shadow: 1px 1px 2px 3px #e1f0fe;border-radius: 7px">
              <span>主管理系统</span>
              <Icon @click.native="collapsedSider" :class="rotateIcon"  class="IconStyle" style="margin: 0 40px" type="ios-arrow-dropleft" size="30"></Icon>
            </p>
          </div>
          <div style="display: inline-block;float: right;margin-right: 20px" class="changeSelectStyle" >
              <Select  v-model="sysValue" style="margin: 0 10px;text-align: center;width:150px"  placeholder="请选择子系统" @on-change="changeSystem" filterable  >
                  <Option v-for="item in sysMenuData"  :key="item.id" :value="item.id">{{ item.name }}</Option>
              </Select>
              <Dropdown style=";padding: 0 20px" trigger="hover" @on-click="changeSystem">
                  <a href="javascript:void(0)" style="color: white"  >
                      <span style="margin-right: 10px">{{selectSysTitle}}</span>
                      <Icon type="logo-dropbox" size="25" />
                  </a>
                  <DropdownMenu slot="list" style="margin:20px">
                      <DropdownItem :name="item.id" v-for="item in sysMenuData"  :key="item.id" :value="item.id">{{ item.name }}</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
            <Dropdown style="padding: 0 20px" trigger="hover" @on-click="showChangePSW">
              <a href="javascript:void(0)" style="color: white">
                {{username}}
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <DropdownMenu slot="list" style="margin: 0 20px">
                <DropdownItem name="person"> <Icon type="md-person" style="margin-right: 10px"/>个人信息</DropdownItem>
                <DropdownItem name="password"> <Icon type="md-create" style="margin-right: 10px"/>修改密码</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <span style="display:inline-block;color: white;cursor: pointer;width: 60px;text-align: center" class="outSide" @click="signOut">退出</span>
          </div>
        </div>
      </Header>
      <Layout>
        <Sider hide-trigger  :style="{marginLeft: isCollapsed?'-200px':''}">
          <div style="height: 50px;background-color: #3982ed;border-bottom: 1px solid rgba(114,114,114,0.2)">
            <div>
              <div style="text-align: center;color: white;">
                <div style="margin-top: 0">
                  <p style="font-size: 1.5em">{{sysTitle}}</p>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 87vh;background-color: inherit;overflow-y:auto;" class="srcollStyle" >
            <Menu active-name="0"   theme="light" width="auto"  accordion  style="text-align: center"   @on-select="onMenuSelect" >
              <menu-item name="0"  >
                <Icon type="md-home" />
                首页
              </menu-item>
              <div v-for="item in sysMenuChild">
                <div v-if="item.childList.length>0" >
                  <Submenu :name="item.id"   >
                    <template slot="title"  >
                      {{item.name}}
                    </template>
                    <treeMenu :childListData="item.childList"></treeMenu>
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
            </Menu>
          </div>
        </Sider>
        <div :style="{margin: '16px 16px 0 16px ', background: '#fff', minHeight: '260px',width:'100%'}"  >
          <div  :style="{minWidth: '60vw',maxWidth:isCollapsed?'100vw':'88vw'}">
            <Tabs :value="selectTabs" type="line"   :animated="false" @dblclick.native="clickTabs" @on-click="clickTabs1" Attributes="iframe">
              <TabPane v-for="value in tabData"  :name="value.id" :label="value.name" :key="value.id">
                <Card :style="{height:'84vh',padding: 0}" :key="value.id" >
                  <div  :style="{width:'100%',height:'84vh',overflow: 'hidden',}" class="srcollStyle">
                    <div v-show="value.id=='0'?true:false" style="padding: 20px;text-align: center;margin-top: 30px">
                      <img :src="require('../assets/logo.png')" alt="" style="width: 40%">
                      <h1>欢迎使用后台管理系统</h1>
                      <h3 style="margin-top: 10px">如有疑问请通过以下方式咨询</h3>
                      <div style="margin-top: 10px">
                        <h4> 电话：13558636097</h4>
                        <h4> 邮箱：yuanqiang@migu.cn</h4>
                      </div>
                    </div>
                    <iframe  :name="`myFrameName${value.id}`"  :id="`myFrameName${value.id}`"  v-show="value.id=='0'?false:true"     :src="value.url"  ref="iframe"  :key="value.id"   :frameborder="0" width="100%" height="100%" class="srcollStyle">

                    </iframe>
                  </div>
                </Card>
              </TabPane>
              <Button  @click="onMenuSelect" size="small" slot="extra"  style="display: none">增加</Button>
            </Tabs>
          </div>
        </div>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import treeMenu from '../components/menuTreeChild'
  let Base64 = require('js-base64').Base64;
  export default {
    name:'indexs',
    data(){
      return{
        isCollapsed:false,//缩放菜单栏
        sysValue:'',
        username:Base64.decode(localStorage.getItem('ussseddesd')),   //用户标识
        sysTitle:'欢迎您',
        selectSysTitle:'系统菜单',
        sysMenuData:[],  //主菜单数据
        sysMenuDataChild:[],
        sysMenuChild:[],// 根据子系统获取的菜单数据
        tabData:[
          {
            id:'0',
            name : '首页',
            url: '/userManage'
          },],         //tabs对象
        selectTabs:'0',  //默认选择tabs项
        closableValue:false,  //是否可关闭tabs标签
        label:''
      }
    },
    components:{
      treeMenu
    },
    methods:{
      // 获取导航系统菜单数据
      getNavMenuData(){
        this.$http.get(this.API.MenuInitData).then((res)=>{
          console.log(res)
          if(res.body.code=='000000'){
            if(res.body.data.length>0){
              console.log(res.data.data)
              this.sysMenuChild=res.body.data;
              this.sysValue=res.body.data[0].id;
            }else {
              this.$Message.error('获取数据失败！')
            }
          }else {
            this.$Message.error(res.body.info)
          }
        })
      },
      //缩放菜单栏
      collapsedSider () {
        this.isCollapsed=!this.isCollapsed
      },
      //选择菜单栏子项
      onMenuSelect(value){
        let v=this;
        function findCherries(fruit) {
          return fruit.id == value.toString();
        }
        if(v.tabData.find(findCherries)== undefined){
          v.navList(value.toString(),v.sysMenuChild)
        }else {
          v.selectTabs=value.toString();
        }
      },
      clickTabs1(value){
        this.selectTabs=value;
      },
      clickTabs(value){
        if(this.selectTabs!=0){
          this.removeTabs(this.selectTabs)
        }
      },
      //添加tabs标签
      navList(menuID,data){
        let v=this;
        data.forEach((value)=>{
          if(value.id.toString()==menuID){
            v.selectTabs=menuID;
            v.closableValue=true;
            value.id=value.id.toString();
            if(value.url!=''){
              console.log(value)
              v.tabData.push({...value,id:menuID});
            }
          }
          if(value.childList.length>0){
            v.navList(menuID,value.childList)
          }
        })
      },
      removeTabs(name){
        if(name!=0){
          this.tabData = this.tabData.filter((value,index) => {
            if(value.id==name){
              return false;
            }else{
              return value;
            }
          });
        }
        this.selectTabs=this.tabData[this.tabData.length-1].id;

      },
      //个人信息修改
      changeUserInfo(){
        this.$refs.changeInfo.changeUserInfoShow()
      },
      //子系统切换
      changeSystem(name){
        this.sysMenuData.map(value => {
          if(value.id==name){
            this.selectSysTitle=value.name
          }
        });
        if (name!='') {
          this.$http.get(`${this.API.menuData}/nav/${name}/v1.0`).then((res)=>{
            if(res.body.code=='000000'){
              this.sysMenuChild=res.body.data;
            }else {
              this.$Message.error(res.body.info)
            }
          });
        }
      },
      signOut(){
        let v=this;
        v.$Modal.confirm({
          title: '提示',
          content: '<p style="text-align: center;font-size:1rem">你是否确定退出？</p>',
          onOk:()=>{
            v.$http.post(this.API.logout).then((res)=>{
              if(res.body.code=='000000'){
                localStorage.setItem('hddleer','');
                localStorage.setItem('ussseddesd','');
                this.$router.push({ path:`${this.pingPath}/login`})
              }else {
                v.$Message.error(res.body.info);
              }
            }).catch((err)=>{
              v.$Message.error(err.body.info);
            });

          },
          onCancel:()=>{

          }
        });
      },
      //get 子系统列表
      getSysMenuData(){
        let v=this;
        v.$http.get(this.API.sysMenuData).then((res)=>{
          if(res.body.code=='000000'){
            this.sysMenuData=res.body.list
          }else {
            v.$Message.error(res.body.info);
          }
        }).catch((err)=>{
          v.$Message.error(err.body.info)
        });
      },
      //修改密码
      showChangePSW(value){
        if(value=='person'){
          this.$refs.changeInfo.changeUserInfoShow()
        }else {
          this.$refs.changPSW.showChange()
        }

      }
    },
    created(){
      this.getNavMenuData()
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
          'ivu-layout-sider',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      },
    },
  }

</script>
<style scoped lang="less">
  .layout{
    display: flex;
    justify-content: right;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .ivu-layout-header{
    padding: 0 20px!important;
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
  .logoStyle{
    -webkit-animation:rotateLogo 1.7s linear infinite;

  }

  @-webkit-keyframes rotateLogo {

    0% {
      -webkit-transform: rotate(0deg);
    }

    25% {
      -webkit-transform: rotate(90deg);
    }

    50% {
      -webkit-transform: rotate(180deg);
    }

    75% {
      -webkit-transform: rotate(270deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  .ivu-dropdown:hover{
    background-color: rgba(239, 249, 255, 0.19) !important;
  }
  .outSide:hover{
    background-color: rgba(239, 249, 255, 0.19) !important;
  }
  .IconStyle:hover{
    border-radius: 15px;
    box-shadow: 1px 1px 3px 3px #ffffff;
  }
  .menuStyle{
    color: rgba(57, 130, 237, 0.36);
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
  .collapsed-menu{
    width: 0;
    transition: width .2s ease;
  }
  /*.collapsed-menu i{*/
  /*    transform: translateX(5px);*/
  /*    transition: font-size .2s ease .2s, transform .2s ease .2s;*/
  /*    vertical-align: middle;*/
  /*    font-size: 22px;*/
  /*}*/
  .closeMenu{
    width: 20px;
    height: 100px;
    background-color: #dcdcdc;
    position: fixed;
    left:0;
    top: 40vh;
    z-index:99;
    border-radius: 5px;
    transform: rotate(0deg);
    p{
      display: inline-block;
      margin-top: 20px;
      transform: rotate(-90deg);
    }
  }



</style>
