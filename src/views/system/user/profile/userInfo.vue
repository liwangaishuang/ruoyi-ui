<template>
  <el-form ref="form" :model="user" :rules="rules" label-width="120px">
    <el-form-item label="用户账号：" prop="nickName">
      {{user.userName}}
    </el-form-item>
    <el-form-item label="手机号码：" prop="phonenumber">
      <el-input v-model="user.phonenumber" maxlength="11" oninput ="value=value.replace(/[^\d]/g,'')"/>
    </el-form-item>
    <el-form-item label="手机验证码：" prop="phonenumber">
      <el-input v-model="user.phonenumber2" maxlength="11" style="width: 30%"/>
      <el-button type="primary" style="margin-left:5px">发送验证码</el-button>
    </el-form-item>
    <el-form-item label="专家姓名：" prop="phonenumber">
      <el-input v-model="user.expertsName"/>
    </el-form-item>
    <el-form-item label="证件号码：">
      <el-select v-model="user.idNumberType" placeholder="请选择" style="width: 30%">
        <el-option
          v-for="dict in idNumberTypeOptions"
          :key="dict.dictValue"
          :label="dict.dictLabel"
          :value="dict.dictValue"
        ></el-option>
      </el-select>
      <el-input v-model="user.userIdNumber" style="width: 70%" oninput ="value=value.replace(/[^\d]/g,'')"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="mini" @click="submit">保存</el-button>
      <el-button type="danger" size="mini" @click="close">关闭</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { updateUserProfile } from "@/api/system/user";
import ElButton from "element-ui/packages/button/src/button";

export default {
  components: {ElButton},
  props: {
    user: {
      type: Object
    }
  },
  created() {
    this.getDicts("id_number_type").then(response => {
      this.idNumberTypeOptions = response.data;
    });
  },
  data() {
    return {
      // 证件类型字典
      idNumberTypeOptions: [],
      // 表单校验
      rules: {
        nickName: [
          { required: true, message: "用户昵称不能为空", trigger: "blur" }
        ],
        email: [
          { required: true, message: "邮箱地址不能为空", trigger: "blur" },
          {
            type: "email",
            message: "'请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        phonenumber: [
          { required: true, message: "手机号码不能为空", trigger: "blur" },
          {
            pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
            message: "请输入正确的手机号码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          updateUserProfile(this.user).then(response => {
            this.msgSuccess("修改成功");
          });
        }
      });
    },
    close() {
      this.$store.dispatch("tagsView/delView", this.$route);
      this.$router.push({ path: "/index" });
    }
  }
};
</script>
