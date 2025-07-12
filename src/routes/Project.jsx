import React, { useState, useEffect } from "react";
import "../index.css";
import { button } from "../components/data";
import { getProject, filterProjects } from "../../services/services";
import Card from "../components/card";

function Project() {
  const [filteredProject, setFilteredProject] = useState(null);
  useEffect(() => {
    setFilteredProject(getProject());
  }, []);

  function handleProject(e) {
    let typeProject = e.target.value;
    typeProject !== "all"
      ? setFilteredProject(filterProjects(typeProject))
      : setFilteredProject(getProject());
  }

  return (
    <>
      <div className="project min-h-screen font-balsamiq ">
        <div className="p-5 text-center">
          <h1 className="text-4xl">Project</h1>
          <div className="relative mx-2 my2 flex justify-center">
            <div className="mt-2 mb-2 flex w-20 h-1 overflow-hidden rounded bg-white "></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            quo provident maiores doloribus, ducimus sint odit nesciunt pariatur
            nulla enim, modi doloremque sunt accusamus blanditiis unde ad
            aspernatur corporis dolores.
          </p>

          <div className="text-ungu p-2 flex flex-row justify-center ">
            <div className=" p-5 m-2px ">
              {button &&
                button.map((type, index) => (
               
                    <button className="m-5 btn-hero"
                      key={index}
                      value={type.value}
                      onClick={handleProject}
                    >
                      {type.name}
                    </button>
                
                ))}
            </div>
          </div>
        </div>
        <div className="p-5 flex flex-wrap gap-5 justify-center ">
          {filteredProject &&
            filteredProject.map((type) => (
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 " key={type.id}>
                <Card
                  imgURL={type.imgURL}
                  alt={type.alt}
                  title={type.title}
                  desc={type.desc}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Project;
