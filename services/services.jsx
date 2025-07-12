import {projects} from "../src/components/data";

export function getProject(){
    const projectList = projects;
    return projectList;
}

export function filterProjects(projectType){
    let filteredProject = getProject().filter(type => type.tipe == projectType);
    return filteredProject;
}