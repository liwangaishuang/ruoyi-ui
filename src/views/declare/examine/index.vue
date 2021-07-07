<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="申报人" prop="userName">
        <el-input
          v-model="queryParams.userName"
          placeholder="请输入用户姓名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input
          v-model="queryParams.minAge"
          placeholder="请输入年龄"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
          @keyup.native="minNumber"
          style="width:45%"
        /> --
        <el-input
          v-model="queryParams.maxAge"
          placeholder="请输入年龄"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
          @keyup.native="maxNumber"
          style="width:45%"
        />
      </el-form-item>
      <el-form-item label="单位" prop="companyName">
        <el-input
          v-model="queryParams.companyName"
          placeholder="请输入单位名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="审批状态" prop="status">
        <el-select v-model="queryParams.status" placeholder="请选择审批状态" clearable size="small">
          <el-option
            v-for="dict in statusOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="申报时间">
        <el-date-picker
          v-model="queryParams.createTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="审批时间">
        <el-date-picker
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="审批结果" prop="examineStatus">
        <el-select v-model="queryParams.examineStatus" placeholder="请选择审批结果" clearable size="small">
          <el-option
            v-for="dict in approvalResultOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
          <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
        </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="info"
          plain
          size="mini"
          :loading="exportLoading"
          :disabled="multiple"
          @click="examineButton"
          v-hasPermi="['system:user:export']"
        >审批<i class="el-icon-s-check el-icon--right"></i></el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-dialog title="申报审批" :visible.sync="examineOpen" width="600px">
      <el-form :model="form" label-width="70px">
        <el-radio v-model="form.examineStatus" label="0">通过</el-radio>
        <el-radio v-model="form.examineStatus" label="1">不通过</el-radio>
        <el-form-item></el-form-item>
        <el-form-item label="审批说明">
          <el-input type="textarea" placeholder="请输入内容" v-model="form.auditExplain"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>

    <el-table v-loading="loading" :data="userList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="申报人" align="center" prop="userName" />
      <el-table-column label="年龄" align="center" prop="age" />
      <el-table-column label="单位" align="center" prop="companyName" />
      <el-table-column label="申报时间" align="center" prop="createTime"/>
      <el-table-column label="审批状态" :formatter="statusFormat" prop="status" align="center"/>
      <el-table-column label="审批结果" :formatter="examineStatusFormat" prop="examineStatus" align="center"/>
      <el-table-column label="审批时间" prop="auditTime" align="center"/>
      <el-table-column label="审批说明" prop="auditExplain" align="center"/>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <router-link :to="{path:'../information', query: {id:scope.row.id}}" target="_blank" style="color: #1c84c6">查看</router-link>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
  </div>
</template>

