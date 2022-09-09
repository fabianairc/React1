import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1> The Dojo Blog</h1>
      <div className="Links"> </div>
      <Link to="./"> Home</Link>
      <Link to="/create"> New Blog</Link>
    </nav>
  );
};

export default Navbar;
