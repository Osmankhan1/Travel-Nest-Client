import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';

const Map = () => {
    return (
        <div className=' mt-48 max-w-7xl md:p-10 mx-auto'>
            <h1 className='text-[25px] md:text-[42px] font-bold text-center '>Our <span className='text-[#FF3811]'>Location</span></h1>
            <p className='text-center w-[500px] m-auto mt-5'> If you could provide me with that information, I can assist you in generating a description and potentially even include a map or directions to the hotel's location.</p>

            <div className='md:flex p-5 md:p-0 mt-20 '>
                <div className='md:w-2/3'>
                    <iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=sector-12,%20Uttara,%20Dhaka,%20Bangladesh+(TravelNest)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
                </div>
                <div className='md:w-1/3 mt-20'>
                    <h1 className='text-2xl font-bold text-center'>TravelNest Hotel & Travel</h1>
                    <div className='mt-8 ml-[115px]'>
                        <div  className='flex gap-1'>
                            <MdLocationOn className='text-xl mt-1'></MdLocationOn>
                            <h1 className='font-bold '>Sector-12, Uttara, Dhaka</h1>
                        </div>
                        <p className=''>Event Address</p>
                    </div>
                    <div className='mt-8 ml-[115px]'>
                        <div className='flex  gap-1'>
                            <BiSolidPhoneCall className='text-xl mt-1'></BiSolidPhoneCall>
                            <h1 className='font-bold '>008657934845</h1>
                        </div>
                        <p>Phone Number</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Map;