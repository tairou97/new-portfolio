import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./components/routes";

function App() {
  return (
    <>
      <Routes>
        {routes.map((rou) => (
          <Route key={rou.id} {...rou} />
        ))}
      </Routes>
    </>
  );
}

export default App;
