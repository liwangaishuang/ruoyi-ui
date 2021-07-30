<template>
  <div id="div_1">
    <p id="p_2"  style="display: none">您的申报正在审核中，请耐心等待</p>
    <p id="p_2_2"  style="display: none">您的审核已通过</p>
    <p id="p_2_3" style="display: none" >您好，您暂未进行专家申报</p>
    <p id="p_2_4" style="display: none" >您的审核未通过</p>
    <p id="p_2_5" style="display: none" >您已被移除出人才专家库</p>


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
      :data="informationList"
      :header-cell-style="{
        fontSize: '16px',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
      }"
    >
      <el-table-column label="操作人" prop="operator" align="center" />
      <el-table-column label="操作时间" prop="createTime" align="center" />
      <el-table-column label="操作内容" prop="operationalContext" align="center" />
      <el-table-column label="备注" prop="remark" align="center" />
    </el-table>
  </div>
</template>

<script>
  import '../../css/专家申报/style_schedule.css';
  import {getUserDeclare,declareProcess} from "@/api/declare/user";
    export default {
      name: "index",
      created(){
        this.getNow();
        this.declareProcess();
      },
      data() {
        return {
          // 遮罩层
          loading: true,
          // 导出遮罩层
          exportLoading: false,
          // 选中数组
          ids: [],
          // 非单个禁用
          single: true,
          // 非多个禁用
          multiple: true,
          // 显示搜索条件
          showSearch: true,
          // 总条数
          total: 0,
          // 申报信息表格数据
          informationList: [],
          // 弹出层标题
          title: "",
          // 是否显示弹出层
          open: false,
          // 查询参数
          queryParams: {
            pageNum: 1,
            pageSize: 10,
            userId: null,
            declarationId: null,
            operator: null,
            operationalContext: null,
            applicationStatus: null,
            remark: null,
            isPass:null,
            isRemove:null,
            createTime:null,
            overTime:null,
          },
          // 表单参数
          form: {},
          // 表单校验
          rules: {
          }
        };
      },

      methods: {
        /**获取该用户的申报状态信息*/
        getNow() {
          this.loading = true;
          getUserDeclare().then(response => {
            if(response.data!=null){
              this.queryParams=response.data;
            }
            this.judgePass();
          });
        },
        /**判断用户申报是否通过*/
        judgePass(){
          let pass = this.queryParams.isPass;
          let status = this.queryParams.applicationStatus;
          let isRemove = this.queryParams.isRemove;
          let overTime = this.queryParams.overTime;
          let divOne = document.getElementById("p_2_3");
          if (pass===null && status===null){ //未进行申报
            divOne.style.display = "block";
          }else if(status==='0'){ // 未审核
            let divTwo = document.getElementById("p_2");
            divOne.style.display = "none";
            divTwo.style.display = "block";
          } else if(pass==='0' && status==='1' && isRemove==='0'){ //审核通过
            let divTwo = document.getElementById("p_2_2");
            divOne.style.display = "none";
            divTwo.style.display = "block";
          }else if(pass==='1' && status==='1' && isRemove==='0'){ //审核不通过
            let divTwo = document.getElementById("p_2_4");
            divOne.style.display = "none";
            divTwo.style.display = "block";
          }else if(isRemove==='1' && overTime=='永久移除'){ //已被永久移除
            let divTwo = document.getElementById("p_2_5");
            divOne.style.display = "none";
            divTwo.style.display = "block";
          }else if(isRemove==='1' && overTime!='永久移除'){ //已移除但不是永久移除
            let divTwo = document.getElementById("p_2_2");
            divOne.style.display = "none";
            divTwo.style.display = "block";
          }
        },
        /**申报进度过程*/
        declareProcess(){
          declareProcess().then(response =>{
            this.informationList = response.data;
          })
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
