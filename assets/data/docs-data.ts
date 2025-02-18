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
	reward: string;
	daysLeft?: number;
  }
interface HotApp {
	id: number;
	name: string;
	category: string;
	icon: string;
}
interface KnowledgeCard {
	id: number;
	title: string;
	url: string;
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
	{
	  id: 1,
	  title: "铸造照片或视频收藏品",
	  description: "尝试我们全新的铸造功能！将照片或视频铸造成 Solana 收藏品，完成此任务并解锁一款纪念版 Phantom 收藏品。",
	  reward: "Solana Phantom 收藏品",
	  daysLeft: 97
	},
	{
	  id: 2,
	  title: "Convert to JitoSOL to earn rewards",
	  description: "Earn a commemorative Phantom NFT and JTO rewards when you convert your native staked SOL to JitoSOL.",
	  reward: "Phantom NFT + JTO",
	  daysLeft: 30
	},
	{
		id: 3,
		title: "参与 Jupiter 交易赢大奖",
		description: "在 Jupiter 上完成一笔不少于 10 SOL 的代币兑换交易，即可获得 JUP 代币空投资格和限量版 NFT。",
		reward: "JUP 代币 + NFT",
		daysLeft: 56
	  }
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

  const knowledgeCards: KnowledgeCard[] = [
	{
	  id: 1,
	  title: "What is an embedded wallet?",
	  url: "https://phantom.app/learn/crypto-101/embedded-wallets?utm_source=phantom&utm_medium=learn"
	},
	{
	  id: 2,
	  title: "What is a crypto bridge?",
	  url: "https://phantom.com/learn/crypto-101/crypto-bridge?utm_source=phantom&utm_medium=learn"
	},
	{
	  id: 3,
	  title: "What is Staking?",
	  url: "https://phantom.app/learn/crypto-101/what-is-staking?utm_source=phantom&utm_medium=learn"
	},
	{
	  id: 4,
	  title: "A beginner's guide to Solana",
	  url: "https://phantom.app/learn/crypto-101/a-beginner-s-guide-to-solana?utm_source=phantom&utm_medium=learn"
	},
	{
	  id: 5,
	  title: "A beginner's guide to Bitcoin",
	  url: "https://phantom.com/learn/crypto-101/bitcoin-guide?utm_source=phantom&utm_medium=learn"
	}
  ];
export {
	dapps,
	tokens,
	tasks,
	categories,
	hotApps,
	popularOptions, networkOptions, volumeOptions ,formatNumber, knowledgeCards};
