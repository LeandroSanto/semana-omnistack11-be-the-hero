import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import * as MailComposer from 'expo-mail-composer';


import styles from './styles';

import logoImg from '../../assets/logo.png';


export default function Detail(){
    const navigation = useNavigation();
    const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha Atrolepada" com o valor de R$ 120,00';

    function navigateBack(){
        navigation.goBack();    
    };

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Heroi do Caso: Cadelinha atrolepada',
            recipients: ['leandro.santo@outlook.com'],
            body: message,
        })
    };

    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=5521980224819&text=${message}`);
    };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <TouchableOpacity
                    onPress={navigateBack}
                >
                    <Feather name="arrow-left" size={28} color='#E02041' />
                </TouchableOpacity>                             
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>
                    
                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Caso 001</Text>

                <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                <Text style={styles.incidentValue}>Caso 001Caso 001Caso 001Caso 001Caso 001Caso 001Caso 001Caso 001Caso 001Caso 001</Text>
                    
                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o Heroi desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>
                
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-Mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}