import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Footer from "./Footer.jsx";
// import ProductShowcase from "../components/ProductShowcase.jsx";
import Mains from "./Mains.jsx";

const LandingPage = () => {
    return (
        <div className="bg-white font-sans text-gray-800">
            <Header />
            <main>
                <HeroSection/>
                <Mains/>                
                {/* <ProductShowcase /> */}
            </main>
            <Footer/>
        </div>
    )
}

export default LandingPage;