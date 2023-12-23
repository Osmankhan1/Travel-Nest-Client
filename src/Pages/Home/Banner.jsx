
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import banner1 from '../../assets/img/banner/banner1.jpg'
import banner2 from '../../assets/img/banner/banner2.jpg'
import banner3 from '../../assets/img/banner/banner3.jpg'
import banner4 from '../../assets/img/banner/banner4.jpg'
import banner5 from '../../assets/img/banner/banner5.jpg'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* Slider 1 */}
                <SwiperSlide><img className='space-y-reverse' src={banner2} />
                    <div className="absolute flex h-full  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                        <div className='md:ml-10 lg:ml-24 md:mt-10 lg:mt-24'>
                            <h1 className='md:text-3xl lg:text-6xl font-bold text-white md:w-[280px] lg:w-[463px] '><span className='text-[#FF3611]'>Find Your</span> Perfect Place To Stay</h1>
                            <p className='text-gray-50 md:mt-3 lg:mt-7 md:w-[250px] lg:w-[500px] md:text-[12px] lg:text-[18px]'>Hotel booking is a convenient way to secure accommodations for your travels. It allows you to choose from a range of lodging options, compare prices, and make reservations in advance.</p>
                            <div className='flex gap-5 md:mt-3 lg:mt-7'>
                                <Link to='/rooms'><button className='md:px-4 lg:py-4 md:py-2 lg:px-5 bg-[#FF3811] hover:bg-orange-600 text-white lg:text-[18px] font-semibold rounded-md'>Bookin Now</button></Link>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Slider 2 */}
                <SwiperSlide><img className='space-y-reverse' src={banner1} />
                    <div className="absolute flex h-full  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                        <div className='md:ml-10 lg:ml-24 md:mt-10 lg:mt-24'>
                            <h1 className='md:text-3xl lg:text-6xl font-bold text-white md:w-[280px] lg:w-[463px] '><span className='text-[#FF3611]'>Find Your</span> Perfect Place To Stay</h1>
                            <p className='text-gray-50 md:mt-3 lg:mt-7 md:w-[250px] lg:w-[500px] md:text-[12px] lg:text-[18px]'>Hotel booking is a convenient way to secure accommodations for your travels. It allows you to choose from a range of lodging options, compare prices, and make reservations in advance.</p>
                            <div className='flex gap-5 md:mt-3 lg:mt-7'>
                                <Link to='/rooms'><button className='md:px-4 lg:py-4 md:py-2 lg:px-5 bg-[#FF3811] hover:bg-orange-600 text-white lg:text-[18px] font-semibold rounded-md'>Bookin Now</button></Link>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Slider 3 */}
                <SwiperSlide><img className='space-y-reverse' src={banner3} />
                    <div className="absolute flex h-full  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                        <div className='md:ml-10 lg:ml-24 md:mt-10 lg:mt-24'>
                            <h1 className='md:text-3xl lg:text-6xl font-bold text-white md:w-[280px] lg:w-[463px] '><span className='text-[#FF3611]'>Find Your</span> Perfect Place To Stay</h1>
                            <p className='text-gray-50 md:mt-3 lg:mt-7 md:w-[250px] lg:w-[500px] md:text-[12px] lg:text-[18px]'>Hotel booking is a convenient way to secure accommodations for your travels. It allows you to choose from a range of lodging options, compare prices, and make reservations in advance.</p>
                            <div className='flex gap-5 md:mt-3 lg:mt-7'>
                                <Link to='/rooms'><button className='md:px-4 lg:py-4 md:py-2 lg:px-5 bg-[#FF3811] hover:bg-orange-600 text-white lg:text-[18px] font-semibold rounded-md'>Bookin Now</button></Link>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Slider 4 */}
                <SwiperSlide><img className='space-y-reverse' src={banner4} />
                    <div className="absolute flex h-full  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                        <div className='md:ml-10 lg:ml-24 md:mt-10 lg:mt-24'>
                            <h1 className='md:text-3xl lg:text-6xl font-bold text-white md:w-[280px] lg:w-[463px] '><span className='text-[#FF3611]'>Find Your</span> Perfect Place To Stay</h1>
                            <p className='text-gray-50 md:mt-3 lg:mt-7 md:w-[250px] lg:w-[500px] md:text-[12px] lg:text-[18px]'>Hotel booking is a convenient way to secure accommodations for your travels. It allows you to choose from a range of lodging options, compare prices, and make reservations in advance.</p>
                            <div className='flex gap-5 md:mt-3 lg:mt-7'>
                                <Link to='/rooms'><button className='md:px-4 lg:py-4 md:py-2 lg:px-5 bg-[#FF3811] hover:bg-orange-600 text-white lg:text-[18px] font-semibold rounded-md'>Bookin Now</button></Link>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Slider 4 */}
                <SwiperSlide><img className='space-y-reverse' src={banner5} />
                    <div className="absolute flex h-full  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                        <div className='md:ml-10 lg:ml-24 md:mt-10 lg:mt-24'>
                            <h1 className='md:text-3xl lg:text-6xl font-bold text-white md:w-[280px] lg:w-[463px] '><span className='text-[#FF3611]'>Find Your</span> Perfect Place To Stay</h1>
                            <p className='text-gray-50 md:mt-3 lg:mt-7 md:w-[250px] lg:w-[500px] md:text-[12px] lg:text-[18px]'>Hotel booking is a convenient way to secure accommodations for your travels. It allows you to choose from a range of lodging options, compare prices, and make reservations in advance.</p>
                            <div className='flex gap-5 md:mt-3 lg:mt-7'>
                                <Link to='/rooms'><button className='md:px-4 lg:py-4 md:py-2 lg:px-5 bg-[#FF3811] hover:bg-orange-600 text-white lg:text-[18px] font-semibold rounded-md'>Bookin Now</button></Link>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;