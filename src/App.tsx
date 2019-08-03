import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import "./App.less"

import TodoApp from './todolist';
import Gobang from './gobang';
import PixelArt from './pixel-art';

const App: React.FC = () => {
    return (
        <div>
	        <HashRouter> 			
	            <header>
					<img src={logo} className="App-logo" alt="logo" />
					<div>
						<Link to="/todolist">todolist</Link>
						<Link to="/gobang">gobang</Link>
						<Link to="/pixel-art">pixel-art</Link>
					</div>
	 			</header>
		        <Switch>
		            <Route exact path="/todolist" component={ TodoApp } />
		            <Route exact path="/gobang" component={ Gobang } />
		            <Route exact path="/pixel-art" component={ PixelArt } />
		        </Switch> 
	        </HashRouter>
	        {/* <footer>
	        footer
	        </footer> */}
        </div>
    );
}

export default App;


