import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

/** Redux */
import { RootState } from "../../../redux/store";
import { AuthTarget, IProfile } from "../../../redux/specs/authSpecs";
import { updateConnections } from "../../../redux/reducers/auth";
import { SyncAuthMethods } from "../../../redux/actions/authActions";

/** Cloud Services */
import { CloudWatch } from "../../../services/aws/aws";

/** Utils */
import { AuthSessions } from "../../Auth/AuthSessions";

const AwsAccounts = (props: any) => {
  const dispatch = useDispatch();

  const loginMethods = useSelector((state: RootState) => {
    return state.auth.methods.filter((method: IProfile) => method.provider === AuthTarget.AWS);
  });

  const disconnect = (method: IProfile) => {
    const existingMethods = AuthSessions.getMethods();
    const remainingConnections = existingMethods.filter(
      existingMethod => existingMethod.id !== method.id
    );
    CloudWatch.removeWatcher(method.tag!);
    AuthSessions.setMethods(remainingConnections);
    dispatch(updateConnections(SyncAuthMethods(remainingConnections)));
  };

  return (
    <div className="container mt-3">
      <div className="mt-5 mb-5">
        <div className="mt-4 p-5 bg-info text-white rounded">
          <h1>Active AWS Accounts</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
          </p>
        </div>
      </div>
      <div className="col-14 text-right mb-2">
        <Link className="btn btn-info mr-2" to="/login">
          Add Connection
        </Link>
        <Link className="btn btn-warning" to="groups">
          Log Groups
        </Link>
      </div>
      <ul className="list-group">
        {[
          ...loginMethods.map((method: IProfile) => {
            return (
              <li className="list-group-item container" key={method.id}>
                <div className="row align-items-center">
                  <div className="col-9">
                    <p className="mb-0">
                      {method.tag} - <strong>{method.type}</strong>
                    </p>
                  </div>
                  <div className="col-3 text-right">
                    <button
                      onClick={e => disconnect(method)}
                      type="button"
                      className="btn btn-danger"
                    >
                      Disconnect
                    </button>
                  </div>
                </div>
              </li>
            );
          })
        ]}
      </ul>
    </div>
  );
};

export default AwsAccounts;
