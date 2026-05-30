<script setup>
import { ElMessage } from "element-plus";

const notify = () => {
  ElMessage.info("功能开发中");
};
</script>

<template>
  <div class="page system">
    <div class="page-header">
      <div>
        <h2>System Manage 系统管理</h2>
        <p>用户权限、操作日志与数据库状态集中管理。</p>
      </div>
      <el-button class="ghost-button" type="primary" @click="notify"
        >同步配置</el-button
      >
    </div>

    <el-row :gutter="20">
      <el-col :xs="24" :lg="12">
        <el-card class="panel-card" shadow="never">
          <div class="panel-title">用户管理</div>
          <div class="placeholder-box">
            当前在线用户 24 人，角色分布与权限策略待接入。
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :lg="12">
        <el-card class="panel-card" shadow="never">
          <div class="panel-title">角色权限</div>
          <div class="placeholder-box">
            管理员 / 运维 / 观测 三类权限模板占位。
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :lg="12">
        <el-card class="panel-card" shadow="never">
          <div class="panel-title">操作日志</div>
          <div class="placeholder-box">近期操作记录与审计链路占位。</div>
        </el-card>
      </el-col>
      <el-col :xs="24" :lg="12">
        <el-card class="panel-card" shadow="never">
          <div class="panel-title">数据库状态</div>
          <div class="placeholder-box">主从同步正常，备份策略占位。</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
