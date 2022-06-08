import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const BoardList = () => {
  const [num, setNum] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const activeStyle = {
    color: "green",
  };

  return (
    <div>
      <h1>Board</h1>
      <p>파라미터 및 중첩 라우터를 사용하여 아래 Board의 내용이 보입니다</p>
      <h4>
        {
          // ()=>() ()의 내용이 return
          // ()=>{} {}의 내용이 실행됨(return이 필요하다면 따로 작성)
          num.map((n) => (
            <NavLink // Link와 NavLink는 a태그
              key={n}
              to={`/boardlist/${n}`}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {n}
            </NavLink>
          ))
        }
      </h4>

      <Outlet />
    </div>
  );
};
export default BoardList;
