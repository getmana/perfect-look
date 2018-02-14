import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import MainTextContent from './mainTextContent';
import Footer from './footer';
import SignIn from './signIn';


class Home extends React.Component {
    constructor() {
        super();  
    } 

    render() {
        return (
            <div>
                <div className="homepage-header">
                    <div className="logo-slogan-box">
                        <Link to="/" className="logo"><img src={require('../img/logo1.png')} /></Link>
                        <p className="slogan">Начните Ваше путешествие к идеальному телу сегодня!</p>
                    </div>
                    <div className="sign-in-block">
                        <SignIn />
                        <Link to="/signup" className="sign-in-block-link">Регистрация</Link>
                    </div>
                </div>
                <MainTextContent/>
                <div className="about-program-block">
                    <div className="about-program-block-left big-block">
                        <h1 className="block-title">Здоровое питание</h1>
                        <p className="block-content">В основу программы заложены принципы правильного питания,
                         которые наладят обмен веществ и обеспечат организм всеми необходимыми для здоровья и красивого тела
                         элементами</p>
                        <Link to="/" className="block-link">далее /</Link>
                    </div>
                    <div className="about-program-block-right big-block">
                        <h1 className="block-title">Не теряй мотивацию!</h1>
                        <p className="block-content">Секреты от топ-тренеров, советы, полезная информация. После каждого уровня
                         мы будем проверять твои результаты (фото, кг и см). Главное - не останавливаться на полпути!</p>
                        <Link to="/" className="block-link">далее /</Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;
