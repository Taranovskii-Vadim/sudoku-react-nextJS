import { useState } from "react";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";

import Button from "../../components/Button";
import { Game, Result } from "../../types";

interface Props {
  game: Game;
}

// TODO include UI library
// TODO add more games

const Game = ({ game }: Props): JSX.Element => {
  const { id, template } = game;
  const { query } = useRouter();
  const [data, onChangeData] = useState(() => template);

  const onHandleChange = (y: number, x: number, value: string): void => {
    onChangeData(
      data.map((yItem, yIndex) => {
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

  const onHandleSendData = async (): Promise<void> => {
    const body = JSON.stringify({ id, levelId: query.levelId, data });
    const config = { method: "POST", body };
    const resp = await fetch("http://localhost:3000/api/games/check", config);
    // TODO carry on refactor check function
    const { result } = await resp.json();
    onChangeData(result);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data.map((row, yIndex) => (
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const { levelId } = params as { levelId: string };

  const response = await fetch(`http://localhost:3000/api/games/${levelId}`);
  const parsed = await response.json();
  const { result } = parsed as Result<Game>;

  return { props: { game: result } };
}

export default Game;
