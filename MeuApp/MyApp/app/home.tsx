import { getAuth } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import { db } from './fireBaseConfig';

export default function Home() {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setReviw] = useState('');
  const [isbn, setTime] = useState('');
  const [coverUrl, setCoverUrl] = useState('');

  async function registerBook() {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) return;

      if (!title || !author || !year) {
        console.log("Preencha título, autor e ano.");
        return;
      }

      const book = {
        title,
        author,
        year: Number(year),
        isbn: isbn || null,
        coverUrl,
        userId: user.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      await addDoc(collection(db, "books"), book);
      console.log("Livro cadastrado!");

    } catch (err) {
      console.log("Erro ao cadastrar:", err);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastrar Livro</Text>
      <Text style={styles.subtitle}>Insira as informações abaixo...</Text>

      <TextInput
        placeholder="Título"
        placeholderTextColor="#a0a0a0"
        style={styles.input}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Autor"
        placeholderTextColor="#a0a0a0"
        style={styles.input}
        onChangeText={setAuthor}
      />

      <TextInput
        placeholder="Quantos dias levei para ler:"
        placeholderTextColor="#a0a0a0"
        style={styles.input}
        onChangeText={setTime}
        keyboardType="numeric"
      />
      
      <TextInput
        placeholder="Avaliação pessoal do livro:"
        placeholderTextColor="#a0a0a0"
        style={styles.input}
        onChangeText={setReviw}
      />


      <TextInput
        placeholder="Link da capa"
        placeholderTextColor="#a0a0a0"
        style={styles.input}
        onChangeText={setCoverUrl}
      />

      <TouchableOpacity style={styles.button} onPress={registerBook}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 25,
    paddingTop: 60,
    backgroundColor: "#fff",
    flexGrow: 1,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1c1c1e",
    marginBottom: 5,
  },

  subtitle: {
    color: "#7d7d7d",
    fontSize: 15,
    marginBottom: 25,
  },

  input: {
    backgroundColor: "#f5f5f7",
    color: "#333",
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  button: {
    backgroundColor: "#ffb6c1",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#ffb6c1",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },

  buttonText: {
    color: "#black",
    fontSize: 18,
    fontWeight: "700",
  },

});
