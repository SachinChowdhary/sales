import React from "react"; 
import CreateHeader from "../context/contextHeader";
export default function RTL() {
    const { setPage } = React.useContext(CreateHeader)
    React.useEffect(()=>{
       setPage('RTL')
    },[])
    return (
        <div> 
            <h1>RTL</h1>   
        </div>
    )
}
