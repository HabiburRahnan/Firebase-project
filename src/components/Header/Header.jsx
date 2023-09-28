import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center text-2xl gap-8">
      <div>
        <h1>This is Header</h1>
      </div>
      <div className="gap-5 ">
        <Link to="/">Home</Link>
        <Link to="/login">login</Link>
      </div>
    </div>
  );
};

export default Header;
