import ProjectRing from "@/components/UI/Project Ring/ProjectRing";

export default function Projects() {
  return (
    <section id='Projects' className='min-h-dvh'>
      <div className='relative mx-auto max-w-5xl border-t border-neutral-900 px-6 py-28'>
        <div className='mb-3 inline-flex items-center gap-2 '>
          <span className='font-mono text-xs uppercase tracking-widest text-cyan-400'>
            02 // PROJECTS
          </span>
        </div>
          <h2 className='mb-4  max-w-3xl text-start font-heading text-3xl font-bold leading-[1.15] tracking-tight  text-white sm:text-4xl lg:text-5xl'>
            Things I've <br />  <span className="text__color--blue"> Built.</span>
          </h2>
          <h3 className='text-muted text-xl text-start font-medium font-heading leading-[1.15] tracking-tight md:text-2xl w-full max-w-2xl'>
            A look at the applications I've designed, developed, and brought to
            life.
          </h3>
          <ProjectRing />
      </div>
    </section>
  );
}
