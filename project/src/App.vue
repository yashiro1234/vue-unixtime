<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" @select="handleSelect" background-color="#3990CA" text-color="#FFF" active-text-color="FFF">
        <el-menu-item index="1" class="app-menu-item">Processing Center</el-menu-item>
      </el-menu>
    </el-header>

    <!--<div class="app-conteiner">-->
    <el-main>
      <router-view/>
    <!--</div>-->
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .app-menu-item {
    /*color: #FFF;*/
  }
  .el-header, .el-footer {
    background-color: #3990CA;
    /*color: #fff;*/
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    line-height: 12px;
  }
</style>
