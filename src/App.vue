<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const menuItems = [
  { path: "/dashboard", label: "首页总览" },
  { path: "/realtime", label: "实时监控" },
  { path: "/production", label: "生产数据" },
  { path: "/alerts", label: "异常预警" },
  { path: "/prediction", label: "产量预测" },
  { path: "/fault", label: "故障诊断" },
  { path: "/history", label: "历史导出" },
  { path: "/cloud", label: "云端文件" },
  { path: "/system", label: "系统管理" },
];
</script>

<template>
  <el-container class="app-shell">
    <el-aside class="sidebar" width="240px">
      <div class="brand">
        <div class="brand-mark">OS</div>
        <div class="brand-text">
          <div class="brand-name">OilSystem</div>
          <div class="brand-sub">工业数据智能中枢</div>
        </div>
      </div>
      <el-menu class="sidebar-menu" :default-active="route.path" router>
        <el-menu-item
          v-for="item in menuItems"
          :key="item.path"
          :index="item.path"
        >
          <span>{{ item.label }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="app-header">
        <div class="header-title">油田生产数据分析预警与故障诊断系统</div>
        <div class="header-meta">
          <span class="meta-chip">实时运行</span>
          <span class="meta-chip is-outline">数据模拟</span>
        </div>
      </el-header>
      <el-main class="app-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
