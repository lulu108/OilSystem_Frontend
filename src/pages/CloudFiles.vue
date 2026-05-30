<script setup>
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import { getCloudFiles } from "../api";

const files = ref([]);

const notify = () => {
  ElMessage.info("功能开发中");
};

const loadFiles = async () => {
  files.value = await getCloudFiles();
};

onMounted(() => {
  loadFiles();
});
</script>

<template>
  <div class="page cloud">
    <div class="page-header">
      <div>
        <h2>Cloud Files 云端文件</h2>
        <p>截图、视频与 XML 文件统一管理。</p>
      </div>
    </div>

    <el-card class="panel-card" shadow="never">
      <el-table :data="files" stripe class="dark-table">
        <el-table-column prop="name" label="文件名" />
        <el-table-column prop="type" label="类型" width="120" />
        <el-table-column prop="size" label="大小" width="120" />
        <el-table-column label="操作" width="160">
          <template #default>
            <el-button type="primary" link @click="notify">预览</el-button>
            <el-button type="info" link @click="notify">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
