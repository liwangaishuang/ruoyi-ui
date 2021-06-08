<template>
  <div id="base" class="base">
  <el-form>
    <el-form>
      <div id="div_d1">
        <span id="text_t1">深圳市人才评审专家库信息管理平台</span>
      </div>
    </el-form>
    <el-form>
      <div id="div_d2">
        <span id="text_t2">专家账号密码找回</span>
      </div>
    </el-form>
    <div id="model_one">
      <el-form>
        <div id="u109" class="ax_default" data-left="489" data-top="271" data-width="943" data-height="96">

          <!-- Unnamed (椭圆形) -->
          <div id="u110" class="ax_default ellipse">
            <img id="u110_img" class="img " src="../assets/images/填报端找回密码/u110.svg"/>
            <div id="u110_text" class="text ">
              <p><span style="text-decoration:none;">1</span></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u111" class="ax_default label">
            <div id="u111_div" class=""></div>
            <div id="u111_text" class="text ">
              <p><span style="text-decoration:none;">填写信息</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u112" class="ax_default line">
            <img id="u112_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u112_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u113" class="ax_default ellipse">
            <img id="u113_img" class="img " src="../assets/images/填报端找回密码/u113.svg"/>
            <div id="u113_text" class="text ">
              <p><span style="text-decoration:none;">2</span></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u114" class="ax_default label">
            <div id="u114_div" class=""></div>
            <div id="u114_text" class="text ">
              <p><span style="text-decoration:none;">手机验证</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u115" class="ax_default line">
            <img id="u115_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u115_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u116" class="ax_default ellipse">
            <img id="u116_img" class="img " src="../assets/images/填报端找回密码/u113.svg"/>
            <div id="u116_text" class="text ">
              <p><span style="text-decoration:none;">3</span></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u117" class="ax_default label">
            <div id="u117_div" class=""></div>
            <div id="u117_text" class="text ">
              <p><span style="text-decoration:none;">重置密码</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u118" class="ax_default line">
            <img id="u118_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u118_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u119" class="ax_default ellipse">
            <img id="u119_img" class="img " src="../assets/images/填报端找回密码/u113.svg"/>
            <div id="u119_text" class="text ">
              <p><span style="text-decoration:none;">4</span></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u120" class="ax_default label">
            <div id="u120_div" class=""></div>
            <div id="u120_text" class="text ">
              <p><span style="text-decoration:none;">完成</span></p>
            </div>
          </div>
        </div>
      </el-form>
      <el-form>
        <!-- Unnamed (矩形) -->
        <div id="u121" class="ax_default label">
          <div id="u121_div" class=""></div>
          <div id="u121_text" class="text ">
            <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">专家姓名：</span></p>
          </div>
        </div>

        <!-- Unnamed (文本框) -->
        <div id="u122" class="ax_default text_field">
          <div id="u122_div" class=""></div>
          <input id="u122_input" v-model="form.expertsName" type="text" placeholder="请输入专家姓名" class="u122_input"/>
        </div>

        <!-- Unnamed (文本框) -->
        <div id="u123" class="ax_default text_field">
          <div id="u123_div" class=""></div>
          <el-input id="u123_input" v-model="form.idNumber" placeholder="请输入证件号码" class="u123_input"></el-input>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u124" class="ax_default label">
          <div id="u124_div" class=""></div>
          <div id="u124_text" class="text ">
            <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">证件号码：</span></p>
          </div>
        </div>

        <!-- Unnamed (下拉列表框) -->
        <div id="u125" class="ax_default droplist">
          <div id="u125_div" class=""></div>
          <select id="u125_input" class="u125_input">
            <option class="u125_input_option" selected value="身份证">身份证</option>
            <option class="u125_input_option" value="港澳居民来往内地通行证">港澳居民来往内地通行证</option>
            <option class="u125_input_option" value="台湾居民来往大陆通行证">台湾居民来往大陆通行证</option>
            <option class="u125_input_option" value="中国护照">中国护照</option>
            <option class="u125_input_option" value="港澳台居民居住证">港澳台居民居住证</option>
            <option class="u125_input_option" value="外国人永久居留居住证">外国人永久居留居住证</option>
            <option class="u125_input_option" value="其它">其它</option>
          </select>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u126" class="ax_default box_1">
          <div id="u126_div" class=""></div>
          <div id="u126_text" class="text ">
            <el-button id="u126_btn" type="primary" style="text-decoration:none;" v-on:click="next_noe">下一步</el-button>
          </div>
        </div>
      </el-form>
    </div>
    <div id="model_two">
      <el-form>
        <!--上面流程图标-->
        <div id="u132" class="ax_default" data-left="489" data-top="271" data-width="943" data-height="96">
          <!-- Unnamed (椭圆形) -->
          <div id="u133" class="ax_default ellipse">
            <img id="u133_img" class="img " src="../assets/images/填报端找回密码/u133.svg"/>
            <div id="u133_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u134" class="ax_default label">
            <div id="u134_div" class=""></div>
            <div id="u134_text" class="text ">
              <p><span style="text-decoration:none;">填写信息</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u135" class="ax_default line">
            <img id="u135_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u135_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u136" class="ax_default ellipse">
            <img id="u136_img" class="img " src="../assets/images/填报端找回密码/u110.svg"/>
            <div id="u136_text" class="text ">
              <p><span style="text-decoration:none;">2</span></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u137" class="ax_default label">
            <div id="u137_div" class=""></div>
            <div id="u137_text" class="text ">
              <p><span style="text-decoration:none;">手机验证</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u138" class="ax_default line">
            <img id="u138_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u138_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u139" class="ax_default ellipse">
            <img id="u139_img" class="img " src="../assets/images/填报端找回密码/u113.svg"/>
            <div id="u139_text" class="text ">
              <p><span style="text-decoration:none;">3</span></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u140" class="ax_default label">
            <div id="u140_div" class=""></div>
            <div id="u140_text" class="text ">
              <p><span style="text-decoration:none;">重置密码</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u141" class="ax_default line">
            <img id="u141_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u141_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u142" class="ax_default ellipse">
            <img id="u142_img" class="img " src="../assets/images/填报端找回密码/u113.svg"/>
            <div id="u142_text" class="text ">
              <p><span style="text-decoration:none;">4</span></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u143" class="ax_default label">
            <div id="u143_div" class=""></div>
            <div id="u143_text" class="text ">
              <p><span style="text-decoration:none;">完成</span></p>
            </div>
          </div>
        </div>
      </el-form>
      <el-form>
        <!-- Unnamed (形状) -->
        <div id="u145" class="ax_default icon">
          <img id="u145_img" class="img " src="../assets/images/填报端找回密码/u145.svg"/>
          <div id="u145_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u146" class="ax_default label">
          <div id="u146_div" class=""></div>
          <div id="u146_text" class="text ">
            <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">手机号码：</span></p>
          </div>
        </div>

        <!-- Unnamed (文本框) -->
        <div id="u147" class="ax_default text_field">
          <div id="u147_div" class=""></div>
          <input id="u147_input" type="text" placeholder="请输入手机号码" class="u147_input"/>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u148" class="ax_default label">
          <div id="u148_div" class=""></div>
          <div id="u148_text" class="text ">
            <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">手机验证码：</span></p>
          </div>
        </div>

        <!-- Unnamed (文本框) -->
        <div id="u149" class="ax_default text_field">
          <div id="u149_div" class=""></div>
          <input id="u149_input" type="text" placeholder="请输入手机验证码" class="u149_input"/>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u150" class="ax_default box_1">
          <div id="u150_div" class=""></div>
          <div id="u150_text" class="text ">
            <el-button id="u150_btn" type="primary" style="text-decoration:none;">获取验证码</el-button>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u144" class="ax_default box_1">
          <div id="u144_div" class=""></div>
          <div id="u144_text" class="text ">
            <el-button id="u144_btn" type="primary" style="text-decoration:none;" v-on:click="next_two">下一步</el-button>
          </div>
        </div>
      </el-form>
    </div>
    <div id="model_three">
      <el-form>
        <div id="u156" class="ax_default" data-left="489" data-top="271" data-width="943" data-height="96">

          <!-- Unnamed (椭圆形) -->
          <div id="u157" class="ax_default ellipse">
            <img id="u157_img" class="img " src="../assets/images/填报端找回密码/u133.svg"/>
            <div id="u157_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u158" class="ax_default label">
            <div id="u158_div" class=""></div>
            <div id="u158_text" class="text ">
              <p><span style="text-decoration:none;">填写信息</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u159" class="ax_default line">
            <img id="u159_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u159_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u160" class="ax_default ellipse">
            <img id="u160_img" class="img " src="../assets/images/填报端找回密码/u133.svg"/>
            <div id="u160_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u161" class="ax_default label">
            <div id="u161_div" class=""></div>
            <div id="u161_text" class="text ">
              <p><span style="text-decoration:none;">手机验证</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u162" class="ax_default line">
            <img id="u162_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u162_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u163" class="ax_default ellipse">
            <img id="u163_img" class="img " src="../assets/images/填报端找回密码/u110.svg"/>
            <div id="u163_text" class="text ">
              <p><span style="text-decoration:none;">3</span></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u164" class="ax_default label">
            <div id="u164_div" class=""></div>
            <div id="u164_text" class="text ">
              <p><span style="text-decoration:none;">重置密码</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u165" class="ax_default line">
            <img id="u165_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u165_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u166" class="ax_default ellipse">
            <img id="u166_img" class="img " src="../assets/images/填报端找回密码/u113.svg"/>
            <div id="u166_text" class="text ">
              <p><span style="text-decoration:none;">4</span></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u167" class="ax_default label">
            <div id="u167_div" class=""></div>
            <div id="u167_text" class="text ">
              <p><span style="text-decoration:none;">完成</span></p>
            </div>
          </div>
        </div>
      </el-form>
      <el-form>
        <!-- Unnamed (形状) -->
        <div id="u169" class="ax_default icon">
          <img id="u169_img" class="img " src="../assets/images/填报端找回密码/u145.svg"/>
          <div id="u169_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (形状) -->
        <div id="u170" class="ax_default icon">
          <img id="u170_img" class="img " src="../assets/images/填报端找回密码/u145.svg"/>
          <div id="u170_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u171" class="ax_default label">
          <div id="u171_div" class=""></div>
          <div id="u171_text" class="text ">
            <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">用户账号：</span></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u172" class="ax_default label">
          <div id="u172_div" class=""></div>
          <div id="u172_text" class="text ">
            <p><span style="text-decoration:none;">zhuzhonghui</span></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u173" class="ax_default label">
          <div id="u173_div" class=""></div>
          <div id="u173_text" class="text ">
            <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">登录密码：</span></p>
          </div>
        </div>

        <!-- Unnamed (文本框) -->
        <div id="u174" class="ax_default text_field">
          <div id="u174_div" class=""></div>
          <input id="u174_input" type="text" placeholder="8~20位字符，含数字、大写字母、小写字母、特殊字符中的两种及以上" class="u174_input"/>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u175" class="ax_default label">
          <div id="u175_div" class=""></div>
          <div id="u175_text" class="text ">
            <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">确认密码：</span></p>
          </div>
        </div>

        <!-- Unnamed (文本框) -->
        <div id="u176" class="ax_default text_field">
          <div id="u176_div" class=""></div>
          <input id="u176_input" type="text" placeholder="请再次输入密码" class="u176_input"/>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u168" class="ax_default box_1">
          <div id="u168_div" class=""></div>
          <div id="u168_text" class="text ">
            <el-button id="u168_btn" type="primary" style="text-decoration:none;" v-on:click="next_three">下一步</el-button>
          </div>
        </div>
      </el-form>
    </div>
    <el-form id="model_four">
      <el-form>
        <div id="u182" class="ax_default" data-left="489" data-top="271" data-width="943" data-height="96">

          <!-- Unnamed (椭圆形) -->
          <div id="u183" class="ax_default ellipse">
            <img id="u183_img" class="img " src="../assets/images/填报端找回密码/u133.svg"/>
            <div id="u183_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u184" class="ax_default label">
            <div id="u184_div" class=""></div>
            <div id="u184_text" class="text ">
              <p><span style="text-decoration:none;">填写信息</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u185" class="ax_default line">
            <img id="u185_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u185_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u186" class="ax_default ellipse">
            <img id="u186_img" class="img " src="../assets/images/填报端找回密码/u133.svg"/>
            <div id="u186_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u187" class="ax_default label">
            <div id="u187_div" class=""></div>
            <div id="u187_text" class="text ">
              <p><span style="text-decoration:none;">手机验证</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u188" class="ax_default line">
            <img id="u188_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u188_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u189" class="ax_default ellipse">
            <img id="u189_img" class="img " src="../assets/images/填报端找回密码/u133.svg"/>
            <div id="u189_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u190" class="ax_default label">
            <div id="u190_div" class=""></div>
            <div id="u190_text" class="text ">
              <p><span style="text-decoration:none;">重置密码</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u191" class="ax_default line">
            <img id="u191_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u191_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u192" class="ax_default ellipse">
            <img id="u192_img" class="img " src="../assets/images/填报端找回密码/u110.svg"/>
            <div id="u192_text" class="text ">
              <p><span style="text-decoration:none;">4</span></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u193" class="ax_default label">
            <div id="u193_div" class=""></div>
            <div id="u193_text" class="text ">
              <p><span style="text-decoration:none;">完成</span></p>
            </div>
          </div>
        </div>
      </el-form>
      <el-form>
        <!-- Unnamed (形状) -->
        <div id="u194" class="ax_default icon">
          <img id="u194_img" class="img " src="../assets/images/填报端找回密码/u145.svg"/>
          <div id="u194_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (形状) -->
        <div id="u195" class="ax_default icon">
          <img id="u195_img" class="img " src="../assets/images/填报端找回密码/u145.svg"/>
          <div id="u195_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (形状) -->
        <div id="u196" class="ax_default icon">
          <img id="u196_img" class="img " src="../assets/images/填报端找回密码/u145.svg"/>
          <div id="u196_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (形状) -->
        <div id="u197" class="ax_default icon">
          <img id="u197_img" class="img " src="../assets/images/填报端找回密码/u197.svg"/>
          <div id="u197_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u198" class="ax_default label">
          <div id="u198_div" class=""></div>
          <div id="u198_text" class="text ">
            <p><span style="text-decoration:none;">恭喜您，密码重置成功</span></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u199" class="ax_default label">
          <div id="u199_div" class=""></div>
          <div id="u199_text" class="text ">
            <p><span style="text-decoration:none;color:#F59A23;">3 </span><span style="text-decoration:none;">秒后自动跳转到登录页面...</span></p>
          </div>
        </div>
      </el-form>
    </el-form>
  </el-form>
