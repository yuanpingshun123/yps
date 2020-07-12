/**
* 左边菜单
*/
<template>
   <div class="leftnav">
       <div class="logo">

       </div>
       <div class="content">
            <el-menu default-active="2"  class="el-menu-vertical-demo"  background-color="#334157" text-color="#fff"  active-text-color="#ffd04b">
                <el-menu-item index="4">
                    <!-- <i class="el-icon-setting"></i> -->
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-submenu index="1">
                    <template slot="title">
                        <!-- <i class="el-icon-location"></i> -->
                        <span>订单管理</span>
                    </template>
                    <el-menu-item index="1-1">市场订单</el-menu-item>
                    <el-menu-item index="1-2">商城订单</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <!-- <i class="el-icon-location"></i> -->
                        <span>会员中心</span>
                    </template>
                    <el-menu-item index="2-1">会员列表</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <!-- <i class="el-icon-location"></i> -->
                        <span>店铺管理</span>
                    </template>
                    <el-menu-item index="3-1">店铺列表</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <!-- <i class="el-icon-location"></i> -->
                        <span>商品管理</span>
                    </template>
                    <el-menu-item index="4-1">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <!-- <i class="el-icon-location"></i> -->
                        <span>仓库管理</span>
                    </template>
                    <el-menu-item index="5-1">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">
                        <!-- <i class="el-icon-location"></i> -->
                        <span>客服</span>
                    </template>
                    <el-menu-item index="6-1">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title">
                        <!-- <i class="el-icon-location"></i> -->
                        <span>财务管理</span>
                    </template>
                    <el-menu-item index="7-1">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="8">
                    <template slot="title">
                        <!-- <i class="el-icon-location"></i> -->
                        <span>话题管理</span>
                    </template>
                    <el-menu-item index="8-1">选项3</el-menu-item>
                </el-submenu>
                 <el-submenu index="9">
                    <template slot="title">
                        <!-- <i class="el-icon-location"></i> -->
                        <span>系统设置</span>
                    </template>
                    <el-menu-item index="9-1">选项3</el-menu-item>
                </el-submenu>
               
            </el-menu>
       </div>
       
   </div>
</template>
<script>
export default {
  name: "leftnav",
  data() {
    return {
      allmenu: [

      ],
    };
  },
  created() {
   
   
  },
};
</script>
<style lang="scss">
    .leftnav{
       .logo{
            height: 40px;
            line-height: 40px;
            color: #9d9d9d;
            font-size: 20px;
            text-align: center;
            padding: 10px 0px;
       }
    }

</style>
