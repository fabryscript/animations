import { Image, StyleSheet, Text } from "react-native";
import Animated, {
  Easing,
  Extrapolation,
  SensorType,
  interpolate,
  useAnimatedSensor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Pizza } from "../index";
import { BlurView } from "expo-blur";
import { CarouselRenderItemInfo } from "react-native-reanimated-carousel/lib/typescript/types";

export default function Card({
  item,
  animationValue,
}: CarouselRenderItemInfo<Pizza>) {
  const rotation = useAnimatedSensor(SensorType.ROTATION, { interval: 20 });
  const isActive = useDerivedValue(() => animationValue.value === 0);

  const cardStyle = useAnimatedStyle(() => {
    const { roll, pitch } = rotation.sensor.value;

    return {
      transform: [
        {
          rotate: `${interpolate(
            animationValue.value,
            [-1, 0, 1],
            [-10, 0, 10],
            Extrapolation.CLAMP
          )}deg`,
        },
        {
          translateX: isActive.value
            ? withSpring(interpolate(-roll, [-0.8, 0.8], [-30, 30]) + 65, {
                damping: 200,
              })
            : 65,
        },
        {
          rotateY: isActive.value
            ? withSpring(
                `${interpolate(
                  -roll,
                  [-1.12, 1.12],
                  [-32, 32],
                  Extrapolation.CLAMP
                )}deg`,
                { damping: 200 }
              )
            : "0deg",
        },
        {
          rotateX: isActive.value
            ? withSpring(
                `${interpolate(
                  -pitch,
                  [-1.12, 1.12],
                  [-32, 32],
                  Extrapolation.CLAMP
                )}deg`,
                { damping: 200 }
              )
            : "0deg",
        },
        {
          translateY: isActive.value
            ? withSpring(interpolate(pitch, [-Math.PI, Math.PI], [-280, 280]), {
                damping: 200,
              })
            : 0,
        },
      ],
    };
  });

  const slideIn = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(isActive.value ? 0 : 150, {
            duration: 250,
            easing: Easing.inOut(Easing.quad),
          }),
        },
      ],
    };
  });

  const slideInWithOpacity = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(isActive.value ? 0 : 100, {
            duration: 250,
            easing: Easing.inOut(Easing.quad),
          }),
        },
      ],
      opacity: withTiming(isActive.value ? 1 : 0, {
        duration: 500,
        easing: Easing.inOut(Easing.quad),
      }),
    };
  });

  return (
    <Animated.View style={[{ ...styles.card }, cardStyle]}>
      <Image
        source={item.image}
        resizeMethod="scale"
        resizeMode="cover"
        style={styles.image}
      />
      <Animated.View style={[{ width: "100%" }, slideIn]}>
        <BlurView
          intensity={100}
          style={styles.blurContainer}
          experimentalBlurMethod="dimezisBlurView"
        >
          <Animated.View
            style={[{ ...styles.textContainer }, slideInWithOpacity]}
          >
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </Animated.View>
        </BlurView>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    position: "relative",
    width: 300,
    height: 500,
    borderRadius: 32,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  blurContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 32,
    overflow: "hidden",
    width: "100%",
  },
  image: {
    width: 300,
    height: 500,
    position: "absolute",
    borderRadius: 32,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  title: { fontSize: 24, color: "#fff", fontWeight: "600" },
  description: { fontSize: 16, color: "rgba(255, 255, 255, 0.8)" },
});
