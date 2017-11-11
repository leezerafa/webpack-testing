import React from 'react';
import ReactDOM from 'react-dom';

class SlickBanner extends React.Component {
	render() {
		return (
			<div className="grix-x align-center">
				<div className="small-8 cell">
					<div className="multiple-items">
						<div><img src={require('../test.png')} /></div>
						<div><img src={require('../test.png')} /></div>
						<div><img src={require('../test.png')} /></div>
						<div><img src={require('../test.png')} /></div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<SlickBanner />,document.getElementById('react-banner'));