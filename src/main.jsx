import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';

export function Test() {
	return <>Test</>;
}

export class TestClassCompoent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <>Class Component</>;
	}
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <App /> */}
		<Test />
		<br></br>
		<TestClassCompoent />
	</React.StrictMode>
);
