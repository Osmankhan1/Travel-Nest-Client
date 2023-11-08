import cover from '../../assets/img/rooms/bedroom (2).jpg'

const MyBookings = () => {
    return (



        <div className="mt-10 max-w-7xl mx-auto">
            <h1 className='text-[42px] font-bold text-center '>My Booking <span className='text-[#FF3811]'>List</span> </h1>


            <div className="card w-1/2 lg:card-side bg-base-100 shadow-xl mt-16 mb-36">
                <figure><img src={cover} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className=" flex gap-3 justify-end">
                        <button className="btn btn-sm border-2 border-emerald-600 hover:bg-[#FF3811] hover:text-white">View</button>
                        <button className="btn btn-sm border-2 border-emerald-600 hover:bg-[#FF3811] hover:text-white">Edit</button>
                        <button className="btn btn-sm border-2 border-emerald-600 hover:bg-[#FF3811] hover:text-white">Update</button>
                    </div>
                </div>
            </div>


          

        </div>
    );
};

export default MyBookings;