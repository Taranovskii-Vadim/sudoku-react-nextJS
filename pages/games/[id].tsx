import Button from "../../components/Button";

const Game = (): JSX.Element => {
  const dataField = [
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // borderLeft: "1px solid black",
          // borderTop: "1px solid black",
        }}
      >
        {dataField.map((row, index) => {
          return (
            <div key={`${row[0]}${index}`}>
              {row.map((item, index) => (
                <input
                  key={`${item}${index}`}
                  // max={9}
                  // type="number"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderLeft: "none",
                    borderTop: "none",
                  }}
                  // disabled={!!item}
                  // value={item}
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
