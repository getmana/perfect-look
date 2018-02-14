import React from 'react';

class PersonInfo extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="avatar">
				<img src={require('../../img/default-ava.jpg')} />
			</div>
		)
	}

}

export default PersonInfo;