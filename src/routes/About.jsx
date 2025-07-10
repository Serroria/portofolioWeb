import React from "react";
import logo from "../../public/cat.png";

const About = () => {
  return (
    <section className="about min-h-screen" id="about">
      <div>
        <div className="p-5 box-content md:box-border shadow-md flex flex-row  min-h-screen  font-balsamiq">
          <div>
            <img src={logo} alt="logo" className="basis-1/3" />
          </div>
          <div className="basis-2/3 p-5 mt-10 text-2xl">
            <div className="p-5 text-justify">
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

            <div className="contents flex flex-row p-5 text-white">
              <div className="p-5 box-content md:box-border shadow-md flex-1 rounded-sm mr-5 bg-[#F49BAB]">
                <h4 className="text-center">Personal Info</h4>
                <ul>
                  <li>Name : Merylien Jovanda </li>
                  <li>email : merylien.jovanda14@gmail.com </li>
                  <li>Location : Jonggol, Bogor </li>
                </ul>
              </div>

              <div className="p-5 box-content md:box-border shadow-md flex-1 rounded-sm bg-[#F49BAB]">
                <h4 className="text-center">My interest</h4>
                <ul>
                  <li>Web Development</li>
                  <li>Character Design</li>
                </ul>
              </div>
            </div>

            <button className="cursor-pointer">Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
