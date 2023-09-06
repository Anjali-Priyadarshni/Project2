
import axios from "axios"
import { useEffect, useState } from "react"

function Axios5 () {
    const[userData,setData] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
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
                            TITLE:<br/>
                            {data.title}
                            <div>------------------------</div>
                            ID:<br/>
                            {data.id}
                            <div>--------------------------</div>
                            USERID:<br/>
                            {data.userId}
                            </div>
                    )
            })}
            
        </div>
    )
}
export default Axios5;