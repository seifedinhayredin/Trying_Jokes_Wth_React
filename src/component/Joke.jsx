import React from "react"
export default function Joke(props){
    const [show, isShown] = React.useState(false)

    function BackForth(){
        isShown(prevShow => !prevShow)
        
    }

   
    return (
        <>
        
        {props.setup && <h3>Setup: {props.setup}</h3>}
        
        {show && <p><b>Punchline: </b>{props.punchline}</p>}
        { <button onClick={BackForth}>{show ? "Hide":"Show"} Punchline</button>}
        
        <hr />
        </>
    )
}