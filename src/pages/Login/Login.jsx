import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
    const { signIn, user,googleLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleLogin();
  };
    const handleLogin=async(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(email,password)
        await signIn(email,password);
    }
    useEffect(() => {
        if (user) {
          navigate(from, { replace: true });
        }
      }, [user, from, navigate]);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p>New user? <Link className="hover:text-blue-700 underline" to={'/register'}>Register Now</Link> </p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-primary"/>
                            </div>
                        </form>
                        <div className="max-w-sm pb-8 px-8">
                            <div className="divider">OR</div>
                            <button onClick={()=>handleGoogleSignIn()} className="btn btn-primary w-full">Continue with Google</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;