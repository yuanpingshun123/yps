<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.el-dialog__header{
  text-align: left;
}
// .el-select__tags {
//   white-space: nowrap;
//   overflow: hidden;
//   display: inline-block;
//   text-overflow: ellipsis;
// }
.diyContentBox .property{
  .el-input-number__decrease{
    background: #fff;
    color: #000;
  }
  .el-input-number__increase{
    background: #fff;
    color: #000;

  }
  .el-input-group__append, .el-input-group__prepend{
    padding: 0 7px;
  }
  .el-input__inner{
    padding: 0 2px;
  }
  .el-tabs__nav-next, .el-tabs__nav-prev{
        color: azure;
  }
  .el-collapse-item__header{
    padding-left: 10px;
  }
  .el-tabs--card >.el-tabs__header{
    background:#303133;
    border: 1px solid #000;

  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
        border-bottom-color: aqua;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__nav{
        border: 1px solid #000;

  }
  .el-tabs--card>.el-tabs__header .el-tabs__item{
        border-left: 1px solid #000;
        color: azure;
  }
  .el-tabs__item:hover{
    color: aqua !important;
  }
  .el-tabs__item.is-active{
    color: aqua !important;
  }
  .el-collapse-item__header{
    background: #F0F0F0;
    color: #484848;
    border-bottom: 1px solid #C4C4C4;
  }
  .el-collapse{
    border-bottom: 1px solid #C4C4C4;
    border-top: 1px solid #C4C4C4;

  }
  .el-collapse-item__content{
    background: #F0F0F0;
    border-bottom: 1px solid #C4C4C4;

    color: #323232;
    padding-bottom:0px;
  }
  .el-collapse-item__wrap{
    border-bottom: 1px solid #F0F0F0

  }
  .el-input-group__append, .el-input-group__prepend{
    background: #fff;
  }


}
.el-dialog__footer{
  text-align: center !important;
}
.table-operate-btn{
	color: #409eff;
	cursor: pointer;
	margin: 0 5px;
    font-size: 14px;
}
.table-operate-btn.color99{
  color: #999999;
  cursor: default;
}
</style>
