const SearcButton = () => {
  return (
    <div className="input-group m-2 w-25">
      <input type="text" className="form-control" placeholder="Search" aria-label="Search-form" />
      <div className="input-group-append">
        <span className="input-group-text" id="basic-addon2" role="button">
          search
        </span>
      </div>
    </div>
  );
};

export default SearcButton;
