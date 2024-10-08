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
function App() {
  return (
    <HeaderProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/tables' element={<Tables />} />
          <Route path='/billing' element={<Billing />} />
          <Route path='/rtl' element={<RTL />} />
        </Route>
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </HeaderProvider>
  );
}

export default App;
