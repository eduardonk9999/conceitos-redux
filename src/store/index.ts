import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IcartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer';

export interface IState {
  cart: IcartState
}

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;