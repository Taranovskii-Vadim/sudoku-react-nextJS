import { useState } from "react";
import Router from "next/router";

import Button from "../../components/Button";

interface Props {
  ids: string[];
}

const Games = ({ ids }: Props): JSX.Element => {
  const [data, setData] = useState<string[]>(() => ids);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: 700,
        }}
      >
        {data.map((item) => {
          return (
            <div
              key={item}
              style={{
                display: "flex",
                cursor: "pointer",
                justifyContent: "center",
                alignItems: "center",
                width: "150px",
                height: "150px",
                border: "1px solid #4849f9",
                marginBottom: "30px",
                borderRadius: "5px",
                color: "#4849f9",
              }}
              onClick={() => Router.push(`/games/${item}`)}
            >
              {item}
            </div>
          );
        })}
      </div>
      <Button
        label="Добавить игру"
        styles={{ width: "100%" }}
        onClick={() => {
          console.log("this is add new game button");
        }}
      />
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/games");
  const { result } = await response.json();

  return { props: { ids: result.map(({ id }: { id: string }) => id) } };
}

export default Games;
