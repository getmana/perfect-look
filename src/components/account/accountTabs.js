import React from 'react';
import {Link} from 'react-router-dom';
import AccountTabsContent from './accountTabsContent';


class AccountTabs extends React.Component {
	constructor() {
		super();
		this.state = {
			buttonNames: [
				'Программа', 'Мои данные', 'Тренировки', 'Питание', 'Уведомления', 'Настройки'
			],
			tabNumber: 0
		}
		this.chooseTab = this.chooseTab.bind(this)
	}

	chooseTab(index) {
		this.setState({
			tabNumber: index
		})
	}

	render() {
		return(
			<div className="tabs-container">
				<div className="tabs-item-container">
					{
						this.state.buttonNames.map((name, index) => {
							return (
								<div key={index} className="tab-item">
									<button onClick={ () => {this.chooseTab(index)}}>{name}</button>
								</div>
							)
						})
					}	
				</div>
				<AccountTabsContent tabNumber={this.state.tabNumber} />
			</div>
		)
	}
}

export default AccountTabs;