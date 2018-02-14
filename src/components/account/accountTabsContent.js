import React from 'react';
import Program from './program';
import Food from './food';
import Parameters from './parameters';
import Trainings from './trainings';
import Messages from './messages';
import Settings from './settings';


class AccountTabsContent extends React.Component {
	constructor() {
		super();
	}

	render() {
		const { tabNumber } = this.props;
		switch ( tabNumber ) {
			case 0: return (
						<Program />
					);
					break;
			case 1: return (
						<Parameters />
					);
					break;
			case 2: return (
						<Trainings />
					);
					break;		
			case 3: return (
						<Food />
					);
					break;
			case 4: return (
						<Messages />
					);
					break;
			case 5: return (
						<Settings />
					);
					break;
			default: return (
						<Program />
					);	
		}
	}
}

export default AccountTabsContent;