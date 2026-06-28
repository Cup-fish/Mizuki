// 项目数据配置
export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string;
}

export const projectsData: Project[] = [
	{
		id: "property-park-system",
		title: "物业园区管理系统",
		description:
			"全栈实现的物业园区综合运营管理平台。覆盖合同全生命周期管理、账单自动计算、流水智能对账、RBAC 权限管控等核心模块，编写 50+ E2E 自动化测试用例保障系统稳定性。利用 AI 实现流水智能对账，将人工对账工作量降低约 80%。",
		image: "",
		category: "web",
		techStack: ["Vue 3", "TypeScript", "NestJS", "MySQL", "ECharts", "Playwright"],
		status: "completed",
		startDate: "2025-06-01",
		featured: true,
		tags: ["全栈", "RBAC", "AI对账", "自动化测试"],
	},
	{
		id: "mall4j-ecommerce",
		title: "Mall4j 开源电商系统",
		description:
			"参与开源电商系统开发，基于 Spring Boot 3 + MyBatis Plus + Redis 技术栈。负责商品与订单模块，实践高并发下的数据库设计与缓存应用，具备跨模块协同与接口对接经验。",
		image: "",
		category: "web",
		techStack: ["Spring Boot 3", "MyBatis Plus", "Redis", "Vue 3", "MySQL"],
		status: "in-progress",
		sourceCode: "https://github.com/Cup-fish",
		startDate: "2024-06-01",
		featured: true,
		tags: ["电商", "开源", "Java", "微服务"],
	},
	{
		id: "chain-store-dashboard",
		title: "连锁门店大数据看板",
		description:
			"为连锁门店打造的多维经营数据可视化看板，综合展示客源画像、会员分析、活动运营、业态分布等维度。适配 1920×1080 大屏展示，设计 Loading / Empty / Error 多状态容错机制，支持多设备分辨率自适应。",
		image: "",
		category: "web",
		techStack: ["Vue 3", "ECharts 6", "TypeScript", "Vite", "CSS"],
		status: "completed",
		startDate: "2025-09-01",
		endDate: "2025-11-01",
		featured: true,
		tags: ["数据可视化", "大屏", "Vue3", "ECharts"],
	},
	{
		id: "mizuki-blog",
		title: "Mizuki 个人主页",
		description:
			"基于 Astro 6 框架构建的现代化个人主页，支持多语言、暗色模式、响应式设计。部署于 GitHub Pages，通过 CI/CD 自动构建发布。",
		image: "",
		category: "web",
		techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
		status: "completed",
		liveDemo: "https://cup-fish.github.io/",
		sourceCode: "https://github.com/Cup-fish/cup-fish.github.io",
		visitUrl: "https://cup-fish.github.io/",
		startDate: "2026-06-01",
		featured: false,
		tags: ["博客", "个人主页", "GitHub Pages"],
	},
];

export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter((p) => p.status === "in-progress").length;
	const planned = projectsData.filter((p) => p.status === "planned").length;
	return { total, byStatus: { completed, inProgress, planned } };
};

export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") return projectsData;
	return projectsData.filter((p) => p.category === category);
};

export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => techSet.add(tech));
	});
	return Array.from(techSet).sort();
};
