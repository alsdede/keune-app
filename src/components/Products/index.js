import React from 'react';
import { Container, Capa } from './styles';
import sopure from '~/assets/sopure.jpg';
export default function News() {
    return (
        <Container>
            <Capa source={sopure} />
        </Container>
    );
}
