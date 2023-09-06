import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

function Axios1() {
    const[userData,setData] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            setData(response.data)
            console.log(response)
        })
    },[])

    return(
        <div>
            {
                userData.map((data)=>{
                    return(
                        <div> 
                            Title:<br/>
                            {data.title}
                        <div>------------------------</div>
                            Body:<br/>
                            {data.body}
                        <div>---------------------------</div>
                            Id:
                            {data.id}
                        <div>---------------------------</div>
                            UserID:
                            {data.userId}
                        </div>
                        
                    )
                })
            }
        </div>
    )
}
export default Axios1;