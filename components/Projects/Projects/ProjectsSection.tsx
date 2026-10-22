
import { ProjectsData } from "@/data/ProjectData"
import Image from "next/image"

export default function ProjectsSection() {
    return (
        <section id="Featured">
            <div className="mx-auto w-full max-w-7xl px-5, sm:px-8">
                <div className="bg-neutral-900">
                    <div className="relative max-w-xl h-full">

                        <Image src={ProjectsData[0].screenshot} alt="Project Image" fill className="object-cover"/>

                    </div>
               </div>
            </div>
        </section>
    )
}