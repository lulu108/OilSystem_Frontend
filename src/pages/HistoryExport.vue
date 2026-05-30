<script setup>
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import { exportHistoryXml, getProductionData } from "../api";

const dateRange = ref([]);
const device = ref("");
const devices = ref([]);

const exportXml = async () => {
  await exportHistoryXml({ range: dateRange.value, device: device.value });
  ElMessage.success("已触发模拟操作");
};

const loadDevices = async () => {
  const rows = await getProductionData();
  devices.value = Array.from(new Set(rows.map((item) => item.well)));
};

onMounted(() => {
  loadDevices();
});
</script>

<template>
  <div class="page history">
    <div class="page-header">
      <div>
        <h2>History Export 历史 XML 导出</h2>
        <p>选择时间范围与设备编号导出历史数据。</p>
      </div>
      <el-button class="ghost-button" type="primary" @click="exportXml"
        >导出 XML</el-button
      >
    </div>

    <el-card class="panel-card" shadow="never">
      <el-form label-position="top" class="form-grid">
        <el-form-item label="开始 / 结束时间">
          <el-date-picker
            v-model="dateRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="设备编号">
          <el-select
            v-model="device"
            placeholder="请选择设备编号"
            style="width: 100%"
          >
            <el-option
              v-for="item in devices"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
