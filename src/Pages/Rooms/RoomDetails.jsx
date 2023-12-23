import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AiFillFastBackward } from 'react-icons/ai';
import useAuth from '../../Provider/useAuth';
import useAxiosSequre from '../../Hooks/useAxiosSequre';
import useCart from '../../Hooks/useCart';

const RoomDetails = () => {
    const roomAlldata = useLoaderData();
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSequre = useAxiosSequre();
    const [, refetch] = useCart();
    const { _id, image, room_type, price_per_night, room_size, discount, description, title, sort_des } = roomAlldata;

    const handleAddToMyBooking = () => {
            if (user && user.email){
                const cartItem = {
                    roomId: _id,
                    email: user.email,
                    room_type,
                    image,
                    title,
                    price_per_night,
                    sort_des,
                    description
                }
                axiosSequre.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if(res.data.insertedId){
                        Swal.fire({
                        icon: "success",
                        title: "Thank You",
                        text: `${room_type} is Booking`
                    });
                    refetch()
                    }
                })
            }
            else{
                Swal.fire({
                    title: "Please login first",
                    text: "please login to add to the cart?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Please login"
                  }).then((result) => {
                    if (result.isConfirmed) {
                     navigate('/login', {state: {from: location}})

                    }
                  });
            }
            

    }



    return (
        <div className='max-w-7xl mx-auto '>
            <div>
                <h1 className="text-[25px] md:text-[42px] font-bold text-center mt-10 mb-20">This is Room  <span className='text-[#FF3811]'>details</span></h1>
            </div>
            <div className='flex justify-start mt-5 mb-6 max-w-7xl m-auto pl-2 gap-1'>
                <div className="text-green-800 md:ml-7 text-2xl pt-1">
                    <AiFillFastBackward></AiFillFastBackward>
                </div>
                <Link className="text-center  text-green-800 font-semibold underline underline-offset-4 text-xl" to="/rooms"> Back to Rooms</Link>
            </div>
            <div className='lg:flex gap-10 mb-44 '>
                <div className='lg:w-1/2 p-10 md:p-10 lg:p-0 '>
                    <img className='rounded-xl ' src={image} alt="" />
                    <h1 className='pl-10 md:p-0 text-3xl font-bold mt-10'>Reviews :</h1>
                </div>
                <div className='lg:w-1/2 p-10 md:p-10 lg:p-0 flex flex-col justify-between'>
                    <div>
                        <h1 className='text-2xl md:text-4xl font-bold'>{room_type} </h1>
                        <h2 className='text-xl font-semibold mt-4'>Rent : <span className='text-[#FF3811] font-bold text-2xl'>{price_per_night}</span>/per night</h2>
                        <h2 className='text-xl font-semibold mt-2'>discount : {discount} off</h2>
                        <h2 className='text-xl font-semibold mt-2'>Room Size : {room_size}</h2>
                        <div className='flex gap-4'>
                            <h2 className='text-xl font-semibold mt-4'><b>Rating :</b></h2>
                            <div className="rating rating-md mt-5">
                                <input type="radio" name="rating-2" className="mask mask-star-2  bg-[#FF3811]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2  bg-[#FF3811]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2  bg-[#FF3811]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2  bg-[#FF3811]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2  bg-[#FF3811]" checked />
                            </div>
                        </div>
                        <p className='mt-5 mb-5'><b>description :</b> {description}</p>
                    </div>

                    
                    
                    <div className='mb-[75px]'>
                        <button onClick={handleAddToMyBooking} className=' btn w-full border-2 border-green-600 hover:bg-[#FF3811] hover:text-white '>Booking Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;