import React from "react"

const Scroll = (props) => {
	return (
		<div style={{ overflow: "scroll", border: "4px solid  #2f848f", height: "800px"}}>
			{props.children}
		</div>
	)
}

export default Scroll