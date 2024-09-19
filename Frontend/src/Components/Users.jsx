import { useEffect, useState } from "react";
import axios from "axios";   
import { useNavigate } from "react-router-dom";

function Users({ data }) {
    const navigate = useNavigate();     
    return (
        <div className="p-6 bg-white shadow-lg rounded-lg mb-6 hover:shadow-xl transition-shadow duration-300">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{data.name}</h1>
            <h4 className="text-lg text-gray-600 mb-4">{data.email}</h4>
            <button 
                onClick={() => {navigate(`/gpt/${encodeURIComponent(data.name)}`)}}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
                View Profile
            </button>    
        </div>
    );
}






export function Renderusers() {
    const [users, setUsers] = useState([]);  
    const token = localStorage.getItem("token"); 

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:3048/gpt/users", {
            headers: {
                Authorization: `${token}`
            }
        });
        setUsers(response.data.data);
    }

    useEffect(() => { fetchUsers(); }, []); 

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold mb-6 text-center">Welcome to GPT_Fy me</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {users.map((user, index) => (<Users key={index} data={user} />))}
            </div>
        </div>
    );
}






