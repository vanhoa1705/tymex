import { Provider } from "mobx-react";
import rootStore from "@/stores";
import Router from "@/router/routes"

const App = () => {
  return (
    <Provider {...rootStore}>
      <Router />
    </Provider>
  );
};

export default App;
