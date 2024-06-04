import { PropsWithChildren, ReactElement } from "react";
import { Pressable, Text, View } from "react-native";
import { CarouselRenderItemInfo } from "react-native-reanimated-carousel/lib/typescript/types";
import { ArrowRight } from "lucide-react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function ContextUpdater({
  children,
  animationValue,
}: PropsWithChildren<CarouselRenderItemInfo<ReactElement>>) {
  const buttonScale = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(animationValue.value, [0, 1, 2], [1, 0, 1]),
        },
      ],
    };
  });

  return (
    <View style={{ flex: 1, position: "relative" }}>
      {children}
      <View
        style={{
          display: "flex",
          position: "absolute",
          bottom: 200,
          width: "100%",
          alignItems: "center",
        }}
      >
        <AnimatedPressable
          style={[
            {
              width: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              borderRadius: 32,
              backgroundColor: "white",
              flexDirection: "row",
              gap: 8,
            },
            buttonScale,
          ]}
        >
          <Text style={{ fontWeight: 600, fontSize: 20 }}>
            {animationValue.value} Feed
          </Text>
          <ArrowRight size={24} color={"black"} />
        </AnimatedPressable>
      </View>
    </View>
  );
}
