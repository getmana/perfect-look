import React, { Component } from 'react';
import Main from './components/main';
import './css/main.css';


class App extends Component {
  render() {
    return (
		<div className="App">
	      	<div className="container">
				<Main />
			</div>
		</div>
    );
  }
}

export default App;
