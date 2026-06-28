// 本地番剧数据配置
export type AnimeItem = {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
};

const localAnimeList: AnimeItem[] = [
	{
		title: "弹丸论破：希望的学园与绝望的高中生 The Animation",
		status: "completed",
		rating: 9.2,
		cover: "https://i0.hdslb.com/bfs/bangumi/image/c8c7a8e9e1d9e6c3a9b3f7e0e1b5e4c2e8a6f0d3.jpg",
		description: "被封闭在希望之峰学园的学生们，只有杀人才能逃出去——一场希望与绝望的生死游戏。",
		episodes: "13话",
		year: "2013",
		genre: ["悬疑", "推理", "心理"],
		studio: "Lerche",
		link: "https://www.bilibili.com/bangumi/media/md1477",
		progress: 13,
		totalEpisodes: 13,
		startDate: "2013-07",
		endDate: "2013-09",
	},
	{
		title: "魔法少女小圆",
		status: "completed",
		rating: 9.8,
		cover: "https://i0.hdslb.com/bfs/bangumi/image/6b6e2b8e9c7f5a3d1e4c2b8f7a0e9d6c3b5f2a1.jpg",
		description: "成为魔法少女，实现你的愿望——但代价是什么，只有走到最后才会明白。",
		episodes: "12话",
		year: "2011",
		genre: ["魔法少女", "心理", "悲剧"],
		studio: "SHAFT",
		link: "https://www.bilibili.com/bangumi/media/md1565",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2011-01",
		endDate: "2011-04",
	},
	{
		title: "魔法少女奈叶",
		status: "completed",
		rating: 9.0,
		cover: "https://i0.hdslb.com/bfs/bangumi/image/3a5c7e9b1d2f4a6c8e0b2d4f6a8c0e2b4d6f8a0.jpg",
		description: "普通小学生高町奈叶，因遇见受伤的魔导师，踏上了成为魔法少女的旅途。",
		episodes: "13话",
		year: "2004",
		genre: ["魔法少女", "动作", "热血"],
		studio: "Seven Arcs",
		link: "https://www.bilibili.com/bangumi/media/md1427",
		progress: 13,
		totalEpisodes: 13,
		startDate: "2004-10",
		endDate: "2004-12",
	},
	{
		title: "天才麻将少女",
		status: "completed",
		rating: 9.3,
		cover: "https://i0.hdslb.com/bfs/bangumi/image/2e4a6c8e0b2d4f6a8c0e2b4d6f8a0c2e4a6c8e0.jpg",
		description: "来自长野的少女宫永咲，拥有神秘的麻将天赋，在全国大赛中与各路高手交锋。",
		episodes: "25话",
		year: "2009",
		genre: ["麻将", "竞技", "百合"],
		studio: "Gonzo",
		link: "https://www.bilibili.com/bangumi/media/md1760",
		progress: 25,
		totalEpisodes: 25,
		startDate: "2009-04",
		endDate: "2009-09",
	},
	{
		title: "少女与战车",
		status: "completed",
		rating: 9.5,
		cover: "https://i0.hdslb.com/bfs/bangumi/image/1c3e5a7b9d0f2a4c6e8b0d2f4a6c8e0b2d4f6a8.jpg",
		description: "战车道，是淑女之道。西住殿在伙伴们的陪伴下，驾驶着战车奔向属于她们的舞台。",
		episodes: "12话",
		year: "2012",
		genre: ["战车", "竞技", "日常"],
		studio: "Actas",
		link: "https://www.bilibili.com/bangumi/media/md1605",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2012-10",
		endDate: "2013-03",
	},
	{
		title: "终将成为你",
		status: "completed",
		rating: 9.7,
		cover: "https://i0.hdslb.com/bfs/bangumi/image/8a0c2e4a6c8e0b2d4f6a8c0e2b4d6f8a0c2e4a6.jpg",
		description: "对恋爱没有感觉的八虹小糸，遇见了永远无法爱上任何人的燈子学姐——两颗心慢慢靠近的故事。",
		episodes: "13话",
		year: "2018",
		genre: ["百合", "恋爱", "校园"],
		studio: "TROYCA",
		link: "https://www.bilibili.com/bangumi/media/md28221041",
		progress: 13,
		totalEpisodes: 13,
		startDate: "2018-10",
		endDate: "2019-01",
	},
	{
		title: "终末的伊泽塔",
		status: "completed",
		rating: 9.1,
		cover: "https://i0.hdslb.com/bfs/bangumi/image/4f6a8c0e2b4d6f8a0c2e4a6c8e0b2d4f6a8c0e2.jpg",
		description: "战火纷飞的世界里，少女伊泽塔出现在菲涅面前。她是火焰魔女，也是守护着菲涅的人。",
		episodes: "12话",
		year: "2016",
		genre: ["魔法", "战争", "百合"],
		studio: "Production IMS",
		link: "https://www.bilibili.com/bangumi/media/md20267",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2016-10",
		endDate: "2016-12",
	},
];

export default localAnimeList;
