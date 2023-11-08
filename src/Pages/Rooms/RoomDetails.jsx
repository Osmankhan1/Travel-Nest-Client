import cover from '../../assets/img/rooms/bedroom (2).jpg'

const RoomDetails = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <div>
                <h1 className=" text-[42px] font-bold text-center mt-10 mb-20">This is Room  <span className='text-[#FF3811]'>details</span></h1>
            </div>
            <div className='flex gap-10 mb-44 '>
                <div className='w-1/2 '>
                    <img className='rounded-xl ' src={cover} alt="" />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-4xl font-bold'>Luxary Room in this </h1>
                    <h2 className='text-xl font-semibold mt-4'>Price :</h2>
                    <h2 className='text-xl font-semibold mt-2'>discount :</h2>
                    <h2 className='text-xl font-semibold mt-2'>Room Size :</h2>
                    <div className='flex gap-4'>
                        <h2 className='text-xl font-semibold mt-4'><b>Rating :</b></h2>
                        <div className="rating rating-md mt-5">
                            <input type="radio" name="rating-2" className="mask mask-star-2  bg-[#FF3811]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2  bg-[#FF3811]"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2  bg-[#FF3811]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2  bg-[#FF3811]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2  bg-[#FF3811]" checked/>
                        </div>
                    </div>

                    <p className='mt-5 '><b>description :</b></p>
                    {/* date */}
                    <div className='mt-[120px]'>
                        <button className='btn w-full border-2 border-green-600 hover:bg-[#FF3811] hover:text-white '>Booking Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;