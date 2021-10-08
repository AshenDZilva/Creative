import Cookies from 'js-cookie';
import { createContext, useReducer } from 'react';

export const Store = createContext();
const initialState = {
  darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
  myplan: {
    myplanItems: Cookies.get('myplanItems')
      ? JSON.parse(Cookies.get('myplanItems'))
      : [],
    paymentMethod: Cookies.get('paymentMethod')
      ? Cookies.get('paymentMethod')
      : '',
  },
  userInfo: Cookies.get('userInfo')
    ? JSON.parse(Cookies.get('userInfo'))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true };
    case 'DARK_MODE_OFF':
      return { ...state, darkMode: false };
    case 'MYPLAN_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.myplan.myplanItems.find(
        (item) => item._id === newItem._id
      );
      const myplanItems = existItem
        ? state.myplan.myplanItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.myplan.myplanItems, newItem];
      Cookies.set('myplanItems', JSON.stringify(myplanItems));
      return { ...state, myplan: { ...state.myplan, myplanItems } };
    }
    case 'MYPLAN_REMOVE_ITEM': {
      const myplanItems = state.myplan.myplanItems.filter(
        (item) => item._id !== action.payload._id
      );
      Cookies.set('myplanItems', JSON.stringify(myplanItems));
      return { ...state, myplan: { ...state.myplan, myplanItems } };
    }
    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state,
        myplan: { ...state.myplan, paymentMethod: action.payload },
      };
    case 'MYPLAN_CLEAR':
      return { ...state, myplan: { ...state.myplan, myplanItems: [] } };
    case 'USER_LOGIN':
      return { ...state, userInfo: action.payload };
    case 'USER_LOGOUT':
      return {
        ...state,
        userInfo: null,
        myplan: {
          myplanItems: [],
          paymentMethod: '',
        },
      };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
