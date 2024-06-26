import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./core/App/App";
import reportWebVitals from "./reportWebVitals";
import { Normalize } from "styled-normalize";
import { Provider } from "react-redux";
import store from "./core/App/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/App/theme";
import { Globalstyle } from "./core/App/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <Normalize />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
