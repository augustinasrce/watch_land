import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Azure from "./components/Providers/Azure/Azure";
import GoogleCloud from "./components/Providers/gCloud/GoogleCloud";
import AwsGroups from "./components/Providers/AWS/AwsGroups";
import AwsStreams from "./components/Providers/AWS/AwsStreams";
import AwsLogs from "./components/Providers/AWS/AwsLogs";
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
          <Route path="/aws/groups" element={<AwsGroups />}></Route>
          <Route path="/aws/streams" element={<AwsStreams />}></Route>
          <Route path="/aws/logs" element={<AwsLogs />}></Route>
          <Route path="/azure" element={<Azure />}></Route>
          <Route path="/google" element={<GoogleCloud />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
