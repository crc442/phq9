import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Layout extends Component {
	render() {
		return (
			<div>
				Hello
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);

