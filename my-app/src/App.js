import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import Game from './components/Game'
import Board from './components/Board'
import Square from './components/Square'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Game />
			</div>
		);
	}
}

export default App;
