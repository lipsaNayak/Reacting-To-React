import React from 'react';

class App extends React.Component{
	constructor(){
		super();
		this.state = {data: [
			{id: 1, name: "A"},
			{id: 2, name: "B"},
			{id: 3, name: "C"},
			{id: 4, name: "D"},
			{id: 5, name: "E"},
			{id: 6, name: "F"},
			{id: 7, name: "G"},
			{id: 8, name: "H"},
		]}
	}
	render() {
		let rows = this.state.data.map( person => {
			return <PersonRow key={person.id} data={person} />
		})
		return(
			<div>
				<table>
					<tbody>{rows}</tbody>
				</table>
			</div>
		);
	}
}
const PersonRow = (props) => {
	return <tr>
		<td>{props.data.id}</td>
		<td>{props.data.name}</td>
	</tr>
}
export default App;