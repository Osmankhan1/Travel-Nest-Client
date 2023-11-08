
import cover from '../../assets/img/rooms/bedroom (2).jpg'

const Rooms = () => {
    return (
        <div>
            <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/XJGWBPQ/cover.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-[42px] font-bold">Pricing Our <span className='text-[#FF3811]'>Rooms</span></h1>
                        <h1 className='text-xl font-medium '>Hotel rooms are temporary accommodations offering comfort and convenience to travelers and guests.</h1>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-20 mb-36">
                    <figure><img className='hover:scale-125 duration-200' src={cover} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn border-2 border-indigo-600 hover:bg-[#FF3811] hover:text-white">See Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rooms;