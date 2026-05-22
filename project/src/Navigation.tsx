import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./frontend/App";
import Login from "./frontend/Login";
import Create from "./frontend/Create";

export default function Navigation() {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/app" element={<App />} />
            <Route path="/" element={<Login />} />
            <Route path="/create" element={<Create />} />
        </Routes>
    </BrowserRouter>
    )
}