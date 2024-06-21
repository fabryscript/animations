import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { CreditCard, MousePointer2 } from "lucide-react-native";
import { useMemo } from "react";
import { Pressable, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function CollapsableWheelComponent() {
  const pressed = useSharedValue(false);
  const offset = useSharedValue(0);

  const pan = useMemo(
    () =>
      Gesture.Pan()
        .activateAfterLongPress(500)
        .onBegin(() => {
          pressed.value = !pressed.value;
        })
        .onChange((e) => {
          offset.value = e.translationY;
        })
        .onFinalize(() => {
          offset.value = withSpring(
            pressed.value.valueOf() === false ? 0 : -120,
            { mass: 0.2 }
          );
        }),
    []
  );

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: offset.value,
      },
    ],
  }));

  const behindStyles = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      offset.value,
      [0, -120],
      ["white", "rgba(230, 230, 230, 1)"]
    ),
  }));

  const opacity = useAnimatedStyle(() => ({
    opacity: interpolate(offset.value, [0, -120], [1, 0]),
  }));

  const inverseOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(offset.value, [0, -120], [0, 1]),
  }));

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#D9D9D9",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "600" }}>Some map content</Text>
      <Animated.View
        style={[
          {
            position: "absolute",
            width: "100%",
            bottom: -24,
            display: "flex",
            height: 380,
            gap: 8,
          },
          cardStyle,
        ]}
      >
        <Buttons />
        <HourlyCard behindStyles={behindStyles} />
        <Animated.View
          style={[
            {
              display: "flex",
              backgroundColor: "white",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              paddingHorizontal: 12,
              paddingVertical: 32,
              gap: 32,
              height: "100%",
            },
            cardStyle,
          ]}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "flex-start",
              justifyContent: "space-between",
              alignSelf: "flex-start",
            }}
          >
            <GestureDetector gesture={pan}>
              <View
                style={{
                  display: "flex",
                  gap: 72,
                  flexGrow: 1,
                }}
              >
                <View style={{ display: "flex", gap: 4, position: "relative" }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "500",
                    }}
                  >
                    Day pass
                  </Text>
                  <Animated.Text
                    style={[
                      {
                        fontSize: 20,
                        color: "#A0A0A0",
                      },
                      opacity,
                    ]}
                  >
                    20% discount
                  </Animated.Text>
                  <Animated.Text
                    style={[
                      {
                        fontSize: 20,
                        color: "#A0A0A0",
                        position: "absolute",
                        top: 28,
                      },
                      inverseOpacity,
                    ]}
                  >
                    0.35€/30 min
                  </Animated.Text>
                </View>
                <Text style={{ fontWeight: "600", fontSize: 64 }}>20€</Text>
              </View>
            </GestureDetector>
            <AnimatedPressable
              style={[
                {
                  backgroundColor: "black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 255,
                  paddingHorizontal: 20,
                  paddingVertical: 16,
                },
                opacity,
              ]}
              disabled={opacity.opacity === 0}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Pay 20€</Text>
            </AnimatedPressable>
            <Animated.View
              style={[
                {
                  display: "flex",
                  position: "absolute",
                  width: 200,
                  height: 200,
                  borderRadius: 255,
                  backgroundColor: "#E9E9E9",
                  right: 0,
                  top: 0,
                  overflow: "hidden",
                },
                inverseOpacity,
              ]}
            >
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <BlurView
                  intensity={100}
                  style={{
                    position: "absolute",
                    zIndex: 10,
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                  }}
                />
                <LinearGradient
                  colors={["#E3E374", "#B674E3", "#74B6E3"]}
                  start={{ x: 0.1, y: 0.5 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    transform: [
                      {
                        rotate: "-90deg",
                      },
                    ],
                  }}
                />
                <View
                  style={{
                    display: "flex",
                    width: 120,
                    height: 120,
                    borderRadius: 255,
                    backgroundColor: "#E9E9E9",
                    position: "relative",
                    zIndex: 40,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 24 }}>1</Text>
                  <Text style={{ fontSize: 24 }}>Day</Text>
                </View>
              </View>
            </Animated.View>
          </View>
          <View
            style={{
              borderRadius: 16,
              backgroundColor: "black",
              width: "100%",
              height: 80,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 24,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                backgroundColor: "#464646",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                gap: 4,
                paddingVertical: 4,
                paddingHorizontal: 10,
                flexDirection: "row",
              }}
            >
              <CreditCard size={24} color={"#FFFFFF"} />
              <Text style={{ color: "#FFFFFF" }}>**** 1234</Text>
            </View>
            <Text style={{ color: "#FFFFFF", fontSize: 20 }}>Pay 20€</Text>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

function Buttons() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 16,
        justifyContent: "space-between",
      }}
    >
      <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
        <Pressable
          style={{
            backgroundColor: "white",
            borderRadius: 32,
            paddingVertical: 12,
            paddingHorizontal: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Text>Spot</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#E9E9E9",
            borderRadius: 32,
            paddingVertical: 12,
            paddingHorizontal: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 6,
            overflow: "hidden",
          }}
        >
          <Text>Zonal</Text>
          <Text style={{ fontSize: 14, opacity: 0.5 }}>2 days</Text>
        </Pressable>
      </View>
      <Pressable
        style={{
          backgroundColor: "white",
          borderRadius: 255,
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <MousePointer2 size={16} color={"black"} />
      </Pressable>
    </View>
  );
}

function HourlyCard({
  behindStyles,
}: {
  behindStyles: { backgroundColor: string };
}) {
  return (
    <Animated.View
      style={[
        {
          display: "flex",
          borderRadius: 16,
          paddingHorizontal: 12,
          paddingVertical: 32,
          gap: 16,
        },
        behindStyles,
      ]}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          Hourly
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#A0A0A0",
          }}
        >
          0.50€/30 min
        </Text>
      </View>
      <View
        style={{
          borderRadius: 16,
          backgroundColor: "#E9E9E9",
          width: "100%",
          height: 80,
        }}
      />
    </Animated.View>
  );
}
