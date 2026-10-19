
import ProjectRing from "@/components/UI/Project Ring/ProjectRing";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="min-h-dvh">
      <div className="relative mx-auto max-w-5xl border-t border-neutral-900 px-6 py-28">
        <div className="mb-3 inline-flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
            02 // PROJECTS
          </span>
        </div>

        <h2 className="mb-4 max-w-3xl text-start font-heading text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
          Things I've <br />
          <span className="text__color--blue">
            Built.
          </span>
        </h2>

        <p className="w-full max-w-2xl text-start font-heading text-lg font-medium leading-relaxed text-neutral-400 md:text-xl">
          A look at the applications I've designed, developed, and brought to life.
        </p>

        <div className="mt-12 w-full sm:mt-16">
          <ProjectRing />
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/projects"
            className="
              group inline-flex items-center gap-3
              rounded-full border border-blue-400/30
              bg-blue-500/10 px-6 py-3
              font-heading text-sm font-semibold text-blue-300
              transition-all duration-300
              hover:border-blue-400/60
              hover:bg-blue-500/20
              hover:text-white
              hover:shadow-[0_0_24px_rgba(59,130,246,0.15)]
            "
          >
            See all projects
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
