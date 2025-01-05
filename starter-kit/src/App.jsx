
import Header from "./components/Header";
import Hero from "./components/Hero";
import Branding from "./components/theme/Branding";
import Features from "./components/Features";
import CallToaction from "./components/CallToaction";
import BulletPoint from "./components/BulletPoint";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
function App() {
  return <>

    <Header />
    <Hero />
    <Branding />
    <Features />
    <CallToaction />
    <BulletPoint/>
    <CallToaction minify />
    <Pricing />
    <Footer/>
  </>;
}

export default App;
