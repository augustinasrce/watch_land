import { Link } from "react-router-dom";
import "./HomePage.scss";
import { ReactComponent as AwsLogo } from "../../assets/logos/aws.svg";
import { ReactComponent as AzureLogo } from "../../assets/logos/azure.svg";
import { ReactComponent as GCloudLogo } from "../../assets/logos/gcloud.svg";

const HomePage = () => {
  return (
    <section className="container">
      <div className="mt-5 mb-5">
        <div className="mt-4 p-5 bg-danger text-white rounded">
          <h1>WatchLand</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
          </p>
        </div>
      </div>
      <div className="row align-items-center h100">
        <div className="col">
          <div className="card svg-card">
            <AwsLogo className="card-img-top"></AwsLogo>
            <div className="card-body">
              <h5 className="card-title">AWS CloudWatch</h5>
              <p className="card-text">
                Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the
                applications you run on AWS in real time.
              </p>
              <Link to="/aws">
                <button type="button" className="btn btn-primary">
                  View
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card svg-card">
            <AzureLogo className="card-img-top"></AzureLogo>
            <div className="card-body">
              <h5 className="card-title">Azure Monitor</h5>
              <p className="card-text">
                Azure Monitor supports your operations at scale by helping you maximize the
                performance and availability of your resources.
              </p>
              <Link to="/azure">
                <button type="button" className="btn btn-primary">
                  View
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card svg-card">
            <GCloudLogo className="card-img-top"></GCloudLogo>
            <div className="card-body">
              <h5 className="card-title">Google Cloud Logging</h5>
              <p className="card-text">
                Integrated monitoring, logging, and trace managed services for applications and
                systems running on Google Cloud and beyond.
              </p>
              <Link to="/google">
                <button type="button" className="btn btn-primary">
                  View
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
