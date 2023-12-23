
import { useLoaderData } from 'react-router-dom';
import RoomsCart from './RoomsCart';
import { PiSortAscendingBold, PiSortDescendingBold } from 'react-icons/pi';
import { useState } from 'react';

const Rooms = () => {
    const [acending, setAcending] = useState(true)
    const roomsAllData = useLoaderData();

    return (
        <div className=''>
            <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/XJGWBPQ/cover.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-[25px] md:text-[42px] font-bold">Pricing Our <span className='text-[#FF3811]'>Rooms</span></h1>
                        <h1 className='text-xl font-medium '>Hotel rooms are temporary accommodations offering comfort and convenience to travelers and guests.</h1>
                    </div>
                </div>
            </div >

            <div className='flex mt-8'>
                <div className='max-w-7xl m-auto flex  mt-3'>
                    {/* <h1>Sorting</h1> */}

                    {acending ?
                        <>
                            <button onClick={() => setAcending(!acending)} className='btn bg-green-700 hover:bg-green-800 text-white'>
                                <div className='text-white text-xl'><PiSortAscendingBold ></PiSortAscendingBold></div>Price: High to Low
                            </button>
                        </>
                        :
                        <>
                            <button onClick={() => setAcending(!acending)} className='btn bg-green-700 hover:bg-green-800 text-white'>
                                <div className='text-white text-xl'><PiSortDescendingBold ></PiSortDescendingBold></div>Price: Low to High
                            </button>
                        </>
                    }

                </div>
                <div className='max-w-7xl mx-auto flex  mt-5'>
                    <input className='py-1 px-2 bg-slate-200 rounded-l-md' type="text" name='search' placeholder=' Search Your Room..' />
                    <input className='py-2 px-2 bg-[#FF3811] text-white rounded-r-md' type="submit" name='submit' value='Search' />
                </div>

            </div>

            <div className='max-w-7xl pl-10 md:p-10 lg:p-0 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mb-36'>
                {
                    roomsAllData &&
                    roomsAllData?.map(roomCart => <RoomsCart key={roomCart._id} roomCart={roomCart}></RoomsCart>)
                }
            </div>

        </div>
    );
};

export default Rooms;