<script>
  import { examineListUser, getUser, delUser, addUser, updateUser, exportUser, examineUser } from "@/api/declare/user";
  import Editor from '@/components/Editor';
  import ElFormItem from "element-ui/packages/form/src/form-item";
  import ElRadio from "element-ui/packages/radio/src/radio";

  export default {
    name: "User",
    components: {
      ElFormItem,
      ElRadio,
      Editor,
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
        // 用户表格数据
        userList: [],
        // 弹出层标题
        title: "",
        // 是否显示弹出层
        open: false,
        examineOpen: false,
        // 性别(1:男2:女)字典
        userSexOptions: [],
        // 单位类型字典
        companyTypeOptions: [],
        // 单位地区字典
        companyRegionOptions: [],
        //审批状态
        statusOptions: [],
        // 专业类别字典
        specialtyTypeOptions: [],
        // 审批结果
        approvalResultOptions: [],
        radio:1,
        // 查询参数
        queryParams: {
          pageNum: 1,
          pageSize: 10,
          userName: null,
          password: null,
          userIdNumber: null,
          userSex: null,
          birthDate: null,
          age: null,
          minAge: null,
          maxAge: null,
          phoneNumber: null,
          email: null,
          officePhone: null,
          homeTelephone: null,
          nationality: null,
          nation: null,
          politicsStatus: null,
          postalCode: null,
          professional: null,
          dwellRegion: null,
          dwellSite: null,
          specialtyType: null,
          jobNature: null,
          companyName: null,
          companyType: null,
          secondLevelDepartment: null,
          position: null,
          companyRegion: null,
          companySite: null,
          highestEducation: null,
          graduateAcademy: null,
          major: null,
          highestDegree: null,
          awardAcademy: null,
          isAcademician: null,
          isDoctoralSupervisor: null,
          language: null,
          majorAcademy: null,
          degree: null,
          mainIndustry: null,
          elseIndustry: null,
          workContent: null,
          mainContribution: null,
          rewardsPunishment: null,
          avoidCompany: null,
          resultsOrPatents: null,
          honorsOrTitles: null,
          resumeSite: null,
          createTime:null,
          updateTime:null,
          status:null,
          examineStatus :null,
          auditTime :null,
          auditExplain :null,
        },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      },
      //时间区间
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
    };
    },
    created() {
      this.getList();
      this.getDicts("sys_user_sex").then(response => {
        this.userSexOptions = response.data;
      });
      this.getDicts("company_region").then(response => {
        this.companyRegionOptions = response.data;
      });
      this.getDicts("approval_status").then(response => {
        this.statusOptions = response.data;
      });
      this.getDicts("company_type").then(response => {
        this.companyTypeOptions = response.data;
      });
      this.getDicts("specialty_type").then(response => {
        this.specialtyTypeOptions = response.data;
      });
      this.getDicts("approval_result").then(response => {
        this.approvalResultOptions = response.data;
      });
    },
    methods: {
      /** 查询用户列表 */
      getList() {
        this.loading = true;
        examineListUser(this.queryParams).then(response => {
          this.userList = response.rows;
          this.total = response.total;
          this.loading = false;
        });
      },
      // 性别(1:男2:女)字典翻译
      userSexFormat(row, column) {
        return this.selectDictLabel(this.userSexOptions, row.userSex);
      },
      // 单位类型字典翻译
      companyTypeFormat(row, column) {
        return this.selectDictLabel(this.companyTypeOptions, row.companyType);
      },
      // 单位地区字典翻译
      companyRegionFormat(row, column) {
        return this.selectDictLabel(this.companyRegionOptions, row.companyRegion);
      },
      // 审批状态字典翻译
      statusFormat(row, column) {
        return this.selectDictLabel(this.statusOptions, row.status);
      },
      // 审批结果字典翻译
      examineStatusFormat(row, column) {
        return this.selectDictLabel(this.approvalResultOptions, row.examineStatus);
      },
      // 专业类别字典翻译
      specialtyTypeFormat(row, column) {
        return this.selectDictLabel(this.specialtyTypeOptions, row.specialtyType);
      },
      // 取消按钮
      cancel() {
        this.examineOpen = false;
        this.reset();
      },
      // 表单重置
      reset() {
        this.form = {
          id: null,
          userName: null,
          password: null,
          userIdNumber: null,
          userSex: "0",
          birthDate: null,
          age: null,
          phoneNumber: null,
          email: null,
          officePhone: null,
          homeTelephone: null,
          nationality: null,
          nation: null,
          politicsStatus: null,
          postalCode: null,
          professional: null,
          dwellRegion: null,
          dwellSite: null,
          specialtyType: null,
          jobNature: null,
          companyName: null,
          companyType: null,
          secondLevelDepartment: null,
          position: null,
          companyRegion: null,
          companySite: null,
          highestEducation: null,
          graduateAcademy: null,
          major: null,
          highestDegree: null,
          awardAcademy: null,
          isAcademician: "0",
          isDoctoralSupervisor: "0",
          language: null,
          majorAcademy: null,
          degree: null,
          mainIndustry: null,
          elseIndustry: null,
          workContent: null,
          mainContribution: null,
          rewardsPunishment: null,
          avoidCompany: null,
          resultsOrPatents: null,
          honorsOrTitles: null,
          resumeSite: null,
          createTime:null,
          updateTime:null
      };
        this.resetForm("form");
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.queryParams.pageNum = 1;
        this.getList();
      },
      /**只能输入正整数*/
      minNumber() {
        this.queryParams.minAge=this.queryParams.minAge.replace(/[^\d]/g,'');
      },
      maxNumber() {
        this.queryParams.maxAge=this.queryParams.maxAge.replace(/[^\d]/g,'');
      },
      /** 重置按钮操作 */
      resetQuery() {
        this.resetForm("queryForm");
        this.handleQuery();
      },
      // 多选框选中数据
      handleSelectionChange(selection) {
        this.ids = selection.map(item => item.id)
        this.single = selection.length!==1
        this.multiple = !selection.length
      },
      /** 新增按钮操作 */
      handleAdd() {
        this.reset();
        this.open = true;
        this.title = "添加用户";
      },
      /** 审批按钮操作 */
      examineButton() {
        this.reset();
        this.examineOpen = true;
        this.title = "审批申报";

      },
      /** 提交按钮 */
      submitForm() {
        this.form.id=this.ids;
        console.log(this.form.id);
        examineUser(this.form).then(response => {
          this.msgSuccess("修改成功");
          this.examineOpen = false;
        });
      },
      /** 删除按钮操作 */
      handleDelete(row) {
        const ids = row.id || this.ids;
        this.$confirm('是否确认删除用户编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delUser(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
      },
      /** 导出按钮操作 */
      handleExport() {
        const queryParams = this.queryParams;
        this.$confirm('是否确认导出所有用户数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.exportLoading = true;
          return exportUser(queryParams);
        }).then(response => {
          this.download(response.msg);
          this.exportLoading = false;
        })
      },
    }
  };
</script>
