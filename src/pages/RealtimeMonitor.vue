<script setup>
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import {
  getRealtimeStatus,
  repairSystem,
  startRecord,
  stopRecord,
  takeScreenshot,
} from "../api";

const status = ref({
  well: "-",
  health: 0,
  temperature: "-",
  oilPressure: "-",
  casingPressure: "-",
  flow: "-",
  deviceStatus: "-",
  faultLevel: "-",
  latency: "-",
  sync: "-",
  healthMetrics: [],
});

const notify = (text = "已触发模拟操作") => {
  ElMessage.success(text);
};

const loadStatus = async () => {
  status.value = await getRealtimeStatus();
};

const handleStartRecord = async () => {
  const res = await startRecord();
  notify(res.message);
};

const handleStopRecord = async () => {
  const res = await stopRecord();
  notify(res.message);
};

const handleScreenshot = async () => {
  const res = await takeScreenshot();
  notify(res.message);
};

const handleRepair = async () => {
  const res = await repairSystem();
  notify(res.message);
};

onMounted(() => {
  loadStatus();
});
</script>

<template>
  <div class="page realtime">
    <div class="page-header">
      <div>
        <h2>Realtime Monitor 实时监控</h2>
        <p>设备运行画面、关键状态与健康指标实时展示。</p>
      </div>
      <div class="action-group">
        <el-button
          type="primary"
          class="ghost-button"
          @click="handleStartRecord"
          >开始录制</el-button
        >
        <el-button type="warning" class="ghost-button" @click="handleStopRecord"
          >停止录制</el-button
        >
        <el-button type="info" class="ghost-button" @click="handleScreenshot"
          >截图</el-button
        >
        <el-button type="danger" class="ghost-button" @click="handleRepair"
          >错误修复</el-button
        >
      </div>
    </div>

    <el-row :gutter="20">
      <el-col :xs="24" :lg="16">
        <el-card class="panel-card" shadow="never">
          <div class="panel-title">图片流 / Unity 显示区域</div>
          <div class="monitor-screen">
            <div class="monitor-header">
              <span>井站 A-102 实时画面</span>
              <span class="monitor-status">稳定传输</span>
            </div>
            <div class="monitor-body">
              <div class="pulse-dot"></div>
              <div>实时画面占位区域</div>
              <div class="media-sub">1920 x 1080 | 流媒体模拟</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :lg="8">
        <el-card class="panel-card" shadow="never">
          <div class="panel-title">实时状态面板</div>
          <div class="status-panel">
            <div class="status-row">
              <span>当前井号</span>
              <strong>{{ status.well }}</strong>
            </div>
            <div class="status-row">
              <span>健康值</span>
              <strong class="status-ok">{{ status.health }}%</strong>
            </div>
            <div class="status-row">
              <span>温度</span>
              <strong>{{ status.temperature }}</strong>
            </div>
            <div class="status-row">
              <span>油压</span>
              <strong>{{ status.oilPressure }}</strong>
            </div>
            <div class="status-row">
              <span>套压</span>
              <strong>{{ status.casingPressure }}</strong>
            </div>
            <div class="status-row">
              <span>流量</span>
              <strong>{{ status.flow }}</strong>
            </div>
            <div class="status-row">
              <span>设备状态</span>
              <el-tag type="success" size="small">{{
                status.deviceStatus
              }}</el-tag>
            </div>
            <div class="status-row">
              <span>故障等级</span>
              <el-tag type="info" size="small">{{ status.faultLevel }}</el-tag>
            </div>
          </div>
        </el-card>
        <el-card class="panel-card" shadow="never">
          <div class="panel-title">设备健康值</div>
          <div class="health-list">
            <div
              v-for="item in status.healthMetrics"
              :key="item.label"
              class="health-item"
            >
              <div class="health-label">{{ item.label }}</div>
              <el-progress
                :percentage="item.value"
                :stroke-width="10"
                :color="item.color"
              />
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
