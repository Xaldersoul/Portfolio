import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Transition from "./components/transition/Transition";
import { IntlProvider } from "react-intl";
import EnglishMessages from "./lang/en.json";
import SpanishMessages from "./lang/es.json";

function App() {
  return (
    <IntlProvider locale="es" messages={SpanishMessages}>
      <Transition title="Welcome to my portfolio" />
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </IntlProvider>
  );
}

export default App;
