<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <div>
        <el-form-item label="用户账号" prop="userName">
          <el-input
            v-model="queryParams.userName"
            placeholder="请输入用户账号"
            clearable
            size="small"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item label="用户姓名" prop="nickName">
          <el-input
            v-model="queryParams.nickName"
            placeholder="请输入用户姓名"
            clearable
            size="small"
            @keyup.enter.native="handleQuery"
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
      </div>
      <div>
        <el-form-item label="单位地区" prop="companyRegion">
          <el-select v-model="queryParams.companyRegion" placeholder="请选择单位地区" clearable size="small">
            <el-option
              v-for="dict in companyRegionOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="单位类型" prop="companyType">
          <el-select v-model="queryParams.companyType" placeholder="请选择单位类型" clearable size="small">
            <el-option
              v-for="dict in companyTypeOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="帐号状态" prop="status">
          <el-select v-model="queryParams.status" placeholder="请选择单位类型" clearable size="small">
            <el-option
              v-for="dict in statusOptions"
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
      </div>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="info"
          plain
          size="mini"
          @click="handleStatusChangeForbid"
        >锁定<i class="el-icon-lock el-icon--right"></i>
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="info"
          plain
          size="mini"
          :loading="exportLoading"
          @click="handleStatusChangeStart"
          v-hasPermi="['system:user:export']"
        >解锁<i class="el-icon-unlock el-icon--right"></i></el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="userList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="用户账号" align="center" prop="userName" />
      <el-table-column label="用户姓名" align="center" prop="nickName" />
      <el-table-column label="单位" align="center" prop="companyName" />
      <el-table-column label="单位地区" :formatter="companyRegionFormat" align="center" prop="companyRegion" />
      <el-table-column label="单位类型" :formatter="companyTypeFormat" align="center" prop="companyType" />
      <el-table-column label="手机号" align="center" prop="phoneNumber" />
      <el-table-column label="帐号状态" :formatter="statusFormat" align="center" prop="status" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="text" @click="handleUpdate(scope.row)"><i class="el-icon-document"></i></el-button>
          <el-button type="text" @click="updatePassword(scope.row)"><i class="el-icon-key"></i></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加或修改参数配置对话框 -->
    <el-dialog :title="title" :visible.sync="enrollOpen" width="600px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="用户账号：" prop="userName">
              {{queryParams2.userName}}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户姓名：" prop="nickName">
              {{queryParams2.nickName}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="身份证号码：" prop="userIdNumber">
              {{queryParams2.userIdNumber}}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号：" prop="phoneNumber">
              {{queryParams2.phoneNumber}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="单位名称：" prop="companyName">
              {{queryParams2.companyName}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="单位地区：" prop="companyRegion">
              {{queryParams2.companyRegion}}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="单位类型：" prop="companyType">
              {{queryParams2.companyType}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="单位地址：" prop="companySite">
              {{queryParams2.companySite}}
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>

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
  import { registeredList, getUser, delUser, addUser, updateUser, exportUser,changeUserStatus, updatePassword } from "@/api/declare/user";
  import Editor from '@/components/Editor';
  import ElFormItem from "element-ui/packages/form/src/form-item";

  export default {
    name: "User",
    components: {
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
        enrollOpen: false,
        // 单位类型字典
        companyTypeOptions: [],
        //帐号状态
        Options: [],
        // 单位地区字典
        companyRegionOptions: [],
        //审批状态
        statusOptions: [],
        // 专业类别字典
        specialtyTypeOptions: [],
        // 审批结果
        approvalResultOptions: [],
        // 查询参数
        queryParams: {
          pageNum: 1,
          pageSize: 10,
          userId: null,
          userName: null,
          nickName: null,
          companyName: null,
          companyType: null,
          companyRegion: null,
          phoneNumber: null,
          status:null,
          idNumber:null,
          companySite:null,
        },
        queryParams2: {
          userId: null,
          userName: null,
          nickName: null,
          companyName: null,
          companyType: null,
          companyRegion: null,
          phoneNumber: null,
          status:null,
          userIdNumber:null,
          companySite:null,
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
      // 多选
      multiselection: []
    };
    },
    created() {
      this.getList();
      this.getDicts("company_region").then(response => {
        this.companyRegionOptions = response.data;
      });
      this.getDicts("account_status").then(response => {
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
        registeredList(this.queryParams).then(response => {
          this.userList = response.rows;
          this.total = response.total;
          this.loading = false;
        });
      },
      // 账号状态字典翻译
      statusFormat(row, column) {
        return this.selectDictLabel(this.statusOptions, row.status);
      },
      // 单位类型字典翻译
      companyTypeFormat(row, column) {
        return this.selectDictLabel(this.companyTypeOptions, row.companyType);
      },
      // 单位地区字典翻译
      companyRegionFormat(row, column) {
        return this.selectDictLabel(this.companyRegionOptions, row.companyRegion);
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
        this.open = false;
        this.reset();
      },
      // 表单重置
      reset() {
        this.form = {
          id: null,
          userName: null,
          password: null,
          userIdNumber: null,
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
          createTime: null,
          updateTime: null,
          status: null
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
        this.multiselection = selection;
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
      /** 修改按钮操作 */
      handleUpdate(row) {
        this.queryParams2 = row
        this.enrollOpen=true;
        this.title = "注册用户";
      },
      /** 修改密码按钮操作 */
      updatePassword(row) {
        let userId=row.userId;
        this.$prompt('请输入新密码', '修改密码', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          updatePassword(userId,value);
          this.$message({
            type: 'success',
            message: '你的新密码是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      /** 提交按钮 */
      submitForm() {
        this.$refs["form"].validate(valid => {
          if (valid) {
            if (this.form.id != null) {
              updateUser(this.form).then(response => {
                this.msgSuccess("修改成功");
                this.open = false;
                this.getList();
              });
            } else {
              addUser(this.form).then(response => {
                this.msgSuccess("新增成功");
                this.open = false;
                this.getList();
              });
            }
          }
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

      /**用户状态修改为禁用*/
      handleStatusChangeForbid() {
        let mm=this.multiselection;
        this.$confirm('该操作将导致您所选择的用户会被锁定，不能正常登录系统，您确定要继续吗?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          for (let i=0;i<mm.length;i++){
            let row=mm[i];
            changeUserStatus(row.userId, 1);
          }
        }).then(() => {
          this.handleQuery();
          this.msgSuccess("操作成功");
        });
      },

      /**用户状态修改为启用*/
      handleStatusChangeStart() {
        let mm=this.multiselection;
        this.$confirm('该操作将解锁您所选择的用户，解锁后的用户可正常登录系统，您确定要继续吗？', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          for (let i=0;i<mm.length;i++){
            let row=mm[i];
            changeUserStatus(row.userId, 0);
          }
        }).then(() => {
          this.handleQuery();
          this.msgSuccess("操作成功");
        });
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
      }
    }
  };
</script>
