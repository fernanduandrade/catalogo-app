import React, {useMemo} from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { useDispatch, useSelector } from 'react-redux';

import * as CartActions  from '../../store/modules/cart/actions';

import {
    Container,
    ProductContainer,
    ProductList,
    Product,
    ProductImage,
    ProductTitleContainer,
    ProductSinglePrice,
    TotalContainer,
    ProductPriceContainer,
    ProductPrice,
    ProductQuantity,
    ActionContainer,
    ActionButton,
    TotalProductsContainer,
    TotalProductsText,
    SubTotalValue,
	ProductTitle,
} from './styles';

import formatValue from '../../utils/formatValue';
import EmptyCart from '../../components/EmptyCart';


export default function Cart() {
	const dispatch = useDispatch();
    const products = useSelector(({cart}) => cart);

	const cartSize = useMemo(() => {
		return products.length || 0;
	}, [products]);

	const cartTotal = useMemo(() => {
		const cartAmount = products.reduce((acc, product) => {
			const totalPrice = acc + product.price * product.amount;

			return totalPrice;
		}, 0);
		
		return formatValue(cartAmount)
	}, [products]);

	return (
		<Container>
			<ProductContainer>
				<ProductList
					data={products}
					keyExtractor={(item) => item.id}
					ListEmptyComponent={<EmptyCart />}
					ListFooterComponent={<View />}
					ListFooterComponentStyle={{ height: 180 }}
					renderItem={({ item }) => (
						<Product>
							<ProductImage source={{ uri: item.image_url }} />
							<ProductTitleContainer>
								<ProductTitle>{item.title}</ProductTitle>
								<ProductPriceContainer>
									<ProductSinglePrice>
										{formatValue(item.price)}
									</ProductSinglePrice>

									<TotalContainer>
										<ProductQuantity>{`${item.quantity}x`}</ProductQuantity>
										<ProductPrice>
											{formatValue(item.price * item.amount)}
										</ProductPrice>
									</TotalContainer>
								</ProductPriceContainer>
							</ProductTitleContainer>
							<ActionContainer>
								<ActionButton onPress={() => { }}>
									<FeatherIcon name="plus" color="#E83F5B" size={16} />
								</ActionButton>
								<ActionButton onPress={() => { }}>
									<FeatherIcon name="minus" color="#E83F5B" size={16} />
								</ActionButton>
							</ActionContainer>
						</Product>
					)}
				/>
			</ProductContainer>
			<TotalProductsContainer>
				<FeatherIcon name='shopping-cart' color='#fff' size={24}/>
				<TotalProductsText>{cartSize} {cartSize === 1 ? 'item' : 'itens'}</TotalProductsText>
				<SubTotalValue>{cartTotal}</SubTotalValue>
			</TotalProductsContainer>
		</Container>
	);

};
