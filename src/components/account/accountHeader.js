import React from 'react';
import {Link} from 'react-router-dom';

class AccountHeader extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="account-header-cont">
				<Link to="/" className="account-logo"><img src={require('../../img/logo1.png')} /></Link>
			</div>
		)
	}
}

export default AccountHeader;