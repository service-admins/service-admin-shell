import { Route, Routes } from "react-router";
import { lazy } from "react";

import { basePath as iitBasePath } from "service-admin-iit/exposes";

import Header from "#components/Header";
import Nav from "#components/Nav";
import MainEntry from "#domains/main/routes/MainEntry";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

const IIT = lazy(() => import("#domains/iit/routes/IITEntry"));

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Nav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<MainEntry />} />
          <Route path={`${iitBasePath}/*`} element={<IIT />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
