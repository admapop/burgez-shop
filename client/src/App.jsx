import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './global.styles';
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/SignIn-SignUp/SignInAndSignUp';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession()
	}, [checkUserSession])

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route exact path='/checkout' component={CheckoutPage} />
				<Route
					exact path='/signin'
					render={() =>
						currentUser ? (
							<Redirect to='/' />
						) : (
								<SignInAndSignUp />
							)
					}
				/>
			</Switch>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
