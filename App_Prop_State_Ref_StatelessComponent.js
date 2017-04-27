import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	constructor() {
		super();
		this.state ={
			stateTxt: 'this is a state element',
			cat: 0,
			red: 0,
			green: 0
		}
		this.update = this.update.bind(this);
	}
	update(e) {
		this.setState({
			stateTxt: e.target.value,
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value
		});
	}
	render() {
		let txt = this.props.txt;
		return (
			<div>
				<Widget txt={this.state.stateTxt} update={this.update} />
				<Slider ref="red" update={this.update} />
				{this.state.red}
				<br />
				<Slider ref="green" update={this.update} />
				{this.state.green}
				<br />
			</div>
		);
	}
}
App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}
App.defaultProps = {
	txt: 'this is the default prop'
}
const Widget = (props) => {
	return(
		<div>
		 	<input type="text" onChange={props.update}></input>
		 	<h1>{props.txt}</h1>
		</div>
	);
}
class Slider extends React.Component {
	render() {
		return(
			<div>
				<input ref="inp" type="range"
				min="0"
				max="255"
				onChange={this.props.update} />
			</div>
		);
	}
}
export default App;













