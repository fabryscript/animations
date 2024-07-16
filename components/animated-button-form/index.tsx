import { useMemo, useState } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Animated, {
	FadeIn,
	FadeOut,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("screen");

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function AnimatedButtonFormComponent() {
	const [isOneChecked, setIsOneChecked] = useState(false);
	const [isTwoChecked, setIsTwoChecked] = useState(false);

	const hasBeenPressed = useSharedValue(false);

	const isValid = useMemo(
		() => isOneChecked && isTwoChecked,
		[isOneChecked, isTwoChecked],
	);

	const buttonStyles = useAnimatedStyle(() => ({
		backgroundColor: hasBeenPressed.value
			? isValid
				? withTiming("black", { duration: 150 })
				: withTiming("red", { duration: 150 })
			: isValid
				? withTiming("black", { duration: 150 })
				: withTiming("red", { duration: 150 }),
		transform: [
			{
				translateX: withSpring(0, { stiffness: 200 }),
			},
		],
	}));

	const buttonContent = () => {
		return hasBeenPressed.value ? (
			isValid ? (
				<Animated.Text
					entering={FadeIn}
					exiting={FadeOut}
					style={[
						{
							color: "white",
							fontSize: 24,
							fontWeight: "700",
							position: "absolute",
						},
					]}
				>
					Creating
				</Animated.Text>
			) : (
				<Animated.Text
					entering={FadeIn}
					exiting={FadeOut}
					style={[
						{
							color: "white",
							fontSize: 24,
							fontWeight: "700",
							position: "absolute",
						},
					]}
				>
					Please agree
				</Animated.Text>
			)
		) : (
			<Animated.Text
				entering={FadeIn}
				exiting={FadeOut}
				style={[
					{
						color: "white",
						fontSize: 24,
						fontWeight: "700",
						position: "absolute",
					},
				]}
			>
				Create Account
			</Animated.Text>
		);
	};

	return (
		<View style={{ flex: 1, position: "relative" }}>
			<View
				style={{
					width,
					backgroundColor: "white",
					height: 480,
					position: "absolute",
					bottom: 0,
					display: "flex",
					borderTopLeftRadius: 16,
					borderTopRightRadius: 16,
					gap: 12,
					alignItems: "center",
					paddingVertical: 16,
					paddingHorizontal: 20,
					justifyContent: "space-between",
				}}
			>
				<View
					style={{
						display: "flex",
						gap: 12,
						width: "100%",
					}}
				>
					<View style={{ display: "flex", gap: 24, alignItems: "center" }}>
						<View
							style={{
								width: 100,
								height: 10,
								backgroundColor: "#D9D9D9",
								borderRadius: 255,
							}}
						/>
						<View
							style={{
								display: "flex",
								gap: 16,
								width: "100%",
							}}
						>
							<Text style={{ fontSize: 36, fontWeight: "700" }}>
								Create account
							</Text>
							<Text style={{ fontSize: 20 }}>
								You must agree to our terms to create a Candle account.
							</Text>
						</View>
					</View>
					<View
						style={{
							display: "flex",
							gap: 32,
							width: "100%",
							marginTop: 32,
						}}
					>
						<View
							style={{
								display: "flex",
								flexDirection: "row",
								gap: 20,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<BouncyCheckbox
								isChecked={isOneChecked}
								onPress={(checked) => {
									hasBeenPressed.value = false;
									setIsOneChecked(checked);
								}}
								fillColor="green"
								size={28}
								innerIconStyle={{
									borderRadius: 10,
									borderColor: isOneChecked ? "green" : "gray",
									borderWidth: 2,
								}}
								iconImageStyle={{ width: 16, height: 16 }}
								iconStyle={{ borderRadius: 10 }}
								style={{ width: 28, height: 28 }}
							/>
							<Text
								onPress={() => {
									hasBeenPressed.value = false;
									setIsOneChecked((p) => !p);
								}}
								suppressHighlighting
								style={{ width: 245, fontSize: 18, opacity: 0.5 }}
							>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
								ex
							</Text>
						</View>
						<View
							style={{
								display: "flex",
								flexDirection: "row",
								gap: 20,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<BouncyCheckbox
								isChecked={isTwoChecked}
								onPress={(checked) => {
									hasBeenPressed.value = false;
									setIsTwoChecked(checked);
								}}
								fillColor="green"
								size={28}
								innerIconStyle={{
									borderRadius: 10,
									borderColor: isTwoChecked ? "green" : "gray",
									borderWidth: 2,
								}}
								iconImageStyle={{ width: 16, height: 16 }}
								iconStyle={{ borderRadius: 10 }}
								style={{ width: 28, height: 28 }}
							/>
							<Text
								onPress={() => {
									hasBeenPressed.value = false;
									setIsTwoChecked((p) => !p);
								}}
								suppressHighlighting
								style={{ width: 245, fontSize: 18, opacity: 0.5 }}
							>
								Minus ex Saepe velit harum maxime cumque hic tempore animi nisi
								tenetur
							</Text>
						</View>
					</View>
				</View>
				<AnimatedPressable
					style={[
						{
							borderRadius: 255,
							width: "100%",
							height: 64,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							position: "relative",
						},
						buttonStyles,
					]}
					onPress={() => {
						hasBeenPressed.value = true;
					}}
				>
					{buttonContent}
				</AnimatedPressable>
			</View>
		</View>
	);
}
