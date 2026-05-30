<script setup>
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import { getProductionData } from "../api";

const tableData = ref([]);

const notify = () => {
  ElMessage.info("功能开发中");
};

const loadProduction = async () => {
  tableData.value = await getProductionData();
};

onMounted(() => {
  loadProduction();
});
</script>

<template>
  <div class="page production">
    <div class="page-header">
      <div>
        <h2>Production Data 生产数据</h2>
        <p>油井生产数据统计与指标明细。</p>
      </div>
      <el-button class="ghost-button" type="primary" @click="notify"
        >导出报表</el-button
      >
    </div>

    <el-card class="panel-card" shadow="never">
      <el-table :data="tableData" stripe class="dark-table">
        <el-table-column prop="well" label="井号" width="120" />
        <el-table-column prop="date" label="日期" width="140" />
        <el-table-column prop="dailyOutput" label="日产油量" />
        <el-table-column prop="waterCut" label="含水率" />
        <el-table-column prop="oilPressure" label="油压" />
        <el-table-column prop="casingPressure" label="套压" />
        <el-table-column prop="temperature" label="温度" />
        <el-table-column prop="status" label="状态" />
      </el-table>
    </el-card>
  </div>
</template>
