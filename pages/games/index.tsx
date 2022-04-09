import Router from "next/router";

import { LevelType, Result } from "../../types";

interface Props {
  levels: LevelType[];
}

const Games = ({ levels }: Props): JSX.Element => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: 600,
    }}
  >
    {levels.map((level, index) => (
      <div
        key={`${level}${index}`}
        style={{
          display: "flex",
          cursor: "pointer",
          justifyContent: "center",
          alignItems: "center",
          width: "150px",
          height: "150px",
          border: "1px solid #4849f9",
          marginBottom: "15px",
          borderRadius: "5px",
          color: "#4849f9",
        }}
        onClick={() => Router.push(`/games/${level}`)}
      >
        {level}
      </div>
    ))}
  </div>
);

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/levels");
  const parsed = await response.json();
  const { result } = parsed as Result<LevelType[]>;

  return { props: { levels: result } };
}

export default Games;
