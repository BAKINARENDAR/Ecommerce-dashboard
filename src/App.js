import '@mui/material/styles';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from './pages/Dashboard';

import { createContext, useState } from 'react';
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar';
const MyContext=createContext();
function App() {
  const[isToggleopen,setisToggleopen]=useState(false);
  const values={
isToggleopen,
setisToggleopen
  }
  
  return (
    <>
      <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <div className='main-container'>
          <div className={`left ${isToggleopen===true?'toggle':''}`}>
            <Sidebar/>
          </div>
          <div  className={`content ${isToggleopen===true?'toggle':''}`}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" exact={true} element={<Dashboard />} />
        </Routes>
        </div>
        </div>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { MyContext };

