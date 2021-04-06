import React, {useState} from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

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

export default function Cart() {
    const [products, setProducts] = useState([
		{
			id: '1',
			title: 'Assinatura Digital',
			image_url: 'https://a-static.mlcdn.com.br/618x463/smart-tv-led-32-samsung-32t4300a-wi-fi-hdr-2-hdmi-1-usb/magazineluiza/225608200/19fc4c02d807e26adb344bdc47f19611.jpg',
			quantity: 6,
			price: 150,
		},
		{
			id: '2',
			title: 'Assinatura Digital',
			image_url: 'https://a-static.mlcdn.com.br/618x463/smart-tv-led-32-samsung-32t4300a-wi-fi-hdr-2-hdmi-1-usb/magazineluiza/225608200/19fc4c02d807e26adb344bdc47f19611.jpg',
			quantity: 3,
			price: 400,
		},
		{
			id: '3',
			title: 'Assinatura Digital',
			image_url: 'https://a-static.mlcdn.com.br/618x463/smart-tv-led-32-samsung-32t4300a-wi-fi-hdr-2-hdmi-1-usb/magazineluiza/225608200/19fc4c02d807e26adb344bdc47f19611.jpg',
			quantity: 7,
			price: 900,
		},
	]);

	return (
		<Container>
			<ProductContainer>
				<ProductList
					data={products}
					keyExtractor={(item) => item.id}
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
											{formatValue(item.price * item.quantity)}
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
		</Container>
	);

};
