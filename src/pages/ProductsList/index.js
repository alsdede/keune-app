import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Background } from '~/components/Background';
import kitsopure from '~/assets/kitsopure.jpg';
import {
    Container,
    ProductList,
    Product,
    Avatar,
    Info,
    Name,
    Subs,
} from './styles';

const data = [1, 2, 3, 4, 5, 6];
export default function ProductsList() {
    return (
        <Background>
            <Container>
                <ProductList
                    data={data}
                    keyExtractor={item => String(item)}
                    renderItem={({ item }) => (
                        <Product
                            data={item}
                            onPress={() => navigation.navigate('Product')}
                        >
                            <Avatar source={kitsopure} />
                            <Info>
                                <Name>Kit SP Recover</Name>
                                <Subs>
                                    O Kit Keune So Pure Recover foi feito
                                    especialmente para cabelos danificados.
                                </Subs>
                            </Info>
                        </Product>
                    )}
                ></ProductList>
            </Container>
        </Background>
    );
}

ProductsList.navigationOptions = ({ navigation }) => ({
    title: 'Linha So Pure - Orgânica',
    headerTintColor: '#4949',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('BrandList');
            }}
        >
            <Icon name="chevron-left" size={20} color="#a0a0a0" />
        </TouchableOpacity>
    ),
});
