import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useRouter } from 'expo-router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './fireBaseConfig';

export default function RegisterScreen() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const auth = getAuth(app);

    const register = async () => {
        if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem.');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert('Sucesso', `Conta criada com sucesso! Bem-vindo(a), ${name}.`);
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            router.push('/'); // volta para o login
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao criar a conta.');
        }
    };

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
    });

    if (!fontsLoaded) return null;

    return (
        <View style={styles.background}>
            <View style={styles.card}>
                <Text style={styles.title}>Create your account</Text>

                <TextInput
                    placeholder="Name"
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    placeholder="E-mail"
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    placeholder="Confirm password"
                    style={styles.input}
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <TouchableOpacity style={styles.button} onPress={register}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => router.push('/')}>
                        <Text style={styles.footerLink}>Login here</Text>
                    </TouchableOpacity>
                </View>
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
        shadowColor: '#E91E63',
        shadowOpacity: 0.15,
        shadowRadius: 4,
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
    buttonText: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#FFF',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    footerText: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14,
        color: '#E91E63',
        marginRight: 5,
    },
    footerLink: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 14,
        color: '#AD1457',
        textDecorationLine: 'underline',
    },
});
