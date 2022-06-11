import Router from "next/router";

import Button from "../components/Button";

const Home = (): JSX.Element => (
  <Button label="Начать игру!" onClick={() => Router.push("/game")} />
);

export default Home;
