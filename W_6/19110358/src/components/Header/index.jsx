import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="position-sticky d-flex justify-content-between text-white bg-dark align-items-center">
      <div className="fs-1">
        <Link  className="link text-white" to="/"> Simple Blog</Link>
      </div>
      <div>
        <Link to="/post/create" className="btn btn-primary">
          Add New Post
        </Link>
      </div>
    </div>
  );
};

export default Header;
