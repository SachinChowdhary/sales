import React from "react"; 
import CreateHeader from '../context/contextHeader'
export default function Dashboard() {
  const {setPage} = React.useContext(CreateHeader)
    React.useEffect(()=>{
        setPage('Dashboard')
    },[])
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}
