import { Swiper, SwiperSlide } from 'swiper/react';
import tes from '../../assets/img/testimonial/tes.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonial = () => {
    return (
        <div className="mt-48 max-w-7xl mx-auto rounded-xl">
            <p className="lg:text-xl font-semibold text-green-900 text-center">What Say Clients</p>
            <h1 className="text-[25px] md:text-[42px] text-center font-bold mt-4  m-auto">Our <span className="text-[#FF3811]">Clients</span> are Important to Us</h1>
            <div className='mt-20 mb-32'>
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
                        <SwiperSlide>
                            <div className='md:flex gap-10'>
                                <div>
                                    <img className='p-5 rounded-md md:w-[1000px] md:h-[400px] md:rounded-l-xl' src='https://i.ibb.co/qBFWVN7/pexels-andrea-piacquadio-733872.jpg' />
                                </div>
                                <div>
                                    <div className='flex  '>
                                        <p className='p-5  md:p-10 lg:p-0 md:text-2xl mt-5'>"Great experience at this hotel! The staff was friendly and attentive, the rooms were clean and comfortable, and the location was perfect for exploring the city. Highly recommend"</p>
                                        <img className='w-10 h-10' src={tes} />
                                    </div>
                                    <div className='ml-20 md:ml-0'>
                                        <h1 className='md:text-3xl font-semibold mt-12'>Mary Grace</h1>
                                        <p className=''>United States</p>
                                        <div className="rating mt-6">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </SwiperSlide>
                        {/* Slider 2 */}
                        <SwiperSlide>
                            <div className='md:flex gap-10'>
                                <div>
                                    <img className='p-5 rounded-md w-[1000px] h-[340px] md:h-[400px] md:rounded-l-xl' src="https://i.ibb.co/MCJfcDG/osman.jpg" />
                                </div>
                                <div>
                                    <div className='flex  '>
                                        <p className='p-5 md:p-0 md:text-2xl mt-5'>"Great experience at this hotel! The staff was friendly and attentive, the rooms were clean and comfortable, and the location was perfect for exploring the city. Highly recommend."</p>
                                        <img className='w-10 h-10' src={tes} />
                                    </div>
                                    <div className='ml-20 md:ml-0'>
                                        <h1 className='text-3xl font-semibold mt-12'>Osman Khan</h1>
                                        <p className=''>Bangladesh</p>
                                        <div className="rating mt-6">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </SwiperSlide>
                         {/* Slider 3 */}
                        <SwiperSlide>
                            <div className='md:flex gap-10'>
                                <div>
                                    <img className='p-5 rounded-md md:w-[1000px] md:h-[400px] md:rounded-l-xl' src="https://i.ibb.co/yq18ZMH/young-bearded-man-with-striped-shirt.jpg" />
                                </div>
                                <div>
                                    <div className='flex  '>
                                        <p className='p-5 md:p-0 md:text-2xl mt-5'>"Great experience at this hotel! The staff was friendly and attentive, the rooms were clean and comfortable, and the location was perfect for exploring the city. Highly recommend."</p>
                                        <img className='w-10 h-10' src={tes} />
                                    </div>
                                    <div className='ml-20 md:ml-0'>
                                        <h1 className='text-3xl font-semibold mt-12'>William James</h1>
                                        <p className=''>Canada</p>
                                        <div className="rating mt-6">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slider 4 */}
                        <SwiperSlide>
                            <div className='md:flex gap-10'>
                                <div>
                                    <img className='p-5 rounded-md md:w-[1000px] md:h-[400px] md:rounded-l-xl' src="https://i.ibb.co/7NLJfwS/pexels-andrea-piacquadio-3763188.jpg" />
                                </div>
                                <div>
                                    <div className='flex  '>
                                        <p className='p-5 md:p-0 md:text-2xl mt-5'>"Great experience at this hotel! The staff was friendly and attentive, the rooms were clean and comfortable, and the location was perfect for exploring the city. Highly recommend."</p>
                                        <img className='w-10 h-10' src={tes} />
                                    </div>
                                    <div className='ml-20 md:ml-0'>
                                        <h1 className='text-3xl font-semibold mt-12'>Emma Grace</h1>
                                        <p className=''>Australia</p>
                                        <div className="rating mt-6">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slider 5 */}
                        <SwiperSlide>
                            <div className='md:flex gap-10'>
                                <div>
                                    <img className='p-5 rounded-md md:w-[1000px] md:h-[400px] md:rounded-l-xl' src="https://i.ibb.co/kh2TjpF/pexels-andrea-piacquadio-3785077.jpg" />
                                </div>
                                <div>
                                    <div className='flex  '>
                                        <p className='p-5 md:p-0 md:text-2xl mt-5'>"Great experience at this hotel! The staff was friendly and attentive, the rooms were clean and comfortable, and the location was perfect for exploring the city. Highly recommend."</p>
                                        <img className='w-10 h-10' src={tes} />
                                    </div>
                                    <div className='ml-20 md:ml-0'>
                                        <h1 className='text-3xl font-semibold mt-12'>Emir Eren</h1>
                                        <p className=''>Turkey</p>
                                        <div className="rating mt-6">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slider 6 */}
                        <SwiperSlide>
                            <div className='md:flex gap-10'>
                                <div>
                                    <img className='p-5 rounded-md w-[1000px] h-[340px] md:h-[400px] md:rounded-l-xl' src="https://i.ibb.co/6ZFMYyq/pexels-pixabay-415829.jpg" />
                                </div>
                                <div>
                                    <div className='flex  '>
                                        <p className='p-5 md:p-0 md:text-2xl mt-5'>"Great experience at this hotel! The staff was friendly and attentive, the rooms were clean and comfortable, and the location was perfect for exploring the city. Highly recommend."</p>
                                        <img className='w-10 h-10' src={tes} />
                                    </div>
                                    <div className='ml-20 md:ml-0'>
                                        <h1 className='text-3xl font-semibold mt-12'>Li Hua</h1>
                                        <p className=''>China</p>
                                        <div className="rating mt-6">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Slider 7 */}
                        <SwiperSlide>
                            <div className='md:flex gap-10'>
                                <div>
                                    <img className='p-5 rounded-md md:w-[1000px] md:h-[400px] md:rounded-l-xl' src="https://i.ibb.co/rZScStk/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray.jpg" />
                                </div>
                                <div>
                                    <div className='flex  '>
                                        <p className='p-5 md:p-0 md:text-2xl mt-5'>"Great experience at this hotel! The staff was friendly and attentive, the rooms were clean and comfortable, and the location was perfect for exploring the city. Highly recommend."</p>
                                        <img className='w-10 h-10' src={tes} />
                                    </div>
                                    <div className='ml-20 md:ml-0'>
                                        <h1 className='text-3xl font-semibold mt-12'>Sohail Khan</h1>
                                        <p className=''>Pakistan</p>
                                        <div className="rating mt-6">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>
    );
};

export default Testimonial;