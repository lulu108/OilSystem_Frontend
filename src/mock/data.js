export const dashboardStats = [
  { label: "油井数量", value: 216, unit: "口", trend: "+4" },
  { label: "在线设备", value: 184, unit: "台", trend: "+2.1%" },
  { label: "当前预警", value: 5, unit: "条", trend: "-1" },
  { label: "今日导出", value: 12, unit: "次", trend: "+3" },
];

export const trendData = {
  days: ["05-24", "05-25", "05-26", "05-27", "05-28", "05-29", "05-30"],
  output: [6200, 6450, 6400, 6700, 6900, 6800, 6820],
};

export const alertOverview = [
  { level: "严重故障", count: 1, desc: "压差异常" },
  { level: "中度异常", count: 2, desc: "温度波动" },
  { level: "轻微异常", count: 2, desc: "含水率上升" },
  { level: "正常", count: 12, desc: "运行稳定" },
];

export const systemStatus = [
  { name: "采集服务", status: "运行中", health: 95 },
  { name: "预警引擎", status: "运行中", health: 91 },
  { name: "诊断模块", status: "运行中", health: 93 },
  { name: "文件中心", status: "运行中", health: 90 },
];

export const productionTable = [
  {
    well: "A-102",
    date: "2026-05-30",
    dailyOutput: 520,
    waterCut: "18.2%",
    oilPressure: "12.4MPa",
    casingPressure: "10.1MPa",
    temperature: "68C",
    status: "正常",
  },
  {
    well: "B-207",
    date: "2026-05-30",
    dailyOutput: 480,
    waterCut: "21.4%",
    oilPressure: "11.8MPa",
    casingPressure: "9.6MPa",
    temperature: "72C",
    status: "关注",
  },
  {
    well: "C-311",
    date: "2026-05-30",
    dailyOutput: 610,
    waterCut: "16.9%",
    oilPressure: "12.9MPa",
    casingPressure: "10.4MPa",
    temperature: "66C",
    status: "正常",
  },
];

export const alertList = [
  {
    id: "AL-0921",
    level: "严重故障",
    well: "B-207",
    type: "压差异常",
    time: "2026-05-30 09:20",
  },
  {
    id: "AL-0924",
    level: "中度异常",
    well: "A-102",
    type: "含水率上升",
    time: "2026-05-30 10:12",
  },
  {
    id: "AL-0929",
    level: "中度异常",
    well: "D-118",
    type: "温度波动",
    time: "2026-05-30 10:55",
  },
  {
    id: "AL-0932",
    level: "轻微异常",
    well: "C-311",
    type: "采集延迟",
    time: "2026-05-30 11:30",
  },
  {
    id: "AL-0936",
    level: "正常",
    well: "A-118",
    type: "运行平稳",
    time: "2026-05-30 12:05",
  },
];

export const predictionData = {
  days: ["05-24", "05-25", "05-26", "05-27", "05-28", "05-29", "05-30"],
  actual: [6200, 6450, 6400, 6700, 6900, 6800, 6820],
  forecast: [6150, 6480, 6520, 6650, 6880, 6900, 6950],
};

export const faultCases = [
  { name: "抽油机振动异常", suggestion: "检查轴承磨损与地脚螺栓紧固情况。" },
  { name: "油压持续走低", suggestion: "排查泵筒密封与进油阀状态。" },
  { name: "含水率骤升", suggestion: "结合地层数据判断井底水窜风险。" },
];

export const cloudFiles = [
  { name: "well_A-102_shot_0530.png", type: "截图", size: "2.4MB" },
  { name: "well_B-207_stream_0530.mp4", type: "视频", size: "48.2MB" },
  { name: "history_0525_0530.xml", type: "XML", size: "1.1MB" },
];

export const deviceOptions = ["A-102", "B-207", "C-311", "D-118"];

export const realtimeStatus = {
  well: "A-102",
  health: 93,
  temperature: "68C",
  oilPressure: "12.4MPa",
  casingPressure: "10.1MPa",
  flow: "3.8m3/h",
  deviceStatus: "在线",
  faultLevel: "轻微异常",
  latency: "120ms",
  sync: "正常",
  healthMetrics: [
    { label: "泵机状态", value: 93, color: "#3aa0ff" },
    { label: "传感器阵列", value: 88, color: "#00d2ff" },
    { label: "能耗评分", value: 91, color: "#4bc0c8" },
  ],
};
