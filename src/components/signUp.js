import React from 'react';
import axios from 'axios';
import Inputs from "./inputs";
import {Link} from 'react-router-dom';
import Account from "./account/mainAccount";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            usersData: [],
            inputs: [
                {
                    id: 'email-input',
                    type: 'email',
                    title: 'Введите e-mail',
                    className: 'email-input',
                },
                {
                    id: 'password-input',
                    type: 'password',
                    title: 'Введите пароль',
                    className: 'password-input',
                },
                {
                    id: 'check-password-input',
                    type: 'password',
                    title: 'Повторите пароль',
                    className: 'check-password-input',
                },
                {
                    id: 'name-input',
                    type: 'text',
                    title: 'Введите ваше имя',
                    className: 'name-input',
                }
            ],
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
        let checkPassword = document.getElementById('check-password-input');
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
                {
                    this.state.inputs.map((input, key) => {
                        return <Inputs id={input} key={key} data={input} classname={input}/>
                    })
                }
                Добавить фотографию:
                <button onClick={() => {
                    this.getTest()
                }}>Открыть</button>
                <button onClick={() => {this.postSignIn()
                }}>
                    Завершить регистрацию
                </button>
            </div>
        )
    }
}

export default SignUp;