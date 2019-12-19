import React from 'react';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Brand, Capa } from './styles';
import sopure from '~/assets/sopure.jpg';

export default function Brands({ navigation }) {
    return (
        <Container>
            <Brand onPress={() => navigation.navigate('ProductsList')}>
                <Capa source={sopure} />
            </Brand>
        </Container>
    );
}
