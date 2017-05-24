import React, { Component } from 'react';

class SearchBar extends Component{
	constructor(props){
		super(props);
		
		this.state = {term:''};

	}

	onInputChange(term){

	this.setState({term});
	this.props.onSearchTermChange(term);
	}

	render() {
		//console.log(this.state.term);
		return (
			<div className="search-bar">
				<input 
				value={this.state.term}				
				onChange={event => this.onInputChange(event.target.value)} />	
			</div>	
		);
		
	}
	//console.log(this.state.term);

	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }
}


// const SearchBar = () => {
// 	return <input />
// };

export default SearchBar;