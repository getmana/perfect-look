import React from 'react';
import AccountHeader from './accountHeader';
import PersonInfo from './personInfo';
import AccountTabs from './accountTabs';


class Account extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div className="account-page">
                <AccountHeader />
                <div className="account-content">
                    <PersonInfo />
                    <AccountTabs />                   
                </div>
            </div>
        )
    }
}

export default Account;