<template>
  <div class="personal_login">
    <el-form>
      <!-- Unnamed (矩形) -->
      <div id="u26" class="ax_default box_1">
        <div id="u26_div" class=""></div>
        <div id="u26_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (图片) -->
      <div id="u27" class="ax_default image">
        <img id="u27_img" class="img " src="../assets/images/填报端注册/u27.png"/>
        <div id="u27_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u28" class="ax_default _一级标题">
        <div id="u28_div" class=""></div>
        <div id="u28_text" class="text ">
          <p><span style="text-decoration:none;">深圳市人才评审专家库信息管理平台</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u29" class="ax_default label">
        <div id="u29_div" class=""></div>
        <div id="u29_text" class="text ">
          <p><span style="text-decoration:none;">用户注册</span></p>
        </div>
      </div>
    </el-form>
    <el-form>
      <!-- 账号信息 -->
      <div id="u30" class="ax_default label">
        <div id="u30_div" class=""></div>
        <div id="u30_text" class="text ">
          <p><span style="text-decoration:none;">账号信息</span></p>
        </div>
      </div>
      <div id="u31" class="ax_default line">
        <img id="u31_img" class="img " src="../assets/images/填报端注册/u31.svg"/>
        <div id="u31_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- 用户账号 -->
      <div id="u32" class="ax_default label">
        <div id="u32_div" class=""></div>
        <div id="u32_text" class="text ">
          <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">用户账号：</span></p>
        </div>
      </div>
      <div id="u33" class="ax_default text_field">
        <div id="u33_div" class=""></div>
        <input id="u33_input" type="text" v-model="queryParams.userName" placeholder="请输入用户账号" class="u33_input"/>
      </div>

      <!-- 登录密码 -->
      <div id="u34" class="ax_default label">
        <div id="u34_div" class=""></div>
        <div id="u34_text" class="text ">
          <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">登录密码：</span></p>
        </div>
      </div>
      <div id="u35" class="ax_default text_field">
        <div id="u35_div" class=""></div>
        <input id="u35_input" type="text" v-model="queryParams.password" placeholder="8~20位字符，含数字、大写字母、小写字母、特殊字符中的两种及以上" class="u35_input"/>
      </div>

      <!-- 确认密码 -->
      <div id="u36" class="ax_default label">
        <div id="u36_div" class=""></div>
        <div id="u36_text" class="text ">
          <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">确认密码：</span></p>
        </div>
      </div>
      <div id="u37" class="ax_default text_field">
        <div id="u37_div" class=""></div>
        <input id="u37_input" type="text" v-model="queryParams.againPassword" placeholder="请再次输入密码" class="u37_input"/>
      </div>

      <!-- 手机号码 -->
      <div id="u38" class="ax_default label">
        <div id="u38_div" class=""></div>
        <div id="u38_text" class="text ">
          <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">手机号码：</span></p>
        </div>
      </div>
      <div id="u39" class="ax_default text_field">
        <div id="u39_div" class=""></div>
        <input id="u39_input" type="text" v-model="queryParams.phonenumber" placeholder="请输入手机号码" class="u39_input"/>
      </div>

      <!-- 手机验证码 -->
      <div id="u40" class="ax_default label">
        <div id="u40_div" class=""></div>
        <div id="u40_text" class="text ">
          <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">手机验证码：</span></p>
        </div>
      </div>
      <div id="u41" class="ax_default text_field">
        <div id="u41_div" class=""></div>
        <input id="u41_input" type="text" v-model="queryParams.phoneCode" placeholder="请输入手机验证码" class="u41_input"/>
      </div>
      <div id="u44" class="ax_default box_1">
        <div id="u44_div" class=""></div>
        <div id="u44_text" class="text ">
          <el-button id="u44_btn" type="primary" style="text-decoration:none;">获取验证码</el-button>
        </div>
      </div>
    </el-form>
    <el-form>
      <!-- 用户信息 -->
      <div id="u42" class="ax_default label">
        <div id="u42_div" class=""></div>
        <div id="u42_text" class="text ">
          <p><span style="text-decoration:none;">用户信息</span></p>
        </div>
      </div>
      <div id="u43" class="ax_default line">
        <img id="u43_img" class="img " src="../assets/images/填报端注册/u31.svg"/>
        <div id="u43_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>
      <!-- 专家姓名 -->
      <div id="u45" class="ax_default label">
        <div id="u45_div" class=""></div>
        <div id="u45_text" class="text ">
          <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">专家姓名：</span></p>
        </div>
      </div>
      <div id="u46" class="ax_default text_field">
        <div id="u46_div" class=""></div>
        <el-input id="u46_input" type="text" v-model="queryParams.expertsName" placeholder="请输入专家姓名" class="u46_input"></el-input>
      </div>

      <!-- 证件号码 -->
      <div id="u48" class="ax_default label">
        <div id="u48_div" class=""></div>
        <div id="u48_text" class="text ">
          <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">证件号码：</span></p>
        </div>
      </div>
      <div id="u53" class="ax_default droplist">
        <div id="u523_div" class=""></div>
        <el-select id="u53_input" placeholder="请选择证件类型"   v-model="queryParams.idNumberType" class="u53_input">
          <el-option class="u53_input_option" value="身份证">身份证</el-option>
          <el-option class="u53_input_option" value="港澳居民来往内地通行证">港澳居民来往内地通行证</el-option>
          <el-option class="u53_input_option" value="台湾居民来往大陆通行证">台湾居民来往大陆通行证</el-option>
          <el-option class="u53_input_option" value="中国护照">中国护照</el-option>
          <el-option class="u53_input_option" value="港澳台居民居住证">港澳台居民居住证</el-option>
          <el-option class="u53_input_option" value="外国人永久居留居住证">外国人永久居留居住证</el-option>
          <el-option class="u53_input_option" value="其它">其它</el-option>
        </el-select>
      </div>
      <div id="u47" class="ax_default text_field">
        <div id="u47_div" class=""></div>
        <el-input id="u47_input" type="text" v-model="queryParams.userIdNumber" placeholder="请输入证件号码" class="u47_input"></el-input>
      </div>

      <!-- 单位名称 -->
      <div id="u49" class="ax_default label">
        <div id="u49_div" class=""></div>
        <div id="u49_text" class="text ">
          <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">单位名称：</span></p>
        </div>
      </div>
      <div id="u50" class="ax_default text_field">
        <div id="u50_div" class=""></div>
        <input id="u50_input" type="text" v-model="queryParams.companyName" placeholder="请输入单位名称" class="u50_input"/>
      </div>

      <!-- 单位类型 -->
      <div id="u51" class="ax_default label">
        <div id="u51_div" class=""></div>
        <div id="u51_text" class="text ">
          <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">单位类型：</span></p>
        </div>
      </div>
      <div id="u52" class="ax_default droplist">
        <div id="u52_div" class=""></div>
        <el-select id="u52_input" placeholder="请选择单位类型" v-model="queryParams.companyType" class="u52_input">
          <el-option class="u52_input_option" value="政府机关">政府机关</el-option>
          <el-option class="u52_input_option" value="大专院校">大专院校</el-option>
          <el-option class="u52_input_option" value="研究院校">研究院校</el-option>
          <el-option class="u52_input_option" value="其它事业单位">其它事业单位</el-option>
          <el-option class="u52_input_option" value="国有企业">国有企业</el-option>
          <el-option class="u52_input_option" value="集体私有制企业">集体私有制企业</el-option>
          <el-option class="u52_input_option" value="私营企业">私营企业</el-option>
          <el-option class="u52_input_option" value="港澳台投资企业">港澳台投资企业</el-option>
          <el-option class="u52_input_option" value="外商投资企业">外商投资企业</el-option>
          <el-option class="u52_input_option" value="合资企业">合资企业</el-option>
          <el-option class="u52_input_option" value="个体经营">个体经营</el-option>
          <el-option class="u52_input_option" value="其它所有制企业">其它所有制企业</el-option>
          <el-option class="u52_input_option" value="社会团休">社会团休</el-option>
          <el-option class="u52_input_option" value="其它企业">其它企业</el-option>
        </el-select>
      </div>

      <!-- 单位地区 -->
      <div id="u54" class="ax_default label">
        <div id="u54_div" class=""></div>
        <div id="u54_text" class="text ">
          <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">单位地区：</span></p>
        </div>
      </div>
      <div id="u55" class="ax_default droplist">
        <div id="u552_div" class=""></div>
        <el-select id="u55_input" placeholder="请选择单位地区" v-model="queryParams.companyRegion" class="u55_input">
          <el-option class="u55_input_option" value="福田区">福田区</el-option>
          <el-option class="u55_input_option" value="罗湖区">罗湖区</el-option>
          <el-option class="u55_input_option" value="南山区">南山区</el-option>
          <el-option class="u55_input_option" value="宝安区">宝安区</el-option>
          <el-option class="u55_input_option" value="龙华区">龙华区</el-option>
          <el-option class="u55_input_option" value="龙岗区">龙岗区</el-option>
          <el-option class="u55_input_option" value="大鹏新区">大鹏新区</el-option>
          <el-option class="u55_input_option" value="盐田区">盐田区</el-option>
          <el-option class="u55_input_option" value="坪山区">坪山区</el-option>
          <el-option class="u55_input_option" value="光明区">光明区</el-option>
          <el-option class="u55_input_option" value="深汕特别合作区">深汕特别合作区</el-option>
          <el-option class="u55_input_option" value="其它地区">其它地区</el-option>
        </el-select>
      </div>

      <!-- 单位地址 -->
      <div id="u56" class="ax_default label">
        <div id="u56_div" class=""></div>
        <div id="u56_text" class="text ">
          <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">单位地址：</span></p>
        </div>
      </div>
      <div id="u57" class="ax_default text_field">
        <div id="u57_div" class=""></div>
        <input id="u57_input" type="text" v-model="queryParams.companySite" placeholder="请输入详细地址" class="u57_input"/>
      </div>
    </el-form>
    <!--注册-->
    <el-form>
      <!-- 注册按钮 -->
      <div id="u58" class="ax_default box_1">
        <div id="u58_div" class=""></div>
        <div id="u58_text" class="text ">
          <el-button id="u58_btn" v-on:click="zhuce()" type="primary" style="text-decoration:none;">注册</el-button>
        </div>
      </div>
      <div id="u59" class="ax_default label">
        <div id="u59_div" class=""></div>
        <div id="u59_text" class="text ">
          <el-link id="u59_link" type="primary" style="text-decoration:none;">使用已有账号登录</el-link>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
  import { addUser2 } from "@/api/system/user";
  import '../views/css/zhuce_styles.css';
  import ElForm from "element-ui/packages/form/src/form";
  import ElButton from "element-ui/packages/button/src/button";

    export default {
      components: {
        ElButton,
        ElForm},
      name: "personage_register",
      data() {
        return {
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          // 查询参数
          queryParams: {
            pageNum: 1,
            pageSize: 10,
            deptId: null,
            userName: null,
            nickName: null,
            userType: null,
            email: null,
            phonenumber: null,
            phoneCode: null,
            sex: null,
            avatar: null,
            password: null,
            againPassword: null,
            status: null,
            loginIp: null,
            loginDate: null,
            expertsName: null,
            idNumberType: null,
            userIdNumber: null,
            companyName: null,
            companyType: null,
            companyRegion: null,
            companySite: null
          },
        }
      },
      methods: {
        zhuce(){
          addUser2(this.queryParams).then(response => {
            }),
          this.$alert('您已注册成功，请登录', '温馨提示', {
            confirmButtonText: '确定',
            callback: action => {
              this.$router.push({
                path:"login_front"
              });
            }
          });

        }
      }
    }

</script>

<style>
</style>
