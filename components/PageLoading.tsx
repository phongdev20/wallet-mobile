import { View, ActivityIndicator } from "react-native";
import React from "react";
import { styles } from "@/assets/styles/home.styles";
import { COLORS } from "@/constants/color";

const PageLoading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={"large"} color={COLORS.primary} />
    </View>
  );
};

export default PageLoading;
