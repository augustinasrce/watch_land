import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Azure from "./components/Providers/Azure/Azure";
import GoogleCloud from "./components/Providers/gCloud/GoogleCloud";
import AwsGroups from "./components/Providers/AWS/AwsGroups";
import AwsStreams from "./components/Providers/AWS/AwsStreams";
import AwsLogs from "./components/Providers/AWS/AwsLogs";
import "./App.scss";
import AwsAuth from "./components/Providers/AWS/AwsAuth";
import Login from "./components/Auth/Login";
import AwsAccounts from "./components/Providers/AWS/AwsAccounts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/aws">
            <Route element={<AwsAuth />}>
              <Route index element={<AwsAccounts />}></Route>
              <Route path="groups" element={<AwsGroups />}></Route>
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
