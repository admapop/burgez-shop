import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import './App.css';

import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/SignIn-SignUp/SignInAndSignUp';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {

	unsubscribeFromAuth = null;

	componentDidMount() {
		// this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
		// 	if (userAuth) {
		// 		const userRef = await createUserProfileDocument(userAuth);

		// 		userRef.onSnapshot(snapShot => {
		// 			setCurrentUser({
		// 				id: snapShot.id,
		// 				...snapShot.data()
		// 			});
		// 		});
		// 	} else {
		// 		setCurrentUser(userAuth);
		// 	}
		// });
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						exact path='/signin'
						render={() =>
							this.props.currentUser ? (
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
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(App);
