import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Container,
    News,
    Current,
    Products,
    SocialProjects,
    Avatar,
    Info,
    Name,
} from './styles';
//import Background from '~/components/Background';
import capacurso from '~/assets/capa-cursos.jpg';
import capaproduto from '~/assets/capa-produto.jpg';
import capaprojeto from '~/assets/capa-projeto.jpg';
import noticias from '~/assets/noticias.jpg';
import { Background } from '~/components/Background';

export default function Home({ navigation }) {
    return (
        <Background>
            <Container>
                <News onPress={() => navigation.navigate('Product')}>
                    <Avatar source={noticias} />
                    <Info>
                        <Name>Notícias</Name>
                    </Info>
                </News>
                <Current onPress={() => navigation.navigate('Product')}>
                    <Avatar source={capacurso} />
                    <Info>
                        <Name>Cursos</Name>
                    </Info>
                </Current>
                <Products onPress={() => navigation.navigate('Product')}>
                    <Avatar source={capaproduto} />
                    <Info>
                        <Name>Produtos</Name>
                    </Info>
                </Products>
                <SocialProjects onPress={() => navigation.navigate('Product')}>
                    <Avatar source={capaprojeto} />
                    <Info>
                        <Name>Projetos Sociais</Name>
                    </Info>
                </SocialProjects>
            </Container>
        </Background>
    );
}
Home.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={20} color={tintColor} />
    ),
};
