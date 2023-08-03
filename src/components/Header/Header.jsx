import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto flex items-center  justify-between bg-blue-600 p-4 text-white">
      <Link to={"/"} className=" uppercase">
        {" "}
        Movie-app{" "}
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/movie"}>Movie</Link>
        </li>
        <li>
          <Link to={"/tv"}>TV</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
