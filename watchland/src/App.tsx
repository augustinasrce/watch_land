import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Provider from "./components/Provider/Provider";
import { ProviderTypes } from "./utils/enum";
import "./css/style.css";

const isAuthenticated = () => {
  return true;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated()} />
        <main className="container">
          <Routes>
            <Route path="/aws" element={<Provider type={ProviderTypes.AWS} />}></Route>
            <Route path="/azure" element={<Provider type={ProviderTypes.AZURE} />}></Route>
            <Route path="/google" element={<Provider type={ProviderTypes.GOOGLE} />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
