import React from "react";
import Card from "../components/card";

const Skills = () => {
  return (
    <section className="skills min-h-screen bg-[#563A9C] font-balsamiq">
    <div className="md:box-border flex-1 p-5 box-content md:box-border rounded-sm mr-5 text-[#7F55B1] font-bold ">
      <h1 className="text-[#F49BAB] text-4xl text-center">My Skill</h1>
      <div>
        <h3 className="text-[#F49BAB]">Programming</h3>
        <ul className="contents grid grid-cols-3 grid-rows-3 gap-4 ">
          <li>
            <div className="md:box-border shadow-md flex-1 rounded-sm mr-5 p-5 bg-[#cdda7f]">
              <h4>Html</h4>
              <div className="relative mx-5 my-10">
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
            <div className="md:box-border shadow-md flex-1 rounded-sm mr-5 p-5  bg-[#cdda7f]">
              <h4>CSS</h4>
              <div className="relative mx-5 my-10">
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
            <div className="md:box-border shadow-md flex-1 rounded-sm mr-5 p-5 bg-[#cdda7f]">
              <h4>Javascript</h4>
              <div className="relative mx-5 my-10">
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
            <div className="md:box-border shadow-md flex-1 rounded-sm mr-5 p-5  bg-[#cdda7f]">
              <h4>PHP</h4>
              <div className="relative mx-5 my-10">
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
            <div className="md:box-border shadow-md flex-1 rounded-sm mr-5 p-5 bg-[#cdda7f]">
              <h4>Laravel</h4>
              <div className="relative mx-5 my-10">
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
            <div className="md:box-border shadow-md flex-1 rounded-sm mr-5 p-5 bg-[#cdda7f]">
              <h4>React</h4>
              <div className="relative mx-5 my-10">
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

      <div>
        <h3 className="text-white">Drawing</h3>
        <div className="cardi m-5 basis-1/3">
          <Card
            imgURL="https://img.goodfon.com/wallpaper/big/c/1b/noragami-art-yato-mech-bog.webp"
            alt="ini yato"
            title="Yato"
            desc="hmmm"
          />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Skills;
