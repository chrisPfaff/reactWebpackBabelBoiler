import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
	return (
		<div className="mainContainer">
			<h1>Hello from React</h1>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
