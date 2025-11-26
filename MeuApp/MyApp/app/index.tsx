import { Link, router } from 'expo-router';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { app } from './fireBaseConfig';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const minPassword = 6;
  const auth = getAuth(app);

  const signUp = async () => {

    // Senha muito curta
    if (password.length < minPassword) {
      return Alert.alert("Erro", "A senha deve ter no mínimo 6 caracteres!");
    }

    // Confirmar se as senhas batem
    if (password !== confirmPassword) {
      return Alert.alert("Erro", "As senhas não coincidem!");
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      Alert.alert("Sucesso", "Usuário registrado com sucesso!");

      router.navigate('/login');

    } catch (e) {
      return Alert.alert("Erro", "Email já existente!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua conta! </Text>
      <Text style={styles.subtitle}>Por favor informe seus dados...</Text>

      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#a0a0a0"
        style={styles.input}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#a0a0a0"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <TextInput
        placeholder="Confirme a senha"
        placeholderTextColor="#a0a0a0"
        secureTextEntry
        style={styles.input}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={signUp}>
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>

      <Link href={'/login'} style={styles.linkText}>
        <Text style={styles.linkDescription}>
          Já tem uma conta? <Text style={styles.linkHighlight}>entre aqui</Text>
        </Text>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#ffffff",
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
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#f5f5f7",
    color: "#333",
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  button: {
    backgroundColor: "#ffb6c1",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#ffb6c1",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },

  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "700",
  },

  linkText: {
    alignSelf: "center",
    marginVertical: 10,
  },

  linkDescription: {
    fontSize: 15,
    color: "#7d7d7d",
  },

  linkHighlight: {
    color: "#ffb6c1",
    fontWeight: "700",
  },
});
