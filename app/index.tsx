import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.box}
    >
      <Text>Meu app de roteirização vai fazer muito sucesso.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
}
})
