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
                    <input type='email' placeholder='Ваш email'/>
                    <input type='password' placeholder='Ваш пароль'/>
                    <button>Войти</button>
                </form>
            </div>
        )
    }
}

export default SignIn;
