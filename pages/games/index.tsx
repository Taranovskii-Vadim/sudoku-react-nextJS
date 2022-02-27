import Router from "next/router";

import Button from "../../components/Button";

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

export default Games;
