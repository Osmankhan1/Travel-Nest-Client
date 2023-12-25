import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const { logInUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        const output = { email, password };
        console.log(output);

        // signIn auth part
        logInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/')
                Swal.fire({
                    title: 'Successfull',
                    text: 'You can successfully login',
                    icon: 'success',
                    confirmButtonText: 'Login'
                })
            })
            .catch(error => {
                console.error(error)
            })
    }

    // google
    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-slate-200">
            <div className="hero-content flex-col ">
                <h1 className="text-2xl md:text-5xl font-semibold mb-4">Login <span className="text-[#FF3811]">now!</span></h1>
                <div className="card md:w-full max-w-sm shadow-2xl bg-base-200">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <button className="btn bg-[#FF3811] hover:bg-orange-600 text-white font-semibold">Login</button>
                            <div className="flex justify-between mt-1">
                                <h1>Are you new?</h1>
                                <Link className="text-blue-600 font-semibold underline" to='/register'>Register</Link>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="form-control mt-6 w-[300px] md:w-[400px] ">
                    <button onClick={handleGoogleLogin}  className="btn bg-green-600 text-white hover:bg-green-700"><span className="text-2xl"><FcGoogle></FcGoogle></span>Google</button>
                </div>

            </div>
        </div>
    );
};

export default Login;