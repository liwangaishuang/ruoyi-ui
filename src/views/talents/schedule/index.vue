<template>
  <div id="div_1">
    <p id="p_2">您的申报正在审核中，请耐心等待</p>
    <img id="img_3" src="../../../assets/images/申报进度查看/test4.png" alt="">
    <p id="p_4">申报进度过程</p>
    <el-table id="tab_5" :header-cell-style="{fontSize:'16px', color: 'black', fontWeight: 'bold',textAlign: 'center'}">
      <el-table-column
        label="操作人"
      ></el-table-column>
      <el-table-column
        label="操作时间"
      ></el-table-column>
      <el-table-column
      label="操作内容"
    ></el-table-column>
      <el-table-column
        label="备注"
      ></el-table-column>
    </el-table>
  </div>




</template>

<script>
  import '../../css/专家申报/style_schedule.css';
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
