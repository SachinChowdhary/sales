import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import {
   Dashboard,
    Tables,
    Billing,
    RTL,
    Profile,
    SignIn,
    SignUp
} from './Components/pages.js'
import HeaderProvider from './context/contextHeaderProvider.jsx';
import createMenu from './context/contextMenu.js';
function App() {
  const [menu, setMenu] = React.useState(false)
  const [token, setToken] = React.useState(!!localStorage.getItem('Token'))
  console.log(token,"rkefdsk")
  React.useEffect(()=>{
    const refresh=()=>{
      localStorage.removeItem('Token');
    }
    window.addEventListener('beforeunload',refresh);
    return(()=>{
      window.removeEventListener('beforeunload',refresh)
    })
  },[])
  return (
    <HeaderProvider>
      <createMenu.Provider value={{menu, setMenu}}>
      <BrowserRouter>
        <Routes>
          {
            token ?(
              <>
              <Route path='/' element={<Layout settoken={setToken} />}>
              <Route index element={<Dashboard />} />
              <Route path='/tables' element={<Tables />} />
              <Route path='/billing' element={<Billing />} />
              <Route path='/rtl' element={<RTL />} />
            </Route>
            <Route path='/profile' element={<Profile />} />
            </>
            ):(
              <>
              <Route path='/' element={<SignIn settoken={setToken} />} />
              <Route path='/signup' element={<SignUp />} /> 
              </>
            )
          }
        </Routes>
      </BrowserRouter>
      </createMenu.Provider>
  </HeaderProvider>  
  );
}

export default App;
