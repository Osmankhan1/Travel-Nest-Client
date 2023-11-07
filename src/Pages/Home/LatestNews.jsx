import { useEffect, useState } from "react";
import LatestNewsCart from "./LatestNewsCart";

const LatestNews = () => {
    const [news, setNews] = useState();

    useEffect(() => {
        fetch('Travel.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div className="mt-48">
            <h1 className='text-[42px] font-bold text-center '>Latest <span className="text-[#FF3811]">News</span></h1>
            <p className='text-center w-[500px] m-auto mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>

            <div className=" grid md:grid-cols-3 gap-5 max-w-7xl mx-auto mt-20">
                {
                    news &&
                    news.map(newsData => <LatestNewsCart key={newsData.id} newsData={newsData}></LatestNewsCart>)
                }
            </div>
        </div>
    );
};

export default LatestNews;