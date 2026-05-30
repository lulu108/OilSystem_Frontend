import {
  alertList,
  alertOverview,
  cloudFiles,
  dashboardStats,
  faultCases,
  predictionData,
  productionTable,
  realtimeStatus,
  systemStatus,
  trendData,
} from "../mock/data";

export const getDashboardStats = () =>
  Promise.resolve({
    dashboardStats,
    trendData,
    alertOverview,
    systemStatus,
  });

export const getRealtimeStatus = () => Promise.resolve(realtimeStatus);

export const getProductionData = () => Promise.resolve(productionTable);

export const getAlerts = () => Promise.resolve(alertList);

export const getPredictionData = () => Promise.resolve(predictionData);

export const diagnoseFault = (text) =>
  Promise.resolve({
    input: text,
    cases: faultCases,
    suggestion:
      "根据当前采集到的振动、压力与温度数据，建议优先排查抽油机机械磨损与油管密封。",
  });

export const exportHistoryXml = (params) =>
  Promise.resolve({
    ok: true,
    params,
    fileName: "history_export.xml",
  });

export const getCloudFiles = () => Promise.resolve(cloudFiles);

export const repairSystem = () =>
  Promise.resolve({ ok: true, message: "已触发模拟操作" });

export const startRecord = () =>
  Promise.resolve({ ok: true, message: "已触发模拟操作" });

export const stopRecord = () =>
  Promise.resolve({ ok: true, message: "已触发模拟操作" });

export const takeScreenshot = () =>
  Promise.resolve({ ok: true, message: "已触发模拟操作" });
