import { render, screen } from "@testing-library/react";
import { Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

import RedirectPage from "~/pages/redirect-page";

const NotFind = () => <h1>404</h1>;

test("Renders main page correctly", async () => {
  const history = createBrowserHistory();
  history.push(
    "/page/redirect?ObjectID=2022-09-30-17.10.02.978620T01&DDEM=ONLINE&DDES=REGISTRA&STAT=TO"
  );

  render(
    <Router location={history.location} navigator={history}>
      <Routes>
        <Route element={<RedirectPage />} path="/page/redirect" />
        <Route element={<NotFind />} path="*" />
      </Routes>
    </Router>
  );

  expect(history.location.pathname).toBe("/404");
});
