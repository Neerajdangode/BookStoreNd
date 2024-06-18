import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data);
      
  return(
<>
<Navbar/>
<div className="flex h-screen items-center justify-center">
      <div id="" className="modal-box">
        
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}

            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
           
            <h2 className="font-bold text-xl text-center  p-8">Contact Us  </h2>
            <div className="space-y-2">
              <div>
                <span className="text-lg ">Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="my-3 p-1 w-full outline-none"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-sm  text-red-400">
                    This field is required
                  </span>
                )}
              </div>

              <div>
                <span className="text-xl ">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  className="my-5 p-2 w-full outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm  text-red-400">
                    This field is required
                  </span>
                )}
              </div>

              <div>
                <span className="text-lg ">Massage</span>
                <br />
                <textarea
                 type="text"
                 placeholder="type your massage"
                 className="my-3 p-1 w-full outline-none"
                 {...register("Massage", { required: true })}
                >

                </textarea>
                
              </div>

              <div className="flex items-center justify-between">
                <button
                 
                  className="bg-pink-400 m-2 text-white p-2 hover:bg-slate-400  rounded-md cursor-pointer "
                >
                   Submit
                </button>

               
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
</>
  ) 
}

export default Contact;
