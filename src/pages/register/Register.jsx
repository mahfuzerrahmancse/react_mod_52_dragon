import { Link } from "react-router-dom";
import Navbar from "../shared/navbars/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const photo = e.target.photoUrl.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log("name,photo,email,pass:",name,photo, email, password);

    //   create User to firebase
    createUser(email,password)
    .then( result => {
        console.log(result.user);
    } )
    .catch( error => {
        console.error(error);
    } )
    };

    return (
      <div>
        
        <Navbar/>
        <div>
          <h3 className="text-center text-xl">Please Register</h3>
          <form
            onSubmit={handleRegister}
            className="card-body text-center lg:w-1/2 md:w-3/4"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="file"
                name="photoUrl"
                placeholder="Photo Url"
                className="input input-bordered"
                
              />
            </div>
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
              <button className="btn btn-secondary">Register</button>
            </div>
          </form>
          <p className="text-center">
            Already have an account!!{" "}
            <Link className="text-blue-600 font-semibold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;