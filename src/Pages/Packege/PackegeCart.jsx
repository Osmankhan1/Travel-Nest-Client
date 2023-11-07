

const PackegeCart = ({ packegeCart }) => {
    const { img, title, price } = packegeCart;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-md">
            <figure><img className="hover:scale-125 duration-200" src={img} /></figure>
            <div className="card-body">
                <h2 className="card-title text-center">{title}</h2>
                <h1 className="text-4xl font-bold text-[#FF3811] ">{price}<span className="text-xl text-black">/Per Night</span></h1>
                <div className="mt-4">
                    <h1 className="text-[18px] mt-3 text-">Altime Free Wifi</h1>
                    <h1 className="text-[18px] mt-3 text-">2 People Breakfast</h1>
                    <h1 className="text-[18px] mt-3 text-">2 People in Room</h1>
                    <h1 className="text-[18px] mt-3 text-">Swiming Pool</h1>
                    <h1 className="text-[18px] mt-3 text-">1 Bed Room</h1>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn border-2 border-indigo-600 hover:bg-[#FF3811] hover:text-white">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default PackegeCart;