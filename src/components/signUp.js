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
            usersData: []
        };
        this.getTest = this.getTest.bind(this);
        this.postSignIn = this.postSignIn.bind(this);
    }

    getTest() {
        axios.get('http://localhost:9000/perfect_look')
            .then((res) => {
                console.log('good response', res.data);
                let array = res.data.map((user) => {
                    return {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        password: user.password
                    };

                });
                this.setState({
                    usersData: array
                });

            })

            .catch((err) => {
                console.log('bad response', err);
            });
    }


    postSignIn() {
        const { history } = this.props;
        let password = document.getElementById('password-input');
        let checkPassword = document.getElementById('confirm-password-input');
        let name = document.getElementById('name-input');
        let email = document.getElementById('email-input');

        if (password.value === checkPassword.value && name.value !== '' && email.value !== '') {
            axios.post('http://localhost:9000/perfect_look', {
                name: name.value,
                email: email.value,
                password: password.value,
            })
                .then((res) => {
                    console.log('good response', res);
                    history.push('/mainaccount');
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
                        <input id="name-input" type="text" placeholder="Введите ваше имя" className="name-input" />
                        <input id="email-input" type="email" placeholder="Введите e-mail" className="email-input" />
                        <input id="password-input" type="password" placeholder="Введите пароль" className="password-input" />
                        <input id="check-password-input" type="password" placeholder="Повторите пароль" className="check-password-input" />
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