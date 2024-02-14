import p1 from "@/assets/projects-1.jpg";
import p2 from "@/assets/projects-2.jpg";
import p3 from "@/assets/projects-3.jpg";
import p4 from "@/assets/projects-4.jpg";
import p5 from "@/assets/projects-5.jpg";
import p6 from "@/assets/projects-6.jpg";

export type Project = {
  title: string;
  img: string;
};

export function getProjects(): Project[] {
  const projects = [
    { title: "Project1", img: p2 },
    { title: "Project2", img: p1 },
    { title: "Project3", img: p3 },
    { title: "Project4", img: p4 },
    { title: "Project5", img: p5 },
    { title: "Project6", img: p6 },
  ];

  return projects;
}
