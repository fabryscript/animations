import { StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";
import Card from "./components/Card";

export interface Pizza {
  name: string;
  description: string;
  image: any;
}

const data: Pizza[] = [
  {
    name: "Pizza Margherita",
    description: "Una buonissima pizza ricca di sapori unici",
    image: require("./assets/pizza-margherita-fresca.jpeg"),
  },
  {
    name: "Pizza Capricciosa",
    description: "Una buonissima pizza ricca di sapori unici",
    image: require("./assets/pizza-capricciosa.jpeg"),
  },
  {
    name: "Pizza con 'Nduja",
    description: "Una buonissima pizza ricca di sapori unici della Calabria",
    image: require("./assets/pizza-nduja.png"),
  },
];

const { width } = Dimensions.get("window");

export default function RotationCarouselComponent() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Carousel
          loop={false}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          width={width}
          height={500}
          data={data}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,
          }}
          renderItem={(props) => <Card {...props} />}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D0301",
    alignItems: "center",
    justifyContent: "center",
  },
});
