import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const activeStyle = {
    color: "green",
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
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home{" "}
        </NavLink>{" "}
        |
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About{" "}
        </NavLink>{" "}
        |
        <NavLink
          to="/boardlist"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
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
