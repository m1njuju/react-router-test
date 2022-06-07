import { NavLink, Outlet } from "react-router-dom";

const BoardList = () => {
  const activeStyle = {
    color: "green",
    fontWeight: "bold",
  };
  const unActiveStyle = {
    color: "black",
    fontWeight: "bold",
    textDecoration: "none",
  };
  const numlist = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>Board</h1>
      <p>파라미터 및 중첩 라우터를 사용하여 아래 Board의 내용이 보입니다</p>
      <h4>
        {numlist.map((num, index) => (
          <NavLink
            key={index}
            to={`/boardlist/${num}`}
            style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
          >
            {num}
          </NavLink>
        ))}
      </h4>

      <Outlet />
    </div>
  );
};
export default BoardList;
