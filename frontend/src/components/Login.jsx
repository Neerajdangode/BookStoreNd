import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  // console.log(("example")) 

  return (
    <div>
    
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
           
              <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={()=>{
                document.getElementById("my_modal_3").close()
              }}
              >
                ✕
              </Link>
        
        
          <h3 className="font-bold text-lg text-center">Login</h3>
          <div className="space-y-5">
          {/* Email */}
            <div>
              <span className="text-xl ">Email</span>
              <br />
              <input
                type="email"
                placeholder="Email"
                className="my-5 p-2 w-full outline-none"
                {...register("email", { required: true })}
              />
               {errors.email && <span className="text-sm  text-red-400">This field is required</span>}
            </div>
            {/* "Password */}
            <div>
              <span className="text-xl ">Password</span>
              <br />
              <input
                type="password"
                placeholder="Password"
                className="my-5 p-2 w-full outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-sm  text-red-400">This field is required</span>}
            </div>
           
            <div className="flex items-center justify-between">
              <button
                className="bg-pink-400 text-white p-2 hover:bg-slate-400  rounded-md cursor-pointer ">
                Login
              </button>
        
              <Link to={"/signup"}>
                <span>No Registion ? </span>
                <button
               
                  className=" m-2 text-white p-2 hover:bg-slate-400  rounded-md cursor-pointer "
                >
                  Signup
                </button>
              </Link>
            </div>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
