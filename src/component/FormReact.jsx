import React from "react"
export default function FormReact(){
    const [formData, setFormData] = React.useState({
        firstName:"",
        lastName:"",
        email: "",
        comment: "",
        age:0,
        agree:true,
        employment:"",
        departement:""
       
    })
 

    //console.log(formData)
    
    function handleChange(event){
        //sconsole.log(formData.employment)
        const {name,value,type,checked} = event.target
       setFormData(prevFormdata => {
        return {
            ...prevFormdata,
            [name] : type === "checkbox" ? checked : value
           
            
        }
            
        
       })
        
    }
    
    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)

    }

    return (
        <form onSubmit={handleSubmit}> 
            <input
            type="text"
            placeholder="First Name" 
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            />
            <br />
            <input
            type="text"
            placeholder="Last Name" 
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            />

        <input
            type="email"
            placeholder="Email" 
            onChange={handleChange}
            name="email"
            value={formData.email}
            />
<input type="number"
name="age"
onChange={handleChange}
value={formData.age}
/> <br />
     <input
            type = "checkbox"
            name="agree"
            id="agree"

            checked={formData.agree}
            onChange={handleChange}

             />
             <label htmlFor="agree">Are you agree?</label> <br/>

             <fieldset>
             Are you currently employed?<br />
             <input 
             type="radio" 
             id="Unemployed"
             name="employment"
             value="Unemployed"
             onChange={handleChange}
             /> 
             
             <label htmlFor="Unemployed">Unemployed</label><br />
             <input 
             type="radio" 
             id="Part-time"
             name="employment"
             value="Part-time"
             onChange={handleChange}
             /> 
             
             <label htmlFor="Part-time">Part-time</label><br />
             <input 
             type="radio" 
             id="Full-time"
             name="employment"
             value="Full-time"
             onChange={handleChange}
             /> 
             <label htmlFor="Full-time">Full-time</label>
             <br />
             </fieldset>
            
            <select 
            name="departement" id="dept" value={formData.departement} onChange={handleChange}>
                <option value="CS">CS</option>
                <option value="IT">IT</option>
                <option value="IS">IS</option>
                

            </select>
            <label htmlFor="dept">Departement</label> <br />


           <textarea 
           name="comment"
           
           value={formData.comment} 
           onChange={handleChange}/> 
           <br />
           <button>Submit</button>

        </form>
    )
}