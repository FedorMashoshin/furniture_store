import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";

function App() {
    return (
        <div className="mainContainer">
            <Header />
            <Products />
            <Footer />
        </div>
    );
}

export default App;
