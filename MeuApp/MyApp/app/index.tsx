import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useRouter } from 'expo-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './fireBaseConfig';

export default function Login() {
    const router = useRouter();
    const auth = getAuth(app);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
    });

    if (!fontsLoaded) return null;

    const login = async () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert("Erro", "Preencha todos os campos.");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert("Sucesso", "Login realizado!");
        } catch (error) {
            Alert.alert("Erro", "E-mail ou senha incorretos.");
        }
    };
    

    return (
        <View style={styles.background}>
            <View style={styles.card}>
                <Text style={styles.title}>Bem-vindo!</Text>

                <TextInput
                    placeholder="E-mail"
                    placeholderTextColor="#F48FB1"
                    style={styles.input}
                    onChangeText={setEmail}
                />

                <TextInput
                    placeholder="Senha"
                    placeholderTextColor="#F48FB1"
                    secureTextEntry
                    style={styles.input}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={login}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.smallText}>Não tem uma conta?</Text>
                <TouchableOpacity onPress={() => router.push('/register')}>
                    <Text style={styles.link}>Crie aqui</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#FFF0F5',
        width: '85%',
        paddingVertical: 40,
        paddingHorizontal: 30,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#E91E63',
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        color: '#E91E63',
        fontSize: 36,
        fontFamily: 'Montserrat_700Bold',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        height: 45,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_400Regular',
        color: '#E91E63',
        fontSize: 16,
        marginVertical: 10,
        elevation: 2,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 50,
        borderRadius: 25,
        backgroundColor: '#E91E63',
        marginTop: 25,
    },
    text: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#FFF',
    },
    smallText: {
        marginTop: 20,
        fontFamily: 'Montserrat_400Regular',
        color: '#E91E63',
    },
    link: {
        fontFamily: 'Montserrat_700Bold',
        textDecorationLine: 'underline',
        marginTop: 5,
        color: '#AD1457',
    },
});
