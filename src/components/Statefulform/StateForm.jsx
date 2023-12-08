import { useState } from "react";

const StateForm = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState("")

    const handleSubmit =e =>{
        e.preventDefault();
        if(password.length < 8){
            setError("password must be 6 characters or long ")
        }
        else{
            setError("")
        }
        // console.log(e.target.name.value);
        console.log("your email is: "+email,"\n your pass is: " + password);
        // console.log(e.target.password.value);
        console.log("form submitted");
    } 
    const onChangeEmail=(e) => {
      setEmail(e.target.value);
      console.log(email)

    }
    const onChangePassword=(e) => {
        setPassword(e.target.value);
        console.log(password)
      }
    return (
        <div>
            <form onSubmit={handleSubmit}>
             <input type="text" name="name"  required/>
             <br />
             <input onChange={onChangeEmail} type="email" name="email"  required/>
                <br />
                <input onChange={onChangePassword} type="password" name="password" required/>
                <br />
                <input type="submit" value="Submit" />
            </form>

            
             <p>{error}</p>
            
        </div>
    );
};

export default StateForm;