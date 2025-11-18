import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atividade 7</Text>
      <Text style={styles.subtitle}>App de Produtos com Carregamento</Text>
      <Text style={styles.text}>Use as tabs abaixo para navegar.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
  },
});
