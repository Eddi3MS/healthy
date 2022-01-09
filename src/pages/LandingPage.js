import { useEffect, useState } from "react";
import styled from "styled-components";
import Cookie from "../components/layout/Cookie";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Blog from "./Blog/Blog";
import Hero from "./Hero/Hero";
import Join from "./Join/Join";
import Recipes from "./Recipes/Recipes";
import Register from "./Register/Register";
import Services from "./Services/Services";

const Container = styled.main`
  max-width: 1228px;
  min-height: 100vh;
  margin-inline: auto;
  position: relative;
`;

function LandingPage() {
  const [cookie, setCookie] = useState(false);

  useEffect(() => {
    var cookies = document.cookie.split(";").reduce((cookies, cookie) => {
      const [name, val] = cookie.split("=").map((c) => c.trim());
      cookies[name] = val;
      return cookies;
    }, {});

    if (cookies.cookie === "accepted") {
      return;
    }

    setCookie(true);
  }, []);

  return (
    <Container>
      <Header />
      <Hero />
      <Recipes />
      <Services />
      <Blog />
      <Join />
      <Register />
      {cookie ? <Cookie handleCookies={setCookie} /> : null}
      <Footer />
    </Container>
  );
}

export default LandingPage;
