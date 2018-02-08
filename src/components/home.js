import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import WeightCalculator from "./weightCalculator";
import MainTextContent from "./mainTextContent";
import Contacts from "./contactsMain";


class Home extends React.Component {
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
            <div><h><img
                src='http://bountiful.co.za/Perfectlook_Web/Main_Page/Main_page_top_frame/Top_frame_pictures/PL_logo.jpg'/>
            </h>
                <div className="sign-in-block">
                    <ul>
                        <li><Link to="/signin">Войти</Link></li>
                        <li><Link to="/signup">Регистрация</Link></li>
                    </ul>
                </div>
                {
                    this.state.toggle ? <WeightCalculator close={this.toggleCalc}/> :
                        <div className='calculator'>
                            <button onClick={() => {
                                this.toggleCalc()
                            }}>Расчитать идеальный вес!
                            </button>
                        </div>
                }
                <MainTextContent/>
                <Contacts/>
            </div>
        )
    }
}

export default Home;
