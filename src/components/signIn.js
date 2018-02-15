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
        console.log('this.state.emailInput', this.state.emailInput);
    }

    passwordInputValue(e) {
        this.setState({
            passwordInput: e.target.value
        });
        console.log('this.state.passwordInput', this.state.passwordInput);
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
                        return history.push('/account');
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
                <form>
                    <input id='email-input-signin' type='email' placeholder='Ваш email' onChange={this.emailInputValue} />
                    <input id='password-input-signin' type='password' placeholder='Ваш пароль' onChange={this.passwordInputValue}/>
                    <button onClick={() => {
                        this.SignInAccount()
                        }}>Войти
                    </button>
                </form>
            </div>
        )
    }
}

export default SignIn;
