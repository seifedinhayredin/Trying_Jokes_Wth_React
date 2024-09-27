import React from "react";

export default function Signup(){
    const [formValue, setFormValue] = React.useState({
        email:"",
        password:"",
        confirmPassword:"",
        join:true


    })
    //console.log(formValue)
    function handleChange(event){
        const {name,value,type,checked} = event.target
       setFormValue(prevFormValue => {
        return {
            ...prevFormValue,
            [name]: type === "checkbox" ? checked: value
        }
       }) 
    }

    function handleSubmit(event){
            event.preventDefault()
            const checkPassword = formValue.password === formValue.confirmPassword ? "Signed Up successfully": "Password does not match"
            const checkingCheckbox = formValue.join ? "Thanks for Joining our Newsletter": ""
            console.log(checkPassword, checkingCheckbox)
    }
    return (
        <form className="forms" onSubmit={handleSubmit}>
            <input 
            type="email"
            name="email"
            value={formValue.email}
            placeholder="Enter email"

            className="email"
            onChange={handleChange}
            />
            <br />

            <input 
            type="password"
            name="password"
            value={formValue.password}
            placeholder="Enter Password"
            onChange={handleChange}
            className="password"
            /> <br />

            <input 
            type="password"
            name="confirmPassword"
            value={formValue.confirmPassword}
            placeholder="Confirm password"
            onChange={handleChange}
            className="confirmPass"
            /><br />

            <input
            type="checkbox"
            id="newsletter"
            name="join"
            checked={formValue.join}

            onChange={handleChange}
            />
            <label htmlFor="newsletter">I want to join the newsletters</label> <br />
            <button className="submitButton">SignUp</button>
        </form>
    )
}