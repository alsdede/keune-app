import React from 'react';
//import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';
import { Background } from '~/components/Background';
import News from '~/components/News';
import { Container, List } from './styles';

const data = [1, 2, 3, 4, 5];
export default function Dashboard() {
    return (
        <Background>
            <Header />
            <Container>
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
    tabBarLabel: 'Cursos',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="list" size={20} color={tintColor} />
    ),
};
