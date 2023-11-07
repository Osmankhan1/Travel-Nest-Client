import { Link } from "react-router-dom";


const LatestNewsCart = ({newsData}) => {
    const {img, title, short_description} = newsData;
    return (
        <div className="card w-full bg-base-100">
            <figure><img className=" hover:brightness-75 hover:scale-125 duration-300" src={img} /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className="">{short_description}</p>
               <Link className="text-[#FF3811] text-xl">Read More...</Link>
            </div>
        </div>
    );
};

export default LatestNewsCart;
 