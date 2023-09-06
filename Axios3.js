import axios from "axios";
import { useEffect, useState } from "react";

function Axios3 () {
    const[userData,setData] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums")
        .then((response)=>{
            setData(response.data)
            console.log(response)
        })
    },[])
    return(

        <div>
            
                { userData.map((data)=>{
                    return(
                        <div> 
                            ID:
                            {data.id}
                            <div>----------------------------</div>
                            USERID:
                            {data.userId}
                            <div>----------------------------</div>
                            TITLE:
                            {data.title} 
                            
                        </div>
                    )
            })}
            
        </div>
    )
}
export default Axios3;