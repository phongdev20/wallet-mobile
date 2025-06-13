import { View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "@/constants/color";
import { StatusBar } from "expo-status-bar";

interface IProps {
  children: React.ReactNode;
}

const SafeScreen = ({ children }: IProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      <StatusBar style="dark" backgroundColor={COLORS.white} />
      {children}
    </View>
  );
};

export default SafeScreen;
