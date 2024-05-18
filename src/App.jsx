import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.jsx";
import Main from "./routes/main/main.jsx"
import Footer from "./routes/footer/footer.jsx";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" Component={Main} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
