import { Provider } from "mobx-react";
import { ConfigProvider } from 'antd';
import rootStore from "@/stores";
import Router from "@/router/routes"

import './App.less'

const theme = {
  token: {
    colorPrimary: '#fff', // Set your primary color
  },
  hashed: false
};

const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <Provider {...rootStore}>
        <Router />
      </Provider>
    </ConfigProvider>
  );
};

export default App;
