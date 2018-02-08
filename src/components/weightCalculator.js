import React from 'react';
import Inputs from "./inputs";
import {Link} from 'react-router-dom';

class WeightCalculator extends React.Component {

    constructor() {
        super();
        this.state = {
            age: '',
            height: '',
            result: '',
            inputs:[
                {
                    id:0,
                    title:'Ваш рост:',
                    type:'number',
                    className:'height-value',
                },
                {
                    id:1,
                    title:'Ваш возраст:',
                    type:'number',
                    className:'age-value',
                },
                {
                    id:2,
                    title:'Обхват запястья:',
                    type:'number',
                    className:'wrist-value'
                },
                {
                    id:3,
                    title:'Ваш текущий вес:',
                    type:'number',
                    className:'current-weight-value'
                }
            ]
        };
        this.addToHeight = this.addToHeight.bind(this);
    }


    addToHeight(e) {
        this.setState({
            height: e.target.value
        });
    }

    resultMan() {
        this.setState({
            result: (this.state.height - 100) * 1.5
        })
    }

    resultWoman() {
        this.setState({
            result: (this.state.height - 110) * 1.5
        })
    }

    resultError() {
        this.setState({
            result: 'TI TYPOI?'
        })
    }


    submit() {
        let male = document.getElementById('male');

        let female = document.getElementById('female');

        if (male.checked && this.state.height !== '' && female.checked === false) {
            return this.resultMan()
        } else if (female.checked && this.state.height !== '' && male.checked === false) {
            return this.resultWoman()
        } else if (male.checked === true && female.checked === true) {
            return this.resultError()
        }
        else {
            return this.resultError()
        }
    }


    render() {
        return (
            <div className='calculator'>

                <button className='go-to-registration'><Link to="/signup">Присоеденится к нам сейчас</Link></button>

                <div>
                    {
                        this.state.inputs.map((input,key)=>{
                            return <Inputs key={key} data={input} addtohight={this.addToHeight}/>
                        })
                    }
                </div>

                Ваш пол:
                М:
                <input type='checkbox' id='male'/>

                Ж:
                <input type='checkbox' id='female'/>

                <button onClick={() => {
                    this.submit()
                }}>Расчитать!
                </button>

                <span className='result'>
                    Идеальный вес:{this.state.result}
                </span>

                <button onClick={() => {
                    this.props.close()
                }}>Закрыть
                </button>
            </div>
        )
    }
}

export default WeightCalculator;