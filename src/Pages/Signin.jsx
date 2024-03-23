import BottomWarning from "../Components/BottomWarning";
import Button from "../Components/Button";
import Heading from "../Components/Heading";
import InputBox from "../Components/InputBox";
import Subheading from "../Components/Subheading";

export default function Signin(){
    return <div className = "bg-slate-500 h-screen flex justify-center"> 
    <div className = "flex flex-col justify-center">
        <div className = "bg-white rounded-2xl px-3 h-max w-80 p-2">
        <Heading label = {"Sign In"}/>
        <Subheading/>
        <InputBox heading = {"Email"} label = {"example@gmail.com"}/>
        <InputBox heading = {"Password"} label = {"1234"}/>
        <Button label = {"Sign In"}/>
        <BottomWarning label = {"Don't have an account?"} buttontext={"Sign Up"} to = {"/signup"}/>
        </div>
    
    </div>
        
        
        
    </div>
}