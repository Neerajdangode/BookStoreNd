import React from "react";

function Card({ item }) {
  // console.log(item);
  return (
    <>
      <div className="mt-5 my-3 p-3 ">
        <div className="card w-full bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
          <figure>
            <div>
              <img
                src={item.image}
                alt="Shoes"
                className="w-30  hover:scale-105 duration-200 "
              />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge cursor-pointer p-4 badge-outline hover:bg-pink-500 hover:text-white  ">
                {" "}
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
