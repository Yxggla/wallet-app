interface Token {
	id: number;
	name: string;
	symbol: string;
	value: number;
	oneDayValue: number;
	icon: string;
}
interface Task {
	id: number;
	title: string;
	description: string;
}
interface HotApp {
	id: number;
	name: string;
	category: string;
	icon: string;
}

const hotApps: HotApp[] = [
	{
		id: 1,
		name: "OpenSea",
		category: "市场",
		icon: "🌊",
	},
	{
		id: 2,
		name: "Rodeo",
		category: "社交",
		icon: "🤠",
	},
	{
		id: 3,
		name: "DSCVR",
		category: "社交",
		icon: "🤠",
	},
	{
		id: 4,
		name: "Save",
		category: "DeFi",
		icon: "🤠",
	},
];
const categories = [
	{ id: "websites", label: "网站" },
	{ id: "tokens", label: "代币" },
	{ id: "tasks", label: "任务" },
	{ id: "about", label: "了解" },
];
const tokens: Token[] = [
	{ id: 1, name: "Solana", symbol: "SOL", value: 20.45, oneDayValue: 19.45, icon: "◎" },
	{ id: 2, name: "USDC", symbol: "USDC", value: 1.00, oneDayValue: 0.99, icon: "$" },
	{ id: 3, name: "Bitcoin", symbol: "BTC", value: 43250.82, oneDayValue: 42980.65, icon: "₿" },
	{ id: 4, name: "Ethereum", symbol: "ETH", value: 2280.45, oneDayValue: 2245.30, icon: "Ξ" },
	{ id: 5, name: "Bonk", symbol: "BONK", value: 0.000012, oneDayValue: 0.000011, icon: "🐕" },
	{ id: 6, name: "Raydium", symbol: "RAY", value: 1.85, oneDayValue: 1.76, icon: "◐" },
	{ id: 7, name: "Marinade", symbol: "MNDE", value: 0.45, oneDayValue: 0.43, icon: "🌊" },
	{ id: 8, name: "Jupiter", symbol: "JUP", value: 1.25, oneDayValue: 1.18, icon: "🪐" },
	{ id: 9, name: "Polygon", symbol: "MATIC", value: 0.98, oneDayValue: 0.95, icon: "⬡" },
	{ id: 10, name: "Binance Coin", symbol: "BNB", value: 320.45, oneDayValue: 315.20, icon: "⚛️" }
  ];

const tasks: Task[] = [
	{ id: 1, title: "每日签到", description: "完成每日签到获得奖励" },
	{ id: 2, title: "邀请好友", description: "邀请好友获得额外奖励" },
	// ... 更多任务
];

const dapps = [
	{
		id: 1,
		name: "Jupiter",
		category: "DeFi",
		icon: "🪐",
	},
	{
		id: 2,
		name: "pump.fun",
		category: "DeFi",
		icon: "🐋",
	},
	{
		id: 3,
		name: "PAWS",
		category: "其他",
		icon: "✨",
	},
	{
		id: 4,
		name: "Sol Incinerator",
		category: "工具",
		icon: "📻",
	},
	{
		id: 5,
		name: "DEX Screener",
		category: "DeFi",
		icon: "👻",
	},
	{
		id: 6,
		name: "Raydium",
		category: "DeFi",
		icon: "👻",
	},
	{
		id: 7,
		name: "Sunflower Land",
		category: "游戏",
		icon: "👻",
	},
	{
		id: 8,
		name: "Meteora",
		category: "DeFi",
		icon: "👻",
	},
	{
		id: 9,
		name: "Claim Your Sol",
		category: "工具",
		icon: "👻",
	},
	{
		id: 10,
		name: "JUP DAO",
		category: "DAO",
		icon: "👻",
	},
];
const popularOptions = ["流行", "热门"];
const networkOptions = ["所有网络", "Solana", "Ethereum", "Bitcoin", "Polygon"];
const volumeOptions = ["交易量", "市值"];

const formatNumber = (num: number): string => {
	if (num >= 1e9) {
	  return `${(num / 1e9).toFixed(2)}B`;
	}
	if (num >= 1e6) {
	  return `${(num / 1e6).toFixed(2)}M`;
	}
	if (num >= 1e3) {
	  return `${(num / 1e3).toFixed(2)}K`;
	}
	return num.toFixed(2);
  };
export {
	dapps,
	tokens,
	tasks,
	categories,
	hotApps,
	popularOptions, networkOptions, volumeOptions ,formatNumber};
