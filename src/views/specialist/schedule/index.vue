<template>
  <div id="div_1">
    <p id="p_2">您的申报正在审核中，请耐心等待</p>
    <!-- <img id="img_3" src="../../../assets/images/申报进度查看/test4.png" alt=""> -->

    <div style="padding: 10px 0px">
      <el-steps :active="1" align-center>
        <el-step title="提交成功" icon="el-icon-success">
          <i
            slot="icon"
            class="iconfont icon-duihao2"
            style="font-size: 48px"
          ></i>
        </el-step>
        <el-step title="审核中" icon="el-icon-success">
          <i
            slot="icon"
            class="iconfont icon-refresh"
            style="font-size: 48px"
          ></i>
        </el-step>
        <el-step title="审核通过" icon="el-icon-picture">
          <i
            slot="icon"
            class="iconfont icon-round"
            style="font-size: 48px"
          ></i>
        </el-step>
      </el-steps>
    </div>

    <p id="p_4">申报进度过程</p>
    <el-table
      id="tab_5"
      :header-cell-style="{
        fontSize: '16px',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
      }"
    >
      <el-table-column label="操作人"></el-table-column>
      <el-table-column label="操作时间"></el-table-column>
      <el-table-column label="操作内容"></el-table-column>
      <el-table-column label="备注"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import '../../css/专家申报/style_schedule.css';
  import {getUserDeclare} from "@/api/declare/user";
    export default {
      name: "index",
      created(){
        this.getNow(this.$route.query.id);
      },
      methods: {
        /**获取该用户的申报状态信息*/
        getNow(id) {
          this.loading = true;
          getUserDeclare(id).then(response => {
            this.queryParams=response.data;
          });
        },
      }
    }
</script>

<style scoped lang="scss">
::v-deep {
  .el-step__head.is-finish {
    color: #67c23a;
    border-color: #67c23a;
    .el-step__line {
      background-color: #67c23a;
    }
  }
  .el-step__line-inner {
    width: 0 !important;
  }
  .el-step__head {
    .el-step__line {
      height: 6px;
    }
  }

  .el-step__title {
    font-size: 25px;
    font-weight: bold;
  }
  .el-step__title.is-finish {
    color: #67c23a;
  }

  .el-step__description.is-finish {
    color: #67c23a;
    background-color: #67c23a;
  }

  .el-step__head.is-process {
    color: #409eff;
    border-color: #409eff;
  }
}
</style>
