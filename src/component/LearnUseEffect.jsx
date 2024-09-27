import React from "react"
export default function LearnUseEffect(){
    const [count, setCount] = React.useState(1)
    const [starsData,setStarsData] = React.useState({})


    React.useEffect(function (){
       fetch(`https://swapi.dev./api/people/${count}`)
       .then(res => res.json())
       .then(data => setStarsData(data))
    },[count])
    return (
        <>
        <h1>Use Effect</h1>
        <pre>{JSON.stringify(starsData,null,3)}</pre>
        <button onClick={() => setCount(prevCount => count +1 )}>Count</button>
        <p>Count: {count}</p>
        </>
    )
}