import React from "react";
import logo from "../../public/me.jpg";
import pict from "../../public/angelacurate.png";

const About = () => {
  return (
    <>
   
    
    <section className="about  min-h-[600px] " id="about"
         style={{
            backgroundImage: "url(/tes2.jpg)",
          }}>
      
      <div className="flex  justify-center -mb-50 -mt-7">
        <img src= {pict} className="w-[920px] h-auto "/>
      </div>
      <div>
        <div className="p-5 box-content md:box-border shadow-md flex flex-col md:flex-row min-h-fit font-balsamiq justify-center">
          <div className="pl-10 pr-10 pt-20 flex flex-col sm:pr-20 sm:pl-20 sm:justify-center">
            <img src={logo} alt="logo" className=" m-10 md:m-20 basis-1/3 rounded-xl  w-100 h-100 object-cover" />
          </div>
          <div className="basis-2/3 p-5 text-2xl">
            <div className="p-5 mt-5px text-justify">
              <h2 className="text-center mb-4 text-5xl font-[1000]">Who am I?</h2>
              <p>
                Hi, I'm Merylien Jovanda — a college student at Singaperbangsa
                Karawang University with a deep passion for web development and
                digital illustration. I'm currently learning full-stack
                development, focusing on JavaScript, PHP, Laravel, and React.
                This website serves as my portfolio to showcase both my coding
                projects (from personal explorations and academic assignments)
                and my illustration works. I believe learning by doing is the
                most effective way to grow.
              </p>
            </div>
<h2 className="text-center mb-4 text-5xl font-[1000]">My interest</h2>
            <div className="contents overflow-hidden flex flex-row p-5 text-ungu">
              
              <div className="p-5 box-content md:box-border shadow-md flex-1 rounded-sm mr-5 bg-white ">
                
                <h4 className="font-bold text-center ">Web Dev</h4>
              </div>

              <div className="p-5 box-content md:box-border shadow-md flex-1 rounded-sm bg-white">
                <h4 className="font-bold text-center ">Character Illust</h4>
              </div>
            </div>
<div className="flex justify-center">
    <button className=" p-5 btn-hero">
             Download Cv
            </button>
</div>
             
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
