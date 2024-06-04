import { ArrowRight } from "lucide-react-native";
import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { CarouselValueContext } from "../context/CarouselValueContext";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const LABELS = ["Feed", "Back"];

export default function SlidingButton() {
  return (
    <View
      style={{
        display: "flex",
        position: "absolute",
        bottom: 50,
        width: "100%",
        alignItems: "center",
      }}
    >
      <View
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          width: 150,
        }}
      >
        <Dots />
        <Button />
      </View>
    </View>
  );
}

function Dots() {
  const [value] = useContext(CarouselValueContext);

  const dotsStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(value, [0, 1, 2], [0, 1, 0]),
    };
  }, [value]);

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        },
        dotsStyles,
      ]}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 4,
          paddingVertical: 2,
          borderRadius: 255,
          width: 70,
          height: 30,
          gap: 4,
          flexDirection: "row",
        }}
      >
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <View
              key={i}
              style={{
                borderRadius: 255,
                width: 8,
                height: 8,
                backgroundColor: "white",
                opacity: i === 1 ? 1 : 0.5,
              }}
            />
          ))}
      </View>
    </Animated.View>
  );
}

function Button() {
  const [value] = useContext(CarouselValueContext);

  const buttonStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(value, [0, 1, 2], [1, 0, 1]),
        },
      ],
      opacity: interpolate(value, [0, 1, 2], [1, 0, 1]),
    };
  }, [value]);

  return (
    <AnimatedPressable
      style={[
        {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          borderRadius: 32,
          backgroundColor: "white",
          flexDirection: value > 1 ? "row-reverse" : "row",
          gap: 8,
          opacity: 0,
        },
        buttonStyles,
      ]}
    >
      <Text style={{ fontWeight: 600, fontSize: 20 }}>
        {LABELS[value === 2 ? 1 : ~~value]}
      </Text>
      <ArrowRight
        size={24}
        color={"black"}
        style={{ transform: [{ rotate: value > 1 ? "180deg" : "0deg" }] }}
      />
    </AnimatedPressable>
  );
}
