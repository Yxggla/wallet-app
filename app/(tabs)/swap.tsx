import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { styled } from "nativewind";

const StyledTextInput = styled(TextInput);
const StyledView = styled(View);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function SwapScreen() {
	const [fromAmount, setFromAmount] = useState("");
	const [toAmount, setToAmount] = useState("");

	return (
		<StyledSafeAreaView className="flex-1 bg-primary">
			<StyledView className="flex-1 px-4">
				{/* 顶部标题和滑点设置 */}
				<StyledView className="flex-row justify-between items-center mb-6 mt-2">
					<ThemedText type="title" className="text-white">
						兑换代币
					</ThemedText>
					<StyledTouchableOpacity>
						<ThemedText className="text-white">0.5%</ThemedText>
					</StyledTouchableOpacity>
				</StyledView>

				{/* 支付代币卡片 */}
				<StyledView className="bg-secondary rounded-2xl p-4">
					<ThemedText className="text-text-secondary mb-2">支付</ThemedText>
					<StyledView className="flex-row justify-between items-center mb-2">
						<StyledTextInput
							className="flex-1 text-3xl font-semibold text-text-primary"
							value={fromAmount}
							onChangeText={setFromAmount}
							placeholder="0"
							keyboardType="decimal-pad"
							placeholderTextColor="#687076"
						/>
						<StyledTouchableOpacity className="bg-accent rounded-full px-3 py-2">
							<StyledView className="flex-row items-center space-x-2">
								<StyledView className="w-6 h-6 rounded-full bg-white/20" />
								<ThemedText type="defaultSemiBold">USDC</ThemedText>
								<IconSymbol name="chevron.down" size={20} color="#687076" />
							</StyledView>
						</StyledTouchableOpacity>
					</StyledView>
					<StyledView className="flex-row justify-between items-center">
						<ThemedText className="text-text-secondary text-base">
							$0
						</ThemedText>
						<ThemedText className="text-text-secondary text-sm">
							0 USDC
						</ThemedText>
					</StyledView>
				</StyledView>

				{/* 切换按钮 */}
				<StyledView className="items-center -my-5 z-10">
					<StyledTouchableOpacity className="bg-accent p-3 rounded-full border-4 border-primary">
						<IconSymbol name="arrow.up.arrow.down" size={24} color="#687076" />
					</StyledTouchableOpacity>
				</StyledView>

				{/* 接收代币卡片 */}
				<StyledView className="bg-secondary rounded-2xl p-4">
					<ThemedText className="text-text-secondary mb-2">收到</ThemedText>
					<StyledView className="flex-row justify-between items-center mb-2">
						<StyledTextInput
							className="flex-1 text-3xl font-semibold text-text-primary"
							value={toAmount}
							onChangeText={setToAmount}
							placeholder="0"
							keyboardType="decimal-pad"
							placeholderTextColor="#687076"
						/>
						<StyledTouchableOpacity className="bg-accent rounded-full px-3 py-2">
							<StyledView className="flex-row items-center space-x-2">
								<StyledView className="w-6 h-6 rounded-full bg-white/20" />
								<ThemedText type="defaultSemiBold">SOL</ThemedText>
								<IconSymbol name="chevron.down" size={20} color="#687076" />
							</StyledView>
						</StyledTouchableOpacity>
					</StyledView>
					<StyledView className="flex-row justify-between items-center">
						<ThemedText className="text-text-secondary text-base">
							$0
						</ThemedText>
						<ThemedText className="text-text-secondary text-sm mt-1">
							0.00807 SOL
						</ThemedText>
					</StyledView>
				</StyledView>
			</StyledView>
		</StyledSafeAreaView>
	);
}
