import React from 'react';
import {Link} from 'react-router-dom';

class SignIn extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <form>
                    Введите почту:
                    <input type='email'/>

                    Введите пароль:
                    <input type='password'/>

                    <button><Link to="/mainaccount">Войти</Link></button>
                </form>
            </div>
        )
    }
}

export default SignIn;
