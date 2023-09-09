// store.js
import { createStore, combineReducers } from 'redux';
import { cartReducer } from './cartreducers'; // Importa cartReducer como una exportación con nombre

const rootReducer = combineReducers({
  cart: cartReducer, // Asigna el reducer a una clave llamada 'cart'
  // Otros reducers aquí si los tienes
});

const store = createStore(rootReducer);

export default store;
