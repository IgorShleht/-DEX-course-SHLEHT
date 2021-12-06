import React from "react";
import { IProject } from "../types";

interface IProjectCardProps {
  project: IProject;
  onClick: (id: number) => void;
  id: number;
}

//TODO: сделать компонент ProjectCardProps
export const ProjectCardProps: React.FC<IProjectCardProps> = ({
  project,
  onClick,
  id
}) => {
  return project.important ? (
    <div
      onClick={() => onClick(id)}
      style={{ backgroundColor: "red", cursor: "pointer" }}
    >
      {project.text}
    </div>
  ) : (
    <div
      onClick={() => onClick(id)}
      style={{ backgroundColor: "green", cursor: "pointer" }}
    >
      {project.text}
    </div>
  );
};
