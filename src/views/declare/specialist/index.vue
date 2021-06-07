<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="用户姓名" prop="userName">
        <el-input
          v-model="queryParams.userName"
          placeholder="请输入用户姓名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="登陆密码" prop="password">
        <el-input
          v-model="queryParams.password"
          placeholder="请输入登陆密码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="身份证号" prop="userIdNumber">
        <el-input
          v-model="queryParams.userIdNumber"
          placeholder="请输入身份证号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="性别(1:男2:女)" prop="userSex">
        <el-select v-model="queryParams.userSex" placeholder="请选择性别(1:男2:女)" clearable size="small">
          <el-option
            v-for="dict in userSexOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期" prop="birthDate">
        <el-date-picker clearable size="small"
                        v-model="queryParams.birthDate"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="选择出生日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input
          v-model="queryParams.age"
          placeholder="请输入年龄"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="手机号码" prop="phoneNumber">
        <el-input
          v-model="queryParams.phoneNumber"
          placeholder="请输入手机号码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="邮箱地址" prop="email">
        <el-input
          v-model="queryParams.email"
          placeholder="请输入邮箱地址"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="办公电话" prop="officePhone">
        <el-input
          v-model="queryParams.officePhone"
          placeholder="请输入办公电话"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="家庭电话" prop="homeTelephone">
        <el-input
          v-model="queryParams.homeTelephone"
          placeholder="请输入家庭电话"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="国籍" prop="nationality">
        <el-select v-model="queryParams.nationality" placeholder="请选择国籍" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="民族" prop="nation">
        <el-select v-model="queryParams.nation" placeholder="请选择民族" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="政治面貌" prop="politicsStatus">
        <el-select v-model="queryParams.politicsStatus" placeholder="请选择政治面貌" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="邮政编码" prop="postalCode">
        <el-input
          v-model="queryParams.postalCode"
          placeholder="请输入邮政编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="职称" prop="professional">
        <el-input
          v-model="queryParams.professional"
          placeholder="请输入职称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="居住地区" prop="dwellRegion">
        <el-select v-model="queryParams.dwellRegion" placeholder="请选择居住地区" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="居住地址" prop="dwellSite">
        <el-input
          v-model="queryParams.dwellSite"
          placeholder="请输入居住地址"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="专业类别" prop="specialtyType">
        <el-select v-model="queryParams.specialtyType" placeholder="请选择专业类别" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="工作性质" prop="jobNature">
        <el-select v-model="queryParams.jobNature" placeholder="请选择工作性质" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
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
        <el-select v-model="queryParams.companyType" placeholder="请选择单位类型" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="二级部门" prop="secondLevelDepartment">
        <el-input
          v-model="queryParams.secondLevelDepartment"
          placeholder="请输入二级部门"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="职务" prop="position">
        <el-input
          v-model="queryParams.position"
          placeholder="请输入职务"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="单位地区" prop="companyRegion">
        <el-select v-model="queryParams.companyRegion" placeholder="请选择单位地区" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="单位地址" prop="companySite">
        <el-input
          v-model="queryParams.companySite"
          placeholder="请输入单位地址"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="最高学历" prop="highestEducation">
        <el-select v-model="queryParams.highestEducation" placeholder="请选择最高学历" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="毕业院校" prop="graduateAcademy">
        <el-input
          v-model="queryParams.graduateAcademy"
          placeholder="请输入毕业院校"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="学历所学专业" prop="major">
        <el-select v-model="queryParams.major" placeholder="请选择学历所学专业" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="最高学位" prop="highestDegree">
        <el-select v-model="queryParams.highestDegree" placeholder="请选择最高学位" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="授予院校" prop="awardAcademy">
        <el-input
          v-model="queryParams.awardAcademy"
          placeholder="请输入授予院校"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="是否两院院士" prop="isAcademician">
        <el-select v-model="queryParams.isAcademician" placeholder="请选择是否两院院士" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="是否博士生导师" prop="isDoctoral supervisor">
        <el-select v-model="queryParams.isDoctoralSupervisor" placeholder="请选择是否博士生导师" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="熟悉外语语种" prop="language">
        <el-input
          v-model="queryParams.language"
          placeholder="请输入熟悉外语语种"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="学位所学专业" prop="majorAcademy">
        <el-select v-model="queryParams.majorAcademy" placeholder="请选择学位所学专业" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="熟悉程度" prop="degree">
        <el-input
          v-model="queryParams.degree"
          placeholder="请输入熟悉程度"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="主要行业领域" prop="mainIndustry">
        <el-select v-model="queryParams.mainIndustry" placeholder="请选择主要行业领域" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="其他行业领域" prop="elseIndustry">
        <el-select v-model="queryParams.elseIndustry" placeholder="请选择其他行业领域" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="奖惩情况" prop="rewardsPunishment">
        <el-input
          v-model="queryParams.rewardsPunishment"
          placeholder="请输入奖惩情况"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="参与评审需回避单位" prop="avoidCompany">
        <el-input
          v-model="queryParams.avoidCompany"
          placeholder="请输入参与评审需回避单位"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="成果或专利" prop="resultsOrPatents">
        <el-input
          v-model="queryParams.resultsOrPatents"
          placeholder="请输入成果或专利"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="荣誉或头衔" prop="honorsOrTitles">
        <el-input
          v-model="queryParams.honorsOrTitles"
          placeholder="请输入荣誉或头衔"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="简历地址" prop="resumeSite">
        <el-input
          v-model="queryParams.resumeSite"
          placeholder="请输入简历地址"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:user:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:user:edit']"
        >修改</el-button>
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
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          :loading="exportLoading"
          @click="handleExport"
          v-hasPermi="['system:user:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="userList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="简历地址" align="center" prop="id" />
      <el-table-column label="用户姓名" align="center" prop="userName" />
      <el-table-column label="登陆密码" align="center" prop="password" />
      <el-table-column label="身份证号" align="center" prop="userIdNumber" />
      <el-table-column label="性别(1:男2:女)" align="center" prop="userSex" :formatter="userSexFormat" />
      <el-table-column label="出生日期" align="center" prop="birthDate" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.birthDate, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="年龄" align="center" prop="age" />
      <el-table-column label="手机号码" align="center" prop="phoneNumber" />
      <el-table-column label="邮箱地址" align="center" prop="email" />
      <el-table-column label="办公电话" align="center" prop="officePhone" />
      <el-table-column label="家庭电话" align="center" prop="homeTelephone" />
      <el-table-column label="国籍" align="center" prop="nationality" />
      <el-table-column label="民族" align="center" prop="nation" />
      <el-table-column label="政治面貌" align="center" prop="politicsStatus" />
      <el-table-column label="邮政编码" align="center" prop="postalCode" />
      <el-table-column label="职称" align="center" prop="professional" />
      <el-table-column label="居住地区" align="center" prop="dwellRegion" />
      <el-table-column label="居住地址" align="center" prop="dwellSite" />
      <el-table-column label="专业类别" align="center" prop="specialtyType" />
      <el-table-column label="工作性质" align="center" prop="jobNature" />
      <el-table-column label="单位名称" align="center" prop="companyName" />
      <el-table-column label="单位类型" align="center" prop="companyType" />
      <el-table-column label="二级部门" align="center" prop="secondLevelDepartment" />
      <el-table-column label="职务" align="center" prop="position" />
      <el-table-column label="单位地区" align="center" prop="companyRegion" />
      <el-table-column label="单位地址" align="center" prop="companySite" />
      <el-table-column label="最高学历" align="center" prop="highestEducation" />
      <el-table-column label="毕业院校" align="center" prop="graduateAcademy" />
      <el-table-column label="学历所学专业" align="center" prop="major" />
      <el-table-column label="最高学位" align="center" prop="highestDegree" />
      <el-table-column label="授予院校" align="center" prop="awardAcademy" />
      <el-table-column label="是否两院院士" align="center" prop="isAcademician" />
      <el-table-column label="是否博士生导师" align="center" prop="isDoctoral supervisor" />
      <el-table-column label="熟悉外语语种" align="center" prop="language" />
      <el-table-column label="学位所学专业" align="center" prop="majorAcademy" />
      <el-table-column label="熟悉程度" align="center" prop="degree" />
      <el-table-column label="主要行业领域" align="center" prop="mainIndustry" />
      <el-table-column label="其他行业领域" align="center" prop="elseIndustry" />
      <el-table-column label="研究或工作内容" align="center" prop="workContent" />
      <el-table-column label="主要业绩及贡献" align="center" prop="mainContribution" />
      <el-table-column label="奖惩情况" align="center" prop="rewardsPunishment" />
      <el-table-column label="参与评审需回避单位" align="center" prop="avoidCompany" />
      <el-table-column label="成果或专利" align="center" prop="resultsOrPatents" />
      <el-table-column label="荣誉或头衔" align="center" prop="honorsOrTitles" />
      <el-table-column label="简历地址" align="center" prop="resumeSite" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:user:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:user:remove']"
          >删除</el-button>
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

    <!-- 添加或修改用户对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户姓名" prop="userName">
          <el-input v-model="form.userName" placeholder="请输入用户姓名" />
        </el-form-item>
        <el-form-item label="登陆密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入登陆密码" />
        </el-form-item>
        <el-form-item label="身份证号" prop="userIdNumber">
          <el-input v-model="form.userIdNumber" placeholder="请输入身份证号" />
        </el-form-item>
        <el-form-item label="性别(1:男2:女)">
          <el-radio-group v-model="form.userSex">
            <el-radio
              v-for="dict in userSexOptions"
              :key="dict.dictValue"
              :label="dict.dictValue"
            >{{dict.dictLabel}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出生日期" prop="birthDate">
          <el-date-picker clearable size="small"
                          v-model="form.birthDate"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择出生日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age" placeholder="请输入年龄" />
        </el-form-item>
        <el-form-item label="手机号码" prop="phoneNumber">
          <el-input v-model="form.phoneNumber" placeholder="请输入手机号码" />
        </el-form-item>
        <el-form-item label="邮箱地址" prop="email">
          <el-input v-model="form.email" placeholder="请输入邮箱地址" />
        </el-form-item>
        <el-form-item label="办公电话" prop="officePhone">
          <el-input v-model="form.officePhone" placeholder="请输入办公电话" />
        </el-form-item>
        <el-form-item label="家庭电话" prop="homeTelephone">
          <el-input v-model="form.homeTelephone" placeholder="请输入家庭电话" />
        </el-form-item>
        <el-form-item label="国籍" prop="nationality">
          <el-select v-model="form.nationality" placeholder="请选择国籍">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="民族" prop="nation">
          <el-select v-model="form.nation" placeholder="请选择民族">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="政治面貌" prop="politicsStatus">
          <el-select v-model="form.politicsStatus" placeholder="请选择政治面貌">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="邮政编码" prop="postalCode">
          <el-input v-model="form.postalCode" placeholder="请输入邮政编码" />
        </el-form-item>
        <el-form-item label="职称" prop="professional">
          <el-input v-model="form.professional" placeholder="请输入职称" />
        </el-form-item>
        <el-form-item label="居住地区" prop="dwellRegion">
          <el-select v-model="form.dwellRegion" placeholder="请选择居住地区">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="居住地址" prop="dwellSite">
          <el-input v-model="form.dwellSite" placeholder="请输入居住地址" />
        </el-form-item>
        <el-form-item label="专业类别" prop="specialtyType">
          <el-select v-model="form.specialtyType" placeholder="请选择专业类别">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="工作性质" prop="jobNature">
          <el-select v-model="form.jobNature" placeholder="请选择工作性质">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="单位名称" prop="companyName">
          <el-input v-model="form.companyName" placeholder="请输入单位名称" />
        </el-form-item>
        <el-form-item label="单位类型" prop="companyType">
          <el-select v-model="form.companyType" placeholder="请选择单位类型">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="二级部门" prop="secondLevelDepartment">
          <el-input v-model="form.secondLevelDepartment" placeholder="请输入二级部门" />
        </el-form-item>
        <el-form-item label="职务" prop="position">
          <el-input v-model="form.position" placeholder="请输入职务" />
        </el-form-item>
        <el-form-item label="单位地区" prop="companyRegion">
          <el-select v-model="form.companyRegion" placeholder="请选择单位地区">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="单位地址" prop="companySite">
          <el-input v-model="form.companySite" placeholder="请输入单位地址" />
        </el-form-item>
        <el-form-item label="最高学历" prop="highestEducation">
          <el-select v-model="form.highestEducation" placeholder="请选择最高学历">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="毕业院校" prop="graduateAcademy">
          <el-input v-model="form.graduateAcademy" placeholder="请输入毕业院校" />
        </el-form-item>
        <el-form-item label="学历所学专业" prop="major">
          <el-select v-model="form.major" placeholder="请选择学历所学专业">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="最高学位" prop="highestDegree">
          <el-select v-model="form.highestDegree" placeholder="请选择最高学位">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="授予院校" prop="awardAcademy">
          <el-input v-model="form.awardAcademy" placeholder="请输入授予院校" />
        </el-form-item>
        <el-form-item label="是否两院院士">
          <el-radio-group v-model="form.isAcademician">
            <el-radio label="1">请选择字典生成</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否博士生导师">
          <el-radio-group v-model="form.isDoctoralSupervisor">
            <el-radio label="1">请选择字典生成</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="熟悉外语语种" prop="language">
          <el-input v-model="form.language" placeholder="请输入熟悉外语语种" />
        </el-form-item>
        <el-form-item label="学位所学专业" prop="majorAcademy">
          <el-select v-model="form.majorAcademy" placeholder="请选择学位所学专业">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="熟悉程度" prop="degree">
          <el-input v-model="form.degree" placeholder="请输入熟悉程度" />
        </el-form-item>
        <el-form-item label="主要行业领域" prop="mainIndustry">
          <el-select v-model="form.mainIndustry" placeholder="请选择主要行业领域">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="其他行业领域" prop="elseIndustry">
          <el-select v-model="form.elseIndustry" placeholder="请选择其他行业领域">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="研究或工作内容">
          <editor v-model="form.workContent" :min-height="192"/>
        </el-form-item>
        <el-form-item label="主要业绩及贡献" prop="mainContribution">
          <el-input v-model="form.mainContribution" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="奖惩情况" prop="rewardsPunishment">
          <el-input v-model="form.rewardsPunishment" placeholder="请输入奖惩情况" />
        </el-form-item>
        <el-form-item label="参与评审需回避单位" prop="avoidCompany">
          <el-input v-model="form.avoidCompany" placeholder="请输入参与评审需回避单位" />
        </el-form-item>
        <el-form-item label="成果或专利" prop="resultsOrPatents">
          <el-input v-model="form.resultsOrPatents" placeholder="请输入成果或专利" />
        </el-form-item>
        <el-form-item label="荣誉或头衔" prop="honorsOrTitles">
          <el-input v-model="form.honorsOrTitles" placeholder="请输入荣誉或头衔" />
        </el-form-item>
        <el-form-item label="简历地址" prop="resumeSite">
          <el-input v-model="form.resumeSite" placeholder="请输入简历地址" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { listUser, getUser, delUser, addUser, updateUser, exportUser } from "@/api/declare/user";
  import Editor from '@/components/Editor';

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
        // 性别(1:男2:女)字典
        userSexOptions: [],
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
          resumeSite: null
    },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
    },
    created() {
      this.getList();
      this.getDicts("sys_user_sex").then(response => {
        this.userSexOptions = response.data;
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
          resumeSite: null
      };
        this.resetForm("form");
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.queryParams.pageNum = 1;
        this.getList();
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
