import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { styled } from "nativewind";
import {
	dapps,
	tokens,
	tasks,
	categories,
	hotApps,
	popularOptions,
	networkOptions,
	volumeOptions,
	formatNumber,
	knowledgeCards,
} from "@/assets/data/docs-data";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function DocsScreen() {
	const [selectedCategory, setSelectedCategory] = useState("websites");
	const [showPopularMenu, setShowPopularMenu] = useState(false);
	const [showNetworkMenu, setShowNetworkMenu] = useState(false);
	const [selectedPopular, setSelectedPopular] = useState("流行");
	const [selectedNetwork, setSelectedNetwork] = useState("所有网络");
	const [selectedVolume, setSelectedVolume] = useState("交易量");
	const [selectedNetwork2, setSelectedNetwork2] = useState("所有网络");

	return (
		<StyledSafeAreaView className="flex-1 bg-[#1C1D1F]">
			{/* 搜索栏 */}
			<StyledView className="px-4 py-2 flex-row items-center space-x-2">
				<StyledView className="flex-1 bg-[#2A2B2D] rounded-lg flex-row items-center px-4 py-2">
					<IconSymbol name="magnifyingglass" size={20} color="#687076" />
					<StyledText className="text-[#687076] ml-2">
						网站，代币，URL
					</StyledText>
				</StyledView>
			</StyledView>

			{/* 分类标签 */}
			<StyledView className="border-b border-gray-700">
				<StyledScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					className="px-6 "
				>
					{categories.map((category) => (
						<StyledTouchableOpacity
							key={category.id}
							onPress={() => setSelectedCategory(category.id)}
							className="mr-4 "
						>
							<StyledView
								className={`p-2 border-b-2 ${
									selectedCategory === category.id
										? "border-purple-500"
										: "border-transparent"
								}`}
							>
								<StyledText className="text-white text-lg font-medium">
									{category.label}
								</StyledText>
							</StyledView>
						</StyledTouchableOpacity>
					))}
				</StyledScrollView>
			</StyledView>

			{/* 推荐应用列表 */}
			<StyledScrollView
				className="flex-1 px-4"
				contentContainerStyle={{ paddingBottom: 50 }}
			>
				{selectedCategory === "websites" && (
					<>
						{/* 热门应用 */}
						<StyledScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
							className="my-6"
						>
							{hotApps.map((app) => (
								<StyledView
									key={app.id}
									className="w-52 aspect-square bg-[#2A2B2D] rounded-2xl mr-4 overflow-hidden"
								>
									{/* 背景图片 */}
									<StyledView className="h-[70%] w-full">
										<Image
											source={{
												uri: `https://picsum.photos/id/${app.id}/400/300`,
											}}
											className="w-full h-full"
											resizeMode="cover"
										/>
									</StyledView>

									<StyledView className="flex-1 flex-row justify-between items-center p-4">
										{/* 左侧文字 */}
										<StyledView>
											<StyledText className="text-white text-lg">
												{app.name}
											</StyledText>
											<StyledText className="text-[#687076] ">
												{app.category}
											</StyledText>
										</StyledView>

										{/* 右侧图标 */}
										<StyledView className="w-10 h-10 bg-[#35363A] rounded-xl items-center justify-center">
											<StyledText className="text-4xl">{app.icon}</StyledText>
										</StyledView>
									</StyledView>
								</StyledView>
							))}
						</StyledScrollView>

						<StyledView className="mb-4">
							{/* 筛选按钮 */}
							<StyledView className="flex-row space-x-2">
								{/* 流行/热门选择 */}
								<StyledTouchableOpacity
									className="bg-[#2A2B2D] rounded-full px-4 py-2 flex-row items-center h-10"
									onPress={() => setShowPopularMenu(!showPopularMenu)}
								>
									<StyledText className="text-white mr-2">
										{selectedPopular}
									</StyledText>
									<IconSymbol name="chevron.down" size={16} color="#fff" />
								</StyledTouchableOpacity>

								{/* 网络选择 */}
								<StyledTouchableOpacity
									className="bg-[#2A2B2D] rounded-full px-4 py-2 flex-row items-center h-10"
									onPress={() => setShowNetworkMenu(!showNetworkMenu)}
								>
									<StyledText className="text-white mr-2">
										{selectedNetwork}
									</StyledText>
									<IconSymbol name="chevron.down" size={16} color="#fff" />
								</StyledTouchableOpacity>
							</StyledView>

							{/* 流行/热门下拉菜单 */}
							{showPopularMenu && (
								<StyledView className="absolute top-12 left-0 z-50 bg-[#2A2B2D] rounded-xl overflow-hidden shadow-lg min-w-[120px]">
									{popularOptions.map((option, index) => (
										<StyledTouchableOpacity
											key={option}
											className={`
          py-3 px-4 active:bg-[#35363A]
          ${selectedPopular === option ? "bg-[#35363A]" : ""}
          ${index !== popularOptions.length - 1 ? "border-b border-gray-700" : ""}
        `}
											onPress={() => {
												setSelectedPopular(option);
												setShowPopularMenu(false);
											}}
										>
											<StyledView className="flex-row items-center justify-between">
												<StyledText
													className={`${
														selectedPopular === option
															? "text-purple-500 font-medium"
															: "text-white"
													}`}
												>
													{option}
												</StyledText>
												{selectedPopular === option && (
													<IconSymbol
														name="checkmark"
														size={16}
														color="#A855F7"
													/>
												)}
											</StyledView>
										</StyledTouchableOpacity>
									))}
								</StyledView>
							)}

							{/* 网络下拉菜单 */}
							{showNetworkMenu && (
								<StyledView className="absolute top-12 left-36 z-50 bg-[#2A2B2D] rounded-xl overflow-hidden shadow-lg min-w-[140px]">
									{networkOptions.map((option, index) => (
										<StyledTouchableOpacity
											key={option}
											className={`
          py-3 px-4 active:bg-[#35363A]
          ${selectedNetwork === option ? "bg-[#35363A]" : ""}
          ${index !== networkOptions.length - 1 ? "border-b border-gray-700" : ""}
        `}
											onPress={() => {
												setSelectedNetwork(option);
												setShowNetworkMenu(false);
											}}
										>
											<StyledView className="flex-row items-center justify-between">
												<StyledText
													className={`${
														selectedNetwork === option
															? "text-purple-500 font-medium"
															: "text-white"
													}`}
												>
													{option}
												</StyledText>
												{selectedNetwork === option && (
													<IconSymbol
														name="checkmark"
														size={16}
														color="#A855F7"
													/>
												)}
											</StyledView>
										</StyledTouchableOpacity>
									))}
								</StyledView>
							)}
						</StyledView>

						{/* DApp 列表 */}
						{dapps.map((dapp, index) => (
							<StyledTouchableOpacity
								key={dapp.id}
								className="flex-row items-center mb-4"
							>
								<StyledText className="text-[#687076] w-8">
									{index + 1}
								</StyledText>
								<StyledView className="w-10 h-10 bg-[#2A2B2D] rounded-xl items-center justify-center mr-3">
									<StyledText className="text-2xl">{dapp.icon}</StyledText>
								</StyledView>
								<StyledView className="flex-1">
									<StyledText className="text-white text-base">
										{dapp.name}
									</StyledText>
									<StyledText className="text-[#687076]">
										{dapp.category}
									</StyledText>
								</StyledView>
							</StyledTouchableOpacity>
						))}
					</>
				)}

				{selectedCategory === "tokens" && (
					<StyledView className="mt-4">
						{/* 筛选按钮 */}
						<StyledView className="flex-row space-x-2 mb-4">
							{/* 交易量/市值选择 */}
							<StyledTouchableOpacity
								className="bg-[#2A2B2D] rounded-full px-4 py-2 flex-row items-center h-10"
								onPress={() => setShowPopularMenu(!showPopularMenu)}
							>
								<StyledText className="text-white mr-2">
									{selectedVolume}
								</StyledText>
								<IconSymbol name="chevron.down" size={16} color="#fff" />
							</StyledTouchableOpacity>

							{/* 网络选择 */}
							<StyledTouchableOpacity
								className="bg-[#2A2B2D] rounded-full px-4 py-2 flex-row items-center h-10"
								onPress={() => setShowNetworkMenu(!showNetworkMenu)}
							>
								<StyledText className="text-white mr-2">
									{selectedNetwork2}
								</StyledText>
								<IconSymbol name="chevron.down" size={16} color="#fff" />
							</StyledTouchableOpacity>
						</StyledView>

						{/* 交易量/市值下拉菜单 */}
						{showPopularMenu && (
							<StyledView className="absolute top-12 left-4 z-50 bg-[#2A2B2D] rounded-xl overflow-hidden shadow-lg min-w-[120px]">
								{volumeOptions.map((option, index) => (
									<StyledTouchableOpacity
										key={option}
										className={`
              py-3 px-4 active:bg-[#35363A]
              ${selectedVolume === option ? "bg-[#35363A]" : ""}
              ${index !== volumeOptions.length - 1 ? "border-b border-gray-700" : ""}
            `}
										onPress={() => {
											setSelectedVolume(option);
											setShowPopularMenu(false);
										}}
									>
										<StyledView className="flex-row items-center justify-between">
											<StyledText
												className={`${
													selectedVolume === option
														? "text-purple-500 font-medium"
														: "text-white"
												}`}
											>
												{option}
											</StyledText>
											{selectedVolume === option && (
												<IconSymbol
													name="checkmark"
													size={16}
													color="#A855F7"
												/>
											)}
										</StyledView>
									</StyledTouchableOpacity>
								))}
							</StyledView>
						)}

						{/* 网络下拉菜单 */}
						{showNetworkMenu && (
							<StyledView className="absolute top-12 left-36 z-50 bg-[#2A2B2D] rounded-xl overflow-hidden shadow-lg min-w-[140px]">
								{networkOptions.map((option, index) => (
									<StyledTouchableOpacity
										key={option}
										className={`
              py-3 px-4 active:bg-[#35363A]
              ${selectedNetwork === option ? "bg-[#35363A]" : ""}
              ${index !== networkOptions.length - 1 ? "border-b border-gray-700" : ""}
            `}
										onPress={() => {
											setSelectedNetwork2(option);
											setShowNetworkMenu(false);
										}}
									>
										<StyledView className="flex-row items-center justify-between">
											<StyledText
												className={`${
													selectedNetwork2 === option
														? "text-purple-500 font-medium"
														: "text-white"
												}`}
											>
												{option}
											</StyledText>
											{selectedNetwork === option && (
												<IconSymbol
													name="checkmark"
													size={16}
													color="#A855F7"
												/>
											)}
										</StyledView>
									</StyledTouchableOpacity>
								))}
							</StyledView>
						)}
						{/* 代币列表 */}
						{tokens
							.sort((a, b) =>
								selectedVolume === "市值"
									? b.value - a.value
									: b.oneDayValue - a.oneDayValue,
							)
							.map((token, index) => (
								<StyledTouchableOpacity
									key={token.id}
									className="flex-row items-center mb-4 bg-[#2A2B2D] p-4 rounded-xl"
								>
									{/* 序号 */}
									<StyledText className="text-[#687076] w-8 text-center">
										{index + 1}
									</StyledText>

									{/* 图标 */}
									<StyledView className="w-10 h-10 rounded-full bg-[#35363A] items-center justify-center mr-3">
										<StyledText className="text-2xl">{token.icon}</StyledText>
									</StyledView>

									{/* 名称和代号 */}
									<StyledView className="flex-1">
										<StyledText className="text-white text-base">
											{token.name}
										</StyledText>
										<StyledText className="text-[#687076]">
											{token.symbol}
										</StyledText>
									</StyledView>

									{/* 市值或交易量 */}
									<StyledView className="items-end">
										<StyledText className="text-white text-base">
											$
											{formatNumber(
												selectedVolume === "市值"
													? token.value
													: token.oneDayValue,
											)}
										</StyledText>
										<StyledText className="text-[#687076]">
											{selectedVolume === "市值" ? "市值" : "24h交易量"}
										</StyledText>
									</StyledView>
								</StyledTouchableOpacity>
							))}
					</StyledView>
				)}

				{selectedCategory === "tasks" && (
					<StyledView className="mt-4">
						{tasks.map((task) => (
							<StyledTouchableOpacity
								key={task.id}
								className="mb-4 bg-[#2A2B2D] overflow-hidden rounded-xl"
							>
								{/* 任务卡片背景图 */}
								<Image
									source={{
										uri: `https://picsum.photos/id/${task.id}/400/200`,
									}}
									className="w-full h-40"
									resizeMode="cover"
								/>

								{/* 剩余时间标签 */}
								<StyledView className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full">
									<StyledText className="text-white">
										剩余{task.daysLeft} 天
									</StyledText>
								</StyledView>

								{/* 任务信息 */}
								<StyledView className="p-4">
									<StyledText className="text-white text-xl font-medium mb-2">
										{task.title}
									</StyledText>
									<StyledText className="text-[#687076] mb-4">
										{task.description}
									</StyledText>

									{/* 奖励信息 */}
									<StyledView className="flex-row items-center">
										<StyledView className="w-8 h-8 bg-[#35363A] rounded-lg items-center justify-center mr-2">
											<StyledText className="text-xl">🎁</StyledText>
										</StyledView>
										<StyledText className="text-[#687076]">奖励</StyledText>
										<StyledText className="text-white ml-2">
											{task.reward}
										</StyledText>
									</StyledView>
								</StyledView>
							</StyledTouchableOpacity>
						))}
					</StyledView>
				)}

				{selectedCategory === "about" && (
					<StyledView className="mt-4">
						{/* 知识卡片列表 */}
						{knowledgeCards.map((card) => (
							<StyledTouchableOpacity
								key={card.id}
								className="mb-4 bg-[#2A2B2D] rounded-xl overflow-hidden"
							>
								<StyledView className="flex-row h-40">
									{/* 左侧文字 */}
									<StyledView className="flex-1 p-6 justify-center">
										<StyledText className="text-white text-2xl font-medium">
											{card.title}
										</StyledText>
									</StyledView>

									{/* 右侧图片 */}
									<StyledView className="w-1/2">
										<Image
											source={{
												uri: `https://picsum.photos/id/${card.id}/400/200`,
											}}
											className="w-full h-40"
											resizeMode="cover"
										/>
									</StyledView>
								</StyledView>
							</StyledTouchableOpacity>
						))}
					</StyledView>
				)}
			</StyledScrollView>
		</StyledSafeAreaView>
	);
}
