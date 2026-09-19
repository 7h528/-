// ===== 26条校园活动模拟数据 =====
const defaultActivities = [
  { id: 1, title: "人工智能前沿讲座", category: "学术", location: "图书馆报告厅", time: "2026-09-25T14:00", desc: "邀请AI领域专家分享最新研究成果" },
  { id: 2, title: "校际篮球联赛", category: "体育", location: "体育馆", time: "2026-09-28T09:00", desc: "四校联合篮球对抗赛" },
  { id: 3, title: "校园歌手大赛初赛", category: "文艺", location: "大学生活动中心", time: "2026-10-10T19:00", desc: "一年一度的校园歌手选拔" },
  { id: 4, title: "辩论社招新", category: "社团", location: "教学楼B203", time: "2026-09-22T18:30", desc: "辩论爱好者加入我们的大家庭" },
  { id: 5, title: "社区志愿服务", category: "志愿", location: "校门口集合", time: "2026-09-27T08:00", desc: "前往社区开展环保志愿活动" },
  { id: 6, title: "秋季校园招聘会", category: "就业", location: "就业中心大厅", time: "2026-10-15T09:00", desc: "50+企业现场招聘，覆盖多个行业" },
  { id: 7, title: "数据结构竞赛培训", category: "学术", location: "计算机楼301", time: "2026-10-05T14:00", desc: "ACM竞赛队教练带队训练" },
  { id: 8, title: "足球新生杯", category: "体育", location: "足球场", time: "2026-10-01T15:00", desc: "新生班级间足球对抗赛" },
  { id: 9, title: "话剧社年度演出", category: "文艺", location: "大礼堂", time: "2026-11-20T19:30", desc: "原创话剧《青春纪事》首演" },
  { id: 10, title: "摄影社外拍活动", category: "社团", location: "校门口集合", time: "2026-09-30T10:00", desc: "秋日校园与城市风光外拍" },
  { id: 11, title: "敬老院探访", category: "志愿", location: "校门口集合", time: "2026-10-12T08:30", desc: "走进敬老院，传递温暖" },
  { id: 12, title: "简历制作工作坊", category: "就业", location: "就业中心会议室", time: "2026-10-08T14:00", desc: "资深HR手把手教你写简历" },
  { id: 13, title: "量子计算入门讲座", category: "学术", location: "物理楼报告厅", time: "2026-10-18T14:00", desc: "了解量子计算的基本原理与应用前景" },
  { id: 14, title: "校运会", category: "体育", location: "田径场", time: "2026-10-25T08:00", desc: "一年一度的全校运动会" },
  { id: 15, title: "电影之夜", category: "文艺", location: "学生活动中心", time: "2026-09-29T19:00", desc: "放映经典影片，交流观影感受" },
  { id: 16, title: "机器人社团展示", category: "社团", location: "工程楼展厅", time: "2026-10-03T13:00", desc: "社团成员机器人作品展示与互动" },
  { id: 17, title: "无偿献血活动", category: "志愿", location: "食堂广场", time: "2026-10-20T09:00", desc: "与市中心血站联合举办的献血活动" },
  { id: 18, title: "模拟面试大赛", category: "就业", location: "行政楼多功能厅", time: "2026-11-01T14:00", desc: "企业面试官现场模拟面试" },
  { id: 19, title: "数学建模经验分享", category: "学术", location: "数学楼201", time: "2026-10-22T15:00", desc: "国赛一等奖团队分享备赛经验" },
  { id: 20, title: "羽毛球友谊赛", category: "体育", location: "羽毛球馆", time: "2026-10-06T16:00", desc: "院系间羽毛球交流赛" },
  { id: 21, title: "书法展览", category: "文艺", location: "图书馆一楼展厅", time: "2026-10-28T10:00", desc: "书法协会成员作品展览" },
  { id: 22, title: "天文社观星夜", category: "社团", location: "天文台", time: "2026-10-15T20:00", desc: "使用专业望远镜观测星空" },
  { id: 23, title: "支教志愿者招募", category: "志愿", location: "教学楼A102", time: "2026-09-20T15:00", desc: "暑期山区支教志愿者选拔" },
  { id: 24, title: "创业路演", category: "就业", location: "创新创业中心", time: "2026-11-10T14:00", desc: "大学生创业项目路演与投资对接" },
  { id: 25, title: "英语角", category: "学术", location: "英语角草坪", time: "2026-09-23T17:00", desc: "每周英语口语交流，提升口语能力" },
  { id: 26, title: "街舞社招新", category: "社团", location: "舞蹈房", time: "2026-09-21T19:00", desc: "零基础也可加入，感受街舞魅力" }
];

