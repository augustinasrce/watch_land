import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Azure from "./components/Providers/Azure/Azure";
import GoogleCloud from "./components/Providers/gCloud/GoogleCloud";
import AwsGroups from "./components/Providers/AWS/AwsGroups";
import AwsStreams from "./components/Providers/AWS/AwsStreams";
import AwsLogs from "./components/Providers/AWS/AwsLogs";
import "./App.scss";
import AWS from "./components/Providers/AWS/AWS";
import Login from "./components/Navbar/Login";

function App() {
  return (
    <div className="App">
      <Navbar isAuthenticated={true} />
      <main className="container">
        <Routes>
          <Route path="/aws">
            <Route element={<AWS />}>
              <Route index element={<AwsGroups />}></Route>
              <Route path="streams" element={<AwsStreams />}></Route>
              <Route path="logs" element={<AwsLogs />}></Route>
            </Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/azure" element={<Azure />}></Route>
          <Route path="/google" element={<GoogleCloud />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
