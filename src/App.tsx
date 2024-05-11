import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Portfolio from "./routes/Portfolio";
import Home from "./routes/Home";
import Qualifications from "./routes/Qualifications";

export default function App() {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/qualifications' element={<Qualifications />} />
            </Route>
        </Routes>
    </BrowserRouter>);
}