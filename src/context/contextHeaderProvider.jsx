import React from "react";
import CreateHeader from '../context/contextHeader'

const HeaderProvider =({children})=>{
    const [page , setPage]=React.useState(null);
    return(
    
    <CreateHeader.Provider value={{page, setPage}}>
      {children}
    </CreateHeader.Provider>

);
}
export default HeaderProvider;