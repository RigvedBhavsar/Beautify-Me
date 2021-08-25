import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
	const classes = useStyles();

	const handleEmptyCart = () => onEmptyCart();

	const renderEmptyCart = () => (
		<Typography variant="h2">Your Cart is Empty
			<div>

				<a className="waves-effect waves-light btn-large #f57f17 yellow darken-4 home-button">
					<Link style={{ color: "white" }} to="/products">Add Products</Link></a>
			</div>
		</Typography>
	);

	if (!cart.line_items) return 'Loading';

	const renderCart = () => (
		<>
			<Grid container spacing={3}>
				{cart.line_items.map((lineItem) => (
					<Grid item xs={12} sm={3} key={lineItem.id}>
						<CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
					</Grid>
				))}
			</Grid>
			<div className={classes.cardDetails}>
				<Typography className="footer-links" variant="h4">Subtotal : {cart.subtotal.formatted_with_symbol}</Typography>
				<div>
					<Button className={classes.emptyButton} size="large" type="button" variant="contained" style={{ backgroundColor: "#f57f17" }} onClick={handleEmptyCart}>Empty cart</Button>
					<Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" style={{ backgroundColor: "#f57f17" }}>Checkout</Button>
				</div>
			</div>
		</>
	);

	return (
		<Container>
			<div className={classes.toolbar} />
			<Typography className={classes.title} variant="h4" gutterBottom>SHOPPING CART</Typography>
			{!cart.line_items.length ? renderEmptyCart() : renderCart()}
		</Container>
	);
};

export default Cart;
