import React from 'react';

class SignUp extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
                Введите почту:
                <input type='email'/>

                Введите пароль:
                <input type='password'/>

                Поддтвердите пароль:
                <input type='password'/>

                Введите ваше Имя:
                <input type='text'/>

                Добавить фотографию:
                <button>Открыть</button>

				<button>Завершить регистрацию</button>
			</div>
		)
	}
}

export default SignUp;