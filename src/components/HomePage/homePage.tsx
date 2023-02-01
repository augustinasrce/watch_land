import { Link } from "react-router-dom";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div>
      <div className="row pt-5" style={{ marginTop: "15%" }}>
        <div className="connections">
          <Link to="/aws">
            <button type="button" className="btn btn-primary">
              AWS
            </button>
          </Link>
          <label htmlFor="aws">AWS connections</label>
        </div>
        <div className="connections">
          <Link to="/azure">
            <button type="button" className="btn btn-success">
              Azure
            </button>
          </Link>
          <label htmlFor="azure">Azure connections</label>
        </div>
        <div className="connections">
          <Link to="/google">
            <button type="button" className="btn btn-info">
              Google cloud
            </button>
          </Link>
          <label htmlFor="google">Google Cloud connections</label>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
