import React from "react"
import Joke from "./component/Joke"
import JokeData from "./component/JokeData"
import JokesEvent from "./component/JokesEvent"
import Message from "./component/Message"
import FormReact from "./component/FormReact"
import Signup from "./component/Signup"

import LearnUseEffect from "./component/LearnUseEffect"
export default function App(){
    
   

    const JokeElements = JokeData.map(joke => {
        return <Joke setup = {joke.setup} punchline = {joke.punchline} />
    })

    
    return (
        <>
        <LearnUseEffect />
       {JokeElements}

       <Message />

       <hr />

       <h2>Forms on React</h2>
       <FormReact />
       <Signup />

       
        </>
    
)
}