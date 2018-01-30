import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div><h1>homepage</h1>
				<div className="sign-in-block">
		          <ul>
		            <li><Link to="/signin">Войти</Link></li>
		            <li><Link to="/signup">Регистрация</Link></li> 
		          </ul>
        </div>
			</div>
		)
	}
};

export default Home;
