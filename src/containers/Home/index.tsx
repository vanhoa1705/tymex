import { useStores } from "../../hooks";
import { FC } from "react";

const Home: FC = () => {
  const { dataStore } = useStores();
  console.log({ dataStore });
  return <>Home</>;
};

export default Home;
