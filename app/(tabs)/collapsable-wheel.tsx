import CollapsableWheelComponent from "@/components/collapsable-wheel";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function CollapsableWheel() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CollapsableWheelComponent />
    </GestureHandlerRootView>
  );
}
