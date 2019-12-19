import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//import Header from '~/components/Header';
import { Background } from '~/components/Background';
import sopure from '~/assets/sopure.jpg';
//import Brands from '~/components/Brands';
import {
    Container,
    BrandsList,
    Brand,
    Avatar,
    Name,
    Info,
    Subs,
} from './styles';

const data = [1, 2, 3, 4, 5, 6];
export default function BrandList({ navigation }) {
    return (
        <Background>
            <Container>
                <BrandsList
                    data={data}
                    keyExtractor={item => String(item)}
                    renderItem={({ item }) => (
                        <Brand
                            data={item}
                            onPress={() => navigation.navigate('ProductsList')}
                        >
                            <Avatar source={sopure} />
                            <Info>
                                <Name>So Pure</Name>
                                <Subs>
                                    Linha de cosméticos naturais e orgânicos
                                </Subs>
                            </Info>
                        </Brand>
                    )}
                ></BrandsList>
            </Container>
        </Background>
    );
}

BrandList.navigationOptions = ({ navigation }) => ({
    title: 'Linha de Produtos',
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
