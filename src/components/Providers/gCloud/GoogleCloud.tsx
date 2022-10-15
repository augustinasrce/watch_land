import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { AuthTarget } from "../../../redux/specs/authSpecs";
import { RootState } from "../../../redux/store";
import Login from "../../Auth/Login";

const GoogleCloud = () => {
  const isAuth = useSelector((state: RootState) => {
    return state.auth.current?.provider === AuthTarget.gCloud;
  });

  return isAuth ? <Outlet></Outlet> : <Login isAuth={isAuth} provider={AuthTarget.gCloud} />;
};

export default GoogleCloud;
