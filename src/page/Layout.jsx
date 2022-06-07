import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const activeStyle = {
    color: "green",
    fontWeight: "bold",
    textDecoration: "none",
  };
  const unActiveStyle = {
    color: "black",
    fontWeight: "bold",
    textDecoration: "none",
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <header>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
        >
          Home{" "}
        </NavLink>{" "}
        |
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
        >
          About{" "}
        </NavLink>{" "}
        |
        <NavLink
          to="/boardlist"
          style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
        >
          Board{" "}
        </NavLink>
      </header>

      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <button onClick={goBack}>뒤로가기</button>
      </footer>
    </div>
  );
};
export default Layout;
