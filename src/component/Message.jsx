import React from "react"
export default function Message(){
    const [message, setMessage] = React.useState(["a"])
   
 

    return (
        <>
        {

        message.length ===0 ? <h1>You 're all caught up!</h1> :
        <h1>You have {message.length} unread 
        {message.length > 1 ? " messages": " message"}
        </h1>

        }
        
        </>
    )
}