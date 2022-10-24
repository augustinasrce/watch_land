import { useSelector, useDispatch } from "react-redux";
import { AuthTarget, IProfile } from "../../../redux/specs/authSpecs";
import { RootState } from "../../../redux/store";
import { updateConnections } from "../../../redux/reducers/auth";
import { SyncAuthMethods } from "../../../redux/actions/authActions";
import { AuthSessions } from "../../../utils";
import { Link } from "react-router-dom";

const AwsAccounts = (props: any) => {
  const dispatch = useDispatch();

  const loginMethods = useSelector((state: RootState) => {
    return state.auth.methods.filter((method: IProfile) => method.provider === AuthTarget.AWS);
  });

  const disconnect = (method: IProfile) => {
    const existingMethods = AuthSessions.getMethods();
    const filter = existingMethods.filter(existingMethod => existingMethod.id !== method.id);
    AuthSessions.setMethods(filter);
    dispatch(updateConnections(SyncAuthMethods(filter)));
  };

  return (
    <div className="container mt-3">
      <h4>Active AWS Accounts</h4>
      <div className="col-14 text-right mb-2">
        <Link className="btn btn-secondary mr-2" to="/login">
          Login
        </Link>
        <Link className="btn btn-primary" to="groups">
          Logs
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
                      {method.id} - <strong>{method.type}</strong>
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
