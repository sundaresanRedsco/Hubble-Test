import { Container } from "@mui/material";
import Navbar from "../components/navbar";
import Home from "./home";
import Footer from "../components/footer";
import Vulnerability from "./vulnerability";
import About from "./about";
import { Route, Routes } from "react-router-dom";

export default function Index() {
  return (
    <>
      <Navbar />
      <Container className="p-0" maxWidth="xl">
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/vulnerability" element={<Vulnerability />}></Route>
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
