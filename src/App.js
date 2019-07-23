import React, { Component } from "react"
import CardList from "./CardList"
import SearchBox from "./SearchBox"
import Scroll from "./Scroll"
import "./App.css"

class App extends Component {
	state = {
			robots: [],
			searchField: ""
		}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users => this.setState({ robots: users }))
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value })
	}

	render() {
		const { robots, searchField } = this.state
		const fileredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
	
		return (robots.length === 0) ? 
			<h1>Loading...</h1> :
			(
				<div className="tc">
					<h1 className="f1">Robo Cops</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
					<CardList robots={fileredRobots}/>
					</Scroll>
				</div>
			)
	}
}

export default App
