import styled from "styled-components";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Blog from "./Blog/Blog";
import Hero from "./Hero/Hero";
import Join from "./Join/Join";
import Recipes from "./Recipes/Recipes";
import Services from "./Services/Services";

const Container = styled.main`
  max-width: 1228px;
  min-height: 100vh;
  margin-inline: auto;
  position: relative;
`;

function LandingPage() {
  return (
    <Container>
      <Header />
      <Hero />
      <Recipes />
      <Services />
      <Blog />
      <Join />
      <Footer />
    </Container>
  );
}

export default LandingPage;
