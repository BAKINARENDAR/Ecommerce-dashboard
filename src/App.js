import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
const MyContext = createContext();

function App() {
  const [IsToggleOpen, setIsToggleOpen] = useState(false);
  const [showHeaderSidebar, setShowHeaderSidebar] = useState(true);

  const values = {
    IsToggleOpen,
    setIsToggleOpen,
    showHeaderSidebar,
    setShowHeaderSidebar,
  };

  return (
    <BrowserRouter>
    <ScrollToTop/>
      <MyContext.Provider value={values}>
        {showHeaderSidebar===true && <Header />}

        <div className="main-container">
          
          <div className={`sidebar ${IsToggleOpen ? "toggle" : ""}` }>
            
            {showHeaderSidebar  && <Sidebar />}
          </div>

          <div className={`content ${IsToggleOpen ? "toggle" : ""}`}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
   
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
