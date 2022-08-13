import React from 'react';
import { type Action } from './actions';

import products from '../data/products';

const initialState: State = {
  lineItems: products,
  totalAmount: 0,
  transport: {
    id: '',
    trans: '',
    price: '',
    workDay: '',
  },
};

const calcTotalAmount = (
  lineItems: LineItems[],
  transport: Transport,
): State => {
  const result = lineItems.reduce((total, currentItem) => {
    console.log(currentItem);
    console.log('total =>', total);
    return total + currentItem.price * currentItem.quantity;
  }, 0);
  if (result < 0) {
    return 0;
  }

  if (transport.price === '') {
    return result;
  }

  return result + transport.price;
};

initialState.totalAmount = calcTotalAmount(
  initialState.lineItems,
  initialState.transport,
);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_QUANTITY': {
      const { id, num } = action.payload;
      const { lineItems, transport } = state;
      const newlineItems = lineItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + num,
          };
        }
        return item;
      });
      return {
        ...state,
        lineItems: newlineItems,
        totalAmount: calcTotalAmount(newlineItems, transport),
      };
    }

    case 'CHANGE_TRANS': {
      const selectTrans = action.payload;
      return {
        ...state,
        transport: selectTrans,
        totalAmount: calcTotalAmount(state.lineItems, selectTrans),
      };
    }
    default:
      return state;
  }
};

export default function useShoppingCart() {
  return React.useReducer(reducer, initialState);
}
