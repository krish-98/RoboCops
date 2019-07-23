import React from "react"
import Card from "./Card"

const CardList = ({ robots }) => {
	return (
		<div>
			{
				robots.map( (user, i) => {
				return (
					<Card 
					key={i}	//key props, unique for iteration
					id={robots[i].id} 
					name={robots[i].name} 
					email={robots[i].email}
					/>
				)})
			}
		</div>
	)
}

export default CardList