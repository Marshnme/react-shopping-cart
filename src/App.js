import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from "./contexts/ProductContext";
import {CartContext} from "./contexts/CartContext";
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {

	function removeItem(itemId){
		setCart(cart.filter(({ id }) => id !== itemId));
	}
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart,item])
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{products,addItem}}>
				<CartContext.Provider value={{cart, setCart}}>
					<Navigation/>
					{/* Routes */}
					<Route exact path="/" component={Products}/>
					<Route path="/cart" component={ShoppingCart} remove={removeItem}/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
