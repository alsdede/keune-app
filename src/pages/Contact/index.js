import React from 'react';
//import { TouchableOpacity } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import { Background } from '~/components/Background';
import keune from '~/assets/fachada-keune.jpg';
import maps2 from '~/assets/maps2.jpg';
import { Container, Header, SubmitButton, Subs, Map } from './styles';

//const data = [1, 2, 3, 4, 5, 6];
export default function Contact({ navigation }) {
    return (
        <Background>
            <Container>
                <Header source={keune} />
                <Map source={maps2} />
                <Subs>
                    R. Quinze de Novembro, 34 - Balneario, Florianópolis - SC,
                    88075-220
                </Subs>
                <SubmitButton
                    onPress={() => navigation.navigate('ProvidersList')}
                >
                    Entre em contato
                </SubmitButton>
            </Container>
        </Background>
    );
}

Contact.navigationOptions = () => ({
    title: 'Contato',
    headerTintColor: '#383838',
});
