import { NavLink } from "react-router-dom";

const LinkRoute = () => {
  return (
    <div>
      <div className="flex gap-5">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/favourite"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Favourite
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default LinkRoute;
