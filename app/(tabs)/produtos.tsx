import { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

export default function ProdutosScreen() {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProdutos(res.data))
      .catch((err) => console.log("Erro ao carregar:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text>A carregar produtos...</Text>
      </View>
    );
  }

  if (!loading && produtos.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Nenhum produto disponível</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            padding: 16,
            borderBottomWidth: 1,
            borderColor: "#DDD",
          }}
          onPress={() =>
            router.push({
              pathname: "/detalhes",
              params: { produto: JSON.stringify(item) },
            })
          }
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
          <Text style={{ marginTop: 5 }}>{item.price} €</Text>
        </TouchableOpacity>
      )}
    />
  );
}
