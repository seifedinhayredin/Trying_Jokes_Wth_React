export default function JokesEvent(){
    function handleClick(){
        console.log("I am clicked")
    }
    function handleImage(){
        console.log("Image is hovered")
    }
    return (
        <form>
            <img onMouseOver={handleImage} src = "logo192.png"/>
            <button onMouseOver={handleClick} cursor="pointer">Click me</button>
        </form>
    )
}