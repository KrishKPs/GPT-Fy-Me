import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function HandleSignup() { 

    const [name , setName] = useState("");  
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");  

    const navigate = useNavigate(); 

    async function handleSignup() {

        const responce = await axios.post("http://localhost:3048/gpt/signup", { 

            name : name,    
            email : email,  
            password : password,    
         }) 

         console.log(responce.data);
         localStorage.setItem("token", responce.data.token)

         alert("User Created Successfully")
         navigate("/datainput")

         .catch((error) => {
            alert(error.responce.data.msg);
         });     
    }

    return (

        <div>

       <div>
        
        <input type="text" placeholder="Name" className="border rounded p-2 m-2" onChange={(e)=>{setName(e.target.value)}} />
        <input type="email" placeholder="Email" className="border rounded p-2 m-2" onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder="Password" className="border rounded p-2 m-2"  onChange={(e)=>{setPassword(e.target.value)}}/>  
        
        </div>

        <button onClick={handleSignup} className="bg-blue-500 text-white rounded p-2 m-2">Sign Up</button>  
            
            
             </div>

      
    );
 }