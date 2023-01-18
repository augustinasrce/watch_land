const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center text-center align-items-center"
      style={{ height: "100%" }}
    >
      <div
        className="spinner-grow  text-warning "
        style={{ width: "10rem", height: "10rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
