import Page from "./components/section/Page.jsx";
import Header from "./components/section/Header.jsx";
import Navigation from "./components/section/Navigation.jsx";
import Hero from "./components/section/Hero.jsx";
import Reviews from "./components/section/Reviews.jsx";
import Main from "./components/section/Main.jsx";
import Logos from "./components/section/Logos.jsx";
import Features from "./components/section/Features.jsx";
import { Analytics } from "@vercel/analytics/react";
import FaQs from "./components/section/FAQs/FAQs.jsx";

function App() {
  return (
    <Page>
      <Analytics/>
      <Header>
        <Navigation />
        <Hero/>
        <Reviews/>
      </Header>
      <Main>
        <Logos/>
        <Features/>
        <FaQs/>
      </Main>
    </Page>
  );
}

export default App;
