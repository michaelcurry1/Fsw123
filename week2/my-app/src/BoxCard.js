import React from "react"

function BoxCard(props){
    return(
        <div className= "card" style={{backgroundColor:props.bgcolor,width:props.width}}>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <hr />
            <h4>{props.description}</h4>

        </div>
    )
}

export default BoxCard