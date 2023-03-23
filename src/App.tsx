import { ReactElement } from "react";
import { useAppRoutes } from "./routes";

const App = (): ReactElement => {
  const { AppRoutes } = useAppRoutes();

  return <>{AppRoutes}</>;
};

export default App;
