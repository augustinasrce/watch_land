import './App.scss';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Provider from './components/Provider/Provider';
import Table from './components/Table/Table';
import { ProviderTypes } from './utils/enum';

function App() {
  return (
    <div className="App">
    <Navbar />
    <main className="container">
      <Routes>
        {/* <Route path="/" element={}}></Route>
        <Route path="/loing" element={}}></Route>
        <Route path="/register" element={}}></Route>
        <Route path="/settings" element={}}></Route>
        <Route path="/team" element={}}></Route> */}
        <Route path="/aws" element={<Provider type={ProviderTypes.AWS} />}></Route>
        <Route path="/azure" element={<Provider type={ProviderTypes.AZURE} />}></Route>
        <Route path="/google" element={<Provider type={ProviderTypes.GOOGLE} />}></Route>
        <Route path="/provider/:stream" element={<Table />}></Route>
      </Routes>
    </main>
  </div>
  );
}

export default App;
