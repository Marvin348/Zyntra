import useProjectStore from "../storage/useProjectStore";
import BoardItem from "./BoardItem";
const Board = () => {
  const project = useProjectStore((state) => state).project;

  const test = ["TO DO", "IN PROGRESS", "COMPLETED"];

  return (
    <section>
      <h2 className="font-semibold text-3xl">Projects</h2>
      <div className="flex items-center justify-between gap-8">
        {test.map((item) => (
          <BoardItem key={item} label={item} />
        ))}
      </div>
    </section>
  );
};
export default Board;
