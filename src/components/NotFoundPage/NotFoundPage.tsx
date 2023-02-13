import "./NotFoundPage.scss";
import { ReactComponent as NotFoundPageLogo } from "../../assets/notFoundPageLogo/notFoundPageLogo.svg";

/**Components */
import BackButton from "../Buttons/BackButton";

const NotFoundPage = () => {
  return (
    <div className="page">
      <NotFoundPageLogo style={{ height: "600px" }}></NotFoundPageLogo>
      <BackButton />
    </div>
  );
};

export default NotFoundPage;
