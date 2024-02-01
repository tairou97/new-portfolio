import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./components/routes";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((rou) => (
          <Route key={rou.id} {...rou} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
