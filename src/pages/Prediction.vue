<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import * as echarts from "echarts";
import { getPredictionData } from "../api";

const chartRef = ref(null);
let chartInstance = null;
const seriesData = ref({ days: [], actual: [], forecast: [] });

const initChart = () => {
  if (!chartRef.value) return;
  chartInstance = echarts.init(chartRef.value);
  chartInstance.setOption({
    tooltip: { trigger: "axis" },
    legend: { data: ["真实产量", "预测产量"], textStyle: { color: "#8fb3d9" } },
    grid: { left: 36, right: 24, top: 30, bottom: 30 },
    xAxis: {
      type: "category",
      data: seriesData.value.days,
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
        name: "真实产量",
        type: "line",
        data: seriesData.value.actual,
        smooth: true,
        lineStyle: { color: "#3aa0ff", width: 3 },
        itemStyle: { color: "#3aa0ff" },
      },
      {
        name: "预测产量",
        type: "line",
        data: seriesData.value.forecast,
        smooth: true,
        lineStyle: { color: "#00d2ff", width: 3, type: "dashed" },
        itemStyle: { color: "#00d2ff" },
      },
    ],
  });
};

const handleResize = () => {
  if (chartInstance) chartInstance.resize();
};

const loadPrediction = async () => {
  seriesData.value = await getPredictionData();
  initChart();
};

onMounted(() => {
  loadPrediction();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  if (chartInstance) chartInstance.dispose();
});
</script>

<template>
  <div class="page prediction">
    <div class="page-header">
      <div>
        <h2>Prediction 产量预测</h2>
        <p>真实产量与预测产量对比分析。</p>
      </div>
    </div>

    <el-card class="panel-card" shadow="never">
      <div class="panel-title">预测趋势</div>
      <div ref="chartRef" class="chart-block"></div>
    </el-card>
  </div>
</template>
