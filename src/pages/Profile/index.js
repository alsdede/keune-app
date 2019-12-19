import React, { useRef } from 'react';
//import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Container,
    Form,
    Title,
    Separator,
    FormInput,
    SubmitButton,
} from './styles';
import { Background } from '~/components/Background';

export default function Profile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const oldPasswordRef = useRef();
    const confirmPasswordRef = useRef();
    return (
        <Background>
            <Container>
                <Title>Meu Perfil</Title>

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
                        onSubmitEditing={() => oldPasswordRef.current.focus()}
                    />

                    <Separator />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Sua senha atual"
                        ref={oldPasswordRef}
                        returnTypeKey="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Sua nova senha"
                        ref={passwordRef}
                        returnTypeKey="next"
                        onSubmitEditing={() =>
                            confirmPasswordRef.current.focus()
                        }
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Confirme sua senha"
                        ref={confirmPasswordRef}
                        returnTypeKey="send"
                    />
                    <SubmitButton>Atualizar perfil</SubmitButton>
                </Form>
            </Container>
        </Background>
    );
}

Profile.navigationOptions = {
    tabBarLabel: 'Meu perfil',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="person" size={20} color={tintColor} />
    ),
};
