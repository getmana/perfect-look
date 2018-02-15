import React from 'react';
import axios from 'axios';
import Inputs from "./inputs";
import {Link} from 'react-router-dom';
import Account from "./account/account";
import Footer from './footer';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            usersData: [],
            emailInput: '',
            passwordInput: '',
            passwordCheckInput: '',
            nameInput: '',
        };
        this.getTest = this.getTest.bind(this);
        this.postSignIn = this.postSignIn.bind(this);
        this.emailInputValue = this.emailInputValue.bind(this);
        this.passwordInputValue = this.passwordInputValue.bind(this);
        this.passwordCheckInputValue = this.passwordCheckInputValue.bind(this);
        this.nameInputValue = this.nameInputValue.bind(this);
    }

    emailInputValue(e) {
        this.setState({
            emailInput: e.target.value
        })
    }

    passwordInputValue(e) {
        this.setState({
            passwordInput: e.target.value
        });
    }

    passwordCheckInputValue(e) {
        this.setState({
            passwordCheckInput: e.target.value
        })
    }

    nameInputValue(e) {
        this.setState({
            nameInput: e.target.value
        });
    }


    getTest() {
        axios.get('http://localhost:9000/perfect_look')
            .then((res) => {
                console.log('good response', res.data);
                let array = res.data.map((user) => {
                    return {
                        email: user.email,
                        password: user.password,
                    };

                });
                let temp = false;
                array.map((email) => {
                    if (email.email === this.state.emailInput) {
                        temp = true;
                        return (alert('Пользователь с таким email уже существует'))
                    }
                });
                if (!temp) {
                    return (this.postSignIn())
                }
            })

            .catch((err) => {
                console.log('bad response', err);
            });
    }


    postSignIn() {
        const {history} = this.props;
        if (this.state.passwordInput === this.state.passwordCheckInput && this.state.nameInput.length >= 2 && this.state.emailInput !== '') {
            axios.post('http://localhost:9000/perfect_look', {
                name: this.state.nameInput,
                email: this.state.emailInput,
                password: this.state.passwordInput,
            })
                .then((res) => {
                    console.log('good response', res);
                    history.push('/account');
                })
                .catch((err) => {
                        console.log('bad response', err);
                    }
                );

        } else {
            alert('Неправильно введены данные');
        }
    }

    render() {
        return (
            <div>
                <div className="logo-slogan-box">
                    <Link to="/" className="logo"><img src={require('../img/logo1.png')} /></Link>
                    <p className="slogan">Начните Ваше путешествие к идеальному телу сегодня!</p>
                </div>
                <div className="registration-page-content">
                    <h1 className="title">Форма регистрации</h1>
                    <form className="registration-form">
                        <input id="name-input" type="text" placeholder="Введите ваше имя" className="name-input" onChange={this.nameInputValue}/>
                        <input id="email-input" type="email" placeholder="Введите e-mail" className="email-input" onChange={this.emailInputValue}/>
                        <input id="password-input" type="password" placeholder="Введите пароль" className="password-input" onClick={this.passwordInputValue}/>
                        <input id="check-password-input" type="password" placeholder="Повторите пароль" className="check-password-input" onClick={this.passwordCheckInputValue}/>
                        <label>Добавить фотографию:</label>
                        <button className="brown-btn" onClick={() => {
                            this.getTest()
                            }}>Загрузить</button>
                        <button className="red-btn" onClick={() => {this.postSignIn()
                             }}>Завершить регистрацию</button>
                    </form> 
                </div>
                <Footer />
            </div>
        )
    }
}

export default SignUp;