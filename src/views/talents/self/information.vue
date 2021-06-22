<template>
  <div class="app-container">
    <div>
      <p style="text-align: center;font-weight: bold; font-size: 25px">专家申报信息</p>
    </div>
    <div id="div_two" style="border: 1px solid black;width: 80%;margin:0 auto">
      <el-form ref="form" :data="userList" :model="form" :rules="rules" label-width="80px">
        <!--基本信息-->
        <div>
          <div id="div_two_2">
            <span>1.基本信息</span>
          </div>
          <el-container >
            <el-main >
              <!--专家姓名-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="专家姓名:" prop="userName">
                    {{this.queryParams.userName}}
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="身份证号:" prop="userIdNumber">
                    {{this.queryParams.userIdNumber}}
                  </el-form-item>
                </el-col>
              </el-row>
              <!--出生日期-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="出生日期:" prop="birthDate">
                    {{queryParams.birthDate}}
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="年龄:" prop="age">
                    {{queryParams.age}}
                  </el-form-item>
                </el-col>
              </el-row>
              <!--手机号码-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="手机号码:" prop="phoneNumber">
                    {{queryParams.phoneNumber}}
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="邮箱地址:" prop="email">
                    {{queryParams.email}}
                  </el-form-item>
                </el-col>
              </el-row>
              <!--办公电话-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="办公电话:" prop="officePhone">
                    {{queryParams.officePhone}}
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="家庭电话:" prop="homeTelephone">
                    {{queryParams.homeTelephone}}
                  </el-form-item>
                </el-col>
              </el-row>
              <!--性别-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="性别:" prop="userSex">
                    {{queryParams.userSex}}
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="国籍:" prop="nationality">
                    {{queryParams.nationality}}
                  </el-form-item>
                </el-col>
              </el-row>
              <!--民族-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="民族:" prop="nation">
                    {{queryParams.nation}}
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="邮政编码:" prop="postalCode">
                    {{queryParams.postalCode}}
                  </el-form-item>
                </el-col>
              </el-row>
              <!--政治面貌-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="政治面貌:" prop="politicsStatus">
                    {{queryParams.politicsStatus}}
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="职称:" prop="professional">
                    {{queryParams.professional}}
                  </el-form-item>
                </el-col>
              </el-row>
              <!--居住地区-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="居住地区:" prop="dwellRegion">
                    {{queryParams.dwellRegion}}
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="居住地址:" prop="dwellSite">
                    {{queryParams.dwellSite}}
                  </el-form-item>
                </el-col>
              </el-row>
              <!--专业类别-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="专业类别:" prop="specialtyType">
                    {{queryParams.specialtyType}}
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="工作性质:" prop="jobNature">
                    {{queryParams.jobNature}}
                  </el-form-item>
                </el-col>
              </el-row>
            </el-main>
            <!--头像-->
            <div style="width: 20%; padding-top: 100px;">
              <el-avatar :src="queryParams.portrait" shape="square" :size="200" :fit="scale-down"></el-avatar>
              <!--<imageUpload v-model="form.portrait"/>-->
            </div>
          </el-container>
        </div>
        <!--工作单位-->
        <div>
          <div id="div_two_3">
            <span>2.工作单位</span>
          </div>
          <!--单位名称-->
          <el-row>
            <el-col :span="10">
              <el-form-item label="单位名称" prop="companyName">
                <el-input v-model="form.companyName" placeholder="请输入单位名称" />
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="单位类型" prop="companyType">
                <el-select v-model="form.companyType" placeholder="请选择单位类型" style="width: 100%">
                  <el-option
                    v-for="dict in companyTypeOptions"
                    :key="dict.dictValue"
                    :label="dict.dictLabel"
                    :value="dict.dictValue"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!--单位地区-->
          <el-row>
            <el-col :span="10">
              <el-form-item label="单位地区" prop="companyRegion">
                <el-select v-model="form.companyRegion" placeholder="请选择单位地区" style="width: 100%">
                  <el-option
                    v-for="dict in companyRegionOptions"
                    :key="dict.dictValue"
                    :label="dict.dictLabel"
                    :value="dict.dictValue"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="11" :offset="1">
              <el-form-item label="统一社会信用代码" prop="creditCode" label-width="25%">
                <el-input v-model="form.creditCode" placeholder="请输入统一社会信用代码" />
              </el-form-item>
            </el-col>
          </el-row>
          <!--二级部门-->
          <el-row>
            <el-col :span="10">
              <el-form-item label="二级部门" prop="secondLevelDepartment">
                <el-input v-model="form.secondLevelDepartment" placeholder="请输入二级部门" />
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="职务" prop="position">
                <el-input v-model="form.position" placeholder="请输入职务" />
              </el-form-item>
            </el-col>
          </el-row>
          <!--单位地址-->
          <el-row>
            <el-col :span="22">
              <el-form-item label="单位地址" prop="companySite">
                <el-input v-model="form.companySite" placeholder="请输入单位地址" />
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <!--学历学位-->
        <div>
          <div>
            <div id="div_two_4">
              <span>3.学历学位</span>
            </div>
          </div>
          <!--最高学历-->
          <el-row>
            <el-col :span="6">
              <el-form-item label="最高学历" prop="highestEducation">
                <el-select v-model="form.highestEducation" placeholder="请选择最高学历" style="width: 100%">
                  <el-option
                    v-for="dict in highestEducationOptions"
                    :key="dict.dictValue"
                    :label="dict.dictLabel"
                    :value="dict.dictValue"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="2">
              <el-form-item label="毕业院校" prop="graduateAcademy">
                <el-input v-model="form.graduateAcademy" placeholder="请输入毕业院校" />
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="2">
              <el-form-item label="所学专业" prop="major">
                <el-select v-model="form.major" placeholder="请选择所学专业" style="width: 100%">
                  <el-option label="请选择字典生成" value="" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!--最高学位-->
          <el-row>
            <el-col :span="6">
              <el-form-item label="最高学位" prop="highestDegree">
                <el-select v-model="form.highestDegree" placeholder="请选择最高学位" style="width: 100%">
                  <el-option
                    v-for="dict in highestDegreeOptions"
                    :key="dict.dictValue"
                    :label="dict.dictLabel"
                    :value="dict.dictValue"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="2">
              <el-form-item label="授予院校" prop="awardAcademy">
                <el-input v-model="form.awardAcademy" placeholder="请输入授予院校" />
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="2">
              <el-form-item label="所学专业" prop="majorAcademy">
                <el-select v-model="form.majorAcademy" placeholder="请输入所学专业" style="width: 100%">
                  <el-option label="请选择字典生成" value="" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!--是否博士生导师-->
          <el-row>
            <el-col :span="10">
              <el-form-item label="是否博士生导师" prop="isDoctoralSupervisor" label-width="120px">
                <el-select v-model="form.isDoctoralSupervisor" placeholder="请选择是否博士生导师" style="width: 100%">
                  <el-option key="是" lable="是" value="是"></el-option>
                  <el-option key="否" lable="否" value="否"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="是否两院院士" prop="isAcademician" label-width="120px">
                <el-select v-model="form.isAcademician" placeholder="请选择是否两院院士" style=" width: 100%">
                  <el-option key="是" lable="是" value="是"></el-option>
                  <el-option key="否" lable="否" value="否"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!--熟悉外语语种-->
          <el-row>
            <el-col :span="10">
              <el-form-item label="熟悉外语语种" prop="language" label-width="120px">
                <el-input v-model="form.language" placeholder="可填写多个，填写多个用“/”隔开" />
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="熟悉程度" prop="degree" label-width="120px">
                <el-input v-model="form.degree" placeholder="填写内容为“精通、熟悉、一般、了解”，多个用“/”分开，与外语对应" />
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <!--入库标准-->
        <div id="div_two_5">
          <span>4.入库标准</span>
        </div>
        <div id="div_two_5_2">
          <el-form-item label="入库标准" prop="standard" v-model="form.standard">
            <el-checkbox label="作为负责人承担过中央财政支持的科技计划（专项、基金）项目（课题）或国家科技奖励获得者"></el-checkbox>
            <br/><el-checkbox label="知识产权法、民商法等相关领域，具有副高级以上职称的专家或律师事务所合伙人"></el-checkbox>
            <br/><el-checkbox label="在科技型上市公司、国家高新技术企业、国家级高新区、科技园区和各类创业服务机构、行业协会学会担任高级管理职务或技术骨干"></el-checkbox>
            <br/><el-checkbox label="在高等学校和科研院所工作具有副高级及以上职称，在相关领域工作五年以上"></el-checkbox>
            <br/><el-checkbox label="在法律、财务、审计、金融等领域具有执业资格的专业人员"></el-checkbox>
            <br/><el-checkbox label="天使投资或创业投资机构的高级管理人员、创始合伙人，资本市场、银行信贷及保险等机构的高级管理人员"></el-checkbox>
            <br/><el-checkbox label="在主要国际学术组织中任中高级职务，或参与国际标准制修订"></el-checkbox>
            <br/><el-checkbox label="其他"></el-checkbox>
          </el-form-item>
        </div>
        <!--参与评审/公共服务经历-->
        <div id="div_two_6">
          <span>5.参与评审/公共服务经历</span>
        </div>
        <div id="div_two_6_2">
          <el-form-item label="">
            <el-checkbox-group v-model="queryParams.reviewExperience">
              <el-checkbox
                v-for="dict in reviewExperienceOptions"
                :key="dict.dictValue"
                :label="dict.dictValue">
                {{dict.dictLabel}}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
        <!--行业及工作领域-->
        <div>
          <div id="div_two_10">
            <span>9.行业及工作领域</span>
          </div>
          <!--主要行业领域-->
          <el-row>
            <el-col :span="11">
              <el-form-item label="主要行业领域" prop="mainIndustry" label-width="140px">
                <el-select v-model="form.mainIndustry" placeholder="请选择主要行业领域" style="width: 100%">
                  <el-option
                    v-for="dict in mainIndustryOptions"
                    :key="dict.dictValue"
                    :label="dict.dictLabel"
                    :value="dict.dictValue"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-form-item label="其他行业领域" prop="elseIndustry" label-width="140px">
                <el-select v-model="form.elseIndustry" placeholder="请选择其他行业领域" style="width: 100%">
                  <el-option
                    v-for="dict in elseIndustryOptions"
                    :key="dict.dictValue"
                    :label="dict.dictLabel"
                    :value="dict.dictValue"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!--基金学科-->
          <el-row>
            <el-col :span="11">
              <el-form-item label="基金学科" prop="fundSubject" label-width="140px">
                <el-select v-model="form.fundSubject" placeholder="请选择基金学科" style="width: 100%">
                  <el-option label="请选择字典生成" value="" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-form-item label="国际学科" prop="internationalDiscipline" label-width="140px">
                <el-select v-model="form.internationalDiscipline" placeholder="请选择国际学科" style="width: 100%">
                  <el-option label="请选择字典生成" value="" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!--教育学科-->
          <el-row>
            <el-col :span="11">
              <el-form-item label="教育学科" prop="educationSubject" label-width="140px">
                <el-select v-model="form.educationSubject" placeholder="请选择教育学科" style="width: 100%">
                  <el-option label="请选择字典生成" value="" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-form-item label="工业行业" prop="industries" label-width="140px">
                <el-select v-model="form.industries" placeholder="请选择工业行业" style="width: 100%">
                  <el-option label="请选择字典生成" value="" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!--研究方向或关键词-->
          <el-row>
            <el-col :span="24">
              <el-form-item label="研究方向或关键词" prop="researchDirection" label-width="140px">
                <el-input v-model="form.researchDirection" type="textarea" placeholder="请输入研究方向或关键词" autosize />
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="研究或工作内容" label-width="140px">
            <el-input v-model="form.workContent" type="textarea" placeholder="请输入研究或工作内容" autosize />
          </el-form-item>
          <el-form-item label="主要业绩及贡献" prop="mainContribution" label-width="140px">
            <el-input v-model="form.mainContribution" type="textarea" placeholder="请输入主要业绩及贡献" autosize />
          </el-form-item>
          <el-form-item label="奖惩情况" prop="rewardsPunishment" label-width="140px">
            <el-input v-model="form.rewardsPunishment" type="textarea" placeholder="请输入奖惩情况" autosize />
          </el-form-item>
          <el-form-item label="参与评审需回避单位" prop="avoidCompany" label-width="140px">
            <el-input v-model="form.avoidCompany" placeholder="请输入单位名称，输入多个则用“；”号进行隔开" />
          </el-form-item>
        </div>
        <!--成果专利&荣誉头衔-->
        <div>
          <div id="div_two_11">
          <span>10.成果专利&荣誉头衔</span>
        </div>
          <el-form-item label="成果或专利" prop="resultsOrPatents" label-width="100px">
            <el-input v-model="form.resultsOrPatents" placeholder="请输入成果或专利" type="textarea" autosize/>
          </el-form-item>
          <el-form-item label="荣誉或头衔" prop="honorsOrTitles" label-width="100px">
            <el-input v-model="form.honorsOrTitles" placeholder="请输入荣誉或头衔" type="textarea" autosize />
          </el-form-item>
        </div>
        <!--附件-->
        <div>
          <div id="div_two_12">
          <span>11.附件</span>
        </div>
          <div>
            <el-form-item label="成果或专利" prop="resultsOrPatents" label-width="100px">
              <el-input v-model="form.resultsOrPatents" placeholder="请输入成果或专利" type="textarea" autosize/>
            </el-form-item>
            <el-form-item label="荣誉或头衔" prop="honorsOrTitles" label-width="100px">
              <el-input v-model="form.honorsOrTitles" placeholder="请输入荣誉或头衔" type="textarea" autosize />
            </el-form-item>
          </div>
        </div>
        <!--提交-->
        <div class="dialog-footer" style="text-align: center">
          <el-button type="info">上一步</el-button>
          <el-button type="primary">暂 存</el-button>
          <el-button type="primary" @click="submitForm">提 交</el-button>
          <!--<el-button @click="cancel">取 消</el-button>-->
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getNowInfo,listUser } from "@/api/declare/user";
import ImageUpload from '@/components/ImageUpload';
import Editor from '@/components/Editor';
import '../../css/专家申报/styles_information.css';
import ElButton from "element-ui/packages/button/src/button";

