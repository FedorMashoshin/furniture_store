import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/Main/MainPage";
import Products from "./components/Products/Products";

function App() {
    return (
        <Router>
            <div className="mainContainer">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
