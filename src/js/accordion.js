import React from 'react';
import ReactDOM from 'react-dom';

class Accordion extends React.Component {
	render() {
		return (
			<div className="grid-x align-center"><div className="small-8 cell">
			<ul className="accordion" data-accordion>
			  <li className="accordion-item is-active" data-accordion-item>
			    <a href="#" className="accordion-title">Accordion 1</a>
			    <div className="accordion-content" data-tab-content>
			      <p>Panel 1. Lorem ipsum dolor</p>
			      <a href="#">Nowhere to test</a>
			    </div>
			  </li>
			  <li className="accordion-item is-active" data-accordion-item>
			    <a href="#" className="accordion-title">Accordion 2</a>
			    <div className="accordion-content" data-tab-content>
			      <p>Panel 2. Lorem ipsum dolor</p>
			      <a href="#">Nowhere to Go</a>
			    </div>
			  </li>
			  <li className="accordion-item is-active" data-accordion-item>
			    <a href="#" className="accordion-title">Accordion 3</a>
			    <div className="accordion-content" data-tab-content>
			      <p>Panel 3. Lorem ipsum dolor</p>
			      <a href="#">Nowhere to Go</a>
			    </div>
			  </li>
			</ul>
			</div></div>
		);
	}
}

ReactDOM.render(<Accordion />,document.getElementById('react-accordion'));