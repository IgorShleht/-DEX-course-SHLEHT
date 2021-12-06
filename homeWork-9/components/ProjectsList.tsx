import React from "react";
import { IProject } from "../types";
import { ProjectCardProps } from "./ProjectCard";

interface IProjectsListProps {
  projects: IProject[];
  onClick: (id: number) => void;
}

//TODO: Добавить компонент ProjectsList
// важные подкрасить красным, неважные зелёным
export const ProjectsList: React.FC<IProjectsListProps> = ({
  projects,
  onClick
}) => {
  return (
    <div>
      {projects.map((item) => (
        <ProjectCardProps
          key={item.id}
          id={item.id}
          project={item}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
