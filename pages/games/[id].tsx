import { useState } from "react";

import Button from "../../components/Button";

const Game = (): JSX.Element => {
  const [dataField, onChangeDataField] = useState(() => [
    ["5", "3", "", "", "7", "", "", "", ""],
    ["6", "", "", "1", "9", "5", "", "", ""],
    ["", "9", "8", "", "", "", "", "6", ""],
    ["8", "", "", "", "6", "", "", "", "3"],
    ["4", "", "", "8", "", "3", "", "", "1"],
    ["7", "", "", "", "2", "", "", "", "6"],
    ["", "6", "", "", "", "", "2", "8", ""],
    ["", "", "", "4", "1", "9", "", "", "5"],
    ["", "", "", "", "8", "", "", "7", "9"],
  ]);

  const onHandleChange = (y: number, x: number, value: string): void => {
    onChangeDataField(
      dataField.map((yItem, yIndex) => {
        if (yIndex === y) {
          return yItem.map((xItem, xIndex) => {
            if (xIndex === x) {
              return value;
            }
            return xItem;
          });
        }
        return yItem;
      })
    );
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {dataField.map((row, yIndex) => {
          return (
            <div key={`${row[0]}${yIndex}`}>
              {row.map((item, xIndex) => (
                <input
                  max={9}
                  value={item}
                  disabled={!!item}
                  key={`${item}${xIndex}`}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderLeft: "none",
                    borderTop: "none",
                    borderColor: "black",
                    boxSizing: "border-box",
                    paddingLeft: "15px",
                    color: "black",
                  }}
                  onChange={(e) =>
                    onHandleChange(yIndex, xIndex, e.target.value)
                  }
                />
              ))}
            </div>
          );
        })}
      </div>
      <Button
        label="Проверить решение"
        styles={{ width: "100%", marginTop: "30px" }}
        onClick={() => console.log("check data")}
      />
    </div>
  );
};

export default Game;