export default {
  name: "User",
  components: {
    ElButton,
    ImageUpload,
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
      // 证件类型字典
      idNumberTypeOptions: [],
      // 性别(1:男2:女)字典
      userSexOptions: [],
      // 国籍字典
      nationalityOptions: [],
      // 民族字典
      nationOptions: [],
      // 政治面貌字典
      politicsStatusOptions: [],
      // 职称字典
      professionalOptions: [],
      // 居住地区字典
      dwellRegionOptions: [],
      // 专业类别字典
      specialtyTypeOptions: [],
      // 工作性质字典
      jobNatureOptions: [],
      // 单位类型字典
      companyTypeOptions: [],
      // 单位地区字典
      companyRegionOptions: [],
      // 最高学历字典
      highestEducationOptions: [],
      // 最高学位字典
      highestDegreeOptions: [],
      // 主要行业领域字典
      mainIndustryOptions: [],
      // 其他行业领域字典
      elseIndustryOptions: [],
      // 参与评审/公共服务经历
      reviewExperienceOptions: [],
      radio: '2',
      isDisabled: true,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userId: null,
        userName: null,
        portrait: null,
        password: null,
        idNumberType: null,
        userIdNumber: null,
        birthDate: null,
        age: null,
        phoneNumber: null,
        email: null,
        officePhone: null,
        homeTelephone: null,
        userSex: null,
        nationality: null,
        nation: null,
        postalCode: null,
        politicsStatus: null,
        professional: null,
        dwellRegion: null,
        dwellSite: null,
        specialtyType: null,
        jobNature: null,
        companyName: null,
        companyType: null,
        companyRegion: null,
        creditCode: null,
        secondLevelDepartment: null,
        position: null,
        companySite: null,
        highestEducation: null,
        graduateAcademy: null,
        major: null,
        highestDegree: null,
        awardAcademy: null,
        majorAcademy: null,
        isAcademician: null,
        isDoctoralSupervisor: null,
        language: null,
        degree: null,
        standard: [],
        reviewExperience: [],
        mainIndustry: null,
        elseIndustry: null,
        fundSubject: null,
        internationalDiscipline: null,
        educationSubject: null,
        industries: null,
        researchDirection: null,
        workContent: null,
        mainContribution: null,
        rewardsPunishment: null,
        avoidCompany: null,
        resultsOrPatents: null,
        honorsOrTitles: null,
        resumeSite: null,
        status: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getNow();
    this.getList();
    this.getDicts("id_number_type").then(response => {
      this.idNumberTypeOptions = response.data;
    });
    this.getDicts("sys_user_sex").then(response => {
      this.userSexOptions = response.data;
    });
    this.getDicts("nationality").then(response => {
      this.nationalityOptions = response.data;
    });
    this.getDicts("nation").then(response => {
      this.nationOptions = response.data;
    });
    this.getDicts("politics_status").then(response => {
      this.politicsStatusOptions = response.data;
    });
    this.getDicts("professional").then(response => {
      this.professionalOptions = response.data;
    });
    this.getDicts("dwell_region").then(response => {
      this.dwellRegionOptions = response.data;
    });
    this.getDicts("specialty_type").then(response => {
      this.specialtyTypeOptions = response.data;
    });
    this.getDicts("job_nature").then(response => {
      this.jobNatureOptions = response.data;
    });
    this.getDicts("company_type").then(response => {
      this.companyTypeOptions = response.data;
    });
    this.getDicts("company_region").then(response => {
      this.companyRegionOptions = response.data;
    });
    this.getDicts("highest_education").then(response => {
      this.highestEducationOptions = response.data;
    });
    this.getDicts("highest_degree").then(response => {
      this.highestDegreeOptions = response.data;
    });
    this.getDicts("main_industry").then(response => {
      this.mainIndustryOptions = response.data;
    });
    this.getDicts("main_industry").then(response => {
      this.elseIndustryOptions = response.data;
    });
    this.getDicts("review_experience").then(response => {
      this.reviewExperienceOptions = response.data;
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
    /**接收传递的参数，赋值给queryParams*/
    getNow() {
      this.loading = true;
        getNowInfo().then(response => {
          this.queryParams=response.data;
      });
    },
    // 证件类型字典翻译
    idNumberTypeFormat(row, column) {
      return this.selectDictLabel(this.idNumberTypeOptions, row.idNumberType);
    },
    // 性别(1:男2:女)字典翻译
    userSexFormat(row, column) {
      return this.selectDictLabel(this.userSexOptions, row.userSex);
    },
    // 国籍字典翻译
    nationalityFormat(row, column) {
      return this.selectDictLabel(this.nationalityOptions, row.nationality);
    },
    // 民族字典翻译
    nationFormat(row, column) {
      return this.selectDictLabel(this.nationOptions, row.nation);
    },
    // 政治面貌字典翻译
    politicsStatusFormat(row, column) {
      return this.selectDictLabel(this.politicsStatusOptions, row.politicsStatus);
    },
    // 职称字典翻译
    professionalFormat(row, column) {
      return this.selectDictLabel(this.professionalOptions, row.professional);
    },
    // 居住地区字典翻译
    dwellRegionFormat(row, column) {
      return this.selectDictLabel(this.dwellRegionOptions, row.dwellRegion);
    },
    // 专业类别字典翻译
    specialtyTypeFormat(row, column) {
      return this.selectDictLabel(this.specialtyTypeOptions, row.specialtyType);
    },
    // 工作性质字典翻译
    jobNatureFormat(row, column) {
      return this.selectDictLabel(this.jobNatureOptions, row.jobNature);
    },
    // 单位类型字典翻译
    companyTypeFormat(row, column) {
      return this.selectDictLabel(this.companyTypeOptions, row.companyType);
    },
    // 单位地区字典翻译
    companyRegionFormat(row, column) {
      return this.selectDictLabel(this.companyRegionOptions, row.companyRegion);
    },
    // 最高学历字典翻译
    highestEducationFormat(row, column) {
      return this.selectDictLabel(this.highestEducationOptions, row.highestEducation);
    },
    // 最高学位字典翻译
    highestDegreeFormat(row, column) {
      return this.selectDictLabel(this.highestDegreeOptions, row.highestDegree);
    },
    // 主要行业领域字典翻译
    mainIndustryFormat(row, column) {
      return this.selectDictLabel(this.mainIndustryOptions, row.mainIndustry);
    },
    // 其他行业领域字典翻译
    elseIndustryFormat(row, column) {
      return this.selectDictLabel(this.elseIndustryOptions, row.elseIndustry);
    },
    // 参与评审/公共服务经历
    reviewExperienceFormat(row, column) {
      return this.selectDictLabels(this.reviewExperienceOptions, row.reviewExperience);
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
        userId: null,
        userName: null,
        portrait: null,
        password: null,
        idNumberType: null,
        userIdNumber: null,
        birthDate: null,
        age: null,
        phoneNumber: null,
        email: null,
        officePhone: null,
        homeTelephone: null,
        userSex: null,
        nationality: null,
        nation: null,
        postalCode: null,
        politicsStatus: null,
        professional: null,
        dwellRegion: null,
        dwellSite: null,
        specialtyType: null,
        jobNature: null,
        companyName: null,
        companyType: null,
        companyRegion: null,
        creditCode: null,
        secondLevelDepartment: null,
        position: null,
        companySite: null,
        highestEducation: null,
        graduateAcademy: null,
        major: null,
        highestDegree: null,
        awardAcademy: null,
        majorAcademy: null,
        isAcademician: null,
        isDoctoralSupervisor: null,
        language: null,
        degree: null,
        standard: [],
        reviewExperience: [],
        mainIndustry: null,
        elseIndustry: null,
        fundSubject: null,
        internationalDiscipline: null,
        educationSubject: null,
        industries: null,
        researchDirection: null,
        workContent: null,
        mainContribution: null,
        rewardsPunishment: null,
        avoidCompany: null,
        resultsOrPatents: null,
        honorsOrTitles: null,
        resumeSite: null,
        createTime: null,
        updateTime: null,
        status: "0"
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
