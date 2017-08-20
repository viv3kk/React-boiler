import React from "react";
import { render,ReactDOM } from "react-dom";
import Moment from 'moment';
import { RingLoader,BarLoader,ClipLoader } from 'react-spinners';


class App extends React.Component{
	constructor(props) {
	    super(props);

	    this.state = {
	    	total_li :0
	    }

	    this.focus = this.focus.bind(this);

	}

	myFunction() {
		//console.log('here resize');
		console.log("Total li's --->",this.menu.childNodes.length)
	}

	focus() {
		// Explicitly focus the text input using the raw DOM API
		this.textInput.focus();
	}

	componentDidMount(){
		console.log("Total li's --->",this.menu.childNodes.length)
		this.setState({
			total_li : this.menu.childNodes.length
		})

		window.addEventListener("resize", this.myFunction);
	}


	render(){


		console.log("refs menu now-->",this.menu)

		return (
			<div>
				<div className='sweet-loading'>
					<BarLoader
						color={'#123abc'}
						loading={true}
					/>
				</div>
				<input
		          type="text"
		          ref={(inpt) => { this.textInput = inpt; }} />

		        <input
		          type="button"
		          value="Focus the text input"
		          onClick={this.focus}
		        />

					<ul id="menu" ref={el => this.menu = el} >
				  <li>Coffee</li>
				  <li>Tea</li>
				  <li>Milk</li>
					<li>Milk</li>
					<li>Milk</li>
					<li>Milk</li>
					<li>Milk</li>

				  <li>{this.state.total_li}</li>
				</ul>
			</div>
		);
	}
}

var app = window.document.getElementById("app");

render(<App/>,app);
