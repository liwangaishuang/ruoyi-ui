<template>
  <div class="guanli">
    <div class="personal_login">
      <el-form ref="form" :model="form">
        <el-form-item>

          <!-- Unnamed (图片) -->
          <div id="u1138">
            <img id="u1138_img" class="img " src="../assets/images/u61.png"/>
          </div>

          <!-- Unnamed (矩形) -->
          <div id="u1139" class="ax_default _一级标题">
            <div id="u1139_div" class=""></div>
            <div id="u1139_text" class="text ">
              <p><span style="text-decoration:none;">深圳市人才评审专家库信息管理平台</span></p>
            </div>
          </div>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
    import ElForm from "element-ui/packages/form/src/form";

    export default {
      components: {ElForm},
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
          }
        }
      },
      methods: {
        onSubmit(){
          console.log("submit!");
        }
      }
    }

</script>

<style>

.guanli{
  text-align: center;
}

#u1138_img {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:100%;
  height:100%;
}
#u1138 {
  border-width:0px;
  left:1px;
  top:1px;
  width:1918px;
  height:136px;
  display:flex;
}
#u1138 .text {
  position:absolute;
  align-self:center;
  padding:2px 2px 2px 2px;
  box-sizing:border-box;
  width:100%;
}
#u1138_text {
  border-width:0px;
  word-wrap:break-word;
  text-transform:none;
  visibility:hidden;
}

#u1139_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:768px;
  height:55px;
  background:inherit;
  background-color:rgba(255, 255, 255, 0);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  font-family:'Arial Negreta', 'Arial Normal', 'Arial';
  font-weight:700;
  font-style:normal;
  font-size:48px;
  color:#FFFFFF;
}
#u1139 {
  border-width:0px;
  position:absolute;
  left:576px;
  top:42px;
  width:768px;
  height:55px;
  display:flex;
  font-family:'Arial Negreta', 'Arial Normal', 'Arial';
  font-weight:700;
  font-style:normal;
  font-size:48px;
  color:#FFFFFF;
}
#u1139 .text {
  position:absolute;
  align-self:flex-start;
  padding:0px 0px 0px 0px;
  box-sizing:border-box;
  width:100%;
}
#u1139_text {
  border-width:0px;
  white-space:nowrap;
  text-transform:none;
}
/*.u2_text{
  height: 100px;
  margin: 0 auto;
  font-size: 45px;
  text-align: center;
  background-image: url("../assets/images/u61.png");
}
.u3_text{
  font-size: 35px;
}*/
</style>
