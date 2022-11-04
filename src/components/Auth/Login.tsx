import * as uuid from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router";
import { cloudConnect } from "../../redux/reducers/auth";
import { AuthTarget, IProfile, AuthRegion } from "../../redux/specs/authSpecs";
import { WLDevProfiles } from "../../services/specs";
import { AuthSessions } from "../../utils";
import { Connect, SyncAuthMethods } from "../../redux/actions/authActions";
import { configClient } from "../../services/aws/aws";

interface LoginProps {
  isAuth?: boolean;
}

const Login = ({ isAuth }: LoginProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [profile, setProfile] = useState(WLDevProfiles.Programmatic);
  const [authTarget, setAuthTarget] = useState<AuthTarget>(AuthTarget.AWS);
  const [authRegion, setAuthRegion] = useState<AuthRegion>(AuthRegion.EU_West_1);
  const [key, setKey] = useState("");
  const [secret, setSecret] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let loginData: IProfile = {
      id: uuid.v4(),
      type: profile,
      provider: authTarget,
      region: authRegion
    };

    if (profile === WLDevProfiles.Programmatic) {
      loginData.key = key;
      loginData.secret = secret;
      loginData.region = authRegion;
      configClient(key, secret, authRegion);
    }

    AuthSessions.updateMethods(loginData);
    const data = AuthSessions.getMethods();
    const payload = Connect(loginData.provider, loginData);
    const action = cloudConnect(payload);
    dispatch(action);

    navigate(`/${authTarget}`);
  };

  return isAuth ? (
    <Outlet></Outlet>
  ) : (
    <div>
      <div className="row pt-5">
        <div className="col-sm-12 col-md-6 offset-md-3">
          <form action="" className="card" onSubmit={handleSubmit}>
            <div className="card-header">
              <p className="mb-0"> Authentication</p>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-sm-12 col-md-2">
                  <label htmlFor="aws-profile" className="col-form-label">
                    Profile
                  </label>
                </div>
                <div className="col-sm-12 col-md-3">
                  <select
                    defaultValue={AuthTarget.AWS}
                    onChange={(ev: any) => setAuthTarget(ev.target.value)}
                    name="authTarget"
                    required
                    className="form-select"
                    id="authTarget"
                    aria-label="Default select example"
                  >
                    {Object.keys(AuthTarget).map(key => (
                      <option value={key}>{key}</option>
                    ))}
                  </select>
                </div>
                <div className="col-sm-12 col-md-6">
                  <select
                    defaultValue={WLDevProfiles.Programmatic}
                    onChange={(ev: any) => setProfile(ev.target.value)}
                    name="authType"
                    required
                    className="form-select"
                    id="aws-profile"
                    aria-label="Default select example"
                  >
                    <option value={WLDevProfiles.Programmatic}>Programmatic Access</option>
                    {/* <option value={WLDevProfiles.Dev}>Watchland dev</option> */}
                  </select>
                </div>
                <div className="col-sm-12 col-md-4">
                  <span id="aws-profile-helper" className="form-text">
                    {profile === WLDevProfiles.Programmatic
                      ? ""
                      : profile === WLDevProfiles.Dev
                      ? "Watchland test profile"
                      : "AWS Profile"}
                  </span>
                </div>
              </div>
              <div className="row align-items-center pt-3">
                <div className="col-sm-12 col-md-2">
                  <label htmlFor="aws-region" className="col-form-label">
                    Region
                  </label>
                </div>
                <div className="col-sm-12 col-md-6">
                  <select
                    defaultValue={AuthRegion.EU_West_1}
                    onChange={(ev: any) => setAuthRegion(ev.target.value)}
                    name="authRegion"
                    required
                    className="form-select"
                    id="authRegion"
                    aria-label="Default select example"
                  >
                    {Object.keys(AuthRegion).map(key => (
                      <option value={key}>{key}</option>
                    ))}
                  </select>
                </div>
                <div className="col-sm-12 col-md-4">
                  <span id="aws-region" className="form-text">
                    AWS Region
                  </span>
                </div>
              </div>
              {profile === WLDevProfiles.Programmatic
                ? [
                    <div className="row align-items-center pt-3">
                      <div className="col-sm-12 col-md-2">
                        <label htmlFor="aws-key" className="col-form-label">
                          Key
                        </label>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <input
                          type="text"
                          id="aws-key"
                          onChange={(ev: any) => setKey(ev.target.value)}
                          className="form-control"
                          required
                          aria-describedby="aws-key"
                        />
                      </div>
                      <div className="col-sm-12 col-md-4">
                        <span id="aws-key-helper" className="form-text">
                          AWS Key Id
                        </span>
                      </div>
                    </div>,
                    <div className="row align-items-center pt-3">
                      <div className="col-sm-12 col-md-2">
                        <label htmlFor="aws-key-secret" className="col-form-label">
                          Secret
                        </label>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <input
                          type="password"
                          onChange={(ev: any) => setSecret(ev.target.value)}
                          id="aws-key-secret"
                          required
                          className="form-control"
                          aria-describedby="aws-key-secret"
                        />
                      </div>
                      <div className="col-sm-12 col-md-4">
                        <span id="aws-secret-helper" className="form-text">
                          AWS Key Secret
                        </span>
                      </div>
                    </div>
                  ]
                : null}
              <div className="row">
                <div className="col-sm-12 col-md-8 text-right pt-3">
                  <button className="btn btn-primary">
                    {profile === WLDevProfiles.Programmatic ? "Authenticate" : "Connect"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
