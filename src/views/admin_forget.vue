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
        <span id="text_t2">用户账号密码找回</span>
      </div>
    </el-form>
    <div id="model_one">
      <el-form>

        <div id="u1141" class="ax_default" data-left="634" data-top="271" data-width="653" data-height="96">
          <!-- Unnamed (椭圆形) -->
          <div id="u1142" class="ax_default ellipse">
            <img id="u1142_img" class="img " src="../assets/images/填报端找回密码/u110.svg"/>
            <div id="u1142_text" class="text ">
              <p><span style="text-decoration:none;">1</span></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u1143" class="ax_default label">
            <div id="u1143_div" class=""></div>
            <div id="u1143_text" class="text ">
              <p><span style="text-decoration:none;">用户验证</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u1144" class="ax_default line">
            <img id="u1144_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u1144_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u1145" class="ax_default ellipse">
            <img id="u1145_img" class="img " src="../assets/images/填报端找回密码/u113.svg"/>
            <div id="u1145_text" class="text ">
              <p><span style="text-decoration:none;">2</span></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u1146" class="ax_default label">
            <div id="u1146_div" class=""></div>
            <div id="u1146_text" class="text ">
              <p><span style="text-decoration:none;">重置密码</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u1147" class="ax_default line">
            <img id="u1147_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u1147_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u1148" class="ax_default ellipse">
            <img id="u1148_img" class="img " src="../assets/images/填报端找回密码/u113.svg"/>
            <div id="u1148_text" class="text ">
              <p><span style="text-decoration:none;">3</span></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u1149" class="ax_default label">
            <div id="u1149_div" class=""></div>
            <div id="u1149_text" class="text ">
              <p><span style="text-decoration:none;">完成</span></p>
            </div>
          </div>
        </div>
      </el-form>
      <el-form>
        <!-- Unnamed (矩形) -->
        <div id="u1151" class="ax_default label">
          <div id="u1151_div" class=""></div>
          <div id="u1151_text" class="text ">
            <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">手机号码：</span></p>
          </div>
        </div>

        <!-- Unnamed (文本框) -->
        <div id="u1152" class="ax_default text_field">
          <div id="u1152_div" class=""></div>
          <el-input id="u1152_input" v-model="form.mobile" placeholder="请输入手机号码" class="u1152_input" ></el-input>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u1153" class="ax_default label">
          <div id="u1153_div" class=""></div>
          <div id="u1153_text" class="text ">
            <p><span style="text-decoration:none;color:#D9001B;">*</span>
              <span style="text-decoration:none;">手机验证码：</span>
            </p>
          </div>
        </div>

        <!-- Unnamed (文本框) -->
        <div id="u1154" class="ax_default text_field">
          <div id="u1154_div" class=""></div>
          <el-input id="u1154_input" v-model="form.verification" placeholder="请输入手机验证码" class="u1154_input" ></el-input>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u1155" class="ax_default box_1">
          <div id="u1155_div" class=""></div>
          <div id="u1155_text" class="text ">
            <el-button id="u1155_btn" type="primary" v-on:click="get_verification">获取验证码 </el-button>
          </div>
        </div>
        <div id="u1150" class="ax_default box_1">
          <div id="u1150_div" class=""></div>
          <div id="u1150_text" class="text ">
            <el-button id="u1150_btn" type="primary" v-on:click="next">下一步 </el-button>
          </div>
        </div>
      </el-form>
    </div>
    <div id="model_two">
      <el-form>
        <div id="u1161" class="ax_default" data-left="634" data-top="271" data-width="653" data-height="96">

          <!-- Unnamed (椭圆形) -->
          <div id="u1162" class="ax_default ellipse">
            <img id="u1162_img" class="img " src="../assets/images/填报端找回密码/u133.svg"/>
            <div id="u1162_text" class="text ">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u1163" class="ax_default label">
            <div id="u1163_div" class=""></div>
            <div id="u1163_text" class="text ">
              <p><span style="text-decoration:none;">用户验证</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u1164" class="ax_default line">
            <img id="u1164_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u1164_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u1165" class="ax_default ellipse">
            <img id="u1165_img" class="img " src="../assets/images/填报端找回密码/u110.svg"/>
            <div id="u1165_text" class="text ">
              <p><span style="text-decoration:none;">2</span></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u1166" class="ax_default label">
            <div id="u1166_div" class=""></div>
            <div id="u1166_text" class="text ">
              <p><span style="text-decoration:none;">重置密码</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u1167" class="ax_default line">
            <img id="u1167_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u1167_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u1168" class="ax_default ellipse">
            <img id="u1168_img" class="img " src="../assets/images/填报端找回密码/u113.svg"/>
            <div id="u1168_text" class="text ">
              <p><span style="text-decoration:none;">3</span></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u1169" class="ax_default label">
            <div id="u1169_div" class=""></div>
            <div id="u1169_text" class="text ">
              <p><span style="text-decoration:none;">完成</span></p>
            </div>
          </div>
        </div>
      </el-form>
      <el-form>

        <!-- Unnamed (形状) -->
        <div id="u1171" class="ax_default icon">
          <img id="u1171_img" class="img " src="../assets/images/填报端找回密码/u145.svg"/>
          <div id="u1171_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u1172" class="ax_default label">
          <div id="u1172_div" class=""></div>
          <div id="u1172_text" class="text ">
            <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">用户账号：</span></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u1173" class="ax_default label">
          <div id="u1173_div" class=""></div>
          <div id="u1173_text" class="text ">
            <p><span style="text-decoration:none;">zhuzhonghui</span></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u1174" class="ax_default label">
          <div id="u1174_div" class=""></div>
          <div id="u1174_text" class="text ">
            <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">登录密码：</span></p>
          </div>
        </div>

        <!-- Unnamed (文本框) -->
        <div id="u1175" class="ax_default text_field">
          <div id="u1175_div" class=""></div>
          <el-input id="u1175_input" type="password" v-model="form.password" placeholder="8~20位字符，含数字、大写字母、小写字母、特殊字符中的两种及以上" class="u1175_input" ></el-input>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u1176" class="ax_default label">
          <div id="u1176_div" class=""></div>
          <div id="u1176_text" class="text ">
            <p><span style="text-decoration:none;color:#D9001B;">*</span><span style="text-decoration:none;">确认密码：</span></p>
          </div>
        </div>

        <!-- Unnamed (文本框) -->
        <div id="u1177" class="ax_default text_field">
          <div id="u1177_div" class=""></div>
          <el-input id="u1177_input" type="password" v-model="form.confirm_password" placeholder="请再次输入密码" class="u1177_input" ></el-input>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u1170" class="ax_default box_1">
          <div id="u1170_div" class=""></div>
          <div id="u1170_text" class="text ">
            <el-button id="u1170_btn" style="text-decoration:none;" type="primary" v-on:click="next_two">下一步</el-button>
          </div>
        </div>
      </el-form>
    </div>
    <div id="model_three">
      <el-form>
        <div id="u1183" class="ax_default" data-left="634" data-top="271" data-width="653" data-height="96">

          <!-- Unnamed (椭圆形) -->
          <div id="u1184" class="ax_default ellipse">
            <img id="u1184_img" class="img " src="../assets/images/填报端找回密码/u133.svg"/>
            <div id="u1184_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u1185" class="ax_default label">
            <div id="u1185_div" class=""></div>
            <div id="u1185_text" class="text ">
              <p><span style="text-decoration:none;">用户验证</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u1186" class="ax_default line">
            <img id="u1186_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u1186_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u1187" class="ax_default ellipse">
            <img id="u1187_img" class="img " src="../assets/images/填报端找回密码/u133.svg"/>
            <div id="u1187_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u1188" class="ax_default label">
            <div id="u1188_div" class=""></div>
            <div id="u1188_text" class="text ">
              <p><span style="text-decoration:none;">重置密码</span></p>
            </div>
          </div>

          <!-- Unnamed (线) -->
          <div id="u1189" class="ax_default line">
            <img id="u1189_img" class="img " src="../assets/images/填报端找回密码/u112.svg"/>
            <div id="u1189_text" class="text " style="display:none; visibility: hidden">
              <p></p>
            </div>
          </div>

          <!-- Unnamed (椭圆形) -->
          <div id="u1190" class="ax_default ellipse">
            <img id="u1190_img" class="img " src="../assets/images/填报端找回密码/u110.svg"/>
            <div id="u1190_text" class="text ">
              <p><span style="text-decoration:none;">3</span></p>
            </div>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u1191" class="ax_default label">
            <div id="u1191_div" class=""></div>
            <div id="u1191_text" class="text ">
              <p><span style="text-decoration:none;">完成</span></p>
            </div>
          </div>
        </div>
      </el-form>
      <el-form>
        <div id="u1192" class="ax_default icon">
          <img id="u1192_img" class="img " src="../assets/images/填报端找回密码/u145.svg"/>
          <div id="u1192_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (形状) -->
        <div id="u1193" class="ax_default icon">
          <img id="u1193_img" class="img " src="../assets/images/填报端找回密码/u145.svg"/>
          <div id="u1193_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (形状) -->
        <div id="u1194" class="ax_default icon">
          <img id="u1194_img" class="img " src="../assets/images/填报端找回密码/u197.svg"/>
          <div id="u1194_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u1195" class="ax_default label">
          <div id="u1195_div" class=""></div>
          <div id="u1195_text" class="text ">
            <p><span style="text-decoration:none;">恭喜您，密码重置成功</span></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u1196" class="ax_default label">
          <div id="u1196_div" class=""></div>
          <div id="u1196_text" class="text ">
            <p><span style="text-decoration:none;color:#F59A23;">3 </span><span style="text-decoration:none;">秒后自动跳转到登录页面...</span></p>
          </div>
        </div>
      </el-form>
    </div>
  </el-form>
</div>

</template>

<script>
    import Vue from 'vue';
    import '../views/css/wangji_styles.css';
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
            //手机号码
            mobile: null,
            //验证码
            verification: null,
            //登陆密码
            password: null,
            //确认密码
            confirm_password:null,
          }
        }
      },
      methods: {
        /**获取验证码*/
        get_verification(){
          console.log(this.form.mobile, '手机号码');
        },
        /**下一步*/
        next(){

          /**定义model*/
          let modelOne = document.getElementById("model_one");
          let modelTwo = document.getElementById("model_two");

          /**1、先判断验证码是否正确*/

          /**2、隐藏第一个、第三个模块页面*/
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

          setTimeout(()=>{
            //需要延迟的代码 :3秒后延迟跳转到首页，可以加提示什么的
            this.$router.push({
              path:"login"
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
    padding:10px 0;
    margin: auto;
    position: center;
    text-align: center;
    width:1918px;
    height:136px;
  }
  #text_t2{
    font-weight:700;
    font-style:normal;
    font-size:40px;
  }
  #model_one{

  }
  #model_two{
    display: none;
  }
  #model_three{
    display: none;
  }
</style>
