import { useEffect, useState } from "react";
import Appbar from "../Components/Appbar";
import Balance from "../Components/Balance";
import Users from "../Components/Users";
import axios from "axios";

export default function Dashboard(){
    const [balance,setBalance] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            }
        })
       .then(response => {
           setBalance(response.data.balance);
       })
   },[balance]);
    return <>
    <Appbar/>
    <Balance value = {balance}/>
    <Users/>
    </>
}