import { MousePointer2 } from "lucide-react-native";
import { useMemo } from "react";
import { Pressable, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
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
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Hourly</Text>
            <Text style={{ fontSize: 20, color: "#A0A0A0" }}>0.50€/30 min</Text>
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
        <Animated.View
          style={[
            {
              display: "flex",
              backgroundColor: "white",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              paddingHorizontal: 12,
              paddingVertical: 32,
              gap: 16,
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
              alignItems: "center",
              justifyContent: "space-between",
              alignSelf: "flex-start",
            }}
          >
            <GestureDetector gesture={pan}>
              <View
                style={{
                  display: "flex",
                  gap: 4,
                  flexGrow: 1,
                  position: "relative",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  Day pass
                </Text>
                <Animated.Text
                  style={[{ fontSize: 20, color: "#A0A0A0" }, opacity]}
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
