import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div className="footer">
				<div className="footer-left-block">
					<Link to="/" className="logo"><img src={require('../img/logo1.png')} /></Link>
					<p>&copy; 2018</p>
					<p>ALL RIGHTS RESERVED</p>
				</div>
				<div className="footer-right-block">
					<h2>Наши обновления:</h2>
					<p>Введите Ваш email, чтобы получать наши новости:</p>
					<form className="footer-right-block-form">
						<input type='email' placeholder='Ваш email'/>
						<button>подписаться</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Footer;