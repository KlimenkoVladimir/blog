import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import styled from "@emotion/styled";

function App() {
  const App = styled.div`
    padding: 64px 130px;
  `;

  return (
    <App>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </App>
  );
}

export default App;
