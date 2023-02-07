import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { AuthTarget } from "../../../redux/specs/authSpecs";
import { RootState } from "../../../redux/store";
import ComingSoonAlert from "../../Alert/AlertComingSoon";

const Azure = () => {
  const isAuth = useSelector((state: RootState) => {
    return state.auth.current?.provider === AuthTarget.Azure;
  });

  return isAuth ? <Outlet></Outlet> : <ComingSoonAlert />;
};

export default Azure;
