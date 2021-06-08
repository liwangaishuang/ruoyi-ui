<template>
  <div class="personal_login" style="margin:0 auto">
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

  </div>
</template>

<script>

  import '../views/css/zhuce_styles.css';
  import ElForm from "element-ui/packages/form/src/form";

    export default {
      components: {ElForm},
      name: "geren_zhuce",
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
        onSubmit() {
          console.log('submit!');
        }
      }
    }

</script>

<style>
</style>
