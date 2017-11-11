import React from 'react';
import ReactDOM from 'react-dom';

require('../scss/style.scss');

class Contact extends React.Component {
	render() {
		return (<div><h1>Contact Us</h1></div>);
	}
}

ReactDOM.render(<Contact />,document.getElementById('react-container'));