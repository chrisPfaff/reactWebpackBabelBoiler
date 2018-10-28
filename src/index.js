import React from 'react';
import ReactDOM from 'react-dom';
//import styles directly into main react file
//when using webpack
import 'index.scss';

const App = () => {
	return (
		<div className="mainContainer">
			<h1>Hello from React</h1>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
