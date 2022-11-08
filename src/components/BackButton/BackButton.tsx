import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="navigation-tab" style={{ display: "flex" }}>
      <div className="col-6">
        <button className="btn btn-link m-2" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default BackButton;
