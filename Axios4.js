import axios from "axios"
import { useEffect, useState } from "react"

function Axios4 () {
    const[userData,setData] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
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
                           <src>{data.thumbnailUrl}</src>
                            
                            </div>
                    )
            })}
            
        </div>
    )
}
export default Axios4;