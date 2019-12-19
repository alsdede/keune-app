import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Background } from '~/components/Background';
import isaias from '~/assets/isaias2.jpg';
import {
    Container,
    ProviderList,
    Provider,
    Avatar,
    Info,
    Name,
    Subs,
} from './styles';

const data = [1, 2, 3, 4, 5, 6];
export default function ProvidersList() {
    return (
        <Background>
            <Container>
                <ProviderList
                    data={data}
                    keyExtractor={item => String(item)}
                    renderItem={({ item }) => (
                        <Provider
                            data={item}
                            onPress={() => navigation.navigate('Product')}
                        >
                            <Avatar source={isaias} />
                            <Info>
                                <Name>Isaias Neves</Name>
                                <Subs>Região: Florianópolis Ilha</Subs>
                            </Info>
                        </Provider>
                    )}
                ></ProviderList>
            </Container>
        </Background>
    );
}

ProvidersList.navigationOptions = ({ navigation }) => ({
    title: 'Representantes',
    headerTintColor: '#383838',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Dashboard');
            }}
        >
            <Icon name="chevron-left" size={20} color="#a0a0a0" />
        </TouchableOpacity>
    ),
});
