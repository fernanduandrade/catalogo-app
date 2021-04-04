import React, { useState } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import formatValue from '../../utils/formatValue';

import {
    Container,
    ProductContainer,
    ProductList,
    ProductImage,
    Product,
    ProductTitle,
    PriceContainer,
    ProductPrice,
    ProductButton,
    ProductButtonText
} from './styles';

export default function Catalogo() {
	const [products, setProducts] = useState([
		{
			id: '1',
			title: 'Assinatura Digital',
			img_url: 'https://sc04.alicdn.com/kf/Hf90a59ddd92a4d7a808bf21a9f8ab16co.png',
			price: 200,
		}
	]);
    
	return (
	    <Container>
		<ProductContainer>
		    <ProductList
		    data={products}
		    keyExtractor={(item) => item.id}
		    ListFooterComponent={<View />}
		    ListFooterComponentStyle={{ height: 80 }}
		    renderItem={({ item }) => (
			<Product>
			    <ProductImage source={{ uri: item.img_url }} />
			    <ProductTitle>{item.title}</ProductTitle>
			    <PriceContainer>
				<ProductPrice>{formatValue(item.price)}</ProductPrice>
				<ProductButton onPress={() => { }}>
				    <ProductButtonText>adicionar</ProductButtonText>
				    <FeatherIcon size={30} name='plus-circle' color='#d1d7e9' />
				</ProductButton>
			    </PriceContainer>
			</Product>
		    )}
		    />
		</ProductContainer>
	    </Container>
	);
}
