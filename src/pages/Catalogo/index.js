import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import FloatingCart from '../../components/FloatingCart';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

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
    const [products, setProducts] = useState();
    
	useEffect(() => {
		async function loadData() {
			try{
				const response = await api.get();
				setProducts(response.data);
			} catch(err) {
				console.log(err);
			}
		};

		loadData();
	}, []);

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
