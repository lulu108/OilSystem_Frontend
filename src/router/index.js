import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../pages/Dashboard.vue";
import RealtimeMonitor from "../pages/RealtimeMonitor.vue";
import ProductionData from "../pages/ProductionData.vue";
import AlertCenter from "../pages/AlertCenter.vue";
import Prediction from "../pages/Prediction.vue";
import FaultDiagnosis from "../pages/FaultDiagnosis.vue";
import HistoryExport from "../pages/HistoryExport.vue";
import CloudFiles from "../pages/CloudFiles.vue";
import SystemManage from "../pages/SystemManage.vue";

const routes = [
  { path: "/", redirect: "/dashboard" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/realtime", name: "RealtimeMonitor", component: RealtimeMonitor },
  { path: "/production", name: "ProductionData", component: ProductionData },
  { path: "/alerts", name: "AlertCenter", component: AlertCenter },
  { path: "/prediction", name: "Prediction", component: Prediction },
  { path: "/fault", name: "FaultDiagnosis", component: FaultDiagnosis },
  { path: "/history", name: "HistoryExport", component: HistoryExport },
  { path: "/cloud", name: "CloudFiles", component: CloudFiles },
  { path: "/system", name: "SystemManage", component: SystemManage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
