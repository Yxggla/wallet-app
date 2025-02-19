import {
	ScrollView,
	TouchableOpacity,
	View,
	Text,
	Image,
	Linking,
	Modal,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/ui/IconSymbol";
import React, { useState } from "react";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function HistoryScreen() {
	interface Transaction {
		id: string;
		type: "received" | "swap" | "sent";
		status: string;
		amount: string;
		token: string;
		fromTo?: string;
		date: string;
		tokenChange?: {
			received: string;
			sent: string;
		};
		tokenIcon?: string;
	}
	const transactions: Transaction[] = [
		{
			id: "1",
			type: "swap",
			status: "已兑换",
			amount: "25.8",
			token: "STREAM",
			date: "Dec 17, 2024",
			tokenChange: {
				received: "+25.8 sSTREAM",
				sent: "-25.8 STREAM",
			},
			tokenIcon: "https://app.streamflow.finance/icon/favicon.ico",
		},
		{
			id: "2",
			type: "received",
			status: "已接收",
			amount: "+0.009",
			token: "SOL",
			fromTo: "从 BSck...Yr1C",
			date: "Dec 17, 2024",
			tokenIcon:
				"https://assets.coingecko.com/coins/images/4128/large/solana.png",
		},
		{
			id: "3",
			type: "sent",
			status: "已发送",
			amount: "-0.14517",
			token: "SOL",
			fromTo: "到 A719...5XJZ",
			date: "Oct 16, 2024",
			tokenIcon:
				"https://assets.coingecko.com/coins/images/4128/large/solana.png",
		},
		{
			id: "4",
			type: "sent",
			status: "已发送",
			amount: "-0.14517",
			token: "SOL",
			fromTo: "到 A719...5XJZ",
			date: "Oct 16, 2024",
			tokenIcon:
				"https://assets.coingecko.com/coins/images/4128/large/solana.png",
		},
		{
			id: "5",
			type: "swap",
			status: "已兑换",
			amount: "25.7",
			token: "USDT",
			date: "Oct 16, 2024",
			tokenChange: {
				received: "+25.7 USDT",
				sent: "-25.8 USDC",
			},
			tokenIcon:
				"https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
		},
		{
			id: "6",
			type: "swap",
			status: "已兑换",
			amount: "25.7",
			token: "USDT",
			date: "Oct 16, 2024",
			tokenChange: {
				received: "+25.7 USDT",
				sent: "-25.8 USDC",
			},
			tokenIcon:
				"https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
		},
		{
			id: "7",
			type: "swap",
			status: "已兑换",
			amount: "25.7",
			token: "USDT",
			date: "Oct 16, 2024",
			tokenChange: {
				received: "+25.7 USDT",
				sent: "-25.8 USDC",
			},
			tokenIcon:
				"https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
		},
	];
	const getStatusIcon = (type: string) => {
		switch (type) {
			case "received":
				return "⬇️";
			case "swap":
				return "🔄";
			case "sent":
				return "➡️";
			default:
				return "❓";
		}
	};
	const getAmountColor = (type: string) => {
		switch (type) {
			case "received":
				return "text-green-500";

			default:
				return "text-white";
		}
	};
	const groupTransactionsByDate = (transactions: Transaction[]) => {
		const groups: { [key: string]: Transaction[] } = {};

		for (const tx of transactions) {
			if (!groups[tx.date]) {
				groups[tx.date] = [];
			}
			groups[tx.date].push(tx);
		}

		return groups;
	};
	const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
	const TransactionDetailModal = ({
		tx,
		visible,
		onClose,
	}: {
		tx: Transaction | null;
		visible: boolean;
		onClose: () => void;
	}) => {
		if (!tx) return null;

		return (
			<Modal
				visible={visible}
				animationType="slide"
				transparent={true}
				onRequestClose={onClose}
			>
				<StyledView className="flex-1 bg-black/80 justify-end">
					<StyledView className="bg-[#1C1D1F] rounded-t-3xl h-[85%]">
						{/* 头部 */}
						<StyledView className="flex-row items-center justify-between p-4">
							<StyledTouchableOpacity onPress={onClose}>
								<StyledText className="text-white text-2xl">×</StyledText>
							</StyledTouchableOpacity>
							<StyledText className="text-white text-lg font-medium">
								{tx.status}
							</StyledText>
							<StyledView className="w-8" />
						</StyledView>

						{/* 图标和金额 */}
						<StyledView className="items-center py-8">
							{/* 状态图标 */}
							<StyledView className="w-16 h-16 rounded-full bg-[#35363A] items-center justify-center mb-4">
								<Image
									source={{ uri: tx.tokenIcon }}
									resizeMode="contain"
									className="w-full h-full"
								/>
								{/* 状态图标 - 右下角小图标 */}
								<StyledView className="absolute bottom-[-4px] right-[-4px] w-5 h-5  items-center justify-center">
									<StyledText className="text-xs">
										{getStatusIcon(tx.type)}
									</StyledText>
								</StyledView>
							</StyledView>
							<StyledText className="text-green-500 text-4xl font-medium">
								{tx.amount} {tx.token}
							</StyledText>
						</StyledView>

						{/* 详情列表 */}
						<StyledView className="mx-4 bg-[#2A2B2D] rounded-xl overflow-hidden">
							<StyledView className="p-4 border-b border-gray-700">
								<StyledText className="text-[#687076]">日期</StyledText>
								<StyledText className="text-white mt-1">
									{tx.date}, 9:59 pm
								</StyledText>
							</StyledView>

							<StyledView className="p-4 border-b border-gray-700">
								<StyledText className="text-[#687076]">状态</StyledText>
								<StyledText className="text-green-500 mt-1">成功</StyledText>
							</StyledView>

							<StyledView className="p-4 border-b border-gray-700">
								<StyledText className="text-[#687076]">从</StyledText>
								<StyledText className="text-white mt-1">
									{tx.fromTo?.replace("从 ", "") || "未知"}
								</StyledText>
							</StyledView>

							<StyledView className="p-4">
								<StyledText className="text-[#687076]">网络</StyledText>
								<StyledText className="text-white mt-1">Solana</StyledText>
							</StyledView>
						</StyledView>

						{/* 底部按钮 */}
						<StyledView className="absolute bottom-8 left-4 right-4">
							<StyledTouchableOpacity
								className="bg-[#7A3EE8] rounded-xl p-4"
								onPress={() => {
									const url =
										"https://solscan.io/tx/hVDYLxWkobxT37AsVmAyaYwX7sntYnak1Zhh8ncAWyvDFbqRX8hSHbXEjcpspo3hwX5m4JyVbgeCcGGZPpeiYcn";
									Linking.openURL(url);
								}}
							>
								<StyledText className="text-white text-center">
									在 Solscan 上查看
								</StyledText>
							</StyledTouchableOpacity>
						</StyledView>
					</StyledView>
				</StyledView>
			</Modal>
		);
	};
	return (
		<StyledSafeAreaView className="flex-1 bg-[#1C1D1F]">
			<StyledView className="bg-[#1C1D1F] px-4 ">
				<StyledText className="text-white text-lg font-medium py-4 text-center">
					最近交易记录
				</StyledText>
			</StyledView>
			<StyledScrollView
				className="flex-1 bg-[#1C1D1F] px-4"
				contentContainerStyle={{ paddingBottom: 50 }}
			>
				{Object.entries(groupTransactionsByDate(transactions)).map(
					([date, txs]) => (
						<StyledView key={date} className="mb-4">
							{/* 日期分隔 */}
							<StyledText className="text-[#687076] text-lg mb-2">
								{date}
							</StyledText>

							{/* 该日期下的所有交易 */}
							{txs.map((tx) => (
								<StyledTouchableOpacity
									key={tx.id}
									className="mb-4"
									onPress={() => setSelectedTx(tx)}
								>
									{/* 交易卡片 */}
									<StyledView className="bg-[#2A2B2D] rounded-xl p-4">
										<StyledView className="flex-row items-center">
											{/* 状态图标 */}
											<StyledView className="w-10 h-10 rounded-full bg-[#35363A] items-center justify-center mr-3">
												<Image
													source={{ uri: tx.tokenIcon }}
													resizeMode="contain"
													className="w-full h-full"
												/>
												{/* 状态图标 - 右下角小图标 */}
												<StyledView className="absolute bottom-[-4px] right-[-4px] w-5 h-5  items-center justify-center">
													<StyledText className="text-xs">
														{getStatusIcon(tx.type)}
													</StyledText>
												</StyledView>
											</StyledView>

											{/* 交易信息 */}
											<StyledView className="flex-1">
												<StyledText className="text-white text-base">
													{tx.status}
												</StyledText>
												<StyledText className="text-[#687076] text-sm">
													{tx.fromTo || "未知"}
												</StyledText>
											</StyledView>

											{/* 金额信息 */}
											<StyledView className="items-end">
												{tx.tokenChange ? (
													<>
														<StyledText className="text-green-500">
															{tx.tokenChange.received}
														</StyledText>
														<StyledText className="text-white">
															{tx.tokenChange.sent}
														</StyledText>
													</>
												) : (
													<StyledText className={getAmountColor(tx.type)}>
														{tx.amount} {tx.token}
													</StyledText>
												)}
											</StyledView>
										</StyledView>
									</StyledView>
								</StyledTouchableOpacity>
							))}
						</StyledView>
					),
				)}
			</StyledScrollView>
			<TransactionDetailModal
				tx={selectedTx}
				visible={!!selectedTx}
				onClose={() => setSelectedTx(null)}
			/>
		</StyledSafeAreaView>
	);
}
