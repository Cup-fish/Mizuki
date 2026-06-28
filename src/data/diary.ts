// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

// 日记数据
const diaryData: DiaryItem[] = [
	{
		id: 4,
		content:
			"教资笔试考完了，走出考场的时候天还亮着。不管结果怎样，这段备考的日子是认真过的。等成绩吧，先好好休息一下。",
		date: "2026-03-07T17:00:00Z",
		mood: "平静",
		tags: ["教资", "备考"],
	},
	{
		id: 3,
		content:
			"今天在牛客周赛上绿了，1500+。盯着那个绿色的数字看了好一会儿，有点不敢相信。从去年底开始每周打，终于有点结果了。下一个目标是蓝。",
		date: "2026-01-27T22:00:00Z",
		mood: "开心",
		tags: ["算法", "牛客", "里程碑"],
	},
	{
		id: 1,
		content:
			"mall4j 项目收尾了。从搭环境到最后跑通秒杀模块，断断续续写了整个暑假。踩了很多坑，但每次调通的瞬间都挺快乐的。代码会说话。",
		date: "2025-08-15T21:00:00Z",
		mood: "满足",
		tags: ["项目", "Java", "后端"],
	},
];

// 获取日记统计数据
export const getDiaryStats = () => {
	const total = diaryData.length;
	const hasImages = diaryData.filter(
		(item) => item.images && item.images.length > 0,
	).length;
	const hasLocation = diaryData.filter((item) => item.location).length;
	const hasMood = diaryData.filter((item) => item.mood).length;

	return {
		total,
		hasImages,
		hasLocation,
		hasMood,
		imagePercentage: Math.round((hasImages / total) * 100),
		locationPercentage: Math.round((hasLocation / total) * 100),
		moodPercentage: Math.round((hasMood / total) * 100),
	};
};

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = diaryData.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取最新的日记
export const getLatestDiary = () => {
	return getDiaryList(1)[0];
};

// 根据ID获取日记
export const getDiaryById = (id: number) => {
	return diaryData.find((item) => item.id === id);
};

// 获取包含图片的日记
export const getDiaryWithImages = () => {
	return diaryData.filter((item) => item.images && item.images.length > 0);
};

// 根据标签筛选日记
export const getDiaryByTag = (tag: string) => {
	return diaryData
		.filter((item) => item.tags?.includes(tag))
		.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
		);
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	diaryData.forEach((item) => {
		if (item.tags) {
			item.tags.forEach((tag) => tags.add(tag));
		}
	});
	return Array.from(tags).sort();
};

export default diaryData;

