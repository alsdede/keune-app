import React, { useRef } from 'react';
import { Image } from 'react-native';
import logo from '~/assets/logo-login.png';
import model from '~/assets/produtos.jpg';
import {
    Container,
    Form,
    FormInput,
    SignLink,
    SignLinkText,
    SubmitButton,
} from './styles';
import { Background } from '~/components/Background';

export default function SignIn({ navigation }) {
    const passwordRef = useRef();

    return (
        <Background source={model}>
            <Container>
                <Image source={logo} />
                <Form>
                    <FormInput
                        icon="mail-outline"
                        keybordType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu e-mail"
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        keybordType="email-address"
                        placeholder="Digite sua senha"
                        ref={passwordRef}
                        returnKeyType="send"
                    />
                    <SubmitButton onPress={() => navigation.navigate('Home')}>
                        Acessar
                    </SubmitButton>
                </Form>

                <SignLink onPress={() => navigation.navigate('SignUp')}>
                    <SignLinkText>Criar conta gratuita</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
