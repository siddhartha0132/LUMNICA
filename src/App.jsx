import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AccountUser from "./pages/AccountUser";
import ScrollToTop from "./components/ScrollToTop";
import Blogs from "./pages/Blogs";
import AyurvedicHerbsForSkin from "./Blogs/Ayurvedic-herbs-for-skin";
import ModernLifestyleAyurveda from "./Blogs/Modern-lifestyle-ayurveda";
import Dinacharya from "./Blogs/Dinacharya-ayurvedic-daily-routine";
import AyurvedicSkincarePrinciples from "./Blogs/Aurvedic-skincare-principles";
import GutHealthAndSkinAyurveda from "./Blogs/Gut-health-and-skin-ayurveda";
import RitucharyaSeasonalAyurveda from "./Blogs/Ritucharya-seasonal-ayurveda";
import StressAndSkinAyurveda from "./Blogs/Stress-and-skin-ayurveda";
import NaturalDetoxAyurveda from "./Blogs/Natural-detox-ayurveda";
import SleepAndSkinRegeneration from "./Blogs/Sleep-and-skin-regeneration";
import Abhyanga from "./Blogs/Abhyanga-oil-massage-benefits"
import Customized from "./components/NavbarComp/Makeup";
import Face from "./components/NavbarComp/Face";
import BathAndBody from "./components/NavbarComp/Bath";
import Hair from "./components/NavbarComp/Hair";
import Gifting from "./components/NavbarComp/Gifting";
import Men from "./components/NavbarComp/Men";
import Exclusive from "./components/NavbarComp/Exclusive";




export default function App() {
  return (
    <Router>
      <Navbar />

      <div className="pt-20">
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />}/>
          {/* new routes */}
          <Route path="/blogs/modern-lifestyle-ayurveda" element={<ModernLifestyleAyurveda />} />
          <Route path="/blogs/dinacharya-ayurvedic-daily-routine" element={<Dinacharya />} />
          <Route path="/blogs/ayurvedic-skincare-principles" element={<AyurvedicSkincarePrinciples/>} />
          <Route path="/blogs/abhyanga-oil-massage-benefits" element={<Abhyanga />} />
          <Route path="/blogs/ayurvedic-herbs-for-skin" element={<AyurvedicHerbsForSkin />} />
          <Route path="/blogs/gut-health-and-skin-ayurveda" element={<GutHealthAndSkinAyurveda />} />
          <Route path="/blogs/ritucharya-seasonal-ayurveda" element={<RitucharyaSeasonalAyurveda />} />
          <Route path="/blogs/stress-and-skin-ayurveda" element={<StressAndSkinAyurveda />} />
          <Route path="/blogs/natural-detox-ayurveda" element={<NaturalDetoxAyurveda />} />
          <Route path="/blogs/sleep-and-skin-regeneration" element={<SleepAndSkinRegeneration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<AccountUser />} />
          <Route path="/customized" element={<Customized/>}/>
          <Route path="/face" element={<Face/>}/>
           <Route path="/bath-body" element={<BathAndBody/>}/>
            <Route path="/hair" element={<Hair/>}/>
<Route path="/gifting" element={<Gifting/>}/>
<Route path="/men" element={<Men/>}/>
<Route path="/exclusives" element={<Exclusive/>}/>
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}
