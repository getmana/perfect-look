import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import SignIn from './signIn';
import SignUp from './signUp';
import Home from './home';

class Main extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/signin' component={SignIn} />
					<Route path='/signup' component={SignUp} />
				</Switch>
			</div>
		)
	}
}

export default Main;