import { useState } from "react";
import BottomWarning from "../Components/BottomWarning";
import Button from "../Components/Button";
import Heading from "../Components/Heading";
import InputBox from "../Components/InputBox";
import Subheading from "../Components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup(){
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    return <div className = "bg-slate-500 h-screen flex justify-center"> 
    <div className = "flex flex-col justify-center">
        <div className = "bg-white rounded-2xl px-3 h-max w-80 p-2">
        <Heading label = {"Sign Up"}/>
        <Subheading/>
        <InputBox onChange = {(e)=>{
            setFirstName(e.target.value);
        }}heading = {"First Name"} label = {"John"}/>
        <InputBox onChange = {(e)=>{
            setLastName(e.target.value);
        }} heading = {"Last Name"} label = {"Doe"}/>
        <InputBox onChange = {(e)=>{
            setUsername(e.target.value);
        }} heading = {"Email"} label = {"example@gmail.com"}/>
        <InputBox onChange = {(e)=>{
            setPassword(e.target.value);
        }} heading = {"Password"} label = {"1234"}/>
        <Button onClick = {async ()=>{
               const response = await axios.post("https://paywise-backend-4.onrender.com/api/v1/user/signup",{
                    username,
                    firstName,
                    lastName,
                    password
                });
                localStorage.setItem("token",response.data.token);
                navigate("/dashboard");
            }} label = {"Sign Up"} />
        <BottomWarning label = {"Already have an account?"} buttontext = {"Sign In"} to = {"/signin"}/>
        </div>
    
    </div>
        
        
        
    </div>
}