</div>
</template>

<script>
    import {  resetUserPwd2 } from "@/api/system/user";
    import Vue from 'vue';
    import '../views/css/geren_styles.css';
    import ElForm from "element-ui/packages/form/src/form";
    import ElButton from "element-ui/packages/button/src/button";
    import ElFormItem from "element-ui/packages/form/src/form-item";
    import ElInput from "element-ui/packages/input/src/input";


    export default {
      components: {
        ElInput,
        ElFormItem,
        ElButton,
        ElForm},
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
            desc: '',
            //证件号码
            idNumber:'',
            //专家姓名
            expertsName:'',
            //专家用户id
            userId:'102'
          }
        }
      },
      methods: {
        /**下一步*/
        next_noe(){
          /**定义model*/
          let modelOne = document.getElementById("model_one");
          let modelTwo = document.getElementById("model_two");

          /**1、先判断验证码是否正确*/

          /**2、隐藏第一个模块页面*/
          modelOne.style.display="none";
          /**3、显示第二个模块页面*/
          modelTwo.style.display="inline";
        },
        next_two(){
          /**定义model*/
          let modelTwo2 = document.getElementById("model_two");
          let modelThree = document.getElementById("model_three");

          /**1、先判断验证码是否正确*/
          /**2、隐藏第一个模块页面*/
          modelTwo2.style.display="none";
          /**3、显示第二个模块页面*/
          modelThree.style.display="inline";
        },
        next_three(){
          /**定义model*/
          let modelThree = document.getElementById("model_three");
          let modelFour = document.getElementById("model_four");
          let u176Input = document.getElementById("u176_input");

          let value = u176Input.value;
          let userId = 102;
          resetUserPwd2(userId, value).then(response => {
            console.log(response)
            //this.msgSuccess("修改成功，新密码是：" + value);
          });
          /**1、先判断验证码是否正确*/
          /**2、隐藏第三个模块页面*/
          modelThree.style.display="none";
          /**3、显示第四个模块页面*/
          modelFour.style.display="inline";
          /**跳转*/
          setTimeout(()=>{
            //需要延迟的代码 :3秒后延迟跳转到首页，可以加提示什么的
            this.$router.push({
              path:"login_front"
            });
            //延迟时间：3秒
          },3000)
        }
      }
    }

</script>

<style>
  #base{
    position: center;
    align-items: center;
    margin:0 auto;
    height: 100%;
  }
  #div_d1{
    padding:50px 0;
    margin: auto;
    position: center;
    text-align: center;
    background-image: url("../assets/images/u61.png");
    width:1918px;
    height:136px;
  }
  #text_t1{
    font-weight:700;
    font-style:normal;
    font-size:48px;
    color:#FFFFFF;
  }
  #div_d2{
    padding:30px 0;
    margin: auto;
    position: center;
    text-align: center;
    width:1918px;
    height:136px;
  }
  #u126_btn{
    font-weight: 700;
    font-size: 30px;
    width: 200px;
    height: 60px;
  }
  #u150_btn{
    font-size: 18px;
    height: 40px;
  }
  #u144_btn{
    font-weight: 700;
    font-size: 30px;
    width: 200px;
    height: 60px;
  }
  #u168_btn{
    font-weight: 700;
    font-size: 30px;
    width: 200px;
    height: 60px;
  }
  #text_t2{
    font-weight:700;
    font-style:normal;
    font-size:35px;
  }
  #model_one{

  }
  #model_two{
    display: none;
  }
  #model_three{
    display: none;
  }
  #model_four{
    display: none;
  }
</style>
