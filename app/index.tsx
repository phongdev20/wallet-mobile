import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/about"}>About</Link>
      <Image
        source={require("@/assets/images/icon.png")}
        style={{ width: 300, height: 150 }}
      />
    </View>
  );
}