// ===== 数据加载（优先 localStorage） =====
function loadActivities() {
  const stored = localStorage.getItem("campusActivities");
  if (stored) {
    return JSON.parse(stored);
  }
  saveActivities(defaultActivities);
  return defaultActivities;
}

function saveActivities(activities) {
  localStorage.setItem("campusActivities", JSON.stringify(activities));
}

// ===== 倒计时计算 =====
function getCountdown(targetTime) {
  const now = new Date();
  const target = new Date(targetTime);
  const diff = target - now;

  if (diff <= 0) return { expired: true, text: "活动已结束" };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  let text = "";
  if (days > 0) text = `距离开始还有 ${days}天 ${hours}小时`;
  else if (hours > 0) text = `距离开始还有 ${hours}小时 ${minutes}分钟`;
  else text = `距离开始还有 ${minutes}分钟`;

  return { expired: false, text };
}

// ===== 渲染活动卡片 =====
function renderActivities(activities) {
  const container = document.getElementById("activity-list");
  container.innerHTML = "";

  if (activities.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:#999;grid-column:1/-1;">暂无匹配的活动</p>';
    return;
  }

  activities.forEach(act => {
    const countdown = getCountdown(act.time);
    const card = document.createElement("div");
    card.className = `activity-card${countdown.expired ? " expired" : ""}`;

    card.innerHTML = `
      <span class="category-tag ${act.category}">${act.category}</span>
      <h3>${act.title}</h3>
      <p class="meta">📍 ${act.location}</p>
      <p class="meta">🕐 ${act.time.replace("T", " ")}</p>
      ${act.desc ? `<p class="meta">${act.desc}</p>` : ""}
      <p class="${countdown.expired ? "expired-text" : "countdown"}">${countdown.text}</p>
    `;

    container.appendChild(card);
  });
}

// ===== 筛选逻辑 =====
function filterActivities() {
  const activities = loadActivities();
  const categoryFilter = document.getElementById("category-filter").value;
  const statusFilter = document.getElementById("status-filter").value;

  let filtered = activities;

  if (categoryFilter !== "all") {
    filtered = filtered.filter(a => a.category === categoryFilter);
  }

  if (statusFilter === "upcoming") {
    filtered = filtered.filter(a => !getCountdown(a.time).expired);
  } else if (statusFilter === "expired") {
    filtered = filtered.filter(a => getCountdown(a.time).expired);
  }

  renderActivities(filtered);
}

// ===== 表单提交（发布新活动） =====
function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("act-title").value.trim();
  const category = document.getElementById("act-category").value;
  const location = document.getElementById("act-location").value.trim();
  const time = document.getElementById("act-time").value;
  const desc = document.getElementById("act-desc").value.trim();

  if (!title || !category || !location || !time) {
    alert("请填写所有必填项");
    return;
  }

  const activities = loadActivities();
  const newActivity = {
    id: Date.now(),
    title,
    category,
    location,
    time,
    desc
  };

  activities.push(newActivity);
  saveActivities(activities);
  filterActivities();

  // 清空表单
  e.target.reset();
}

// ===== 初始化 =====
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("category-filter").addEventListener("change", filterActivities);
  document.getElementById("status-filter").addEventListener("change", filterActivities);
  document.getElementById("new-activity-form").addEventListener("submit", handleFormSubmit);

  filterActivities();

  // 每分钟刷新倒计时
  setInterval(filterActivities, 60000);
});
