<template>
  <div style="padding: 20px 40px">
    <!-- 概览区域 -->
    <el-row>
      <el-col :span="24">
        <div
          style="
            display: flex;
            align-items: center;
            padding: 10px;
            border: solid 1px #c0c4cc;
            border-radius: 5px;
          "
        >
          <div style="padding-right: 10px; font-size: 25px; font-weight: bold">
            申报数据统计
          </div>
          <div
            style="
              padding: 10px;
              display: flex;
              align-items: center;
              border-left: solid 2px #dcdfe6;
            "
          >
            <div
              style="
                background-color: #02a7f0b2;
                padding: 10px;
                border-radius: 6px;
              "
            >
              <i
                slot="icon"
                class="iconfont icon-boshimao"
                style="font-size: 40px; color: #ffffff"
              ></i>
            </div>
            <div style="padding: 10px">
              <div
                style="
                  font-weight: bold;
                  font-size: 22px;
                  display: flex;
                  justify-content: center;
                "
              >
                108
              </div>
              <div>人才专家数</div>
            </div>
          </div>

          <div
            style="
              padding: 10px;
              display: flex;
              align-items: center;
              border-left: solid 2px #dcdfe6;
            "
          >
            <div
              style="
                background-color: #95f204;
                padding: 10px;
                border-radius: 6px;
              "
            >
              <i
                slot="icon"
                class="iconfont icon-jianzhu"
                style="font-size: 40px; color: #ffffff"
              ></i>
            </div>
            <div style="padding: 10px">
              <div
                style="
                  font-weight: bold;
                  font-size: 22px;
                  display: flex;
                  justify-content: center;
                "
              >
                36
              </div>
              <div>关联企业</div>
            </div>
          </div>

          <div
            style="
              padding: 10px;
              display: flex;
              align-items: center;
              border-left: solid 2px #dcdfe6;
            "
          >
            <div
              style="
                background-color: #c280ff;
                padding: 10px;
                border-radius: 6px;
              "
            >
              <i
                slot="icon"
                class="iconfont icon-icon1"
                style="font-size: 40px; color: #ffffff"
              ></i>
            </div>
            <div style="padding: 10px">
              <div
                style="
                  font-weight: bold;
                  font-size: 22px;
                  display: flex;
                  justify-content: center;
                "
              >
                137
              </div>
              <div>注册用户数</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 人才专家行业领域分布 与 人才/企业区域分布-->
    <el-row style="min-height: 375px">
      <el-col :span="12"
        ><div style="padding: 10px">
          <div style="display: flex; justify-content: space-between">
            <div style="font-size: 20px; font-weight: bold">
              人才专家行业领域分布
            </div>
            <div>
              <el-select v-model="value" placeholder="请选择" size="mini">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
          <BarChart />
        </div>
      </el-col>
      <el-col :span="12"
        ><div style="padding: 10px">
          <div style="display: flex; justify-content: space-between">
            <div style="font-size: 20px; font-weight: bold">
              人才/企业区域分布
            </div>
          </div>
          <BarChart /></div
      ></el-col>
    </el-row>

    <!-- 单位类别 与 年龄与性别分布-->
    <el-row style="min-height: 375px">
      <el-col :span="16"
        ><div style="padding: 10px">
          <div style="display: flex; justify-content: space-between">
            <div style="font-size: 20px; font-weight: bold">单位类别</div>
            <div>
              <el-select v-model="value" placeholder="请选择" size="mini">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
          <BarChart /></div
      ></el-col>
      <el-col :span="8"
        ><div style="padding: 10px">
          <div style="display: flex; justify-content: space-between">
            <div style="font-size: 20px; font-weight: bold">年龄与性别分布</div>
          </div>
          <PieChart /></div
      ></el-col>
    </el-row>
    <!-- 申报趋势 与 学历分布 与 专业类别-->
    <el-row style="min-height: 375px">
      <el-col :span="8"
        ><div style="padding: 10px">
          <div style="display: flex; justify-content: space-between">
            <div style="font-size: 20px; font-weight: bold">申报趋势</div>
            <div>
              <el-tabs
                v-model="activeName"
                type="card"
                @tab-click="handleClick"
                size="mini"
              >
                <el-tab-pane
                  label="月度"
                  name="first"
                  size="mini"
                ></el-tab-pane>
                <el-tab-pane
                  label="年度"
                  name="second"
                  size="mini"
                ></el-tab-pane>
              </el-tabs>
            </div>
          </div>
          <PieChart /></div
      ></el-col>
      <el-col :span="8"
        ><div style="padding: 10px">
          <div style="display: flex; justify-content: space-between">
            <div style="font-size: 20px; font-weight: bold">学历分布</div>
          </div>
          <PieChart /></div
      ></el-col>
      <el-col :span="8"
        ><div style="padding: 10px">
          <div style="display: flex; justify-content: space-between">
            <div style="font-size: 20px; font-weight: bold">专业类别</div>
          </div>
          <PieChart /></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import LineChart from './LineChart.vue'
import BarChart from './BarChart.vue'
import PanelChart from './PanelGroup.vue'
import PieChart from './PieChart.vue'

export default {
  components: {
    LineChart,
    BarChart,
    PanelChart,
    PieChart
  },
  data() {
    return {
      chart: null
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  // background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
