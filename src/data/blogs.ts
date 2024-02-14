import p1 from "@/assets/projects-1.jpg";
import p2 from "@/assets/projects-2.jpg";
import p3 from "@/assets/projects-3.jpg";

export type Blog = {
  title: string;
  img: string;
  description: string;
  date: Date;
};

export function getBlogs(): Blog[] {
  const projects = [
    { title: "blog1", img: p1, description: "blog1-desc", date: new Date() },
    { title: "blog2", img: p2, description: "blog2-desc", date: new Date() },
    { title: "blog3", img: p3, description: "blog3-desc", date: new Date() },
  ];

  return projects;
}
