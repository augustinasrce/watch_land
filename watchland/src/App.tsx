import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LogMessage from "./components/LogMessage/LogMessage";
import { ProviderTypes } from "./utils/enum";
import "./App.scss";
import Azure from "./components/Providers/Azure/Azure";
import GoogleCloud from "./components/Providers/gCloud/GoogleCloud";
import AwsGroups from "./components/Providers/AWS/AwsGroups";
import AwsStreams from "./components/Providers/AWS/AwsStreams";
import AwsLogs from "./components/Providers/AWS/AwsLogs";

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
          {/* <Route path="/azure/:groupId" element={<LogMessage type={ProviderTypes.AWS} />}></Route> */}

          <Route path="/google" element={<GoogleCloud />}></Route>
          {/* <Route path="/google/:groupId" element={<LogMessage type={ProviderTypes.AWS} />}></Route> */}

          {/* <Route path="/azure" element={<LogGroup type={ProviderTypes.AZURE} />}></Route>
          <Route path="/google" element={<LogGroup type={ProviderTypes.GOOGLE} />}></Route>
          <Route path="/azure/:groupId" element={<LogMessage type={ProviderTypes.AZURE} />}></Route> */}
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
