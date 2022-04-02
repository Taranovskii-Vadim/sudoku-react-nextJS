import { useRouter } from "next/router";
import { useState } from "react";

import Button from "../../components/Button";

interface Props {
  data: { value: string; isCorrect: boolean }[][];
}

// TODO include UI library

const Game = ({ data }: Props): JSX.Element => {
  const { query } = useRouter();
  const [dataField, onChangeDataField] = useState(() => data);

  const onHandleChange = (y: number, x: number, value: string): void => {
    onChangeDataField(
      dataField.map((yItem, yIndex) => {
        if (yIndex === y) {
          return yItem.map((xItem, xIndex) => {
            if (xIndex === x) {
              return { value, isCorrect: true };
            }
            return xItem;
          });
        }
        return yItem;
      })
    );
  };

  const onHandleSendData = async () => {
    const response = await fetch("http://localhost:3000/api/games/check", {
      method: "POST",
      body: JSON.stringify({ id: query.levelId, data: dataField }),
    });

    const { result } = await response.json();
    onChangeDataField(result);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {dataField.map((row, yIndex) => (
          <div key={`${row[0]}${yIndex}`}>
            {row.map(({ value, isCorrect }, xIndex) => (
              <input
                max={9}
                value={value}
                key={`${value}${xIndex}`}
                style={{
                  width: "40px",
                  height: "40px",
                  borderLeft: "none",
                  borderTop: "none",
                  borderColor: "black",
                  boxSizing: "border-box",
                  paddingLeft: "15px",
                  color: isCorrect ? "black" : "red",
                }}
                onChange={(e) => onHandleChange(yIndex, xIndex, e.target.value)}
              />
            ))}
          </div>
        ))}
      </div>
      <Button
        label="Проверить решение"
        styles={{ width: "100%", marginTop: "30px" }}
        onClick={onHandleSendData}
      />
    </div>
  );
};

export async function getServerSideProps({ params }: any) {
  const { levelId } = params;
  const response = await fetch(`http://localhost:3000/api/games/${levelId}`);
  const { result } = await response.json();

  return { props: { data: result } };
}

export default Game;
