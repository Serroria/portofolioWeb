import React from "react";
import Card from "../components/card";

const Skills = () => {
  return (
    <section className="skills min-h-6 bg-[#563A9C] font-balsamiq">
    <div className="md:box-border flex-1 p-5 box-content md:box-border rounded-sm mr-5 text-ungu font-bold ">
      <h1 className="text-white text-4xl text-center font-bold ">My Skill</h1>
      <div className="relative mx-2 my2 flex justify-center">
        <div className="mt-2 mb-2 flex w-20 h-1 overflow-hidden rounded bg-white "></div>
      </div>
      <p className="p-4 text-center text-white text-sm" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati iusto inventore vel, quibusdam et amet laborum voluptate. Molestiae sequi laboriosam itaque dolorum, voluptatem nobis provident aut soluta. Tempora, perspiciatis eius.</p>
      <div>
        <ul className="contents grid grid-cols-3 grid-rows-3 gap-4 ">
          <li>
            <div className="md:box-border shadow-md flex-1 rounded-sm mr-5 p-1 bg-white">
              <h4>Html</h4>
              <div className="relative mx-5 my-2">
                <div className=" mb-4 flex h-5 overflow-hidden rounded bg-gray-100 text-xs">
                  <div
                    style={{ width: "80%" }}
                    className="bg-[#7F55B1] transition-all duration-500 ease-out"
                  ></div>
               
                </div>
                   <div className="mb-2 flex items-center text-xs">
                     <div class="text-black">80%</div>
                  </div>
              </div>
            </div>
          </li>
          <li>
            <div className="md:box-border shadow-md flex-1 rounded-sm mr-5 p-1  bg-white">
              <h4>CSS</h4>
              <div className="relative mx-5 my-2">
                <div className=" mb-4 flex h-5 overflow-hidden rounded bg-gray-100 text-xs">
                  <div
                    style={{ width: "40%" }}
                    className="bg-[#7F55B1] transition-all duration-500 ease-out"
                  ></div>
                </div>
                 <div className="mb-2 flex items-center text-xs">
                     <div class="text-black">40%</div>
                  </div>
              </div>
            </div>
          </li>
          <li>
            <div className="md:box-border shadow-md flex-1 rounded-sm mr-5 p-1 bg-white">
              <h4>Javascript</h4>
              <div className="relative mx-5 my-2">
                <div className=" mb-4 flex h-5 overflow-hidden rounded bg-gray-100 text-xs">
                  <div
                    style={{ width: "20%" }}
                    className="bg-[#7F55B1] transition-all duration-500 ease-out"
                  ></div>
                </div>
                 <div className="mb-2 flex items-center text-xs">
                     <div class="text-black">20%</div>
                  </div>
              </div>
            </div>
          </li>
          <li>
            <div className="md:box-border shadow-md flex-1 rounded-sm mr-5 p-1  bg-white">
              <h4>PHP</h4>
              <div className="relative mx-5 my-2">
                <div className=" mb-4 flex h-5 overflow-hidden rounded bg-gray-100 text-xs">
                  <div
                    style={{ width: "20%" }}
                    className="bg-[#7F55B1] transition-all duration-500 ease-out"
                  ></div>
                </div>
                 <div className="mb-2 flex items-center text-xs">
                     <div class="text-black">20%</div>
                  </div>
              </div>
            </div>
          </li>
          <li>
            <div className="md:box-border shadow-md flex-1 rounded-sm mr-5 p-1 bg-white">
              <h4>Laravel</h4>
              <div className="relative mx-5 my-2">
                <div className=" mb-4 flex h-5 overflow-hidden rounded bg-gray-100 text-xs">
                  <div
                    style={{ width: "40%" }}
                    className="bg-[#7F55B1] transition-all duration-500 ease-out"
                  ></div>
                </div>
                 <div className="mb-2 flex items-center text-xs">
                     <div class="text-black">40%</div>
                  </div>
              </div>
            </div>
          </li>
          <li>
            <div className="md:box-border shadow-md flex-1 rounded-sm mr-5 p-1 bg-white">
              <h4>React</h4>
              <div className="relative mx-5 my-2">
                <div className=" mb-4 flex h-5 overflow-hidden rounded bg-gray-100 text-xs">
                  <div
                    style={{ width: "10%" }}
                    className="bg-[#7F55B1] transition-all duration-500 ease-out"
                  ></div>
                </div>
                 <div className="mb-2 flex items-center text-xs">
                     <div class="text-black">10%</div>
                  </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
     
    </div>
    </section>
  );
};

export default Skills;
