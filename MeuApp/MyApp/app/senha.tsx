import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
    const router = useRouter();

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
    });

    const [showRecovery, setShowRecovery] = useState(false);
    const [email, setEmail] = useState('');

    if (!fontsLoaded) return null;

    const handlePasswordReset = () => {
        if (!email) {
            Alert.alert('Erro', 'Por favor, digite seu e-mail.');
            return;
        }
        Alert.alert('Sucesso', `Enviamos um link de recuperação para ${email}.`);
        setShowRecovery(false);
        setEmail('');
    };

    if (showRecovery) {
        return (
            <View style={styles.background}>
                <View style={styles.card}>
                    <Text style={styles.title}>Recuperar Senha</Text>
                    <Text style={styles.text}>Digite o e-mail da sua conta para redefinir sua senha</Text>

                    <TextInput
                        placeholder="E-mail"
                        placeholderTextColor="#F48FB1"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
                        <Text style={styles.text}>Enviar link</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setShowRecovery(false)}>
                        <Text style={styles.text}>Voltar ao login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.background}>
            <View style={styles.card}>
                <Text style={styles.title}>Bem-vindo!</Text>

                <TextInput placeholder="E-mail" placeholderTextColor="#F48FB1" style={styles.input} />
                <TextInput placeholder="Senha" placeholderTextColor="#F48FB1" secureTextEntry style={styles.input} />

                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Login', 'Login realizado com sucesso!')}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.forgotPasswordMsg}>Esqueceu sua senha?</Text>
                <TouchableOpacity onPress={() => setShowRecovery(true)}>
                    <Text style={styles.link}>Recupere aqui</Text>
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
    text: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#FFF',
    },
    forgotPasswordMsg: {
        marginTop: 25,
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

