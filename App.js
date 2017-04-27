import React from 'react';
class App extends React.Component {
	render() {
		return(
			<div>
			<Button />I <Heart/> React
			</div>
		);
	}
}
class Button extends React.Component {
	render() {
		return <button></button>
	}
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>
export default App;