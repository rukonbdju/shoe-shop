import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Registration = () => {
    const { createUser, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/";

    const handleRegister =async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        await createUser(email, password);
        if (user) {
            navigate(from);
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p>New user? <Link className="hover:text-blue-700 underline" to={'/login'}>Login Now</Link> </p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <input name="name" type="text" placeholder="Enter name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input name="email" type="email" placeholder="Enter email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input name="password" type="password" placeholder="Enter password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input name="confirmPassword" type="password" placeholder="Confirm password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Register" className="btn btn-primary" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registration;