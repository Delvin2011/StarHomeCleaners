//handles all the root sagas

import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user-sagas';
import { cartSagas } from './cart/cart-sagas';

export default function* rootSaga() {
  yield all([call(userSagas),call(cartSagas)]);//all handles all sagas. all the code will initialise at the same time.
}
