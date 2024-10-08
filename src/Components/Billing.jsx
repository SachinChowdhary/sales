import React from "react";
import CreateHeader from "../context/contextHeader";
export default function Billing() {
    const { setPage} = React.useContext(CreateHeader)
    React.useEffect(() => {
        setPage('Billing')
    }, [])
    return (
        <div>
            <h1>Billing</h1>
        </div>
    )
}
