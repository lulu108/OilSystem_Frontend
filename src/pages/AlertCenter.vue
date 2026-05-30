<script setup>
import { onMounted, ref } from "vue";
import { getAlerts } from "../api";

const alerts = ref([]);

const levelType = (level) => {
  if (level === "严重故障") return "danger";
  if (level === "中度异常") return "warning";
  if (level === "轻微异常") return "info";
  return "success";
};

const loadAlerts = async () => {
  alerts.value = await getAlerts();
};

onMounted(() => {
  loadAlerts();
});
</script>

<template>
  <div class="page alerts">
    <div class="page-header">
      <div>
        <h2>Alert Center 异常预警</h2>
        <p>预警等级、触发时间与异常类型集中展示。</p>
      </div>
    </div>

    <el-card class="panel-card" shadow="never">
      <el-table :data="alerts" stripe class="dark-table">
        <el-table-column prop="id" label="预警编号" width="140" />
        <el-table-column label="等级" width="120">
          <template #default="{ row }">
            <el-tag :type="levelType(row.level)">
              {{ row.level }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="well" label="井号" width="120" />
        <el-table-column prop="type" label="异常类型" />
        <el-table-column prop="time" label="时间" width="180" />
      </el-table>
    </el-card>
  </div>
</template>
