import React from 'react';
//import { Image } from 'react-native';
import logo from '~/assets/logo-login.png';
import { Container, Avatar, Separator } from './styles';

export default function HeaderLogo() {
    return (
        <Container>
            <Avatar source={logo} />
            <Separator />
        </Container>
    );
}
