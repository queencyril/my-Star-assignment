import { range } from "./utils";

function Grid({ numRows}) {
  return (
    <div className="grid">
      {range(0, numRows).map((rowIndex) => {
        return (
          <div className="row" key={rowIndex}>
          </div>
})}
    </div>
  );
}

export default Grid;
