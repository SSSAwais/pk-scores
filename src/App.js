import "./App.css";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Routing from "./routes/Routing";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/signup" ? null : <Header />}
      <main className="main--content">
        <Routing />
      </main>
      {location.pathname === "/signup" ? null : <Footer />}
    </div>
  );
}

export default App;
