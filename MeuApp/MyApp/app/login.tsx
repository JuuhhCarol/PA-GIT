import { Link, router } from 'expo-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { app } from './fireBaseConfig';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth(app)

    const signIn = async () => {
        await signInWithEmailAndPassword(auth, email, password)
        router.navigate('/home')
    }

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Bem vindo(a) de volta!</Text>
            <Text style={styles.subtitle}>Por favor insira seus dados...</Text>

            <TextInput 
                placeholder="E-mail" 
                style={styles.input} 
                placeholderTextColor="#a0a0a0"
                onChangeText={setEmail} 
            />

            <TextInput 
                placeholder="Senha" 
                secureTextEntry 
                placeholderTextColor="#a0a0a0"
                style={styles.input} 
                onChangeText={setPassword} 
            />

            <TouchableOpacity style={styles.button} onPress={signIn}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Link href={'/'} style={styles.link}>
                <Text style={styles.linkText}>Não tem uma conta? <Text style={styles.highlight}>Crie aqui</Text></Text>
            </Link>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
        backgroundColor: "#ffffff",
    },

    title: {
        fontSize: 32,
        fontWeight: "700",
        color: "#1c1c1e",
        alignSelf: "flex-start",
    },

    subtitle: {
        fontSize: 16,
        color: "#7d7d7d",
        marginBottom: 25,
        alignSelf: "flex-start",
    },

    input: {
        backgroundColor: "#f5f5f7",
        color: "#333",
        borderRadius: 12,
        height: 50,
        paddingHorizontal: 15,
        width: "100%",
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
        width: "100%",
        alignItems: "center",
        marginVertical: 20,
        shadowColor: "#ffb6c1",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 3,
    },

    buttonText: {
        color: "#black",
        fontWeight: "700",
        fontSize: 18,
    },

    link: {
        marginTop: 10,
    },

    linkText: {
        fontSize: 15,
        color: "#7d7d7d",
    },

    highlight: {
        color: "#ffb6c1",
        fontWeight: "700",
    },

});
