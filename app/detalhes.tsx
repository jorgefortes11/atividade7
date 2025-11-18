import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function DetalhesScreen() {
  const params = useLocalSearchParams();
  const produto = JSON.parse(params.produto as string);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{produto.title}</Text>
      <Text style={styles.description}>{produto.description}</Text>
      <Text style={styles.price}>Preço: {produto.price} €</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
