<template>
  <div>
      <el-container class="index-con">
        <el-aside :class="showclass" v-if="!$route.meta.fullScreen" >
          <leftnav ></leftnav>
        </el-aside>
        <el-container class="main-con">
          <div class="container-outer">
            <el-header class="index-header"  v-if="!$route.meta.fullScreen" >
              <navcon></navcon>
            </el-header>
            <el-main clss="index-main" style="height: calc(100vh - 60px);" :class="$route.meta.fullScreen?'noPadding':''">
              <keep-alive v-if="$route.meta.isActive">
                <router-view></router-view>
              </keep-alive>
              <router-view v-if="!$route.meta.isActive"></router-view>
            </el-main>
          </div>
        </el-container>
      </el-container>
  </div>
</template>
<script>
  import navcon from '../components/navcon.vue'
  import leftnav from '../components/leftnav.vue'
  export default {
    components:{
      navcon,
      leftnav
    },
     data() {
       return {
          showclass: 'asideshow',
          showtype: false
       }
     },
  }
</script>
<style scoped>
  .index-con {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  .aside {
    width: 64px !important;
    height: 100%;
    background-color: #334157;
    margin: 0px;
  }

  .asideshow {
    width: 180px !important;
    height: 100vh;
    background-color: #334157;
    margin: 0px;
  }

  .index-header,
  .index-main {
    width:100%;
    padding: 0px;
    
  }
  .el-main.noPadding{
    padding: 0px !important;
    border-left: 2px solid #333;
  }
  .container-outer{
    width: 100%;
    height: 100%;
  }
</style>
