import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Provider from "./components/LogGroup/LogGroup";
import LogMessage from "./components/LogMessage/LogMessage";
import { ProviderTypes } from "./utils/enum";
import "./App.scss";

const isAuthenticated = () => {
  return true;
};


function App() {
  return (
    <div className="App">
      <Navbar isAuthenticated={isAuthenticated()} />
      <main className="container">
        <Routes>
          <Route path="/aws" element={<Provider type={ProviderTypes.AWS} />}></Route>
          <Route path="/azure" element={<Provider type={ProviderTypes.AZURE} />}></Route>
          <Route path="/google" element={<Provider type={ProviderTypes.GOOGLE} />}></Route>
          <Route path="/aws/:groupId" element={<LogMessage type={ProviderTypes.AWS} />}></Route>
          <Route path="/azure/:groupId" element={<LogMessage type={ProviderTypes.AZURE} />}></Route>
          <Route
            path="/google/:groupId"
            element={<LogMessage type={ProviderTypes.GOOGLE} />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
