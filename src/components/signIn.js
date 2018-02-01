import React from 'react';
import {Link} from 'react-router-dom';

class SignIn extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				Введите почту:
				<input type='email'/>

				Введите пароль:
				<input type='password'/>

				<button><Link to="/mainaccount">Войти</Link></button>
			</div>
		)
	}
}

export default SignIn;
