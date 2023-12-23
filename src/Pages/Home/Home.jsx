import Packege from "../Packege/Packege";
import Banner from "./Banner";
import LatestNews from "./LatestNews";
import Map from "./Map";
import Subscribe from "./Subscribe";


import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <div className="hidden md:block lg:block">
                <Banner></Banner>
            </div>
            <Packege></Packege>
            <Map></Map>
            <Testimonial></Testimonial>
            <LatestNews></LatestNews>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;