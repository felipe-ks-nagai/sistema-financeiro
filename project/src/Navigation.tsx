import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./frontend/App";
import Teste from "./frontend/Teste";

export default function Navigation() {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/teste" element={<Teste />} />
        </Routes>
    </BrowserRouter>
    )
}