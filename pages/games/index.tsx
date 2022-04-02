import Router from "next/router";

interface Props {
  levels: string[];
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
    {levels.map((item, index) => (
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
          marginBottom: "15px",
          borderRadius: "5px",
          color: "#4849f9",
        }}
        onClick={() => Router.push(`/games/${item}`)}
      >
        {item}
      </div>
    ))}
  </div>
);

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/levels");
  const { result } = await response.json();

  return { props: { levels: result } };
}

export default Games;
