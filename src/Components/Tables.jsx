import React from "react"; 
import CreateHeader from "../context/contextHeader";
export default function Tables() {
    const { setPage} = React.useContext(CreateHeader)
    React.useEffect(() => {
        setPage('Tables')
    }, [])
    return (
        <div>
            <h1>Tables</h1>
        </div>
    )
}
