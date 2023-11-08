
import { useLoaderData } from 'react-router-dom';
import RoomsCart from './RoomsCart';

const Rooms = () => {
    const roomsAllData = useLoaderData();
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
            </div >

            <div className='max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mb-36'>
                {
                    roomsAllData.map(roomCart => <RoomsCart key={roomCart._id} roomCart={roomCart}></RoomsCart>)
                }
            </div>

        </div>
    );
};

export default Rooms;