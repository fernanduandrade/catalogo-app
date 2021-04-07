import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import formatValue from '../../../utils/formatValue';

import {addToCartSuccess, updateAmountSuccess} from './actions';
import api from '../../../services/api';

function* addToCart({id}) {
    const productExists = yield select((state) =>
        state.cart.find((product) => product.id === id)
    );

    const currentAmount = productExists ? productExists.amount : 0;
    const amount = currentAmount + 1;

    if(productExists) {
        //dispatch action
        yield put(updateAmountSuccess(id, amount));

    } else {
        
        const response = yield call(api.get, `${id}/`); 
        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatValue(response.data.price),
        };

        yield put(addToCartSuccess(data));
    }
};

function* updateAmount({id, amount}) {
   
    if(amount <= 0) {
	 console.log("clicado"); // :(
	return;
    } else {
	console.log("clicado, state alterado");
	yield put(updateAmountSuccess(id, amount));
    }
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
