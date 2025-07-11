import React from "react";
import Card from "../components/card";

function Project() {
  return (
    <div className="project min-h-screen font-balsamiq ">
      <div className="p-5 text-center">
      <h1 className="text-4xl">Project</h1>
       <div className="relative mx-2 my2 flex justify-center">
        <div className="mt-2 mb-2 flex w-20 h-1 overflow-hidden rounded bg-white "></div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quo
        provident maiores doloribus, ducimus sint odit nesciunt pariatur nulla
        enim, modi doloremque sunt accusamus blanditiis unde ad aspernatur
        corporis dolores.
      </p>
      <div className="text-ungu p-2 flex flex-row justify-center">
        <div className="bg-white p-5 m-2px rounded-5">
          <button>all</button>
          </div>
         <div className="bg-white p-5">
          <a>web</a>
          </div>
         <div className="bg-white p-5">
          <a>illust</a>
          </div>
        
      </div>
      </div>
      <div className="p-2 flex flex-row">
        <div className="cardi m-5 basis-1/3">
          <Card
            imgURL="https://img.goodfon.com/wallpaper/big/c/1b/noragami-art-yato-mech-bog.webp"
            alt="ini yato"
            title="Yato"
            desc="hmmm"
          />
        </div>
        <div className="cardi m-5 basis-1/3">
          <Card
            imgURL="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="ini Sepatu"
            title="Sepatu"
            desc="hmmm"
          />
        </div>

         <div>
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
    </div>
  );
}

export default Project;
