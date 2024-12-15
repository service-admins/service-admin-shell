import MainEntry from "#domains/main/routes/MainEntry.js";
import { routePath } from "#routes/path.js";
import { NavLink, Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "32px" }}>
        <NavLink to="/" end>
          Main
        </NavLink>
        <NavLink to={routePath.IIT.absolute} end>
          IIT
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<MainEntry />} />
      </Routes>
    </div>
  );
}

export default App;
