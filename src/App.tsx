import React from 'react';
import { HashRouter, Redirect, Route, Switch, Link } from 'react-router-dom';

import "./App.less"

import TodoApp from './todolist';
import Gobang from './gobang';

const App: React.FC = () => {
    return (
        <div>
	        <HashRouter> 			
	            <header>
					<Link to="/todolist">todolist</Link>
					<Link to="/login">login</Link>
	 			</header>
		        <Switch>
		            <Route exact path="/todolist" component={ TodoApp } />
		            <Route exact path="/gobang" component={ Gobang } />
		        </Switch> 
	        </HashRouter>
	        <footer>
	        footer
	        </footer>
        </div>
    );
}

export default App;


