import { useParams } from "react-router-dom";

const Board = () => {
  const params = useParams();
  return (
    <div>
      <h1>{params.id}페이지입니다</h1>
    </div>
  );
};
export default Board;
