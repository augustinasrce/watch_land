import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { AuthTarget } from "../../../redux/specs/authSpecs";
import { RootState } from "../../../redux/store";
import Login from "../../Navbar/Login";

const GoogleCloud = () => {
  const isAuth = useSelector((state: RootState) => {
    return state.auth.current?.provider === AuthTarget.Azure;
  });

  return isAuth ? <Outlet></Outlet> : <Login isAuth={isAuth} />;
};

export default GoogleCloud;
