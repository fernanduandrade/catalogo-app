import React, { useState } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import FloatingCart from '../../components/FloatingCart';
import * as CartActions from '../../store/modules/cart/actions';

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
	const dispatch = useDispatch();
    const [products, setProducts] = useState([
		{
			id: "1",
			title: "Assinatura Trimestral",
			image_url: "https://res.cloudinary.com/robertosousa1/image/upload/v15944492578/dio/quarterly_subscription_yjolpc.png",
			price: 350
		},
		{
			id: "2",
			title: "Assinatura Anual",
			image_url: "https://res.cloudinary.com/robertosousa1/image/upload/v15944492578/dio/annual_subscription_qyolci.png",
			price: 60
		}
	]);

	function handlerAddToCart(id) {
		dispatch(CartActions.addToCartRequest(id))
	}

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
			    <ProductImage source={{ uri: item.image_url }} />
			    <ProductTitle>{item.title}</ProductTitle>
			    <PriceContainer>
				<ProductPrice>{formatValue(item.price)}</ProductPrice>
				<ProductButton onPress={() => handlerAddToCart(item.id)}>
				    <ProductButtonText>adicionar</ProductButtonText>
				    <FeatherIcon size={30} name='plus-circle' color='#d1d7e9' />
				</ProductButton>
			    </PriceContainer>
			</Product>
		    )}
		/>
	    </ProductContainer>
	    <FloatingCart />
	</Container>
    );
}
