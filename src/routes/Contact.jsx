import React from "react";
import pict from "../../public/angelacurate2.png";

const Contact = () => {
  return (
    <section className="p-5 mb-5 min-h-screen bg-[#563A9C] font-balsamiq">
      <div className="gap-10">
        <h1 className="text-5xl text-center">Contact</h1>
          <div className="relative mx-2 my2 flex justify-center">
        <div className="mt-2 mb-2 flex w-20 h-1 overflow-hidden rounded bg-white "></div>
      </div>
        <div className="flex justify-center md:flex-row">
          <div className="mr-5 p-5">
            {" "}
            <h3>Quick Contact</h3>
            <h1 className="text-6xl">Leave a Message</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores totam qui nobis natus! Optio beatae
            </p>
          </div>
          <div className="p-5 shadow-md bg-white text-ungu">
            <form className="md:flex md:items-center mb-6 ">
              <div className="md:flex-col md:items-center mb-6">
                <label
                  className="my-8"
                  for="inline-full-name">
                  Name:
                </label>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    required
                    value="Isi nama"
                  />
                </div>
                <br />
                <label className="my-8">Email:</label>
                <div className="bg-gray">
                  <input   className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text" required placeholder="write your email" />
                </div>
                <label>Description:</label>
                <div>
              
                  <input   className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="textarea" placeholder="Test" />
                </div>
                    <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Sign Up
      </button>
    </div>
  </div>
              </div>
        
            </form>
          </div>
        </div>
        <div className="flex justify-center scale-50 ">
          <img className="animate-bounce duration-500" src={pict} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
