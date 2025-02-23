import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const MyContext = createContext();

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const [IsToggleOpen, setIsToggleOpen] = useState(false);
  const [showHeaderSidebar, setShowHeaderSidebar] = useState(true);
  const location = useLocation();

  // ✅ Load Theme from Local Storage (Default: "light")
  const [Thememode, setThememode] = useState(() => {
    return localStorage.getItem("Thememode") || "light";
  });

  // ✅ Apply Theme to Body & Persist in Local Storage
  useEffect(() => {
    console.log("Theme mode updated:", Thememode); // Debugging log
    document.body.classList.remove("light", "dark");
    document.body.classList.add(Thememode);
    localStorage.setItem("Thememode", Thememode);
  }, [Thememode]);

  const values = {
    IsToggleOpen,
    setIsToggleOpen,
    showHeaderSidebar,
    setShowHeaderSidebar,
    setThememode,
    Thememode,
  };

  const isAuthPage = location.pathname === "/Login" || location.pathname === "/Signup";

  return (
    <MyContext.Provider value={values}>
      {!isAuthPage && showHeaderSidebar && <Header />}

      {!isAuthPage ? (
        <div className="main-container">
          {showHeaderSidebar && (
            <div className={`sidebar ${IsToggleOpen ? "toggle" : ""}`}>
              <Sidebar />
            </div>
          )}
          <div className={`content ${IsToggleOpen ? "toggle" : ""}`}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      )}
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };
