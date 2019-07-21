import React from 'react';
import { HashRouter, Redirect, Route, Switch, Link } from 'react-router-dom';

import "./App.less"

import TodoApp from './todolist';
import Gobang from './gobang';
import Input from './input';

const App: React.FC = () => {
    return (
        <div>
	        <HashRouter> 			
	            <header>
					<Link to="/todolist">todolist</Link>
					<Link to="/gobang">gobang</Link>
					<Link to="/input">input</Link>
	 			</header>
		        <Switch>
		            <Route exact path="/todolist" component={ TodoApp } />
		            <Route exact path="/gobang" component={ Gobang } />
		            <Route exact path="/input" component={ Input } />
		        </Switch> 
	        </HashRouter>
	        <footer>
	        footer
	        </footer>
        </div>
    );
}

export default App;


