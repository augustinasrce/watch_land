import { Route, Routes } from "react-router-dom";
import "./WatchLand.scss";

/**Components */
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Auth/Login";
import AwsAuth from "./components/Providers/AWS/AwsAuth";
import AwsAccounts from "./components/Providers/AWS/AwsAccounts";
import AwsGroups from "./components/Providers/AWS/AwsGroups";
import AwsStreams from "./components/Providers/AWS/AwsStreams";
import AwsLogs from "./components/Providers/AWS/AwsLogs";
<<<<<<< HEAD:src/App.tsx
import "./App.scss";
import AwsAuth from "./components/Providers/AWS/AwsAuth";
import Login from "./components/Auth/Login";
import AwsAccounts from "./components/Providers/AWS/AwsAccounts";
import HomePage from "./components/HomePage/HomePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
=======
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Azure from "./components/Providers/Azure/Azure";
import GoogleCloud from "./components/Providers/gCloud/GoogleCloud";
>>>>>>> main:src/WatchLand.tsx

const WatchLand = () => {
  return (
    <div className="watchLand">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
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
};

export default WatchLand;
