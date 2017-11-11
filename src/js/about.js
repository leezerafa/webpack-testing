import React from 'react';
import ReactDOM from 'react-dom';

require('../scss/style.scss');

class About extends React.Component {
	render() {
		return (<div><h1>About Us</h1></div>);
	}
}

ReactDOM.render(<About />,document.getElementById('react-container'));