import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Container, EmptyCartText } from './styles';

export default function EmptyCart() {
    
    return (
        <Container>
            <FeatherIcon name='slash' color='#f3f9ff' size={38}/>
            <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
        </Container>
    );
}