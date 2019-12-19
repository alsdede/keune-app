import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Container,
    Left,
    Avatar,
    Info,
    Name,
    Time,
    Date,
    Capa,
} from './styles';

export default function News() {
    return (
        <Container>
            <Capa source={require('~/assets/curso-penteado.jpg')} />
            <Left>
                <Info>
                    <Avatar source={require('~/assets/isaias2.jpg')} />

                    <Name>Eliane Lucas</Name>
                </Info>
                <Date>
                    <Icon name="event-busy" size={20} color="#f64c75" />
                    <Time>31/12/2019</Time>
                </Date>
            </Left>
        </Container>
    );
}
