import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { AuthTarget, IProfile } from "../../../redux/specs/authSpecs";
import { RootState } from "../../../redux/store";
import { AuthSessions } from "../../../utils";
import { configClient } from "../../../services/aws/aws";
import Login from "../../Auth/Login";
import Spinner from "../../Spinner/Spinner";

const AwsAuth = (props: any) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const auth = useSelector((state: RootState) => {
    const auths = state.auth.methods?.filter(
      (method: IProfile) => method.provider === AuthTarget.AWS
    );
    return auths.length > 0;
  });

  const syncClients = async () => {
    const methods = AuthSessions.getMethods();
    for (let method of methods) {
      let config = await configClient(method.key, method.secret, method.region);
    }
    setLoading(false);
  };

  useEffect(() => {
    syncClients();
  }, []);

  useEffect(() => {
    if (auth) return setIsAuth(true);

    const methods = AuthSessions.getMethods();
    if (methods.filter((method: IProfile) => method.provider === AuthTarget.AWS).length > 0) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [auth]);

  return isAuth && !loading ? <Outlet></Outlet> : loading ? <Spinner /> : <Login isAuth={isAuth} />;
};

export default AwsAuth;