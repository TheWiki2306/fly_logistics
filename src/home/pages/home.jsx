import { Link } from "react-router-dom";
import HeroSection from "../components/heroSection";


const Home = () => {
  return (
    <>
        <div>
            <HeroSection />
        </div>
        <div className="w-32 bg-lime-500 px-5 pt-2 pb-3 mt-12 sm:mt-18 rounded-xl border-0 transition-all duration-300 hover:bg-gray-500 hover:scale-105">
            <Link to="/booking">
                <p className="text-white font-semibold">Book now</p>
            </Link>
        </div>

    </>
  )
}

export default Home