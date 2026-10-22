
import { ProjectsData } from "@/data/ProjectData"
import Image from "next/image"
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    return (
		<section className="relative pb-[10vh]">
            <div className="sticky top-25 min-h-[calc(100vh-100px)]">
                {ProjectsData.map((project) => (
                    <ProjectCard key={project.id} />
                ))}
			</div>
		</section>
	);
}