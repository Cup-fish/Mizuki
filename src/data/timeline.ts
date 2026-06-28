// 时间线数据配置
export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string;
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: { name: string; url: string; type: "website" | "certificate" | "project" | "other" }[];
	icon?: string;
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "university",
		title: "数据科学与大数据技术 本科在读",
		description: "主修数据科学与大数据技术专业，系统学习 Java、数据库原理、算法、操作系统、计算机网络等核心课程",
		type: "education",
		startDate: "2023-09-01",
		endDate: "2027-06-30",
		skills: ["Java", "MySQL", "Python", "数据结构", "操作系统"],
		achievements: ["掌握数据库系统原理与复杂查询优化", "学习计算机网络 TCP/IP 协议栈", "具备英文技术文档阅读能力 (CET-4)"],
		icon: "material-symbols:school",
		color: "#2563EB",
		featured: true,
	},
	{
		id: "property-park-system",
		title: "物业园区管理系统",
		description: "全栈实现物业运营管理平台，覆盖合同管理、账单计算、流水对账、RBAC 权限等核心模块",
		type: "project",
		startDate: "2025-06-01",
		skills: ["Vue 3", "TypeScript", "NestJS", "MySQL", "ECharts", "Playwright"],
		achievements: [
			"打通「入驻→签约→计费→对账」全流程业务闭环",
			"利用 AI 实现流水智能对账，人工工作量降低约 80%",
			"编写 50+ E2E 自动化测试用例保障系统稳定性",
			"构建 RBAC 权限管控体系满足合规审计要求",
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "chain-store-dashboard",
		title: "连锁门店大数据看板",
		description: "打造多维经营数据可视化看板，综合展示客源、会员、活动、业态等分析维度",
		type: "project",
		startDate: "2025-09-01",
		endDate: "2025-11-01",
		skills: ["Vue 3", "ECharts 6", "TypeScript", "Vite"],
		achievements: [
			"实现多维度数据可视化，适配 1920×1080 大屏展示",
			"设计 Loading / Empty / Error 多状态容错机制",
			"AI 辅助开发提速图表组件，交互效率提升约 40%",
		],
		icon: "material-symbols:analytics",
		color: "#EA580C",
		featured: true,
	},
	{
		id: "mall4j-project",
		title: "Mall4j 开源电商系统开发",
		description: "参与开源电商项目，负责商品与订单模块，实践高并发数据库设计与缓存应用",
		type: "project",
		startDate: "2024-06-01",
		skills: ["Spring Boot 3", "MyBatis Plus", "Redis", "Vue 3", "MySQL"],
		achievements: [
			"熟悉高并发场景下的数据库设计与缓存应用",
			"优化 SQL 查询性能，具备跨模块协同开发经验",
			"使用 AI 工具辅助代码开发与问题排查",
		],
		icon: "material-symbols:shopping-cart",
		color: "#059669",
		featured: false,
	},
	{
		id: "mizuki-site",
		title: "Mizuki 个人主页搭建",
		description: "基于 Astro 框架构建现代化个人主页，通过 GitHub Pages + CI/CD 自动部署",
		type: "project",
		startDate: "2026-06-01",
		skills: ["Astro", "TypeScript", "Tailwind CSS", "GitHub Actions"],
		achievements: [
			"从零搭建个人网站并部署上线",
			"配置 GitHub Actions 自动构建部署流程",
			"掌握静态站点生成与现代前端工程化",
		],
		links: [
			{ name: "网站", url: "https://cup-fish.github.io/", type: "website" },
			{ name: "源码", url: "https://github.com/Cup-fish/cup-fish.github.io", type: "project" },
		],
		icon: "material-symbols:globe",
		color: "#0891B2",
	},
	{
		id: "high-school",
		title: "高中毕业",
		description: "高考考入数据科学与大数据技术专业",
		type: "education",
		startDate: "2020-09-01",
		endDate: "2023-06-30",
		achievements: ["高考成绩优异", "对编程产生浓厚兴趣并自学入门"],
		icon: "material-symbols:school",
		color: "#7C3AED",
	},
];

export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement").length,
	};
	return { total, byType };
};

export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
	}
	return timelineData.filter((item) => item.type === type).sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
};

export const getFeaturedTimeline = () => {
	return timelineData.filter((item) => item.featured).sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
};

export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;
	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});
	return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 };
};
