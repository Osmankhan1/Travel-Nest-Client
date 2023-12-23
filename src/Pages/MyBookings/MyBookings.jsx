
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import Swal from 'sweetalert2';
import useAxiosSequre from '../../Hooks/useAxiosSequre';

const MyBookings = () => {
    const [cart, refetch] = useCart();
    const axiosSequre = useAxiosSequre();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSequre.delete(`/carts/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }

    return (



        <div className="mt-10 ">
            <h1 className='text-[25px] md:text-[42px] font-bold text-center '>My Booking <span className='text-[#FF3811]'>Room {cart.length}</span> </h1>

            <div className='grid md:grid-cols-2 gap-10 p-10 md:p-10 lg:p-0 max-w-7xl mx-auto mt-16 mb-20'>
                {
                    cart.map(cartData => <div key={cartData._id} className="card  lg:card-side bg-base-100 shadow-xl ">
                        <figure><img className='hover:scale-125 duration-300' src={cartData.image} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{cartData.room_type}</h2>
                            <h3 className='font-semibold'>{cartData.title}</h3>
                            <p>{cartData.sort_des}</p>
                            <div className=" flex gap-3 justify-end">
                                <Link to={`/roomDetailFromMyCart/${cartData.roomId}`}><button className="btn btn-sm border-2 border-emerald-600 hover:bg-[#FF3811] hover:text-white">View</button></Link>
                                <button className="btn btn-sm border-2 border-emerald-600 hover:bg-[#FF3811] hover:text-white">Edit</button>
                                <button onClick={() => handleDelete(cartData._id)} className="btn btn-sm border-2 border-emerald-600 hover:bg-[#FF3811] hover:text-white">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>






        </div>
    );
};

export default MyBookings;