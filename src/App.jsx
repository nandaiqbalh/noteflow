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
import Testimonials from "./components/section/Testimonials/Testimonials.jsx";
import Footer from "./components/section/Footer.jsx";
import Modal from "./components/section/Modal/Modal.jsx";
import SignUpModal from "./components/section/Modal/SignUpModal.jsx";
import { ModalContextProvider } from "./contexts/ModalContext.jsx";
import MobileMenu from "./components/section/MobileMenu/MobileMenu.jsx";
import { MobileMenuContextProvider } from "./contexts/MobileMenuContext.jsx";

function App() {
  return (
    <MobileMenuContextProvider>
      <ModalContextProvider>
        <Page>
          <Analytics />
          <Header>
            <Navigation />
            <Hero />
            <Reviews />
          </Header>
          <Main>
            <Logos />
            <Features />
            <FaQs />
            <Testimonials />
          </Main>

          <Footer />

          <Modal modal="sign-up">
            <SignUpModal />
          </Modal>

          <MobileMenu />
        </Page>
      </ModalContextProvider>
    </MobileMenuContextProvider>
  );
}

export default App;
