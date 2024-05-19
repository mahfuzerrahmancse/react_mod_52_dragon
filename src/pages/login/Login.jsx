import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/navbars/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

  const {user, signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location:",location);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('email,pass:',email,password);

        signInUser(email,password)
        .then( result => {
          console.log('sign in:',result.user);
          navigate(location?.state ? location.state : '/');
        } )
        .catch( error => {
          console.error("Error:", error);
        } )
    }

    return (
      <div>
        <Navbar />
        <div>
          <h3 className="text-center text-xl">Please Login</h3>
          <form
            onSubmit={handleLogin}
            className="card-body text-center lg:w-1/2 md:w-3/4"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Login</button>
            </div>
          </form>
          <p className="text-center">
            Do not have an account!!{" "}
            <Link className="text-blue-600 font-semibold" to="/register">
              Register
            </Link>
          </p>
          {
            user && <p>{user.email}</p>
          }
        </div>
      </div>
    );
};

export default Login;