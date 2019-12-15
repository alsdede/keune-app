import React from 'react';
//import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background } from '~/components/Background';
import News from '~/components/News';
import { Container, Title, List } from './styles';

const data = [1, 2, 3, 4, 5];
export default function Dashboard() {
    return (
        <Background>
            <Container>
                <Title>Cursos</Title>
                <List
                    data={data}
                    keyExtractor={item => String(item)}
                    renderItem={({ item }) => <News data={item} />}
                />
            </Container>
        </Background>
    );
}

Dashboard.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={20} color={tintColor} />
    ),
};
