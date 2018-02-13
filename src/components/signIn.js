import React from 'react';
import {Link} from 'react-router-dom';
import axios from "axios/index";

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            emailInput: '',
            passwordInput: '',
        };
        this.SignInAccount = this.SignInAccount.bind(this);
        this.emailInputValue=this.emailInputValue.bind(this);
        this.passwordInputValue=this.passwordInputValue.bind(this);
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

    SignInAccount() {
        axios.get('http://localhost:9000/perfect_look')
            .then((res) => {
                const {history} = this.props;
                console.log('good response', res.data);
                let array = res.data.map((user) => {
                    return {
                        email: user.email,
                        password: user.password,
                        name:user.name
                    };

                });

                array.map((email) => {
                    if (email.email === this.state.emailInput && email.password === this.state.passwordInput) {
                        return history.push('/mainaccount');
                    }
                });
            })

            .catch((err) => {
                console.log('bad response', err);
            });
    }

    render() {
        return (
            <div>
                Введите почту:
                <input id='email-input-signin' type='email' onChange={this.emailInputValue}/>

                Введите пароль:
                <input id='password-input-signin' type='password' onChange={this.passwordInputValue}/>

                <button onClick={() => {
                    this.SignInAccount()
                }}>Войти
                </button>
            </div>
        )
    }
}

export default SignIn;
