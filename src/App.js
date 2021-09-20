import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import cartItems from './cart-items'
import reducer from './reducer'

const initialState = {
	cart: cartItems,
	amount: 5,
	total: 150,
}

const store = createStore(reducer, initialState)

function App() {
	return (
		<Provider store={store}>
			<Navbar />
			<CartContainer />
		</Provider>
	)
}

export default App
