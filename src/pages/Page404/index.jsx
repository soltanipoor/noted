import { Link } from "react-router-dom";
import "./page-404.css";

const Page404 = () => {
  return (
    <div className="page-404">
      <h1>404</h1>

      <div className="page-404__message">گشتم نبود، نگرد نیست</div>

      <Link to="/" className="page-404__cta">
        رفتن به صفحه اصلی
      </Link>
    </div>
  );
};

export default Page404;
