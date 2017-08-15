import React from "react";
import { render,ReactDOM } from "react-dom";
import Chart from 'chart.js';



class App extends React.Component{
	constructor(props) {
	    super(props);

	    this.state = {
	    	total_li :0
	    }

	    this.focus = this.focus.bind(this);

	}

	focus() {
		// Explicitly focus the text input using the raw DOM API
		this.textInput.focus();
	}

	componentDidMount(){
		console.log(this.menu.childNodes.length)
		this.setState({
			total_li : this.menu.childNodes.length
		})		
	}


	render(){

		this.setState({
			total_li : this.menu.childNodes.length
		})
		//console.log(this.menu)

		return (
			<div>

				<input
		          type="text"
		          ref={(inpt) => { this.textInput = inpt; }} />

		        <input
		          type="button"
		          value="Focus the text input"
		          onClick={this.focus}
		        />

				<ul id="menu" ref={el => this.menu = el}>
				  <li>Coffee</li>
				  <li>Tea</li>
				  <li>Milk</li>
				  <li>{this.state.total_li}</li>
				</ul>
			</div>
		);
	}
}

var app = window.document.getElementById("app");

render(<App/>,app);