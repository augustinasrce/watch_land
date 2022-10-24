import { useNavigate } from "react-router-dom";

const NavigationButton = () => {
  const navigate = useNavigate();
  return (
    <div className="navigation-tab" style={{ display: "flex" }}>
      <div className="col-6">
        <button className="btn btn-danger m-2" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <div className="col-6 text-end">
        <button className="btn btn-success m-2" onClick={() => navigate(1)}>
          Forward
        </button>
      </div>
    </div>
  );
};

export default NavigationButton;
