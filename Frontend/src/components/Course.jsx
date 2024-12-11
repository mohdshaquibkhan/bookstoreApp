import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
    <div className=" max-w-screen-2x1 container mx-auto md:px-20 px-4">
       <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2x1  md:text-4x1 fontSize:50px">
          We're delight to have you {""}
          <span className="text-pink-500"> Here! :)</span></h1>

          <p className="mt-12">
          "Explore our exclusive courses designed to ignite your passion for learning! From creative writing and literature to self-development and language mastery, our courses are crafted to inspire and guide you at every step. Whether you're starting fresh or enhancing your skills, discover the perfect course to unlock your potential today!"
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300">
            Back
          </button>
          </Link>
       </div>

       <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
          list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
       </div>

    </div>
    </>
  )
}

export default Course;