<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <!--<el-row>
        <el-col :span="6" :xs="24">
          <el-form-item label="用户姓名" prop="userName" style="width:150%">
            <el-input
              v-model="queryParams.userName"
              placeholder="请输入用户姓名"
              clearable
              size="small"
              @keyup.enter.native="handleQuery"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8" :xs="24">
          <el-form-item label="年龄" prop="age" style="width:150%">
            <el-input
              v-model="queryParams.minAge"
              placeholder="请输入年龄"
              clearable
              size="small"
              @keyup.enter.native="handleQuery"
              @keyup.native="minNumber"
              style="width:28%"
            /> -
            <el-input
              v-model="queryParams.maxAge"
              placeholder="请输入年龄"
              clearable
              size="small"
              @keyup.enter.native="handleQuery"
              @keyup.native="maxNumber"
              style="width:28%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="7" :xs="24">
          <el-form-item label="单位名称" prop="companyName">
            <el-input
              v-model="queryParams.companyName"
              placeholder="请输入单位名称"
              clearable
              size="small"
              @keyup.enter.native="handleQuery"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7" :xs="24">
          <el-form-item label="单位地区" prop="companyRegion" style="width:150%">
            <el-select v-model="queryParams.companyRegion" placeholder="请选择单位地区" clearable size="small">
              <el-option label="请选择字典生成" value="" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="7" :xs="24" >
          <el-form-item label="单位类型" prop="companyType" style="width:150%">
            <el-select v-model="queryParams.companyType" placeholder="请选择单位类型" clearable size="small" >
              <el-option label="请选择字典生成" value="" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="7" :xs="24">
          &lt;!&ndash;原名：主要行业领域&ndash;&gt;
          <el-form-item label="专业领域" prop="mainIndustry" style="width:150%">
            <el-select v-model="queryParams.mainIndustry" placeholder="专业领域" clearable size="small">
              <el-option label="请选择字典生成" value="" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" :xs="24" >
          <el-form-item label="专业类别" prop="companyType" style="display: inline-block;width:150%">
            <el-select v-model="queryParams.companyType" placeholder="全部" clearable size="small" >
              <el-option label="请选择字典生成" value="" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8" :xs="24">
          <el-form-item label="评审年度" style="width:200%">
            <el-input
              v-model="queryParams.minAge"
              placeholder=""
              clearable
              size="small"
              @keyup.enter.native="handleQuery"
              @keyup.native="minNumber"
              style="width:18%"
            /> -
            <el-input
              v-model="queryParams.maxAge"
              placeholder=""
              clearable
              size="small"
              @keyup.enter.native="handleQuery"
              @keyup.native="maxNumber"
              style="width:18%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8" :xs="24">
          <el-form-item label="最近更新时间">
            <el-date-picker
              v-model="updateTime"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>-->
      <el-form-item label="人员姓名" prop="userName">
        <el-input
          v-model="queryParams.userName"
          placeholder="请输入人员姓名"
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
      <el-form-item label="单位名称" prop="companyName">
        <el-input
          v-model="queryParams.companyName"
          placeholder="请输入单位名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="单位类型" prop="companyType">
        <el-select v-model="queryParams.companyType" placeholder="请选择单位类型" clearable size="small" >
          <el-option
            v-for="dict in companyTypeOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          ></el-option>
        </el-select>
      </el-form-item>
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
      <el-form-item label="担任评审专家最近年度" label-width="200px" prop="age" style="width:680px;">
        <el-input
          v-model="queryParams.minAge"
          placeholder=""
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
          @keyup.native="minNumber"
          style="width:30%"
        /> -
        <el-input
          v-model="queryParams.maxAge"
          placeholder=""
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
          @keyup.native="maxNumber"
          style="width:30%"
        />
      </el-form-item>
      <el-form-item label="专业类别" prop="specialtyType">
        <el-select v-model="queryParams.specialtyType" placeholder="请选择专业类别" size="small">
          <el-option
            v-for="dict in specialtyTypeOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="移除时间" label-width="100px" prop="age" style="width:480px;">
        <el-date-picker
          v-model="updateTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="移除结束时间" label-width="100px" prop="age" style="width:480px;">
        <el-date-picker
          v-model="updateTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
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
          icon="el-icon-message"
          size="mini"
          :loading="exportLoading"
          @click="handleExport"
          v-hasPermi="['system:user:export']"
        >发送短信</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:user:remove']"
        >移回人才库</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-download"
          size="mini"
          :loading="exportLoading"
          @click="handleExport"
          v-hasPermi="['system:user:export']"
        >下载简历</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-download"
          size="mini"
          :loading="exportLoading"
          @click="handleExport"
          v-hasPermi="['system:user:export']"
        >下载登记表</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          size="mini"
          :loading="exportLoading"
          @click="handleExport"
          v-hasPermi="['system:user:export']"
        >导出<i class="el-icon-upload el-icon--right"></i></el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="userList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="人员姓名" align="center" prop="userName" />
      <el-table-column label="年龄" align="center" prop="age" />
      <el-table-column label="单位" align="center" prop="companyName" />
      <el-table-column label="单位地区" :formatter="companyRegionFormat" align="center" prop="companyRegion" />
      <el-table-column label="单位类型" :formatter="companyTypeFormat" align="center" prop="companyType" />
      <el-table-column label="专业类别" :formatter="specialtyTypeFormat" align="center" prop="companyType" />
      <el-table-column label="担任评审专家最近年度" align="center"/>
      <el-table-column label="移除时间" align="center" prop="updateTime"/>
      <el-table-column label="移除结束时间" align="center" prop="updateTime"/>
      <el-table-column label="移除原因" align="center"/>
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
  import { listUser, getUser, delUser, addUser, updateUser, exportUser } from "@/api/declare/user";
  import Editor from '@/components/Editor';
  import ElFormItem from "element-ui/packages/form/src/form-item";

  export default {
    name: "User",
    components: {
      Editor,
    },
    data() {
      return {
        //时间区间两端数据
        createTime: '',
        updateTime: '',
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
        // 性别(1:男2:女)字典
        userSexOptions: [],
        // 单位类型字典
        companyTypeOptions: [],
        // 单位地区字典
        companyRegionOptions: [],
        // 专业类别字典
        specialtyTypeOptions: [],
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
          updateTime:null
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
      this.getDicts("company_type").then(response => {
        this.companyTypeOptions = response.data;
      });
      this.getDicts("specialty_type").then(response => {
        this.specialtyTypeOptions = response.data;
      });
    },
    methods: {
      /** 查询用户列表 */
      getList() {
        this.loading = true;
        listUser(this.queryParams).then(response => {
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
      /** 修改按钮操作 */
      handleUpdate(row) {
        this.reset();
        const id = row.id || this.ids
        getUser(id).then(response => {
          this.form = response.data;
          this.open = true;
          this.title = "修改用户";
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
