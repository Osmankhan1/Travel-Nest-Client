import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const totalValue = {name, email, password}
        console.log(totalValue);

        createUser(email, password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            navigate('/')
            Swal.fire({
                title: 'Successfull',
                text: 'You can successfully registerd',
                icon: 'success',
                confirmButtonText: 'Registerd'
              })
        })
        .catch (error => {
            console.error(error)
        })
    }


    return (
        <div className="hero min-h-screen bg-slate-200">
            <div className="hero-content flex-col ">
                <h1 className="text-2xl md:text-5xl font-semibold mb-4">Registration <span className="text-[#FF3811]">now!</span></h1>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-200">
                    <form onSubmit={handleRegister} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] hover:bg-orange-600 text-white font-semibold">Registration</button>
                            <div className="flex justify-between mt-1">
                                <h1>Have an Account?</h1>
                                <Link className="text-blue-600 font-semibold underline" to='/login'>Login</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;