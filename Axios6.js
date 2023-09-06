import axios from "axios"
import { useEffect, useState } from "react"

function Axios6 () {
    const[userData,setData] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
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
                            {data.id}<br/>
                            <div>-----------------------------</div>
                            NAME:
                            {data.name}<br/>
                            <div>------------------------------</div>
                            USERNAME:
                            {data.username}<br/>
                            <div>---------------------------------</div>
                            EMAIL:
                            {data.email}
                            </div>
                    )
            })}
            
        </div>
    )

}
export default Axios6;