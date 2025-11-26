import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { db } from "./fireBaseConfig";

export default function BookList() {

  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchBooks() {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) return;

      const q = query(
        collection(db, "books"),
        where("userId", "==", user.uid)
      );

      const snapshot = await getDocs(q);

      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBooks(list);

    } catch (err) {
      console.log("Erro ao buscar livros:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text style={styles.loading}>Carregando...</Text>
      </View>
    );
  }

  if (books.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.empty}>Nenhum livro encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Meus Livros</Text>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.label}>Título: <Text style={styles.value}>{item.title}</Text></Text>
            <Text style={styles.label}>Autor: <Text style={styles.value}>{item.author}</Text></Text>
            <Text style={styles.label}>Dias para ler: <Text style={styles.value}>{item.readingTime}</Text></Text>
            <Text style={styles.label}>Avaliação: <Text style={styles.value}>{item.review}</Text></Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  loading: {
    fontSize: 16,
    color: "#5a67d8",
    fontWeight: "600",
  },

  empty: {
    fontSize: 16,
    color: "#7d7d7d",
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 15,
    color: "#1c1c1e",
  },

  card: {
    backgroundColor: "#f5f5f7",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  label: {
    fontSize: 15,
    color: "#555",
    fontWeight: "600",
  },

  value: {
    color: "#1c1c1e",
    fontWeight: "700",
  },

});

