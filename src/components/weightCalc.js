import React from 'react';
import {Link} from 'react-router-dom';

class WeightCalc extends React.Component {
	constructor() {
		super();
		this.state = {
			height: 0,
			weight: 0,
			isBtnClicked: false,
			result: 0,
			selectedOption: 'female'
		}
		this.changeHeight = this.changeHeight.bind(this);
		this.changeWeight = this.changeWeight.bind(this);
		this.changeOption = this.changeOption.bind(this);
	}

	changeHeight(e) {
		this.setState({
			height: e.target.value
		})
	}

	changeWeight(e) {
		this.setState({
			weight: e.target.value
		})
	}

	changeOption(changeEvent) {
		this.setState({
			selectedOption: changeEvent.target.value
		})
	}

	countWeight() {
		if (this.state.selectedOption == 'male') {
			this.setState({
				result: this.state.height - 100,
				isBtnClicked: true
			})
		} else {
			this.setState({
				result: this.state.height - 110,
				isBtnClicked: true
			})
		}
	}

	render() {
		if (this.state.isBtnClicked) {
            return (
                <div className="calculator-wrapper">
                    <div className="calculator">
                        <h1 className="calc-title">Калькулятор идеального веса</h1>
                        <p>Ваш текущий вес: {this.state.weight}</p>
                        <p>Ваш идеальный вес: {this.state.result}
                        </p>
                        <Link to="/signup" className="brown-btn">начать сейчас</Link>
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
                        <div className="calc-inputs-box">
                            <input className='calc-inputs' type="number" placeholder="Ваш рост" onChange={this.changeHeight} />
                            <input className='calc-inputs' type="number" placeholder="Ваш возраст" />
                            <input className='calc-inputs' type="number" placeholder="Обхват запястья" />
                            <input className='calc-inputs' type="number" placeholder="Ваше вес" onChange={this.changeWeight} />
                        </div>
                        <div className="gender">
                            <span>Ваш пол: </span>
                            <label>Ж</label><input value="female" name='gender' type='radio' id='female' checked={this.state.selectedOption === 'female'} onChange={this.changeOption}/>
                            <label>М</label><input value="male" name='gender' type='radio' id='male' checked={this.state.selectedOption === 'male'} onChange={this.changeOption}/>
                            </div>
                        <button className="red-btn" onClick={() => {
                            this.countWeight()
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

export default WeightCalc;