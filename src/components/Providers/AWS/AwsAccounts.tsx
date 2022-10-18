import { useSelector, useDispatch } from "react-redux";
import { AuthTarget, IProfile } from "../../../redux/specs/authSpecs";
import { RootState } from "../../../redux/store";
import { updateConnections } from "../../../redux/reducers/auth";
import { SyncAuthMethods } from "../../../redux/actions/authActions";
import { AuthSessions } from "../../../utils";

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
    <div>
      <h1>Active AWS Accounts</h1>
      <ul>
        {[
          ...loginMethods.map((method: IProfile) => {
            return (
              <li key={method.id}>
                <button onClick={e => disconnect(method)} type="button" className="btn btn-primary">
                  Primary
                </button>
                {method.id} - {method.type}
              </li>
            );
          })
        ]}
      </ul>
    </div>
  );
};

export default AwsAccounts;
