<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import * as echarts from "echarts";
import { getDashboardStats } from "../api";

const trendRef = ref(null);
let trendChart = null;
const stats = ref([]);
const overview = ref([]);
const statusItems = ref([]);
const trendSeries = ref({ days: [], output: [] });

const initTrendChart = () => {
  if (!trendRef.value) return;
  trendChart = echarts.init(trendRef.value);
  trendChart.setOption({
    grid: { left: 36, right: 24, top: 30, bottom: 30 },
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: trendSeries.value.days,
      axisLine: { lineStyle: { color: "#2b4c6b" } },
      axisLabel: { color: "#8fb3d9" },
    },
    yAxis: {
      type: "value",
      axisLabel: { color: "#8fb3d9" },
      splitLine: { lineStyle: { color: "rgba(143,179,217,0.15)" } },
    },
    series: [
      {
        name: "产量",
        type: "line",
        data: trendSeries.value.output,
        smooth: true,
        symbol: "circle",
        symbolSize: 6,
        lineStyle: { color: "#3aa0ff", width: 3 },
        itemStyle: { color: "#4fc3f7" },
        areaStyle: { color: "rgba(58,160,255,0.2)" },
      },
    ],
  });
};

const handleResize = () => {
  if (trendChart) trendChart.resize();
};

const refreshData = async () => {
  await loadDashboard();
  ElMessage.info("已触发模拟操作");
};

const loadDashboard = async () => {
  const data = await getDashboardStats();
  stats.value = data.dashboardStats;
  overview.value = data.alertOverview;
  statusItems.value = data.systemStatus;
  trendSeries.value = data.trendData;
  initTrendChart();
};

onMounted(() => {
  loadDashboard();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  if (trendChart) trendChart.dispose();
});
</script>

<template>
  <div class="page dashboard">
    <div class="page-header">
      <div>
        <h2>Dashboard 总览</h2>
        <p>核心生产指标、预警态势与系统运行状态一览。</p>
      </div>
      <el-button class="ghost-button" type="primary" @click="refreshData"
        >刷新数据</el-button
      >
    </div>

    <el-row :gutter="20" class="stat-grid">
      <el-col v-for="stat in stats" :key="stat.label" :xs="24" :sm="12" :lg="6">
        <el-card class="stat-card" shadow="never">
          <div class="stat-top">
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-pill">{{ stat.trend }}</div>
          </div>
          <div class="stat-value">
            {{ stat.value }}<span class="stat-unit">{{ stat.unit }}</span>
          </div>
          <div class="stat-meta">近 24 小时数据更新</div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="panel-grid">
      <el-col :xs="24" :lg="16">
        <el-card class="panel-card" shadow="never">
          <div class="panel-title">产量趋势</div>
          <div ref="trendRef" class="chart-block"></div>
        </el-card>
      </el-col>
      <el-col :xs="24" :lg="8">
        <el-card class="panel-card" shadow="never">
          <div class="panel-title">预警概览</div>
          <div class="alert-list">
            <div
              v-for="alert in overview"
              :key="alert.level"
              class="alert-item"
            >
              <el-tag
                class="alert-tag"
                :type="
                  alert.level === '严重故障'
                    ? 'danger'
                    : alert.level === '中度异常'
                      ? 'warning'
                      : alert.level === '轻微异常'
                        ? 'info'
                        : 'success'
                "
              >
                {{ alert.level }}
              </el-tag>
              <div class="alert-desc">{{ alert.desc }}</div>
              <div class="alert-count">{{ alert.count }} 条</div>
            </div>
          </div>
        </el-card>
        <el-card class="panel-card" shadow="never">
          <div class="panel-title">系统运行状态</div>
          <div class="status-list">
            <div
              v-for="item in statusItems"
              :key="item.name"
              class="status-item"
            >
              <div class="status-title">
                <span>{{ item.name }}</span>
                <span class="status-text">{{ item.status }}</span>
              </div>
              <el-progress
                :percentage="item.health"
                :stroke-width="10"
                color="#3aa0ff"
              />
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
