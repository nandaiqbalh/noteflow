import Page from "./components/section/Page.jsx";
import Header from "./components/section/Header.jsx";
import Navigation from "./components/section/Navigation.jsx";
import Hero from "./components/section/Hero.jsx";
import Reviews from "./components/section/Reviews.jsx";

function App() {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero/>
        <Reviews/>
      </Header>
    </Page>
  );
}

export default App;
