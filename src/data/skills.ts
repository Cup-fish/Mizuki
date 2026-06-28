// 技能数据配置
export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string;
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: { years: number; months: number };
	projects?: string[];
	color?: string;
}

export const skillsData: Skill[] = [
	// 后端
	{
		id: "java", name: "Java",
		description: "主流企业级开发语言，具备阅读和维护业务系统代码的能力",
		icon: "logos:java", category: "backend", level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#ED8B00",
	},
	{
		id: "springboot", name: "Spring Boot",
		description: "Java 生态最流行的企业应用框架，熟悉开箱即用的开发模式",
		icon: "logos:spring-icon", category: "backend", level: "intermediate",
		experience: { years: 1, months: 4 },
		color: "#6DB33F",
	},
	{
		id: "nestjs", name: "NestJS",
		description: "渐进式 Node.js 框架，支持 TypeScript，适合构建企业级服务端应用",
		icon: "logos:nestjs-icon", category: "backend", level: "intermediate",
		experience: { years: 0, months: 8 },
		color: "#E0234E",
	},
	{
		id: "nodejs", name: "Node.js",
		description: "基于 Chrome V8 引擎的 JavaScript 运行时，用于服务端开发",
		icon: "logos:nodejs-icon", category: "backend", level: "intermediate",
		experience: { years: 1, months: 6 },
		color: "#339933",
	},
	// 前端
	{
		id: "vue", name: "Vue 3",
		description: "渐进式 JavaScript 框架，熟练使用 Composition API 与生态工具",
		icon: "logos:vue", category: "frontend", level: "advanced",
		experience: { years: 2, months: 0 },
		projects: ["property-park-system", "chain-store-dashboard"],
		color: "#4FC08D",
	},
	{
		id: "typescript", name: "TypeScript",
		description: "类型安全的 JavaScript 超集，提升代码质量与开发效率",
		icon: "logos:typescript-icon", category: "frontend", level: "advanced",
		experience: { years: 2, months: 0 },
		color: "#3178C6",
	},
	{
		id: "vite", name: "Vite",
		description: "下一代前端构建工具，快速冷启动与热更新",
		icon: "logos:vitejs", category: "frontend", level: "intermediate",
		experience: { years: 1, months: 6 },
		color: "#646CFF",
	},
	{
		id: "echarts", name: "ECharts",
		description: "数据可视化图表库，熟练掌握多种图表类型与交互配置",
		icon: "simple-icons:apacheecharts", category: "frontend", level: "advanced",
		experience: { years: 1, months: 6 },
		color: "#AA344D",
	},
	{
		id: "tailwindcss", name: "Tailwind CSS",
		description: "实用优先的 CSS 框架，快速构建现代化用户界面",
		icon: "logos:tailwindcss-icon", category: "frontend", level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#06B6D4",
	},
	// 数据库
	{
		id: "mysql", name: "MySQL",
		description: "熟练使用 MySQL，掌握复杂查询、性能优化与日常运维排错",
		icon: "logos:mysql-icon", category: "database", level: "advanced",
		experience: { years: 2, months: 0 },
		color: "#4479A1",
	},
	{
		id: "redis", name: "Redis",
		description: "高性能内存数据存储，熟悉缓存策略与原子操作",
		icon: "logos:redis", category: "database", level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#DC382D",
	},
	{
		id: "typeorm", name: "TypeORM",
		description: "TypeScript ORM 框架，支持 ActiveRecord 与 DataMapper 模式",
		icon: "simple-icons:typeorm", category: "database", level: "intermediate",
		experience: { years: 0, months: 8 },
		color: "#FE0803",
	},
	// 工具与运维
	{
		id: "linux", name: "Linux",
		description: "熟悉常用命令、进程管理、日志查看，具备 Nginx + Tomcat 部署经验",
		icon: "logos:linux-tux", category: "tools", level: "intermediate",
		experience: { years: 1, months: 6 },
		color: "#FCC624",
	},
	{
		id: "nginx", name: "Nginx",
		description: "高性能 Web 服务器与反向代理，熟悉基本站点配置",
		icon: "logos:nginx", category: "tools", level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#009639",
	},
	{
		id: "git", name: "Git",
		description: "分布式版本控制系统，代码管理与团队协作必备工具",
		icon: "logos:git-icon", category: "tools", level: "advanced",
		experience: { years: 2, months: 0 },
		color: "#F05032",
	},
	{
		id: "docker", name: "Docker",
		description: "容器化平台，简化应用部署与环境管理",
		icon: "logos:docker-icon", category: "tools", level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#2496ED",
	},
	{
		id: "playwright", name: "Playwright",
		description: "微软开源 E2E 测试框架，支持多浏览器自动化测试",
		icon: "logos:playwright", category: "tools", level: "intermediate",
		experience: { years: 0, months: 8 },
		color: "#2EAD33",
	},
	// 其他
	{
		id: "ai-tools", name: "AI 辅助开发",
		description: "熟练使用 Codex / CodeBuddy / Hermes 等 AI 工具辅助开发、文档编写与效率提升",
		icon: "material-symbols:brand-aware", category: "other", level: "advanced",
		experience: { years: 1, months: 0 },
		color: "#8B5CF6",
	},
	{
		id: "api-design", name: "RESTful API",
		description: "熟悉 RESTful 设计规范与 Knife4j 接口文档，具备前后端对接经验",
		icon: "material-symbols:api", category: "other", level: "intermediate",
		experience: { years: 1, months: 6 },
		color: "#0EA5E9",
	},
	{
		id: "data-analysis", name: "数据分析",
		description: "熟练编写 SQL 进行业务数据统计与报表，具备数据可视化项目经验",
		icon: "material-symbols:analytics", category: "other", level: "intermediate",
		experience: { years: 1, months: 0 },
		color: "#F59E0B",
	},
];

export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};
	return { total, byLevel, byCategory };
};

export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") return skillsData;
	return skillsData.filter((s) => s.category === category);
};

export const getAdvancedSkills = () => {
	return skillsData.filter((s) => s.level === "advanced" || s.level === "expert");
};

export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 };
};
