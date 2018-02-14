import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import WeightCalculator from './weightCalculator';
import WeightCalc from './weightCalc';

class MainTextContent extends React.Component {
    constructor() {
        super();
        this.state = {
            toggle: false,
        };
        this.toggleCalc = this.toggleCalc.bind(this);
    }

    toggleCalc() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <div>
                <div className="top-content">
                    <h1 className="title">We know the best way</h1>
                    <h1 className="title bottom-title">to look perfect</h1>
                    <p>Онлайн-программа похудения от топ-тренеров. 12 недель. Тренировки, меню, рецепты, уход за собой, мотивация!</p>
                    {
                    this.state.toggle ? <WeightCalc close={this.toggleCalc}/> :
                        <div className="calculator-btn">
                            <button onClick={() => {
                                this.toggleCalc()
                            }}>Рассчитать идеальный вес!
                            </button>
                        </div>
                    } 
                </div>
                <div className="bottom-content">
                    <Link to="/signup">Начать сейчас!</Link>
                </div>
            </div>
        )
    }
}

export default MainTextContent;