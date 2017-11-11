import React from 'react';
import ReactDOM from 'react-dom';

class IntroSection extends React.Component {
	render() {
		return (
			<div className="grid-x align-center">
				<div className="small-8 cell element">
					<h1>{this.props.title}</h1>
					<p>{this.props.message}</p>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<IntroSection title="This is the Title" message="Intro Text test"/>,document.getElementById('react-intro'));