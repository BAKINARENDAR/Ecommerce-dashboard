import '@mui/material/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from './pages/Dashboard';

import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" exact={true} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
