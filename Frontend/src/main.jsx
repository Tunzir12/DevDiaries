import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import "./index.css";
import App from "./App.jsx";
import Profile from "./pages/profile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
