import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import { getUserDecorCartRef } from '../../firebase/firebase.utils';
import UserActionTypes from '../user/user-types';
import { selectCurrentUser } from '../user/user-selectors';
import { clearDecoCart, setDecoCartFromFirebase } from './decoCart-actions';
import { selectDecoCartItems } from './decoCart-selectors';
import DecoCartActionTypes from './decoCart-type';

export function* clearDecoCartOnSignOut() {
  yield put(clearDecoCart());
}

export function* updateDecoCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const decoCartRef = yield getUserDecorCartRef(currentUser.id);
      const decoCartItems = yield select(selectDecoCartItems);
      yield decoCartRef.update({ decoCartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkDecoCartFromFirebase({ payload: user }) {
  const decoCartRef = yield getUserDecorCartRef(user.id);
  const decoCartSnapshot = yield decoCartRef.get();
  yield put(setDecoCartFromFirebase(decoCartSnapshot.data().decoCartItems));
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearDecoCartOnSignOut);
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkDecoCartFromFirebase);
}

export function* onDecoCartChange() {
  yield takeLatest(
    [
      DecoCartActionTypes.ADD_DECOITEM,
      DecoCartActionTypes.REMOVE_DECOITEM,
      DecoCartActionTypes.CLEAR_DECOITEM_FROM_CART
    ],
    updateDecoCartInFirebase
  );
}

export function* decoCartSagas() {
  yield all([call(onSignOutSuccess), call(onDecoCartChange), call(onUserSignIn)]);
}