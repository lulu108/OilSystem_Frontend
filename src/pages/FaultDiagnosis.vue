<script setup>
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import { diagnoseFault } from "../api";

const faultText = ref("");
const cases = ref([]);
const suggestion = ref("");

const startDiagnosis = async () => {
  const result = await diagnoseFault(faultText.value);
  cases.value = result.cases;
  suggestion.value = result.suggestion;
  ElMessage.success("已触发模拟操作");
};

const loadInitial = async () => {
  const result = await diagnoseFault("");
  cases.value = result.cases;
  suggestion.value = result.suggestion;
};

onMounted(() => {
  loadInitial();
});
</script>

<template>
  <div class="page fault">
    <div class="page-header">
      <div>
        <h2>Fault Diagnosis 故障诊断</h2>
        <p>输入故障现象，模拟诊断与建议输出。</p>
      </div>
      <el-button class="ghost-button" type="primary" @click="startDiagnosis"
        >开始诊断</el-button
      >
    </div>

    <el-row :gutter="20">
      <el-col :xs="24" :lg="12">
        <el-card class="panel-card" shadow="never">
          <div class="panel-title">故障现象输入</div>
          <el-input
            v-model="faultText"
            type="textarea"
            :rows="8"
            placeholder="请输入故障现象描述，例如：油压突然下降、振动异常等..."
          />
        </el-card>
      </el-col>
      <el-col :xs="24" :lg="12">
        <el-card class="panel-card" shadow="never">
          <div class="panel-title">相似案例</div>
          <div class="case-list">
            <div v-for="item in cases" :key="item.name" class="case-item">
              <div class="case-title">{{ item.name }}</div>
              <div class="case-desc">{{ item.suggestion }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-card class="panel-card" shadow="never">
      <div class="panel-title">处理建议</div>
      <div class="suggestion-box">{{ suggestion }}</div>
    </el-card>
  </div>
</template>
