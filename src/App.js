import React, { Component } from 'react'
import './App.css'
import Calculator from './Calculator.js'
import logo from "./logo.png"

class App extends Component {
	constructor() {
		super()
		this.state = {
			total: "",
			display: "",
			immature: false,
			lastModifier: false
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(event) {
		const { name, value } = event.target
		const modifiers = ["*", "/", "+", "%", "-"]

		//TODO: Add a clear entry function
		this.setState(prevState => {
			if (this.state.display + name === "58008") {
				return {
					display: prevState.total + name,
					immature: true
				}
			}
			else if (modifiers.includes(name)) {
				return {
					total: prevState.total + name,
					display: prevState.display,
					lastModifier: true
				}
			}
			else if (name === "=") {
				return {
					display: eval(prevState.total)
				}
			}
			else if (name !== "") {
				return {
					display: this.state.lastModifier ? name : prevState.display + name,
					total: prevState.total + name,
					lastModifier: false
				}
			}
			else {
				return {
					display: "",
					total: ""
				}
			}
		})
	}

	//TODO: add manual flip back event
	handleFlip(event) {

	}

	//TODO: add math to equate as you go (left to right) rather than using proper math priority
	eval(fn) {
		return new Function('return ' + fn)();
	}

	render() {
		const style = {}
		if (this.state.immature === true) {
			style.visibility = "visible"
		}
		else {
			style.visibility = "hidden"
		}
		return (
			<div className="App">
				<header className="App-header">
				<img src={logo} alt=""></img>
					<div>
						<Calculator
							handleClick={this.handleClick}
							total={this.state.total}
							display={this.state.display}
							immature={this.state.immature}
						/>
					</div>
					<button style={style} handleClick={this.handleFlip}>Flip</button>
				</header>
			</div>
		);
	}
}

export default App;
