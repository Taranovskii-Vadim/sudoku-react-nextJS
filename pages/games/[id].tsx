import { useState } from "react";

import Button from "../../components/Button";

interface Props {
  data: string[][];
}

const Game = ({ data }: Props): JSX.Element => {
  const [dataField, onChangeDataField] = useState(() => data);

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
      {dataField.length ? (
        <>
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
            onClick={() => console.log(dataField)}
          />
        </>
      ) : (
        <div>К сожалению данной игры не существует в системе</div>
      )}
    </div>
  );
};

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const response = await fetch(`http://localhost:3000/api/games/${id}`);
  const { result } = await response.json();

  return { props: { data: result ? result.data : [] } };
}

export default Game;
