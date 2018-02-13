import React from 'react';
import axios from 'axios';
import Inputs from "./inputs";

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
                    onChange: this.emailInputValue.bind(this),
                },
                {
                    id: 'password-input',
                    type: 'password',
                    title: 'Введите пароль',
                    className: 'password-input',
                    onChange: this.passwordInputValue.bind(this)
                },
                {
                    id: 'check-password-input',
                    type: 'password',
                    title: 'Повторите пароль',
                    className: 'check-password-input',
                    onChange: this.passwordCheckInputValue.bind(this)
                },
                {
                    id: 'name-input',
                    type: 'text',
                    title: 'Введите ваше имя',
                    className: 'name-input',
                    onChange: this.nameInputValue.bind(this)
                }
            ],
            emailInput: '',
            passwordInput: '',
            passwordCheckInput: '',
            nameInput: '',
        };
        this.getTest = this.getTest.bind(this);
        this.postSignIn = this.postSignIn.bind(this);
        this.emailInputValue = this.emailInputValue.bind(this);
        this.passwordInputValue = this.passwordInputValue.bind(this);
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
                        return <Inputs id={input} key={key} data={input} classname={input} onChange={input}/>
                    })
                }
                Добавить фотографию:
                <button>Открыть</button>
                <button onClick={() => {
                    this.getTest()
                }}>
                    Завершить регистрацию
                </button>
            </div>
        )
    }
}

export default SignUp;