import React, { useRef } from 'react';
import { Image } from 'react-native';
import logo from '~/assets/logo.png';
import {
    Container,
    Form,
    FormInput,
    SignLink,
    SignLinkText,
    SubmitButton,
} from './styles';
import { Background } from '~/components/Background';

export default function SignUp({ navigation }) {
    const emailRef = useRef();
    const passwordRef = useRef();

    return (
        <Background>
            <Container>
                <Image source={logo} />
                <Form>
                    <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Nome completo"
                        returnTypeKey="next"
                        onSubmitEditing={() => emailRef.current.focus()}
                    />
                    <FormInput
                        icon="mail-outline"
                        keybordType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu e-mail"
                        ref={emailRef}
                        returnTypeKey="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        keybordType="email-address"
                        placeholder="Digite sua senha"
                        ref={passwordRef}
                        returnTypeKey="send"
                    />
                    <SubmitButton>Acessar</SubmitButton>
                </Form>

                <SignLink onPress={() => navigation.navigate('SignIn')}>
                    <SignLinkText>Ja possuo conta</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
