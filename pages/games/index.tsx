import Router from "next/router";

const Games = () => {
  const ids = ["1", "2", "3", "4", "5", "6", "7", "8"];
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
        {ids.map((id) => {
          return (
            <div
              key={id}
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
              onClick={() => Router.push(`/games/${id}`)}
            >
              {id}
            </div>
          );
        })}
      </div>
      <button
        style={{
          cursor: "pointer",
          border: "none",
          padding: "15px",
          textTransform: "uppercase",
          letterSpacing: 0.5,
          borderRadius: "5px",
          backgroundColor: "#4849f9",
          color: "#fff",
          width: "100%",
        }}
      >
        Добавить игру
      </button>
    </div>
  );
};

export default Games;
