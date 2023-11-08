import { Link } from "react-router-dom";

const RoomsCart = ({ roomCart }) => {
    const {_id, image, room_type } = roomCart;
    return (
        <div className=''>
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <figure><img className=' h-[250px] hover:scale-125 duration-200' src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{room_type}</h2>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    {/* md */}
                    <div className="card-actions justify-end">
                       <Link to={`/roomDetails/${_id}`}> <button className="btn border-2 border-indigo-600 hover:bg-[#FF3811] hover:text-white">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomsCart;