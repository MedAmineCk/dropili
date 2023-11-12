import {Cover} from "../components/sections/Cover";
import {AboutUs} from "../components/sections/AboutUs.jsx";
import {Offers} from "../components/sections/Offers.jsx";
import {Tools} from "../components/sections/Tools.jsx";
import {Testimonials} from "../components/sections/Testimonials.jsx";
import {Companies} from "../components/sections/Companies.jsx";

export const Home = () => {
    return (
        <section className="sections-container">
            <Cover/>
            <AboutUs/>
            <Offers/>
            <Tools/>
            <Testimonials/>
            <Companies/>
        </section>
    )
}