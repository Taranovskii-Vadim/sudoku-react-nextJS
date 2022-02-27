import Router from "next/router";

const Home = (): JSX.Element => (
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
    }}
    onClick={() => Router.push("/games")}
  >
    Начать игру!
  </button>
);

export default Home;
