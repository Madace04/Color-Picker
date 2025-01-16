import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ColorPicker from "./ColorChange.jsx";

function Navigations() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ColorPicker />} />
            </Routes>
        </Router>
    );
}

export default Navigations;
