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
                    placeholder:'Ваш рост',
                    type:'number',
                    className:'height-value',
                },
                {
                    id:1,
                    placeholder:'Ваш возраст',
                    type:'number',
                    className:'age-value',
                },
                {
                    id:2,
                    placeholder:'Обхват запястья',
                    type:'number',
                    className:'wrist-value'
                },
                {
                    id:3,
                    placeholder:'Ваш вес',
                    type:'number',
                    className:'current-weight-value'
                }
            ],
            isBtnClicked: false
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
            result: 'Error'
        })
    }


    submit() {
        let male = document.getElementById('male');

        let female = document.getElementById('female');

        this.setState({
            isBtnClicked: true
        });

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
        if (this.state.isBtnClicked) {
            return (
                <div className="calculator-wrapper">
                    <div className="calculator">
                        <h1 className="calc-title">Калькулятор идеального веса</h1>
                        <p className="result">Ваш идеальный вес: 
                            {this.state.result}
                        </p>
                        <button className="close-btn" onClick={() => {
                        this.props.close()
                        }}>X
                    </button>
                    </div>     
                </div>
            )
        }   else { return(
                <div className="calculator-wrapper">
                    <div className="calculator">
                        <h1 className="calc-title">Калькулятор идеального веса</h1>
                        <div>
                            {
                                this.state.inputs.map((input,key)=>{
                                return <Inputs key={key} data={input} addtohight={this.addToHeight}/>
                                    })
                            }
                        </div>
                        <div className="gender">
                            <span>Ваш пол: </span>
                            <label>Ж</label><input name='gender' type='radio' id='female' defaultChecked="checked"/>
                            <label>М</label><input name='gender' type='radio' id='male'/>
                            </div>
                        <button className="red-btn" onClick={() => {
                            this.submit()
                            }}>Рассчитать!
                        </button>
                        <button className="close-btn" onClick={() => {
                            this.props.close()
                            }}>X
                        </button>
                    </div>
                </div>
                               
            )
        }
    }
}

export default WeightCalculator;