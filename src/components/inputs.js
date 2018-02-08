import React from 'react';

class Inputs extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {data} = this.props;
        return (
            <div key={data.id} className='inputs'>
                <h2>{data.title}</h2>
                <input id={data.id} key={data.id} type={data.type} className={data.className}
                       onChange={this.props.addtohight} />
            </div>
        )
    }
}

export default Inputs;