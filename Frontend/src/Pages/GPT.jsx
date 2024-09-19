import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; 

export function GPT() {
    const [questions, setQuestions] = useState("");   
    const [Render, setRender] = useState("");    
    const { name } = useParams(); 

    return (
        <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-4">Welcome to GPT-fy Me</h1>
            <p className="text-center mb-6 text-gray-600">This is a platform where you can interact with GPT models.</p>

            <div className="flex justify-center mb-4">
                <input 
                    type="text" 
                    placeholder="Type your message here..." 
                    className="border border-gray-300 rounded p-2 m-2 w-full max-w-md"
                    onChange={(e) => { setQuestions(e.target.value) }} 
                />
                <button 
                    onClick={async () => {
                        const response = await axios.post(`http://localhost:3048/gpt/airesponce/${name}`, {
                            questions: questions
                        }, {
                            headers: {
                                Authorization: `${localStorage.getItem("token")}`
                            }
                        })
                        .then((res) => {
                            setRender(res.data.responce);
                        })    
                    }} 
                    className="bg-blue-500 text-white rounded p-2 m-2 hover:bg-blue-700 transition duration-300"
                >
                    Send
                </button>
            </div>

            <div className="text-center mt-4">
                <h5 className="text-lg text-gray-700">{Render}</h5>
            </div>
        </div>
    );
}
