import Packege from "../Packege/Packege";
import Banner from "./Banner";
import LatestNews from "./LatestNews";
import Map from "./Map";
import Subscribe from "./Subscribe";


import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Packege></Packege>
           <Map></Map>
           <Testimonial></Testimonial>
           <LatestNews></LatestNews>
           <Subscribe></Subscribe>
        </div>
    );
};

export default Home;