import MainEntry from "#domains/main/routes/MainEntry.js";
import { Route, Routes } from "react-router";

import Header from "#components/Header";
import Nav from "#components/Nav";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Nav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path="/" element={<MainEntry />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
