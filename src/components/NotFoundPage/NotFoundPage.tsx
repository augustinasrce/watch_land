import "./NotFoundPage.scss";
import { ReactComponent as NotFoundPageLogo } from "../../assets/notFoundPageLogo/notFoundPageLogo.svg";

const NotFoundPage = () => {
  return (
    <div className="page mt-5">
      <NotFoundPageLogo style={{ height: "600px" }}></NotFoundPageLogo>
    </div>
  );
};

export default NotFoundPage;
