import React, { useState } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FloatingCart from '../../components/FloatingCart';

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
			img_url: 'https://a-static.mlcdn.com.br/618x463/smart-tv-led-32-samsung-32t4300a-wi-fi-hdr-2-hdmi-1-usb/magazineluiza/225608200/19fc4c02d807e26adb344bdc47f19611.jpg',
			price: 200,
		},
		{
			id: '2',
			title: 'Assinatura Digital',
			img_url: 'https://a-static.mlcdn.com.br/618x463/smart-tv-led-32-samsung-32t4300a-wi-fi-hdr-2-hdmi-1-usb/magazineluiza/225608200/19fc4c02d807e26adb344bdc47f19611.jpg',
			price: 350,
		},
		{
			id: '3',
			title: 'Assinatura Digital',
			img_url: 'https://a-static.mlcdn.com.br/618x463/smart-tv-led-32-samsung-32t4300a-wi-fi-hdr-2-hdmi-1-usb/magazineluiza/225608200/19fc4c02d807e26adb344bdc47f19611.jpg',
			price: 400,
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
	    <FloatingCart />
	</Container>
    );
}
