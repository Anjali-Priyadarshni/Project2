import axios from "axios";
import { useState,useEffect } from "react";

function Axios2 () {
    const[userData,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
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
                            
                         NAME:<br/>   
                        {data.name} 
                        <div>-------------------------</div>
                        EMAIL:
                        {data.email} 
                        <div>---------------------------</div>
                        BODY:<br/>
                        {data.body}
                        <div>-----------------------------</div>
                        ID:
                        {data.id}
                        <div>-------------------------------</div>
                        POSTId:
                        {data.postId}

                        </div>
                        
                    )
                })}
        </div>
    )

}
export default Axios2;