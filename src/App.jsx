import { Provider } from "mobx-react";
import { ConfigProvider } from 'antd';
import rootStore from "@/stores";
import Router from "@/router/routes"

import "reflect-metadata";

import './App.less'

const theme = {
  token: {
    colorPrimary: '#fff', // Set your primary color
  },
  hashed: false
};

const App = () => {
  return (
    <Provider {...rootStore}>
      <ConfigProvider theme={theme}>
        <Router />
      </ConfigProvider>
    </Provider>
  );
};

export default App;
