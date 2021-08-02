<template>
  <div class="app-container">
    <!--第一页 inline none-->
    <div id="div_one" style="display: inline">
      <div id="div_1">
        <p id="text_1" style="display: none"><span>您好，您暂未进行专家申报</span></p>
        <p id="text_2" style="display: none"><span>您的审核已通过</span></p>
        <p id="text_3" style="display: none"><span>您的审核未通过</span></p>
        <p id="text_4" style="display: none"><span>您已被移除出人才专家库</span></p>
        <img
          id="img_2"
          src="../../../assets/images/专家申报/test1.png"
          alt=""
          style="width: 100%"
        />
        <p id="text3"><span>申报指南</span></p>
        <img
          id="img_4"
          src="../../../assets/images/专家申报/u187.svg"
          alt=""
          style="width: 100%"
        />
      </div>
      <div id="div_5">
        <p>
          <span
          >您好！欢迎您使用深圳市人才评审专家库信息管理平台。深圳市人才评审专家库信息管理平台用于深圳市工业和信息化局登记收录相关领域专家人才，以便进行人才专家登记和后续项目评审专家储备所用。您可根据自愿原则自行登记申报，我们将对您的信息进行严格保密。感谢您对深圳市工业和信息化局人才专家收录工作的支持，希望您对深圳市工业和信息化局人才专家收录工作多提宝贵意见！</span
          >
        </p>
        <p>
          <span>
            为便于您了解和使用本平台，完成专家申报工作，请仔细阅读申报指南：</span
          >
        </p>
        <p><span style="font-weight: bold">一、推荐专家条件</span></p>
        <p>
          <span
          >1.政治站位高，客观公正、廉洁自律，具有良好的职业道德和理论素养。</span
          >
        </p>
        <p>
          <span
          >2.在新一代信息技术、生物技术、新能源、新材料、高端装备、新能源汽车、绿色环保、航空航天、海洋装备以及互联网、大数据、人工智能等领域具有丰富的研究或管理经验，在业界具有较高的知名度，一般应具备正高级专业技术职务，或在本行业领域从事相关工作10年以上。</span
          >
        </p>
        <p>
          <span
          >3.主要来自高校、科研院所、知名企业的技术部门或人力资源部门。</span
          >
        </p>
        <p>
          <span
          >4.身体健康，年龄不超过65岁，具备完成评审工作任务的身体条件。</span
          >
        </p>
        <p>
          <span
          >5.以往参加评审评估、咨询论证等活动中无不良信用记录。没有违纪违法等不良记录。</span
          >
        </p>
        <p><span style="font-weight: bold"> 二、申报流程</span></p>
        <p><span>1.选择专家申报</span></p>
        <p>
          <span
          >选择专家申报，阅读申报指南，点击接受后，即可进行专家申报。</span
          >
        </p>
        <p><span>2.填写申报信息</span></p>
        <p>
          <span
          >进入填报信息页面后，按页面要求完成信息填报，点击提交后，即完成申报信息提交。</span
          >
        </p>
        <p><span>3.等待审核</span></p>
        <p><span>申报提交后，即等待工作人员审核。</span></p>
        <p><span>4.审核结果查看</span></p>
        <p>
          <span
          >工作人员审核后，可在“申报进度查看”页面查看审核结果及相关反馈信息。</span
          >
        </p>
        <p><span>5.信息更新</span></p>
        <p>
          <span
          >如您的信息有更新，可在“专家申报”页面进行更新。其流程与初次申报一致：阅读申报指南-信息更新-提交申报-等待审核-审核结果查看。</span
          >
        </p>
        <p><span>6.特别提示</span></p>
        <p>
          <span
          >当您的专家申报通过后，如后续不符合推荐专家条件，工作人员将会把您从人才专家库移除，届时您可从本平台查看到相关通知和信息。同时，您可咨询深圳市工业和信息化局，并可再进行专家申报。</span
          >
        </p>
        <p><span style="font-weight: bold"> 三、特别声明</span></p>
        <p>
          <span
          >1.本平台主要为收录人才专家所用，不代表进入人才专家库后就一定可参与后续深圳市工业和信息化局相关项目的专家评审工作。</span
          >
        </p>
        <p>
          <span
          >2.申报人需保证所申报信息的真实性。如恶意进行虚假申报，造成严重后果的，深圳市工业和信息化局将保留追究申报人的权利，包括且不限于责任追究、黑名单处理、民事诉讼等。</span
          >
        </p>
        <p>
          <span>3.如您对专家申报有疑问，请联系相关业务人员和技术人员：</span>
        </p>
        <p><span>深圳市工业和信息化局联系人 张三 XXXXXXXXX</span></p>
        <p>
          <span>深圳市人才评审专家库信息管理平台技术支持 李四 XXXXXXXX</span>
        </p>
      </div>
      <div id="div_6">
        <el-radio-group v-model="radio" v-on:change="changeHandler">
          <el-radio label="1">接受</el-radio>
          <el-radio label="2">不接受</el-radio>
        </el-radio-group>
      </div>
      <div id="div_7">
        <br />
        <el-button type="primary" v-on:click="dianji" :disabled="isDisabled"
        >下一步</el-button
        >
      </div>
    </div>
    <!--第二页-->
    <div id="div_two" style="display: none">
      <div id="div_two_1">
        <img
          src="../../../assets/images/专家申报/test2.png"
          alt=""
          style="width: 100%"
        />
      </div>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <!--基本信息-->
        <div>
          <div id="div_two_2">
            <span>1.基本信息</span>
          </div>
          <el-container>
            <el-main>
              <!--专家姓名-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="专家姓名" prop="userName">
                    <el-input
                      v-model="form.userName"
                      placeholder="请输专家姓名"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="6" :offset="2">
                  <el-form-item label="证件类型" prop="idNumberType">
                    <el-select
                      v-model="form.idNumberType"
                      placeholder="请选择证件类型"
                    >
                      <el-option
                        v-for="dict in idNumberTypeOptions"
                        :key="dict.dictValue"
                        :label="dict.dictLabel"
                        :value="dict.dictValue"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-input
                    v-model="form.userIdNumber"
                    placeholder="请输入身份证号"
                  />
                </el-col>
              </el-row>
              <!--出生日期-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="出生日期" prop="birthDate">
                    <el-date-picker
                      clearable
                      size="medium"
                      v-model="form.birthDate"
                      type="date"
                      value-format="yyyy-MM-dd"
                      placeholder="选择出生日期"
                      style="width: 100%"
                    >
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="年龄" prop="age">
                    <el-input v-model="form.age" placeholder="请输入年龄" />
                  </el-form-item>
                </el-col>
              </el-row>
              <!--手机号码-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="手机号码" prop="phoneNumber">
                    <el-input
                      v-model="form.phoneNumber"
                      placeholder="请输入手机号码"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="邮箱地址" prop="email">
                    <el-input
                      v-model="form.email"
                      placeholder="请输入邮箱地址"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <!--办公电话-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="办公电话" prop="officePhone">
                    <el-input
                      v-model="form.officePhone"
                      placeholder="请输入办公电话"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="家庭电话" prop="homeTelephone">
                    <el-input
                      v-model="form.homeTelephone"
                      placeholder="请输入家庭电话"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <!--性别-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="性别" prop="userSex">
                    <el-select
                      v-model="form.userSex"
                      placeholder="请选择性别"
                      style="width: 100%"
                    >
                      <el-option
                        v-for="dict in userSexOptions"
                        :key="dict.dictValue"
                        :label="dict.dictLabel"
                        :value="dict.dictValue"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="国籍" prop="nationality">
                    <el-select
                      v-model="form.nationality"
                      placeholder="请选择国籍"
                      style="width: 100%"
                    >
                      <el-option
                        v-for="dict in nationalityOptions"
                        :key="dict.dictValue"
                        :label="dict.dictLabel"
                        :value="dict.dictValue"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <!--民族-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="民族" prop="nation">
                    <el-select
                      v-model="form.nation"
                      placeholder="请选择民族"
                      style="width: 100%"
                    >
                      <el-option
                        v-for="dict in nationOptions"
                        :key="dict.dictValue"
                        :label="dict.dictLabel"
                        :value="dict.dictValue"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="邮政编码" prop="postalCode">
                    <el-input
                      v-model="form.postalCode"
                      placeholder="请输入邮政编码"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <!--政治面貌-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="政治面貌" prop="politicsStatus">
                    <el-select
                      v-model="form.politicsStatus"
                      placeholder="请选择政治面貌"
                      style="width: 100%"
                    >
                      <el-option
                        v-for="dict in politicsStatusOptions"
                        :key="dict.dictValue"
                        :label="dict.dictLabel"
                        :value="dict.dictValue"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="职称" prop="professional">
                    <el-select
                      v-model="form.professional"
                      placeholder="请选择职称"
                      style="width: 100%"
                    >
                      <el-option
                        v-for="dict in professionalOptions"
                        :key="dict.dictValue"
                        :label="dict.dictLabel"
                        :value="dict.dictValue"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <!--居住地区-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="居住地区" prop="dwellRegion">
                    <el-select
                      v-model="form.dwellRegion"
                      placeholder="请选择居住地区"
                      style="width: 100%"
                    >
                      <el-option
                        v-for="dict in dwellRegionOptions"
                        :key="dict.dictValue"
                        :label="dict.dictLabel"
                        :value="dict.dictValue"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="居住地址" prop="dwellSite">
                    <el-input
                      v-model="form.dwellSite"
                      placeholder="请输入居住地址"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <!--专业类别-->
              <el-row>
                <el-col :span="10">
                  <el-form-item label="专业类别" prop="specialtyType">
                    <el-select
                      v-model="form.specialtyType"
                      placeholder="请选择专业类别"
                      style="width: 100%"
                    >
                      <el-option
                        v-for="dict in specialtyTypeOptions"
                        :key="dict.dictValue"
                        :label="dict.dictLabel"
                        :value="dict.dictValue"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="10" :offset="2">
                  <el-form-item label="工作性质" prop="jobNature">
                    <el-select
                      v-model="form.jobNature"
                      placeholder="请选择工作性质"
                      style="width: 100%"
                    >
                      <el-option
                        v-for="dict in jobNatureOptions"
                        :key="dict.dictValue"
                        :label="dict.dictLabel"
                        :value="dict.dictValue"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-main>
            <!--头像-->
            <div style="width: 20%">
              <p style="text-align: left"><span>头像上传</span></p>
              <imageUpload v-model="form.portrait" />
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
                <el-input
                  v-model="form.companyName"
                  placeholder="请输入单位名称"
                />
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="单位类型" prop="companyType">
                <el-select
                  v-model="form.companyType"
                  placeholder="请选择单位类型"
                  style="width: 100%"
                >
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
                <el-select
                  v-model="form.companyRegion"
                  placeholder="请选择单位地区"
                  style="width: 100%"
                >
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
              <el-form-item
                label="统一社会信用代码"
                prop="creditCode"
                label-width="25%"
              >
                <el-input
                  v-model="form.creditCode"
                  placeholder="请输入统一社会信用代码"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <!--二级部门-->
          <el-row>
            <el-col :span="10">
              <el-form-item label="二级部门" prop="secondLevelDepartment">
                <el-input
                  v-model="form.secondLevelDepartment"
                  placeholder="请输入二级部门"
                />
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
                <el-input
                  v-model="form.companySite"
                  placeholder="请输入单位地址"
                />
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
                <el-select
                  v-model="form.highestEducation"
                  placeholder="请选择最高学历"
                  style="width: 100%"
                >
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
                <el-input
                  v-model="form.graduateAcademy"
                  placeholder="请输入毕业院校"
                />
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="2">
              <el-form-item label="所学专业" prop="major">
                <el-select
                  v-model="form.major"
                  placeholder="请选择所学专业"
                  style="width: 100%"
                >
                  <el-option label="请选择字典生成" value="" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!--最高学位-->
          <el-row>
            <el-col :span="6">
              <el-form-item label="最高学位" prop="highestDegree">
                <el-select
                  v-model="form.highestDegree"
                  placeholder="请选择最高学位"
                  style="width: 100%"
                >
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
                <el-input
                  v-model="form.awardAcademy"
                  placeholder="请输入授予院校"
                />
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="2">
              <el-form-item label="所学专业" prop="majorAcademy">
                <el-select
                  v-model="form.majorAcademy"
                  placeholder="请输入所学专业"
                  style="width: 100%"
                >
                  <el-option label="请选择字典生成" value="" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!--是否博士生导师-->
          <el-row>
            <el-col :span="10">
              <el-form-item
                label="是否博士生导师"
                prop="isDoctoralSupervisor"
                label-width="120px"
              >
                <el-select
                  v-model="form.isDoctoralSupervisor"
                  placeholder="请选择是否博士生导师"
                  style="width: 100%"
                >
                  <el-option key="是" lable="是" value="是"></el-option>
                  <el-option key="否" lable="否" value="否"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item
                label="是否两院院士"
                prop="isAcademician"
                label-width="120px"
              >
                <el-select
                  v-model="form.isAcademician"
                  placeholder="请选择是否两院院士"
                  style="width: 100%"
                >
                  <el-option key="是" lable="是" value="是"></el-option>
                  <el-option key="否" lable="否" value="否"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!--熟悉外语语种-->
          <el-row>
            <el-col :span="10">
              <el-form-item
                label="熟悉外语语种"
                prop="language"
                label-width="120px"
              >
                <el-input
                  v-model="form.language"
                  placeholder="可填写多个，填写多个用“/”隔开"
                />
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="熟悉程度" prop="degree" label-width="120px">
                <el-input
                  v-model="form.degree"
                  placeholder="填写内容为“精通、熟悉、一般、了解”，多个用“/”分开，与外语对应"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <!--入库标准-->
        <div id="div_two_5">
          <span>4.入库标准</span>
        </div>
        <!--style="font-weight: normal; padding-top: 10px"-->
        <div id="div_two_5_2">
          <el-form-item label="">
            <el-checkbox-group v-model="queryParams.standard">
              <el-checkbox
                label="作为负责人承担过中央财政支持的科技计划（专项、基金）项目（课题）或国家科技奖励获得者"
              ></el-checkbox>
              <br /><el-checkbox
              label="知识产权法、民商法等相关领域，具有副高级以上职称的专家或律师事务所合伙人"
            ></el-checkbox>
              <br /><el-checkbox
              label="在科技型上市公司、国家高新技术企业、国家级高新区、科技园区和各类创业服务机构、行业协会学会担任高级管理职务或技术骨干"
            ></el-checkbox>
              <br /><el-checkbox
              label="在高等学校和科研院所工作具有副高级及以上职称，在相关领域工作五年以上"
            ></el-checkbox>
              <br /><el-checkbox
              label="在法律、财务、审计、金融等领域具有执业资格的专业人员"
            ></el-checkbox>
              <br /><el-checkbox
              label="天使投资或创业投资机构的高级管理人员、创始合伙人，资本市场、银行信贷及保险等机构的高级管理人员"
            ></el-checkbox>
              <br /><el-checkbox
              label="在主要国际学术组织中任中高级职务，或参与国际标准制修订"
            ></el-checkbox>
              <br /><el-checkbox
              label="其他"
              style="font-weight: normal"
            ></el-checkbox>
            </el-checkbox-group>
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
                :label="dict.dictValue"
                class="el-checkbox-width"
              >
                {{ dict.dictLabel }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </div>
        <!--参与评审/公共服务经历-->
        <div id="div_two_7">
          <span>6.工作经历</span>
        </div>
        <span>从最近的工作经历开始倒序填写</span>
        <div id="div_two_7_2">
          <div style="margin:20px;">
            <el-form
              :model="formData3"
              label-width="80px"
              ref="formData3"
              class="dataForm workForm"
            >
              <el-row
                v-for="(item, index) in formData3.powerAttrList"
                :key="index"
                style="border-bottom: 1px solid #f0f0f0; padding: 10px; margin-bottom:20px;"
              >
                <el-col :span="10" class="chunMent">
                  <el-form-item
                    label="单位名称"
                    :prop="'powerAttrList.' + index + '.corp'"
                    style="background:hsl(0, 0%, 90%);"
                  >
                    <el-input v-model="item.corp"/>
                  </el-form-item>
                </el-col>
                <el-col :span="10" class="chunMent">
                  <el-form-item
                    label="单位类型"
                    :prop="'powerAttrList.' + index + '.corp'"
                    style="background:hsl(0, 0%, 90%);"
                  >
                    <el-input v-model="item.corp"/>
                  </el-form-item>
                </el-col>
                <el-col :span="10" class="chunMent">
                  <el-form-item
                    label="二级部门"
                    :prop="'powerAttrList.' + index + '.corp'"
                    style="background:hsl(0, 0%, 90%);"
                  >
                    <el-input v-model="item.corp"/>
                  </el-form-item>
                </el-col>
                <el-col :span="10" class="chunMent">
                  <el-form-item
                    label="职位"
                    :prop="'powerAttrList.' + index + '.position'"
                    style="background:hsl(0, 0%, 90%);"
                  >
                    <el-input v-model="item.position"/>
                  </el-form-item>
                </el-col>
                <el-col :span="10" class="chunMent">
                  <el-form-item
                    label="在职时间"
                    :prop="'powerAttrList.' + index + '.time'"
                    style="background:hsl(0, 0%, 90%);"
                  >
                    <el-date-picker
                      v-model="item.start_time"
                      type="daterange"
                      style="width:100%"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="10" class="chunMent">
                  <el-form-item
                    label="单位地址"
                    :prop="'powerAttrList.' + index + '.contact'"
                    style="background:hsl(0, 0%, 90%);"
                  >
                    <el-input v-model="item.contact" />
                  </el-form-item>
                </el-col>
                <el-button
                  type="danger"
                  v-if="formData3.powerAttrList.length > 0"
                  size="small"
                  style="margin-left:20px;"
                  plain
                  @click="removeRow(index)"
                >删除</el-button
                >
              </el-row>
              <el-form-item>
                <el-button icon="el-icon-plus" size="small" style="display:block;margin:0 auto;" @click="addWork"
                >添加工作经历</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>

        <!-- 教育经历 -->
        <div id="div_two_8">
          <span>7.教育经历</span>
        </div>
        <span>从最高教育经历开始倒序填写，直至大学阶段为止</span>
        <div id="div_two_8_2">
          <div style="margin:20px;">
            <el-form
              :model="formData3"
              label-width="80px"
              ref="formData3"
              class="dataForm workForm"
            >
              <el-row
                v-for="(item, index) in formData4.powerAttrList2"
                :key="index"
                style="border-bottom: 1px solid #f0f0f0; padding: 10px; margin-bottom:20px;"
              >
                <el-col :span="10" class="chunMent">
                  <el-form-item
                    label="学校名称"
                    :prop="'powerAttrList.' + index + '.corp'"
                    style="background:hsl(0, 0%, 90%);"
                  >
                    <el-input v-model="item.corp" />
                  </el-form-item>
                </el-col>
                <el-col :span="10" class="chunMent">
                  <el-form-item
                    label="学历"
                    :prop="'powerAttrList.' + index + '.corp'"
                    style="background:hsl(0, 0%, 90%);"
                  >
                    <el-input v-model="item.corp" />
                  </el-form-item>
                </el-col>
                <el-col :span="10" class="chunMent">
                  <el-form-item
                    label="学位"
                    :prop="'powerAttrList.' + index + '.corp'"
                    style="background:hsl(0, 0%, 90%);"
                  >
                    <el-input v-model="item.corp" />
                  </el-form-item>
                </el-col>
                <el-col :span="10" class="chunMent">
                  <el-form-item
                    label="专业"
                    :prop="'powerAttrList.' + index + '.position'"
                    style="background:hsl(0, 0%, 90%);"
                  >
                    <el-input v-model="item.position" />
                  </el-form-item>
                </el-col>
                <el-col :span="10" class="chunMent">
                  <el-form-item
                    label="求学时间"
                    :prop="'powerAttrList.' + index + '.time'"
                    style="background:hsl(0, 0%, 90%);"
                  >
                    <el-date-picker
                      v-model="item.start_time"
                      type="daterange"
                      style="width:100%"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="10" class="chunMent">
                  <el-form-item
                    label="学校地址"
                    :prop="'powerAttrList.' + index + '.contact'"
                    style="background:hsl(0, 0%, 90%);"
                  >
                    <el-input v-model="item.contact" />
                  </el-form-item>
                </el-col>
                <el-button
                  type="danger"
                  v-if="formData4.powerAttrList2.length > 0"
                  size="small"
                  style="margin-left:20px;"
                  plain
                  @click="removeRow2(index)"
                >删除</el-button
                >
              </el-row>
              <el-form-item>
                <el-button icon="el-icon-plus" size="small" style="display:block;margin:0 auto;" @click="education"
                >添加教育经历</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>

        <!-- 职业资格 -->
        <div id="div_two_9">
          <span>8.职业资格</span>
        </div>
        <div id="div_two_9_2">
          <div style="margin:20px;">
            <el-form
              :model="formData3"
              label-width="80px"
              ref="formData3"
              class="dataForm workForm"
            >
              <el-row
                v-for="(item, index) in formData5.powerAttrList3"
                :key="index"
                style="border-bottom: 1px solid #f0f0f0; padding: 10px; margin-bottom:20px;"
              >
                <el-col :span="10" class="chunMent">
                  <el-form-item
                    label="类别"
                    :prop="'powerAttrList.' + index + '.corp'"
                    style="background:hsl(0, 0%, 90%);"
                  >
                    <el-input v-model="item.corp" />
                  </el-form-item>
                </el-col>
                <el-col :span="10" class="chunMent">
                  <el-form-item
                    label="11"
                    :prop="'powerAttrList.' + index + '.corp'"
                    style="background:hsl(0, 0%, 90%);"
                  >
                    <el-input v-model="item.corp" />
                  </el-form-item>
                </el-col>
                <el-col :span="10" class="chunMent">
                  <el-form-item
                    label="证书编号"
                    :prop="'powerAttrList.' + index + '.corp'"
                    style="background:hsl(0, 0%, 90%);"
                  >
                    <el-input v-model="item.corp" />
                  </el-form-item>
                </el-col>
                <el-col :span="10" class="chunMent">
                  <el-form-item
                    label="22"
                    :prop="'powerAttrList.' + index + '.position'"
                    style="background:hsl(0, 0%, 90%);"
                  >
                    <el-input v-model="item.position" />
                  </el-form-item>
                </el-col>
                <el-button
                  type="danger"
                  v-if="formData5.powerAttrList3.length > 0"
                  size="small"
                  style="margin-left:20px;"
                  plain
                  @click="removeRow3(index)"
                >删除</el-button
                >
              </el-row>
              <el-form-item>
                <el-button icon="el-icon-plus" size="small" style="display:block;margin:0 auto;" @click="professional"
                >添加职业资格</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
        <!--行业及工作领域-->
        <div>
          <div id="div_two_10">
            <span>9.行业及工作领域</span>
          </div>
          <!--主要行业领域-->
          <el-row>
            <el-col :span="11">
              <el-form-item
                label="主要行业领域"
                prop="mainIndustry"
                label-width="140px"
              >
                <el-select
                  v-model="form.mainIndustry"
                  placeholder="请选择主要行业领域"
                  style="width: 100%"
                >
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
              <el-form-item
                label="其他行业领域"
                prop="elseIndustry"
                label-width="140px"
              >
                <el-select
                  v-model="form.elseIndustry"
                  placeholder="请选择其他行业领域"
                  style="width: 100%"
                >
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
              <el-form-item
                label="基金学科"
                prop="fundSubject"
                label-width="140px"
              >
                <el-select
                  v-model="form.fundSubject"
                  placeholder="请选择基金学科"
                  style="width: 100%"
                >
                  <el-option label="请选择字典生成" value="" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-form-item
                label="国际学科"
                prop="internationalDiscipline"
                label-width="140px"
              >
                <el-select
                  v-model="form.internationalDiscipline"
                  placeholder="请选择国际学科"
                  style="width: 100%"
                >
                  <el-option label="请选择字典生成" value="" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!--教育学科-->
          <el-row>
            <el-col :span="11">
              <el-form-item
                label="教育学科"
                prop="educationSubject"
                label-width="140px"
              >
                <el-select
                  v-model="form.educationSubject"
                  placeholder="请选择教育学科"
                  style="width: 100%"
                >
                  <el-option label="请选择字典生成" value="" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="11" :offset="2">
              <el-form-item
                label="工业行业"
                prop="industries"
                label-width="140px"
              >
                <el-select
                  v-model="form.industries"
                  placeholder="请选择工业行业"
                  style="width: 100%"
                >
                  <el-option label="请选择字典生成" value="" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!--研究方向或关键词-->
          <el-row>
            <el-col :span="24">
              <el-form-item
                label="研究方向或关键词"
                prop="researchDirection"
                label-width="140px"
              >
                <el-input
                  v-model="form.researchDirection"
                  type="textarea"
                  placeholder="请输入研究方向或关键词"
                  autosize
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="研究或工作内容" label-width="140px">
            <el-input
              v-model="form.workContent"
              type="textarea"
              placeholder="请输入研究或工作内容"
              autosize
            />
          </el-form-item>
          <el-form-item
            label="主要业绩及贡献"
            prop="mainContribution"
            label-width="140px"
          >
            <el-input
              v-model="form.mainContribution"
              type="textarea"
              placeholder="请输入主要业绩及贡献"
              autosize
            />
          </el-form-item>
          <el-form-item
            label="奖惩情况"
            prop="rewardsPunishment"
            label-width="140px"
          >
            <el-input
              v-model="form.rewardsPunishment"
              type="textarea"
              placeholder="请输入奖惩情况"
              autosize
            />
          </el-form-item>
          <el-form-item
            label="参与评审需回避单位"
            prop="avoidCompany"
            label-width="140px"
          >

            <el-input
              v-model="form.avoidCompany"
              placeholder="请输入单位名称，输入多个则用“；”号进行隔开"
            />
          </el-form-item>
        </div>
        <!--成果专利&荣誉头衔-->
        <div>
          <div id="div_two_11">
            <span>10.成果专利&荣誉头衔</span>
          </div>
          <el-form-item
            label="成果或专利"
            prop="resultsOrPatents"
            label-width="100px"
          >
            <el-input
              v-model="form.resultsOrPatents"
              placeholder="请输入成果或专利"
              type="textarea"
              autosize
            />
          </el-form-item>
          <el-form-item
            label="荣誉或头衔"
            prop="honorsOrTitles"
            label-width="100px"
          >
            <el-input
              v-model="form.honorsOrTitles"
              placeholder="请输入荣誉或头衔"
              type="textarea"
              autosize
            />
          </el-form-item>
        </div>
        <!--附件-->
        <div>
          <div id="div_two_12">
            <span>11.附件</span>
          </div>
          <div>
            <el-row>
              <el-col :span="24">
                <el-form-item label="个人简历:">
                  <el-upload
                    ref="upload"
                    action="http://localhost:8080/common/upload2"
                    :limit="1"
                    :file-list="fileList"
                    :on-success="resumeSuccess"
                    :auto-upload="true">
                    <el-button slot="trigger" size="small" type="primary">上传简历</el-button>
                  </el-upload>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="专家登记表:">
                  <el-link type="danger" @click="importTemplate">下载模板</el-link>
                  <el-upload
                    ref="upload"
                    action="http://localhost:8080/common/upload2"
                    :limit="1"
                    :file-list="fileList"
                    :on-success="registerSuccess"
                    :auto-upload="true">
                    <el-button slot="trigger" size="small" type="primary">上传附件</el-button>
                  </el-upload>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </div>
        <!--提交-->
        <div class="dialog-footer" style="text-align: center">
          <el-button type="info" @click="leave">上一步</el-button>
          <el-button type="primary" @click="submitForm2">暂 存</el-button>
          <el-button type="primary" @click="submitForm">提 交</el-button>
          <!--<el-button @click="cancel">取 消</el-button>-->
        </div>
      </el-form>
    </div>
    <!--第三页-->
    <div id="div_three" style="display: none">
      <div id="div_three_1">
        <img
          src="../../../assets/images/专家申报/test3.png"
          alt=""
          style="width: 100%"
        />
      </div>
      <div id="div_three_2">
        <img
          src="../../../assets/images/专家申报/u478.svg"
          alt=""
          style="width: 11%; height: 11%"
        />
        <p style="font-size: 30px; font-weight: bold">
          您的申报信息已成功提交！
        </p>
        <div>
          <p>我们正在抓紧进行审核，审核结果将短信通知您，</p>
          <p>同时您也可以至“申报进度查看”页面查看审核结果及相关信息。</p>
          <p>在此之前，您不可以再次申报。</p>
          <router-link
            :to="{ path: '../information', query: { id: this.queryParams.id } }"
            target="_blank"
            style="color: #1c84c6"
          >查看申报信息>></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    listUser,
    getUser,
    delUser,
    addUser,
    updateUser,
    exportUser,
    importTemplate,
    getUserDeclare,
    uploadFile,
  } from "@/api/declare/user";
  import ImageUpload from "@/components/ImageUpload";
  import Editor from "@/components/Editor";
  import "../../css/专家申报/styles.css";
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
        formData3: {
          powerAttrList: [
            {
              start_time: "",
              end_time: "",
              corp: "",
              position: "",
              contact: "",
            },
          ],
        },
        formData4: {
          powerAttrList2: [
            {
              start_time: "",
              end_time: "",
              corp: "",
              position: "",
              contact: "",
            },
          ],
        },
        formData5: {
          powerAttrList3: [
            {
              start_time: "",
              end_time: "",
              corp: "",
              position: "",
              contact: "",
            },
          ],
        },
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
        radio: "2",
        isDisabled: true,
        // 查询参数
        queryParams: {
          pageNum: 1,
          pageSize: 10,
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
          expertRegister: null,
          status: null,
        },
        //当前状态
        nowParams: {
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
        rules: {},
      };
    },
    created() {
      this.formData3.powerAttrList = [];
      this.formData4.powerAttrList2 = [];
      this.formData5.powerAttrList3 = [];
      //this.getNow();
      this.getUserNow();
      //this.judgeType();
      this.getList();

      this.getDicts("id_number_type").then((response) => {
        this.idNumberTypeOptions = response.data;
      });
      this.getDicts("sys_user_sex").then((response) => {
        this.userSexOptions = response.data;
      });
      this.getDicts("nationality").then((response) => {
        this.nationalityOptions = response.data;
      });
      this.getDicts("nation").then((response) => {
        this.nationOptions = response.data;
      });
      this.getDicts("politics_status").then((response) => {
        this.politicsStatusOptions = response.data;
      });
      this.getDicts("professional").then((response) => {
        this.professionalOptions = response.data;
      });
      this.getDicts("dwell_region").then((response) => {
        this.dwellRegionOptions = response.data;
      });
      this.getDicts("specialty_type").then((response) => {
        this.specialtyTypeOptions = response.data;
      });
      this.getDicts("job_nature").then((response) => {
        this.jobNatureOptions = response.data;
      });
      this.getDicts("company_type").then((response) => {
        this.companyTypeOptions = response.data;
      });
      this.getDicts("company_region").then((response) => {
        this.companyRegionOptions = response.data;
      });
      this.getDicts("highest_education").then((response) => {
        this.highestEducationOptions = response.data;
      });
      this.getDicts("highest_degree").then((response) => {
        this.highestDegreeOptions = response.data;
      });
      this.getDicts("main_industry").then((response) => {
        this.mainIndustryOptions = response.data;
      });
      this.getDicts("main_industry").then((response) => {
        this.elseIndustryOptions = response.data;
      });
      this.getDicts("review_experience").then((response) => {
        this.reviewExperienceOptions = response.data;
      });
    },
    methods: {
      /**个人简历文件上传成功后的钩子*/
      resumeSuccess(res,file){
        /*console.log(file);
        console.log(res);*/
        this.queryParams.resumeSite=res.url
      },

      /**专家登记表上传成功后的钩子*/
      registerSuccess(res,file){
        /*console.log(file);
        console.log(res);*/
        this.queryParams.expertRegister=res.url
      },
      // 增加工作经历
      addWork() {
        this.formData3.powerAttrList.push({
          start_time: "",
          end_time: "",
          corp: "",
          position: "",
          contact: "",
        });
      },
      /** 下载模板操作 */
      importTemplate() {
        let a = document.createElement('a')
        a.href ="http://localhost:8080/declare/specialist/importTemplate"
        a.click();
        /*importTemplate().then(response => {
          let blob = new Blob([response],{type:"application/word"});
          let objectUrl = URL.createObjectURL(blob);
          window.location.href = objectUrl;
        });*/
      },
      /**获取该用户的申报状态信息*/
      getUserNow() {
        this.loading = true;
        getUserDeclare().then(response => {
          if(response.data!=null){
            this.nowParams=response.data;
          }
          this.judgePass();
        });
      },
      /**判断用户申报是否通过*/
      judgePass(){
        let pass = this.nowParams.isPass;
        let status = this.nowParams.applicationStatus;
        let isRemove = this.nowParams.isRemove;
        let overTime = this.nowParams.overTime;
        if (pass===null && status===null){ //未进行申报
          let textOne = document.getElementById("text_1");
          divOne.style.display = "block";
        } else if(status==='0'){ // 未审核
          let divOne = document.getElementById("div_one");
          let divTwo = document.getElementById("div_two");
          let divThree = document.getElementById("div_three");
          /**1、隐藏第一、二个模块页面*/
          divOne.style.display = "none";
          divTwo.style.display = "none";
          /**2、显示第三个模块页面*/
          divThree.style.display = "block";
        } else if(pass==='0' && status==='1' && isRemove==='0'){ //审核通过
          let textOne = document.getElementById("text_1");
          let textTwo = document.getElementById("text_2");
          /**1、隐藏第一行字符串*/
          textOne.style.display = "none";
          /**2、显示第二行字符串*/
          textTwo.style.display = "block";
        }else if(pass==='1' && status==='1' && isRemove==='0'){ //审核不通过
          let textOne = document.getElementById("text_1");
          let textThree = document.getElementById("text_3");
          /**1、隐藏第一行字符串*/
          textOne.style.display = "none";
          /**2、显示第三行字符串*/
          textThree.style.display = "block";
        }else if(isRemove==='1' && overTime=='永久移除'){ //已被永久移除
          let textOne = document.getElementById("text_1");
          let textFour = document.getElementById("text_4");
          /**1、隐藏第一行字符串*/
          textOne.style.display = "none";
          /**2、显示第四行字符串*/
          textFour.style.display = "block";
        }else if(isRemove==='1' && overTime!='永久移除'){ //已移除但不是永久移除
          let textOne = document.getElementById("text_1");
          let textTwo = document.getElementById("text_2");
          /**1、隐藏第一行字符串*/
          textOne.style.display = "none";
          /**2、显示第二行字符串*/
          textTwo.style.display = "block";
        }
      },
      // 删除属性列
      removeRow(index) {
        this.formData3.powerAttrList.splice(index, 1);
      },
      // 增加教育经历
      education() {
        this.formData4.powerAttrList2.push({
          start_time: "",
          end_time: "",
          corp: "",
          position: "",
          contact: "",
        });
      },
      // 删除属性列
      removeRow2(index) {
        this.formData4.powerAttrList2.splice(index, 1);
      },
      // 增加职业资格
      professional() {
        this.formData5.powerAttrList3.push({
          start_time: "",
          end_time: "",
          corp: "",
          position: "",
          contact: "",
        });
      },
      // 删除属性列
      removeRow3(index) {
        this.formData5.powerAttrList3.splice(index, 1);
      },
      judgeType() {
        let divOne = document.getElementById("div_one");
        let divTwo = document.getElementById("div_two");
        let divThree = document.getElementById("div_three");

        /**未审核*/
        if (this.queryParams.status === "1") {
          /**1、隐藏第一、二个模块页面*/
          divOne.style.display = "none";
          divTwo.style.display = "none";
          /**2、显示第三个模块页面*/
          divThree.style.display = "inline";
        }
      },
      dianji() {
        if (this.radio === "1") {
          let divOne = document.getElementById("div_one");
          let divTwo = document.getElementById("div_two");
          /**1、隐藏第一个模块页面*/
          divOne.style.display = "none";
          /**2、显示第二个模块页面*/
          divTwo.style.display = "inline";
        }
      },
      changeHandler() {
        if (this.radio === "1") {
          this.isDisabled = false;
        } else if (this.radio === "2") {
          this.isDisabled = true;
        }
      },

      /** 查询用户列表 */
      getList() {
        this.loading = true;
        listUser(this.queryParams).then((response) => {
          this.userList = response.rows;
          this.total = response.total;
          this.loading = false;
        });
      },
      /**接收该用户的信息，赋值给queryParams*/
      getNow() {
        this.loading = true;
        getUser().then((response) => {
          this.queryParams = response.data;
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
        return this.selectDictLabel(
          this.politicsStatusOptions,
          row.politicsStatus
        );
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
        return this.selectDictLabel(
          this.highestEducationOptions,
          row.highestEducation
        );
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
        return this.selectDictLabels(
          this.reviewExperienceOptions,
          row.reviewExperience
        );
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
          status: "0",
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
        this.ids = selection.map((item) => item.id);
        this.single = selection.length !== 1;
        this.multiple = !selection.length;
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
        const id = row.id || this.ids;
        getUser(id).then((response) => {
          this.form = response.data;
          this.open = true;
          this.title = "修改用户";
        });
      },
      /** 提交按钮 */
      submitForm() {
        this.$confirm("您确定提交申报吗？提交后不可撤回", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true,
        })
          .then(() => {
            type: "success",
              this.$refs["form"].validate((valid) => {
                if (valid) {
                  if (this.form.id != null) {
                    updateUser(this.form).then((response) => {
                      this.msgSuccess("修改成功");
                      this.open = false;
                      this.getList();
                    });
                  } else {
                    this.form.status = "1";
                    addUser(this.form).then((response) => {
                      this.msgSuccess("新增成功");
                      this.queryParams.id = response;
                      this.open = false;
                      this.getList();
                    });
                  }
                }
              });
            let divTwo = document.getElementById("div_two");
            let divThree = document.getElementById("div_three");
            /**1、隐藏第二个模块页面*/
            divTwo.style.display = "none";
            /**2、显示第三个模块页面*/
            divThree.style.display = "inline";
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消提交",
            });
          });
      },
      /** 暂存按钮 */
      submitForm2() {
        this.$refs["form"].validate((valid) => {
          if (valid) {
            if (this.form.id != null) {
              updateUser(this.form).then((response) => {
                this.open = false;
                this.getList();
              });
            } else {
              this.form.status = "0";
              addUser(this.form).then((response) => {
                this.open = false;
                this.getList();
              });
            }
          }
        });
        let divTwo = document.getElementById("div_two");
        let divThree = document.getElementById("div_three");
        /**1、隐藏第二个模块页面*/
        divTwo.style.display = "none";
        /**2、显示第三个模块页面*/
        divThree.style.display = "inline";
      },
      /*离开*/
      leave() {
        this.$confirm("您的信息未保存，确定直接离开此页面吗？", "温馨提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            //执行暂存
            this.submitForm2();
            this.radio = "2";
            let divOne = document.getElementById("div_one");
            let divTwo = document.getElementById("div_two");
            let divThree = document.getElementById("div_three");
            /**1、隐藏第二、三个模块页面*/
            divTwo.style.display = "none";
            divThree.style.display = "none";
            /**2、显示第一个模块页面*/
            divOne.style.display = "inline";
          })
          .catch(() => {});
      },
      /** 删除按钮操作 */
      handleDelete(row) {
        const ids = row.id || this.ids;
        this.$confirm('是否确认删除用户编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(function () {
            return delUser(ids);
          })
          .then(() => {
            this.getList();
            this.msgSuccess("删除成功");
          });
      },
      /** 导出按钮操作 */
      handleExport() {
        const queryParams = this.queryParams;
        this.$confirm("是否确认导出所有用户数据项?", "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.exportLoading = true;
            return exportUser(queryParams);
          })
          .then((response) => {
            this.download(response.msg);
            this.exportLoading = false;
          });
      },
    },
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .el-checkbox-width {
    width: 300px;
    height: 25px;
  }
  .chunMent {
    margin-left: 60px;
  }
</style>
