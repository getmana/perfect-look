import React from 'react';

class MainAccount extends React.Component {
    constructor() {
        super();
    }


    render() {
        const name = this.props.match.params.name;
        return (
            <div >
                <h2>YOUR ACCOUNT,{name}</h2>
            </div>
        )
    }
}

export default MainAccount;