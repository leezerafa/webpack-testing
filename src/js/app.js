import React from 'react';
import ReactDOM from 'react-dom';

require('../scss/style.scss');

class Message extends React.Component {
	render() {
		return (<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.message} test message xyz</p>
			</div>);
	}
}

ReactDOM.render(<Message title="Email Lee test" message="Can you email him?"/>,document.getElementById('react-container'));